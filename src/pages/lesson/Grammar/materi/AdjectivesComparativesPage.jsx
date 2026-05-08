"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function AdjectivesComparativesPage() {
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
            Lesson 11
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Basic Adjectives & Comparatives
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar bagaimana menggambarkan sifat benda
            (adjective) dan membandingkan dua hal (comparative).
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
              Apa itu Adjectives?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Adjectives adalah kata sifat yang digunakan untuk menjelaskan
              karakteristik suatu benda, orang, atau hal.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              big, small, fast, beautiful, tall
            </div>
          </motion.section>

          {/* Comparatives */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Apa itu Comparatives?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Comparatives digunakan untuk membandingkan dua hal. Biasanya
              ditambahkan "-er" atau menggunakan "more".
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              big → bigger | beautiful → more beautiful
            </div>
          </motion.section>

          {/* Rules */}
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
              <p>
                • Kata pendek (satu suku kata ) → tambah -er (tall → taller)
              </p>
              <p>
                • Kata panjang (lebih dari satu suku kata ) → pakai “more” (more
                beautiful)
              </p>
              <p>• Gunakan “than” untuk perbandingan</p>
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
              <p>• This car is faster than that car</p>
              <p>• She is taller than her brother</p>
              <p>• This house is more beautiful than mine</p>
              <p>• Today is hotter than yesterday</p>
            </div>
          </motion.section>

          {/* Test */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <TestPanel
              question="Pilih kalimat comparative yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. She is more tall than me",
                  isCorrect: false,
                  feedback:
                    "Salah karena 'tall' harus menggunakan bentuk 'taller', bukan 'more tall'.",
                },
                {
                  value: "b",
                  label: "B. She is taller than me",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'tall' berubah menjadi 'taller' untuk comparative.",
                },
                {
                  value: "c",
                  label: "C. She is tall than me",
                  isCorrect: false,
                  feedback:
                    "Salah karena comparative membutuhkan bentuk 'taller', bukan 'tall'.",
                },
              ]}
            />

            <TestPanel
              question="Pilih kalimat comparative yang benar (kata sifat panjang):"
              options={[
                {
                  value: "a",
                  label: "A. This situation is complicater than before",
                  isCorrect: false,
                  feedback:
                    "Salah karena 'complicated' termasuk kata panjang, jadi tidak pakai '-er'.",
                },
                {
                  value: "b",
                  label: "B. This situation is complicate than before",
                  isCorrect: false,
                  feedback:
                    "Salah karena bentuk dasar 'complicate' tidak digunakan sebagai adjective comparative.",
                },
                {
                  value: "c",
                  label: "C. This situation is more complicated than before",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'complicated' adalah kata sifat panjang sehingga menggunakan 'more + adjective'.",
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
              Ingat: kalau membandingkan dua hal, selalu gunakan “than” dan
              bentuk comparative yang benar (taller, bigger, more beautiful).
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
            onClick={() => navigate("/beginner/PossessivePronounsPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/AdverbsOfFrequencyPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
