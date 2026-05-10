"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function CountableUncountablePage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen bg-[#6b6357] px-6 py-20 md:px-16"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-white/70">
            Lesson 7
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Countable & Uncountable Nouns
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar perbedaan kata benda yang bisa
            dihitung dan yang tidak bisa dihitung dalam bahasa Inggris.
          </p>
        </motion.div>

        <div className="mt-16 space-y-10">
          {/* Concept */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Apa itu Countable & Uncountable?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Countable nouns adalah kata benda yang bisa dihitung satu per
              satu. Uncountable nouns adalah kata benda yang tidak bisa dihitung
              secara langsung tanpa ukuran tertentu.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              Countable = bisa dihitung | Uncountable = tidak bisa dihitung
            </div>
          </motion.section>

          {/* Explanation */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Penjelasan Sederhana
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>
                • <span className="text-white font-medium">Countable</span> →
                apple, book, car (bisa 1, 2, 3)
              </p>
              <p>
                • <span className="text-white font-medium">Uncountable</span> →
                water, rice, sugar (tidak dihitung satuan langsung)
              </p>
              <p>
                • Uncountable biasanya butuh ukuran: a glass of water, a bowl of
                rice
              </p>
            </div>
          </motion.section>

          {/* Grammar Rule */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Aturan Penting
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• Countable → bisa pakai a/an, plural (books, apples)</p>
              <p>• Uncountable → tidak pakai a/an, tidak punya bentuk plural</p>
              <p>• Gunakan some / a little untuk uncountable nouns</p>
            </div>
          </motion.section>

          {/* Examples */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Contoh Kalimat
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• I have two books (countable)</p>
              <p>• She drinks some water (uncountable)</p>
              <p>• They buy three apples (countable)</p>
              <p>• We need a little sugar (uncountable)</p>
            </div>
          </motion.section>

          {/* Test */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TestPanel
              question="Pilih kalimat yang benar tentang countable/uncountable noun:"
              options={[
                {
                  value: "a",
                  label: "A. I have some water",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'water' adalah uncountable noun dan cocok menggunakan 'some'.",
                },
                {
                  value: "b",
                  label: "B. I have a water",
                  isCorrect: false,
                  feedback:
                    "Salah karena 'water' tidak bisa digunakan dengan 'a'.",
                },
                {
                  value: "c",
                  label: "C. I have waters",
                  isCorrect: false,
                  feedback:
                    "Salah karena 'water' tidak memiliki bentuk plural.",
                },
              ]}
            />
          </motion.section>

          {/* Tips */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">Tips</h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Kalau kamu ragu, bayangkan: “bisa dihitung satu-satu atau tidak?”
              Kalau tidak bisa dihitung, berarti itu uncountable noun.
            </p>
          </motion.section>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/beginner/FutureSimplePage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/ArticlesPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
