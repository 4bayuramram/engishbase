"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function WhQuestionsPage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen bg-[#6b6357] px-6 py-20 md:px-16"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-white/70">
            Lesson 16
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            WH-Questions (5W + 1H)
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar cara membuat pertanyaan WH-Questions
            untuk menanyakan informasi spesifik seperti benda, tempat, dan
            alasan.
          </p>
        </motion.div>

        <div className="mt-16 space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Apa itu WH-Questions?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              WH-Questions adalah pertanyaan yang dimulai dengan kata tanya
              seperti What, Where, Why, Who, When, dan How untuk mendapatkan
              informasi spesifik.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              WH Word + Auxiliary Verb + Subject + Verb + ?
            </div>
          </motion.section>

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
                <h3 className="font-semibold text-white text-lg">What</h3>
                <p>Menanyakan benda atau informasi.</p>
                <p>What are you doing?</p>
                <p>What did she buy?</p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">Where</h3>
                <p>Menanyakan tempat.</p>
                <p>Where do you live?</p>
                <p>Where did they go?</p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">Why</h3>
                <p>Menanyakan alasan.</p>
                <p>Why are you late?</p>
                <p>Why did he leave?</p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">When</h3>
                <p>Menanyakan waktu kejadian.</p>
                <p>When will they arrive?</p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">Who</h3>
                <p>
                  Menanyakan orang. Bisa sebagai subjek (tidak selalu memakai
                  do/did).
                </p>
                <p>Who called you?</p>
                <p>Who did you call?</p>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">How</h3>
                <p>Menanyakan cara atau kondisi.</p>
                <p>How do you study English?</p>
              </div>
            </div>
          </motion.section>

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
              <p>WH word selalu di awal kalimat</p>
              <p>Setelah do/does/did gunakan V1</p>
              <p>Who sebagai subjek tidak perlu auxiliary</p>
              <p>Jangan gunakan V2 setelah did</p>
              <p>Kalimat harus diakhiri tanda tanya</p>
            </div>
          </motion.section>

          <motion.section>
            <TestPanel
              question="Pilih WH-Question yang paling benar:"
              options={[
                {
                  value: "a",
                  label: "A. Why you are late to school today?",
                  isCorrect: false,
                  feedback: "Salah karena auxiliary harus sebelum subject.",
                },
                {
                  value: "b",
                  label: "B. Why are you late to school today?",
                  isCorrect: false,
                  feedback: "Struktur belum paling tepat sesuai pola did + V1.",
                },
                {
                  value: "c",
                  label: "C. Why did you arrive late to school today?",
                  isCorrect: true,
                  feedback: "Benar karena WH + did + subject + V1.",
                },
              ]}
            />
          </motion.section>

          <motion.section>
            <TestPanel
              question="Pilih kalimat WH-Question yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. Where did they go after the meeting ended?",
                  isCorrect: true,
                  feedback: "Benar karena WH + did + subject + V1.",
                },
                {
                  value: "b",
                  label: "B. Where they did go after the meeting ended?",
                  isCorrect: false,
                  feedback: "Salah susunan auxiliary.",
                },
                {
                  value: "c",
                  label: "C. Where do they went after the meeting ended?",
                  isCorrect: false,
                  feedback: "Salah karena do tidak boleh diikuti V2.",
                },
              ]}
            />
          </motion.section>

          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">Tips</h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Pola dasar WH-Questions adalah WH word + auxiliary + subject +
              verb. Jika sudah paham Yes/No Questions, WH-Questions hanya
              menambahkan kata tanya di depan.
            </p>
          </motion.section>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/beginner/YesNoQuestionsFormationPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/BasicConjunctionsPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357]"
          >
            lanjut ke materi berikutnya 
          </button>
        </motion.div>
      </div>
    </main>
  );
}
