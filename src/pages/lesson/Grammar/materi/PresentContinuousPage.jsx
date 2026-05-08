"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function PresentContinuousPage() {
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
            Lesson 4
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Present Continuous Tense Usage
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar bagaimana menyatakan aktivitas yang
            sedang terjadi saat ini atau di sekitar waktu pembicaraan.
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
              Apa itu Present Continuous?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Present Continuous digunakan untuk menjelaskan aksi yang sedang
              berlangsung sekarang atau rencana yang sudah pasti dalam waktu
              dekat.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              Subject + am/is/are + Verb-ing
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
                <span className="text-white font-medium">
                  Aktivitas yang sedang terjadi sekarang
                </span>{" "}
                → I am studying English right now.
              </li>

              <li>
                <span className="text-white font-medium">
                  Aktivitas sementara
                </span>{" "}
                → She is living in Jakarta this month.
              </li>

              <li>
                <span className="text-white font-medium">
                  Rencana dekat yang sudah pasti
                </span>{" "}
                → They are meeting tomorrow.
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
              <p>• I → am + verb-ing</p>
              <p>• He/She/It → is + verb-ing</p>
              <p>• You/We/They → are + verb-ing</p>
              <p>• Contoh: eat → eating, play → playing, write → writing</p>
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
              <p>• I am reading a book</p>
              <p>• She is cooking dinner</p>
              <p>• They are playing football</p>
              <p>• We are learning English</p>
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
              question="Pilih kalimat Present Continuous yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. She read a book now",
                  isCorrect: false,
                  feedback:
                    "Salah karena tidak menggunakan bentuk Present Continuous (tidak ada is/am/are + verb-ing).",
                },
                {
                  value: "b",
                  label: "B. She is reading a book",
                  isCorrect: true,
                  feedback:
                    "Benar karena menggunakan is + verb-ing yang menunjukkan aktivitas sedang berlangsung.",
                },
                {
                  value: "c",
                  label: "C. She reading a book",
                  isCorrect: false,
                  feedback: "Salah karena kurang auxiliary verb (is/am/are).",
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
              Bayangkan sedang “menonton video langsung” dari suatu aktivitas.
              Jika sedang terjadi sekarang, hampir selalu pakai Present
              Continuous.
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
            onClick={() => navigate("/beginner/PresentSimplePage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/PastSimplePage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
