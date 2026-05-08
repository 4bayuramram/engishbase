"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function PossessivePronounsPage() {
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
            Lesson 10
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Possessive Pronouns
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar kata ganti kepemilikan yang
            digunakan untuk menunjukkan kepunyaan tanpa menyebut nama benda
            berulang-ulang.
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
              Apa itu Possessive Pronouns?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Possessive pronouns adalah kata ganti yang menunjukkan kepemilikan
              tanpa perlu menyebut noun setelahnya.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              mine / yours / his / hers / ours / theirs
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
              <p>• Mine → milikku</p>
              <p>• Yours → milikmu</p>
              <p>• His → miliknya (laki-laki)</p>
              <p>• Hers → miliknya (perempuan)</p>
              <p>• Ours → milik kita</p>
              <p>• Theirs → milik mereka</p>
            </div>
          </motion.section>

          {/* Difference */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Perbedaan Penting
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• This is my book → Possessive adjective (diikuti noun)</p>
              <p>
                • This book is mine → Possessive pronoun (tidak diikuti noun)
              </p>
              <p>• Jadi possessive pronoun berdiri sendiri</p>
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
              <p>• This phone is mine</p>
              <p>• The bag is hers</p>
              <p>• The house is ours</p>
              <p>• The car is theirs</p>
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
              question="Pilih kalimat possessive pronoun yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. This book is mine",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'mine' menunjukkan kepemilikan tanpa perlu noun setelahnya.",
                },
                {
                  value: "b",
                  label: "B. This is my is book",
                  isCorrect: false,
                  feedback:
                    "Salah karena struktur kalimat tidak benar secara grammar.",
                },
                {
                  value: "c",
                  label: "C. This mine book is",
                  isCorrect: false,
                  feedback:
                    "Salah karena urutan kata tidak sesuai struktur bahasa Inggris.",
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
              Kalau ada kata seperti mine, yours, hers, itu tidak perlu diikuti
              kata benda lagi. Itu sudah berdiri sendiri sebagai pemilik.
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
            onClick={() => navigate("/beginner/PronounsPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/AdjectivesComparativesPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}