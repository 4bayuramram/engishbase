"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function YesNoQuestionsFormationPage() {
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
            Lesson 15
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Yes/No Questions Formation
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar cara membuat pertanyaan Yes/No dalam
            bahasa Inggris menggunakan auxiliary verbs seperti do, does, did,
            am, is, are, dan modal verbs.
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
              Apa itu Yes/No Questions?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Yes/No Questions adalah pertanyaan yang jawabannya biasanya hanya
              “Yes” atau “No”.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              Auxiliary Verb + Subject + Verb + ?
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
              Penjelasan Penggunaan
            </h2>

            <div className="mt-6 space-y-6 text-white/70">
              <div>
                <h3 className="font-semibold text-white text-lg">
                  1. Menggunakan Do / Does
                </h3>

                <p className="mt-2">Digunakan pada Present Simple.</p>

                <div className="mt-3 space-y-2">
                  <p>• Do you like coffee?</p>
                  <p>• Does she play piano?</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">
                  2. Menggunakan Did
                </h3>

                <p className="mt-2">Digunakan pada Past Simple.</p>

                <div className="mt-3 space-y-2">
                  <p>• Did they visit Bali?</p>
                  <p>• Did he call you yesterday?</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">
                  3. Menggunakan To Be
                </h3>

                <p className="mt-2">
                  Jika kalimat menggunakan am, is, atau are maka cukup pindahkan
                  to be ke depan.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• Are you happy?</p>
                  <p>• Is she a doctor?</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">
                  4. Menggunakan Modal Verbs
                </h3>

                <p className="mt-2">
                  Modal seperti can, will, should, dan must dipindahkan ke awal
                  kalimat.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• Can you swim?</p>
                  <p>• Will they come tonight?</p>
                </div>
              </div>
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
              <p>• Auxiliary verb harus berada di awal pertanyaan</p>
              <p>• Setelah does/did gunakan verb bentuk pertama</p>
              <p>• Gunakan tanda tanya di akhir kalimat</p>
              <p>• Jangan gunakan verb tambahan setelah to be</p>
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
              <p>• Do you study English every day?</p>
              <p>• Does she work in Jakarta?</p>
              <p>• Did they watch the movie?</p>
              <p>• Are we late?</p>
              <p>• Can he drive a car?</p>
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
              question="Pilih bentuk Yes/No Question yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. Did she has finished her homework before dinner?",
                  isCorrect: false,
                  feedback:
                    "Salah karena setelah 'did' verb harus bentuk dasar (have/finish), bukan 'has'.",
                },
                {
                  value: "b",
                  label: "B. Did she finished her homework before dinner?",
                  isCorrect: false,
                  feedback:
                    "Salah karena setelah 'did' tidak boleh menggunakan verb bentuk past (-ed).",
                },
                {
                  value: "c",
                  label: "C. Did she finish her homework before dinner?",
                  isCorrect: true,
                  feedback:
                    "Benar karena setelah 'did' selalu menggunakan verb bentuk dasar (V1).",
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
          >
            <TestPanel
              question="Pilih kalimat Yes/No Question yang paling tepat:"
              options={[
                {
                  value: "a",
                  label: "A. Did he went to school yesterday?",
                  isCorrect: false,
                  feedback:
                    "Salah karena setelah 'did' verb harus bentuk pertama.",
                },
                {
                  value: "b",
                  label: "B. Did he go to school yesterday?",
                  isCorrect: true,
                  feedback:
                    "Benar karena menggunakan verb bentuk pertama setelah 'did'.",
                },
                {
                  value: "c",
                  label: "C. He did go to school yesterday?",
                  isCorrect: false,
                  feedback: "Salah karena susunan pertanyaan tidak tepat.",
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
              Cara paling mudah membuat Yes/No Questions adalah memindahkan
              auxiliary verb ke depan kalimat.
              <br />
              <br />
              Contoh:
              <br />
              • She likes pizza → Does she like pizza?
              <br />• They went home → Did they go home?
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
            onClick={() => navigate("/beginner/PrepositionsOfPlacePage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/WhQuestionsPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
