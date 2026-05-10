// PresentSimplePage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function PresentSimplePage() {
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
            Lesson 3
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Present Simple Tense Usage
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan memahami bagaimana Present Simple digunakan
            dalam kehidupan sehari-hari untuk menyatakan kebiasaan, fakta umum,
            dan rutinitas.
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
              Apa itu Present Simple?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Present Simple adalah tense yang digunakan untuk menyatakan
              kejadian yang terjadi secara rutin, fakta umum, atau sesuatu yang
              selalu benar.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              Subject + Verb (base form / s/es)
            </div>
          </motion.section>

          {/* Usage */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Kapan digunakan?
            </h2>

            <ul className="mt-4 space-y-3 text-white/70">
              <li>
                <span className="text-white font-medium">Kebiasaan</span> → I go
                to school every day.
              </li>
              <li>
                <span className="text-white font-medium">Fakta umum</span> → The
                sun rises in the east.
              </li>
              <li>
                <span className="text-white font-medium">Rutinitas</span> → She
                drinks coffee every morning.
              </li>
            </ul>
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
              <p>• I / You / We / They → verb dasar (eat, play, read)</p>
              <p>• He / She / It → verb + s/es (eats, plays, reads)</p>
              <p>• Kata keterangan waktu: always, usually, often, every day</p>
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
              <p>• I eat rice every day</p>
              <p>• She goes to school</p>
              <p>• They play football every weekend</p>
              <p>• The earth moves around the sun</p>
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
              question="Pilih kalimat Present Simple yang benar:"
              options={[
                {
                  value: "a",
                  label: "a. She going to school",
                  isCorrect: false,
                  feedback:
                    "Salah karena ini bentuk continuous, bukan simple present.",
                },
                {
                  value: "b",
                  label: "B. She go to school",
                  isCorrect: false,
                  feedback: "Salah karena He/She/It harus memakai verb + s/es.",
                },
                {
                  value: "c",
                  label: "c. She goes to school",
                  isCorrect: true,
                  feedback: "Benar karena He/She/It menggunakan verb + s/es.",
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
              Fokus pada kebiasaan sehari-hari dan fakta umum. Jika sudah
              terbiasa, kamu akan otomatis tahu kapan harus pakai Present
              Simple.
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
            onClick={() => navigate("/beginner/SVOPatternPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/PresentContinuousPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
