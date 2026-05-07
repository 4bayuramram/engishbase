//SVOPatternPage no.2
"use client";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function SVOPatternPage() {
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
            Lesson 2
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Basic Sentence Structure (SVO Pattern)
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar bagaimana menyusun kalimat dasar
            dalam bahasa Inggris menggunakan pola Subject + Verb + Object.
          </p>
        </motion.div>

        {/* Content */}
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
              Apa itu SVO Pattern?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              SVO adalah pola paling dasar dalam bahasa Inggris yang digunakan
              untuk membentuk kalimat sederhana dan jelas.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              Subject + Verb + Object
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
              Penjelasan Setiap Bagian
            </h2>

            <ul className="mt-4 space-y-3 text-white/70">
              <li>
                <span className="text-white font-medium">Subject</span> → siapa
                yang melakukan (contoh: I, She, They)
              </li>
              <li>
                <span className="text-white font-medium">Verb</span> → aksi
                (contoh: eat, read, play)
              </li>
              <li>
                <span className="text-white font-medium">Object</span> → yang
                dikenai aksi (contoh: rice, book, football)
              </li>
            </ul>
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
              Contoh Kalimat SVO
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• They eat apples</p>
              <p>• We play football</p>
              <p>• I read books</p>
              <p>• You watch movies</p>
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
              question="Pilih kalimat yang mengikuti pola SVO yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. They eat apples",
                  isCorrect: true,
                  feedback:
                    "Benar karena mengikuti urutan Subject (They) + Verb (eat) + Object (apples).",
                },
                {
                  value: "b",
                  label: "B. Eat they apples",
                  isCorrect: false,
                  feedback:
                    "Salah karena verb tidak boleh berada di awal dalam kalimat deklaratif.",
                },
                {
                  value: "c",
                  label: "C. Apples they eat",
                  isCorrect: false,
                  feedback:
                    "Salah karena object tidak boleh berada di awal dalam struktur dasar SVO.",
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
            <h2 className="text-2xl font-semibold text-white">Tips Belajar</h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Biasakan membaca kalimat sederhana setiap hari. Semakin sering
              kamu melihat pola SVO, semakin cepat kamu terbiasa menyusunnya
              sendiri.
            </p>
          </motion.section>
        </div>

        {/* CTA */}
        {/* CTA Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Previous Button */}
          <button
            onClick={() => navigate("/beginner/GrammarIntroPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          {/* Next Button */}
          <button
            onClick={() => navigate("/beginner/PresentSimplePage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
