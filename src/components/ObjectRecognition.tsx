"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import type * as CocoSsdType from "@tensorflow-models/coco-ssd";
import { describeClass } from "@/lib/coco-descriptions";

type Detection = {
  class: string;
  score: number;
  bbox: [number, number, number, number];
};

type Status = "idle" | "loading-model" | "requesting-camera" | "running" | "error";

const BOX_COLORS = [
  "#e2a25c",
  "#5cc8e2",
  "#8ce25c",
  "#e25c9d",
  "#b45ce2",
  "#e2d05c",
  "#5ce29d",
  "#e2745c",
];

function colorForClass(className: string) {
  let hash = 0;
  for (let i = 0; i < className.length; i++) {
    hash = (hash << 5) - hash + className.charCodeAt(i);
    hash |= 0;
  }
  return BOX_COLORS[Math.abs(hash) % BOX_COLORS.length];
}

export function ObjectRecognition() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef<CocoSsdType.ObjectDetection | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const speakRef = useRef(false);
  const lastSpokenRef = useRef<Map<string, number>>(new Map());
  const fpsRef = useRef({ frames: 0, last: performance.now() });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [detections, setDetections] = useState<Detection[]>([]);
  const [fps, setFps] = useState(0);
  const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");
  const [minScore, setMinScore] = useState(0.55);
  const [speakOn, setSpeakOn] = useState(false);
  const [modelName, setModelName] = useState<"lite_mobilenet_v2" | "mobilenet_v2">(
    "lite_mobilenet_v2"
  );

  useEffect(() => {
    speakRef.current = speakOn;
  }, [speakOn]);

  const stopStream = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const detectLoop = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const model = modelRef.current;
    if (!video || !canvas || !model || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(detectLoop);
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
    }

    model.detect(video).then((preds) => {
      const filtered = preds
        .filter((p) => p.score >= minScore)
        .map((p) => ({ class: p.class, score: p.score, bbox: p.bbox as [number, number, number, number] }))
        .sort((a, b) => b.score - a.score);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const d of filtered) {
        const [x, y, w, h] = d.bbox;
        const color = colorForClass(d.class);
        ctx.lineWidth = 3;
        ctx.strokeStyle = color;
        ctx.strokeRect(x, y, w, h);

        const label = `${d.class} ${Math.round(d.score * 100)}%`;
        ctx.font = "600 16px system-ui, sans-serif";
        const textWidth = ctx.measureText(label).width;
        ctx.fillStyle = color;
        ctx.fillRect(x - 1.5, Math.max(0, y - 24), textWidth + 12, 24);
        ctx.fillStyle = "#0a0a0a";
        ctx.fillText(label, x + 5, Math.max(16, y - 6));
      }

      setDetections(filtered);

      if (speakRef.current && "speechSynthesis" in window) {
        const now = performance.now();
        for (const d of filtered.slice(0, 3)) {
          const lastSaid = lastSpokenRef.current.get(d.class) ?? 0;
          if (now - lastSaid > 6000) {
            lastSpokenRef.current.set(d.class, now);
            const utter = new SpeechSynthesisUtterance(d.class);
            utter.rate = 1.1;
            utter.volume = 0.7;
            window.speechSynthesis.speak(utter);
          }
        }
      }

      const fpsState = fpsRef.current;
      fpsState.frames += 1;
      const now = performance.now();
      if (now - fpsState.last >= 1000) {
        setFps(Math.round((fpsState.frames * 1000) / (now - fpsState.last)));
        fpsState.frames = 0;
        fpsState.last = now;
      }

      rafRef.current = requestAnimationFrame(detectLoop);
    });
  }, [minScore]);

  const start = useCallback(async () => {
    setErrorMsg("");
    stopStream();
    setStatus("requesting-camera");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      streamRef.current = stream;
      const video = videoRef.current;
      if (!video) return;
      video.srcObject = stream;
      await video.play();

      setStatus("loading-model");
      if (!modelRef.current || modelRef.current !== null) {
        const cocoSsd = await import("@tensorflow-models/coco-ssd");
        await import("@tensorflow/tfjs");
        modelRef.current = await cocoSsd.load({ base: modelName });
      }

      setStatus("running");
      fpsRef.current = { frames: 0, last: performance.now() };
      rafRef.current = requestAnimationFrame(detectLoop);
    } catch (err) {
      console.error(err);
      setStatus("error");
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        setErrorMsg("Camera permission was denied. Allow camera access and try again.");
      } else if (err instanceof DOMException && err.name === "NotFoundError") {
        setErrorMsg("No camera was found on this device.");
      } else {
        setErrorMsg("Something went wrong starting the camera or the model.");
      }
    }
  }, [facingMode, modelName, detectLoop, stopStream]);

  useEffect(() => {
    return () => {
      stopStream();
      window.speechSynthesis?.cancel();
    };
  }, [stopStream]);

  const switchCamera = () => {
    setFacingMode((m) => (m === "environment" ? "user" : "environment"));
  };

  useEffect(() => {
    if (status === "running") {
      start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facingMode]);

  const top = detections[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated">
        <div className="relative aspect-video w-full bg-black">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full -scale-x-100 object-cover"
            muted
            playsInline
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full -scale-x-100 object-cover"
          />

          {status !== "running" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-bg/90 px-6 text-center">
              {status === "idle" && (
                <>
                  <p className="max-w-sm text-sm text-fg-muted">
                    Runs a real object-detection model (COCO-SSD, TensorFlow.js)
                    live on your camera feed, entirely in the browser.
                  </p>
                  <button
                    onClick={start}
                    className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-fg transition hover:bg-accent-strong"
                  >
                    Start camera
                  </button>
                </>
              )}
              {status === "requesting-camera" && (
                <p className="text-sm text-fg-muted">Requesting camera access…</p>
              )}
              {status === "loading-model" && (
                <p className="text-sm text-fg-muted">
                  Downloading and warming up the detection model (first load
                  only, ~a few MB)…
                </p>
              )}
              {status === "error" && (
                <>
                  <p className="max-w-sm text-sm text-red-400">{errorMsg}</p>
                  <button
                    onClick={start}
                    className="rounded-full border border-border-strong px-6 py-2.5 text-sm font-semibold text-fg transition hover:border-accent"
                  >
                    Try again
                  </button>
                </>
              )}
            </div>
          )}

          {status === "running" && (
            <div className="absolute left-3 top-3 flex gap-2">
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-fg backdrop-blur">
                {fps} fps
              </span>
              <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-fg backdrop-blur">
                {detections.length} object{detections.length === 1 ? "" : "s"}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-border p-4">
          <button
            onClick={switchCamera}
            disabled={status === "idle"}
            className="rounded-full border border-border-strong px-4 py-2 text-xs font-medium text-fg transition hover:border-accent disabled:opacity-40"
          >
            Switch camera
          </button>
          <label className="flex items-center gap-2 text-xs text-fg-muted">
            Sensitivity
            <input
              type="range"
              min={0.3}
              max={0.9}
              step={0.05}
              value={minScore}
              onChange={(e) => setMinScore(Number(e.target.value))}
              className="accent-[var(--accent)]"
            />
            {Math.round(minScore * 100)}%
          </label>
          <label className="flex items-center gap-2 text-xs text-fg-muted">
            <input
              type="checkbox"
              checked={speakOn}
              onChange={(e) => setSpeakOn(e.target.checked)}
              className="accent-[var(--accent)]"
            />
            Announce out loud
          </label>
          <select
            value={modelName}
            disabled={status !== "idle" && status !== "error"}
            onChange={(e) =>
              setModelName(e.target.value as "lite_mobilenet_v2" | "mobilenet_v2")
            }
            className="rounded-full border border-border-strong bg-bg px-3 py-2 text-xs text-fg disabled:opacity-40"
          >
            <option value="lite_mobilenet_v2">Fast model</option>
            <option value="mobilenet_v2">Accurate model</option>
          </select>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-bg-elevated p-5">
        <h2 className="text-sm font-semibold text-fg">Detected objects</h2>

        {top ? (
          <div className="mt-3 rounded-xl border border-border-strong bg-bg-elevated-2 p-4">
            <p className="text-xs uppercase tracking-wide text-fg-subtle">
              Best match
            </p>
            <p className="mt-1 text-lg font-semibold capitalize text-accent-strong">
              {top.class}
            </p>
            <p className="text-xs text-fg-subtle">
              {Math.round(top.score * 100)}% confidence
            </p>
            <p className="mt-2 text-sm text-fg-muted">{describeClass(top.class)}</p>
          </div>
        ) : (
          <p className="mt-3 text-sm text-fg-subtle">
            Nothing detected yet — point the camera at an object.
          </p>
        )}

        <ul className="mt-4 space-y-2">
          {detections.map((d, i) => (
            <li
              key={`${d.class}-${i}`}
              className="flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-sm"
            >
              <span className="flex items-center gap-2 capitalize text-fg">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: colorForClass(d.class) }}
                />
                {d.class}
              </span>
              <span className="text-xs text-fg-subtle">
                {Math.round(d.score * 100)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
