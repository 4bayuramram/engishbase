"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function FutureSimplePage() {
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
            Lesson 6
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Future Simple Tense (Will / Going To)
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar bagaimana menyatakan rencana atau
            kejadian yang akan terjadi di masa depan.
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
              Apa itu Future Simple?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Future Simple digunakan untuk menyatakan keputusan spontan,
              prediksi, atau rencana masa depan yang sudah dipastikan.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              Subject + will + Verb (base form) / Subject + going to + Verb
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
                  Keputusan spontan
                </span>{" "}
                → I will help you.
              </li>

              <li>
                <span className="text-white font-medium">
                  Prediksi masa depan
                </span>{" "}
                → It will rain tomorrow.
              </li>

              <li>
                <span className="text-white font-medium">
                  Rencana yang sudah pasti
                </span>{" "}
                → I am going to study tonight.
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
              Perbedaan Will vs Going To
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• Will → spontan, keputusan saat berbicara</p>
              <p>• Going to → rencana yang sudah dipikirkan sebelumnya</p>
              <p>
                • Contoh: I will call you (sekarang memutuskan) vs I am going to
                call you (sudah direncanakan)
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
              <p>• I will buy a new phone</p>
              <p>• She will visit her friend tomorrow</p>
              <p>• We are going to travel next week</p>
              <p>• They are going to start a new project</p>
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
              question="Pilih kalimat Future Simple yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. She will goes to school tomorrow",
                  isCorrect: false,
                  feedback:
                    "Salah karena setelah 'will' harus menggunakan verb dasar (go, bukan goes).",
                },
                {
                  value: "b",
                  label: "B. She goes to school tomorrow",
                  isCorrect: false,
                  feedback:
                    "Salah karena ini Present Simple, bukan Future Simple.",
                },
                {
                  value: "c",
                  label: "C. She will go to school tomorrow",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'will + verb base form' digunakan untuk Future Simple.",
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
              Ingat: setelah “will” tidak pernah ada “-s” atau “-ed”. Selalu
              gunakan bentuk dasar verb.
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
            onClick={() => navigate("/beginner/PastSimplePage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/CountableUncountablePage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
