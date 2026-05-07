"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestPanel({ question, options }) {
  const [selected, setSelected] = useState(null);

  const selectedOption = options.find((o) => o.value === selected);

  return (
    <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10 text-white">
      {/* Question */}
      <h3 className="text-xl font-semibold">{question}</h3>

      {/* Options */}
      <div className="mt-6 space-y-3">
        {options.map((opt) => {
          const isSelected = selected === opt.value;

          return (
            <button
              key={opt.value}
              onClick={() => setSelected(opt.value)}
              className={`w-full rounded-2xl border px-4 py-3 text-left transition
                ${
                  isSelected
                    ? "bg-white text-[#6b6357] border-white"
                    : "bg-white/5 hover:bg-white/10 border-white/10"
                }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Result */}
      <AnimatePresence>
        {selected && selectedOption && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5"
          >
            {selectedOption.isCorrect ? (
              <div className="rounded-2xl bg-green-500/20 text-green-300 p-4 text-sm">
                ✔ Benar — {selectedOption.feedback}
              </div>
            ) : (
              <div className="rounded-2xl bg-red-500/20 text-red-300 p-4 text-sm">
                ✘ Salah — {selectedOption.feedback}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
