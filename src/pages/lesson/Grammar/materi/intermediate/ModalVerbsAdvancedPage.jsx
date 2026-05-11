// ModalVerbsAdvancedPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ModalVerbsAdvancedPage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen bg-[#3b352e] px-6 py-20 md:px-16"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
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
            Lesson 9 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Modal Verbs Advanced
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Materi ini membahas penggunaan modal verbs tingkat lanjut untuk
            mengekspresikan deduksi logis, penyesalan, kemungkinan di masa lalu,
            serta nuansa formal dalam bahasa Inggris.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Pengertian Modal Verbs Advanced
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Modal Verbs Advanced
              </span>{" "}
              adalah penggunaan kata kerja bantu seperti{" "}
              <b>must, should, might, could, dan need</b>
              untuk menyatakan makna yang lebih kompleks, terutama pada situasi
              masa lalu atau hipotetis.
            </p>

            <p>
              Bentuk ini biasanya digunakan untuk menyatakan{" "}
              <span className="text-white font-semibold">
                spekulasi, penyesalan, deduksi logis,
              </span>{" "}
              dan situasi yang tidak pasti atau sudah terjadi.
            </p>

            <p>
              Struktur utamanya adalah{" "}
              <span className="text-white font-semibold">
                Modal + have + Verb 3
              </span>{" "}
              untuk membicarakan kejadian di masa lalu.
            </p>
          </div>
        </motion.section>

        {/* Structure */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Struktur & Fungsi Utama
          </h2>

          <div className="mt-6 space-y-4 text-white/70">
            <p>
              <b>Modal + have + V3</b> → untuk masa lalu
            </p>

            <p className="text-white">
              Example: She must have forgotten her keys.
            </p>

            <p>
              <b>Should have + V3</b> → penyesalan / kritik
            </p>

            <p className="text-white">Example: I should have studied harder.</p>

            <p>
              <b>Can't have + V3</b> → ketidakmungkinan masa lalu
            </p>

            <p className="text-white">Example: They can't have arrived yet.</p>
          </div>
        </motion.section>

        {/* Explanation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Makna Penting Modal Advanced
          </h2>

          <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
            <li>
              <b>Must have</b>: hampir pasti terjadi di masa lalu.
            </li>
            <li>
              <b>Might/Could have</b>: kemungkinan di masa lalu.
            </li>
            <li>
              <b>Should have</b>: penyesalan atau saran yang tidak dilakukan.
            </li>
            <li>
              <b>Needn't have</b>: sesuatu yang dilakukan tapi sebenarnya tidak
              perlu.
            </li>
          </ul>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat deduksi yang paling tepat:"
            options={[
              {
                value: "a",
                label: "A. He must have left early because the door is open",
                isCorrect: false,
                feedback:
                  "Must have menunjukkan kepastian, tapi bukti tidak cukup kuat.",
              },
              {
                value: "b",
                label: "B. He might have left early because the door is open",
                isCorrect: false,
                feedback: "Might have terlalu lemah untuk kondisi logis ini.",
              },
              {
                value: "c",
                label:
                  "C. He can't have left early because his car is still in the parking lot",
                isCorrect: true,
                feedback:
                  "Benar, ini menunjukkan ketidakmungkinan secara logis.",
              },
              {
                value: "d",
                label:
                  "D. He could have left early because his car is still in the parking lot",
                isCorrect: false,
                feedback: "Bertentangan dengan fakta yang ada.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih kalimat penyesalan yang paling tepat:"
            options={[
              {
                value: "a",
                label: "A. You should have read the instructions carefully",
                isCorrect: true,
                feedback: "Benar, ini bentuk penyesalan (regret) yang tepat.",
              },
              {
                value: "b",
                label: "B. You must have read the instructions carefully",
                isCorrect: false,
                feedback: "Must have berarti deduksi, bukan penyesalan.",
              },
              {
                value: "c",
                label: "C. You might have read the instructions carefully",
                isCorrect: false,
                feedback: "Menyatakan kemungkinan, bukan kritik.",
              },
              {
                value: "d",
                label:
                  "D. You could have read the instructions carefully but you didn't",
                isCorrect: false,
                feedback:
                  "Struktur kurang tepat untuk bentuk utama penyesalan.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih kalimat yang paling tepat secara makna:"
            options={[
              {
                value: "a",
                label:
                  "A. She must have brought an umbrella because it rained heavily",
                isCorrect: false,
                feedback: "Tidak sesuai konteks deduksi yang tepat.",
              },
              {
                value: "b",
                label:
                  "B. She should have brought an umbrella because it didn't rain",
                isCorrect: false,
                feedback: "Should have di sini tidak sesuai makna.",
              },
              {
                value: "c",
                label:
                  "C. She might have brought an umbrella but we are not sure",
                isCorrect: false,
                feedback: "Kurang sesuai dengan konteks hasil akhir kalimat.",
              },
              {
                value: "d",
                label:
                  "D. She needn't have brought an umbrella because it didn't rain at all",
                isCorrect: true,
                feedback:
                  "Benar, ini menunjukkan sesuatu yang tidak perlu dilakukan.",
              },
            ]}
          />
        </motion.section>

        {/* Tips */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Gunakan <b>Modal + have + V3</b> untuk membicarakan masa lalu.
            </p>

            <p>
              <b>Must have</b> = hampir pasti, <b>might/could have</b> =
              kemungkinan.
            </p>

            <p>
              <b>Should have</b> digunakan untuk penyesalan atau kritik.
            </p>

            <p>
              <b>Needn't have</b> berarti sesuatu dilakukan tapi sebenarnya
              tidak perlu.
            </p>

            <p>
              Perhatikan konteks kalimat karena modal verbs sangat bergantung
              pada makna situasi.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/intermediate/reported-speech")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/complex-sentences")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
