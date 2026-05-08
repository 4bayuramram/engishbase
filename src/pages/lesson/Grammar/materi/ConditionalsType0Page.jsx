"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function ConditionalsType0Page() {
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
            Lesson 20
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Conditionals Type 0
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            (Facts & General Truths) — Di materi ini kamu akan belajar kalimat
            pengandaian yang menyatakan fakta ilmiah, kebenaran umum, dan
            kebiasaan yang selalu benar.
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
              Apa itu Conditional Type 0?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Conditional Type 0 digunakan untuk menyatakan sesuatu yang selalu
              benar jika kondisi tertentu terpenuhi, seperti hukum alam, fakta
              ilmiah, atau kebiasaan.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              If + Present Simple, Present Simple
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
              <p>• Menggunakan Simple Present di kedua klausa</p>
              <p>• Bisa memakai If / When / Whenever</p>
              <p>• Tidak menggunakan will dalam if-clause</p>
              <p>• Hasil selalu benar (fakta atau kebiasaan)</p>
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white/70">
              <p>✔ If you heat water, it boils</p>
              <p>✔ When it rains, the ground gets wet</p>
              <p>✘ If it will rain, the ground gets wet</p>
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
              <p>• If you freeze water, it becomes ice</p>
              <p>• If you heat ice, it melts</p>
              <p>• When I get tired, I go to sleep early</p>
              <p>• If it rains, the ground gets wet</p>
              <p>• Plants die if they don’t get water</p>
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
              question="Pilih kalimat Conditional Type 0 yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. If you will heat water, it boils",
                  isCorrect: false,
                  feedback:
                    "Salah karena tidak boleh menggunakan 'will' dalam if-clause.",
                },
                {
                  value: "b",
                  label: "B. If you heated water, it boils",
                  isCorrect: false,
                  feedback: "Salah karena tenses tidak konsisten.",
                },
                {
                  value: "c",
                  label: "C. If you heat water, it boils",
                  isCorrect: true,
                  feedback:
                    "Benar karena sesuai struktur Type 0: Present + Present.",
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
              question="Pilih kalimat yang paling tepat menggunakan Conditional Type 0:"
              options={[
                {
                  value: "a",
                  label: "A. If it rains, the ground will get wet",
                  isCorrect: false,
                  feedback: "Salah karena ini Type 1, bukan Type 0.",
                },
                {
                  value: "b",
                  label: "B. If it rains, the ground gets wet",
                  isCorrect: true,
                  feedback: "Benar karena menunjukkan fakta umum.",
                },
                {
                  value: "c",
                  label: "C. If it rain, the ground gets wet",
                  isCorrect: false,
                  feedback: "Salah karena 'rains' harus present simple.",
                },
              ]}
            />
          </motion.section>

          {/* Test 3 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <TestPanel
              question="Pilih kalimat fakta umum yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. If I will be tired, I go to sleep",
                  isCorrect: false,
                  feedback:
                    "Salah karena tidak boleh menggunakan 'will' setelah if.",
                },
                {
                  value: "b",
                  label: "B. If I am tired, I will go to sleep",
                  isCorrect: false,
                  feedback: "Ini Type 1, bukan Type 0.",
                },
                {
                  value: "c",
                  label: "C. If I am tired, I go to sleep early",
                  isCorrect: true,
                  feedback:
                    "Benar karena menunjukkan kebiasaan (general truth).",
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
              Ingat: Conditional Type 0 selalu berbicara tentang sesuatu yang
              pasti benar. Jika kamu bisa mengganti “if” dengan “when” tanpa
              mengubah makna, itu biasanya Type 0.
              <br />
              <br />
              • Gunakan Present Simple di kedua bagian
              <br />
              • Jangan pakai “will” di if-clause
              <br />• Fokus pada fakta, bukan kemungkinan
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
            onClick={() => navigate("/beginner/ModalVerbsBasicsPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/grammar-page")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            selesai
          </button>
        </motion.div>
      </div>
    </main>
  );
}
