import type { Metadata } from "next";
import { ObjectRecognition } from "@/components/ObjectRecognition";

export const metadata: Metadata = {
  title: "Object Recognition",
  description:
    "A live, in-browser object detection experiment built with TensorFlow.js and COCO-SSD.",
};

export default function ObjectRecognitionPage() {
  return (
    <main className="container-page py-16 sm:py-24">
      <div className="mb-10 max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Experiment
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-fg sm:text-4xl">
          Real-time object recognition
        </h1>
        <p className="mt-3 text-fg-muted">
          Points your camera at the world and identifies what it sees, live,
          using a real pretrained neural network (COCO-SSD on TensorFlow.js)
          running entirely on-device. Nothing is uploaded anywhere.
        </p>
      </div>
      <ObjectRecognition />
    </main>
  );
}
