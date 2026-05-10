"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function PastSimplePage() {
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
            Lesson 5
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Past Simple Tense Usage
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar bagaimana menyatakan kejadian yang
            sudah terjadi di masa lalu dan sudah selesai.
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
              Apa itu Past Simple?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Past Simple digunakan untuk menceritakan aktivitas yang terjadi di
              masa lalu dan sudah selesai pada waktu tertentu.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              Subject + Verb (past form / V2)
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
                  Kejadian yang sudah selesai
                </span>{" "}
                → I visited Bali last year.
              </li>

              <li>
                <span className="text-white font-medium">
                  Aktivitas di waktu tertentu di masa lalu
                </span>{" "}
                → She cooked dinner yesterday.
              </li>

              <li>
                <span className="text-white font-medium">
                  Cerita atau pengalaman masa lalu
                </span>{" "}
                → They watched a movie last night.
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
              <p>• Verb regular → tambah -ed (play → played)</p>
              <p>• Verb irregular → bentuk berubah (go → went, eat → ate)</p>
              <p>• Biasanya digunakan dengan: yesterday, last night, ago</p>
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
              <p>• I visited my grandmother yesterday</p>
              <p>• She went to school last Monday</p>
              <p>• They played football last week</p>
              <p>• We watched a movie last night</p>
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
              question="Pilih kalimat Past Simple yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. She went to school yesterday",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'went' adalah bentuk Past Simple dari 'go'.",
                },
                {
                  value: "b",
                  label: "B. She goes to school yesterday",
                  isCorrect: false,
                  feedback:
                    "Salah karena 'goes' adalah Present Simple, bukan Past Simple.",
                },
                {
                  value: "c",
                  label: "C. She going to school yesterday",
                  isCorrect: false,
                  feedback:
                    "Salah karena ini bentuk Present Continuous, bukan Past Simple.",
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
              Biasakan mengingat kata waktu (yesterday, last…, ago) karena itu
              hampir selalu menunjukkan Past Simple.
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
            onClick={() => navigate("/beginner/PresentContinuousPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/FutureSimplePage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
