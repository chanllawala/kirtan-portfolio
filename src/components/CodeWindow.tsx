"use client";

import { motion } from "framer-motion";

type Token = { text: string; cls?: string };
type Line = { tokens: Token[]; indent?: number };

const kw = "text-[#e2a25c]";
const fn = "text-[#8fc9e0]";
const str = "text-[#9ecb8f]";
const cmt = "text-fg-subtle italic";
const num = "text-[#c69bf0]";
const plain = "text-fg-muted";

const lines: Line[] = [
  { tokens: [{ text: "// canvia-group/api/routes.ts", cls: cmt }] },
  { tokens: [{ text: "import", cls: kw }, { text: " { Router } " }, { text: "from", cls: kw }, { text: ' "express";', cls: str }] },
  { tokens: [{ text: "import", cls: kw }, { text: " { db } " }, { text: "from", cls: kw }, { text: ' "../lib/mysql";', cls: str }] },
  { tokens: [{ text: "" }] },
  { tokens: [{ text: "router", cls: fn }, { text: "." }, { text: "get", cls: fn }, { text: '("/platforms", ' }, { text: "async", cls: kw }, { text: " (req, res) => {" }] },
  { tokens: [{ text: "const", cls: kw }, { text: " live = " }, { text: "await", cls: kw }, { text: " db." }, { text: "query", cls: fn }, { text: "(" }], indent: 1 },
  { tokens: [{ text: '"SELECT * FROM platforms ' , cls: str }], indent: 2 },
  { tokens: [{ text: 'WHERE status = ?", ', cls: str }, { text: "[" }, { text: '"live"', cls: str }, { text: "]" }], indent: 2 },
  { tokens: [{ text: ");" }], indent: 1 },
  { tokens: [{ text: "return", cls: kw }, { text: " res." }, { text: "json", cls: fn }, { text: "({ ok: " }, { text: "true", cls: num }, { text: ", live });" }], indent: 1 },
  { tokens: [{ text: "});" }] },
  { tokens: [{ text: "" }] },
  { tokens: [{ text: "export", cls: kw }, { text: " default router;" }] },
];

export function CodeWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ rotate: 0, scale: 1.015 }}
      className="w-[420px] max-w-full rounded-xl border border-border-strong bg-bg-elevated shadow-2xl shadow-black/40"
    >
      <div className="flex items-center gap-2 rounded-t-xl border-b border-border bg-bg-elevated-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f4bf4f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#61c454]" />
        <span className="ml-2 font-mono text-[11px] text-fg-subtle">routes.ts</span>
      </div>
      <div className="overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.7]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.9 + i * 0.06 }}
            className="whitespace-pre"
            style={{ paddingLeft: `${(line.indent ?? 0) * 1.1}em` }}
          >
            <span className="mr-3 select-none text-fg-subtle/50">{String(i + 1).padStart(2, "0")}</span>
            {line.tokens.length === 0 || (line.tokens.length === 1 && line.tokens[0].text === "") ? (
              <span>&nbsp;</span>
            ) : (
              line.tokens.map((t, j) => (
                <span key={j} className={t.cls ?? plain}>
                  {t.text}
                </span>
              ))
            )}
          </motion.div>
        ))}
        <motion.span
          aria-hidden="true"
          className="ml-8 inline-block h-3.5 w-[7px] translate-y-[3px] bg-accent"
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        />
      </div>
    </motion.div>
  );
}
