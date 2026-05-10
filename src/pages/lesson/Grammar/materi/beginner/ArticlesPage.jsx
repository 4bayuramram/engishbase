"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ArticlesPage() {
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
            Lesson 8
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Articles (A, An, The)
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar cara menggunakan “a”, “an”, dan
            “the” dengan benar dalam kalimat bahasa Inggris.
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
              Apa itu Articles?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Articles adalah kata kecil yang digunakan sebelum noun (kata
              benda) untuk menjelaskan apakah benda tersebut umum atau spesifik.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              A / An = umum | The = spesifik
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
                • <span className="text-white font-medium">A</span> → digunakan
                sebelum kata benda tunggal yang dimulai dengan konsonan (a book)
              </p>

              <p>
                • <span className="text-white font-medium">An</span> → digunakan
                sebelum kata benda yang dimulai dengan vokal (an apple)
              </p>

              <p>
                • <span className="text-white font-medium">The</span> →
                digunakan untuk sesuatu yang sudah jelas atau spesifik (the book
                on the table)
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
              <p>• A → sebelum bunyi konsonan (a car, a dog)</p>
              <p>• An → sebelum bunyi vokal (an egg, an hour)</p>
              <p>
                • The → untuk sesuatu yang sudah diketahui pembicara dan lawan
                bicara
              </p>
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
              <p>• I have a book</p>
              <p>• She eats an apple</p>
              <p>• The sun is bright</p>
              <p>• I saw a cat in the garden</p>
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
              question="Pilih kalimat penggunaan article yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. I saw an dog in the park",
                  isCorrect: false,
                  feedback:
                    "Salah karena 'dog' diawali konsonan, jadi harus 'a dog'.",
                },
                {
                  value: "b",
                  label: "B. I saw a dog in the park",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'dog' diawali konsonan sehingga menggunakan 'a'.",
                },
                {
                  value: "c",
                  label: "C. I saw dog in park",
                  isCorrect: false,
                  feedback:
                    "Salah karena kalimat membutuhkan article untuk noun tunggal.",
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
              Fokus pada suara awal kata (bunyi vokal atau konsonan), bukan
              hanya hurufnya. Itu kunci utama penggunaan a dan an.
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
            onClick={() => navigate("/beginner/CountableUncountablePage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/PronounsPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
