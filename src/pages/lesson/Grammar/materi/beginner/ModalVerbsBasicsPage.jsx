"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ModalVerbsBasicsPage() {
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
            Lesson 19
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Modal Verbs Basics
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar modal verbs yang digunakan untuk
            menyatakan kemampuan, izin, kemungkinan, saran, dan keharusan dalam
            bahasa Inggris.
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
              Apa itu Modal Verbs?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Modal verbs adalah kata kerja bantu yang digunakan untuk
              memodifikasi makna kata kerja utama, seperti menunjukkan
              kemampuan, kemungkinan, izin, kewajiban, atau saran.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              can / could / may / might / must / shall / should / will / would /
              ought to
            </div>
          </motion.section>

          {/* List Modal Verbs */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Daftar Modal Verbs & Fungsi
            </h2>

            <div className="mt-6 space-y-4 text-white/70">
              <p>
                • <b>Can</b> → kemampuan / izin / kemungkinan
              </p>
              <p>
                • <b>Could</b> → kemampuan lampau / sopan / kemungkinan
              </p>
              <p>
                • <b>May</b> → izin / kemungkinan besar
              </p>
              <p>
                • <b>Might</b> → kemungkinan kecil
              </p>
              <p>
                • <b>Must</b> → kewajiban / kesimpulan kuat
              </p>
              <p>
                • <b>Shall</b> → saran / rencana
              </p>
              <p>
                • <b>Should</b> → saran / nasihat
              </p>
              <p>
                • <b>Will</b> → masa depan / kemauan
              </p>
              <p>
                • <b>Would</b> → permintaan sopan / kebiasaan lampau
              </p>
              <p>
                • <b>Ought to</b> → saran / kewajiban moral
              </p>
            </div>
          </motion.section>

          {/* Grammar Rules */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">Grammar Rules</h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• Modal + Verb 1 (bare infinitive)</p>
              <p>• Tidak berubah walau subjek berbeda</p>
              <p>• Tidak memakai do/does/did</p>
              <p>• Hanya boleh satu modal dalam satu kalimat</p>
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white/70">
              <p>✔ She can swim</p>
              <p>✔ They will go</p>
              <p>✘ She can to swim (salah)</p>
              <p>✘ I will can go (salah)</p>
              <p>✔ I will be able to go (benar)</p>
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
              <p>• I can speak English</p>
              <p>• You should eat healthy food</p>
              <p>• She might come late</p>
              <p>• We must finish the task</p>
              <p>• Could you help me?</p>
            </div>
          </motion.section>

          {/* Test 1 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TestPanel
              question="Pilih kalimat yang menggunakan modal verb dengan benar:"
              options={[
                {
                  value: "a",
                  label: "A. She can speaks English",
                  isCorrect: false,
                  feedback: "Salah karena setelah modal harus Verb 1 tanpa -s.",
                },
                {
                  value: "b",
                  label: "B. She can speak English",
                  isCorrect: true,
                  feedback: "Benar karena 'can' diikuti bare infinitive.",
                },
                {
                  value: "c",
                  label: "C. She can to speak English",
                  isCorrect: false,
                  feedback: "Salah karena tidak boleh ada 'to' setelah modal.",
                },
              ]}
            />
          </motion.section>

          {/* Test 2 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <TestPanel
              question="Pilih kalimat yang paling tepat menggunakan modal verb:"
              options={[
                {
                  value: "a",
                  label: "A. You must to study harder",
                  isCorrect: false,
                  feedback: "Salah karena tidak boleh ada 'to' setelah modal.",
                },
                {
                  value: "b",
                  label: "B. You must study harder",
                  isCorrect: true,
                  feedback: "Benar karena 'must' diikuti Verb 1.",
                },
                {
                  value: "c",
                  label: "C. You must studying harder",
                  isCorrect: false,
                  feedback:
                    "Salah karena tidak boleh menggunakan -ing setelah modal.",
                },
              ]}
            />
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
            onClick={() => navigate("/beginner/ImperativesPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/ConditionalsType0Page")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
