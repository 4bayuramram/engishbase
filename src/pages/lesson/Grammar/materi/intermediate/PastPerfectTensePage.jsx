// IntermediateGrammarPage2.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function PastPerfectTensePage() {
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
            Lesson 2 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Past Perfect Tense
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Materi ini membahas tense yang digunakan untuk menunjukkan suatu
            kejadian yang sudah selesai sebelum kejadian lain di masa lalu.
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
            Pengertian Past Perfect
          </h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            Past Perfect Tense adalah bentuk kata kerja untuk menyatakan aksi
            yang sudah selesai sebelum aksi lain terjadi di masa lalu. Struktur
            utamanya adalah:
            <br />
            <br />
            <span className="text-white font-semibold">
              Subject + had + Verb 3 (Past Participle)
            </span>
          </p>
        </motion.section>

        {/* Grammar Rules */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Rumus & Struktur
          </h2>

          <div className="mt-6 space-y-4 text-white/70">
            <p>
              <span className="text-white font-semibold">Positif (+):</span>{" "}
              Subject + had + V3 + Object
            </p>

            <p>
              <span className="text-white font-semibold">Negatif (-):</span>{" "}
              Subject + had not (hadn't) + V3 + Object
            </p>

            <p>
              <span className="text-white font-semibold">Tanya (?):</span> Had +
              Subject + V3 + Object?
            </p>
          </div>
        </motion.section>

        {/* Usage */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Kegunaan Utama</h2>

          <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
            <li>
              Menjelaskan aksi yang terjadi lebih dulu sebelum aksi lain di masa
              lalu.
            </li>
            <li>
              Menunjukkan alasan atau hasil dari suatu kejadian di masa lalu.
            </li>
            <li>Digunakan dengan kata: before, after, when, by the time.</li>
          </ul>
        </motion.section>

        {/* Examples */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Contoh Kalimat</h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Positif:{" "}
              <span className="text-white">
                The train had already left when I arrived.
              </span>
            </p>

            <p>
              Negatif:{" "}
              <span className="text-white">
                She had not finished her homework when the guests came.
              </span>
            </p>

            <p>
              Tanya:{" "}
              <span className="text-white">
                Had you eaten before the meeting started?
              </span>
            </p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat Past Perfect yang benar:"
            options={[
              {
                value: "a",
                label: "A. I had finished my homework before dinner",
                isCorrect: true,
                feedback:
                  "Benar, menunjukkan kejadian selesai sebelum kejadian lain.",
              },
              {
                value: "b",
                label: "B. I have finished my homework before dinner",
                isCorrect: false,
                feedback: "Ini Present Perfect, bukan Past Perfect.",
              },
              {
                value: "c",
                label: "C. I finished my homework before dinner",
                isCorrect: false,
                feedback: "Ini Past Simple, tidak menekankan urutan.",
              },
              {
                value: "d",
                label: "D. I had finish my homework before dinner",
                isCorrect: false,
                feedback: "Verb 3 salah, harus 'finished'.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih kalimat yang paling tepat:"
            options={[
              {
                value: "a",
                label: "A. She had just left when I arrived",
                isCorrect: true,
                feedback: "Benar, menunjukkan kejadian lebih dulu terjadi.",
              },
              {
                value: "b",
                label: "B. She just leaves when I arrived",
                isCorrect: false,
                feedback: "Struktur tense tidak sesuai.",
              },
              {
                value: "c",
                label: "C. She has just left when I arrived",
                isCorrect: false,
                feedback: "Tense campuran tidak tepat.",
              },
              {
                value: "d",
                label: "D. She leaving before I arrived",
                isCorrect: false,
                feedback: "Struktur grammar salah.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih kalimat yang benar menggunakan 'before':"
            options={[
              {
                value: "a",
                label: "A. I had eaten before he came",
                isCorrect: true,
                feedback: "Benar, Past Perfect + Past Simple.",
              },
              {
                value: "b",
                label: "B. I ate before he had come",
                isCorrect: false,
                feedback: "Urutan tense kurang tepat.",
              },
              {
                value: "c",
                label: "C. I have eaten before he came",
                isCorrect: true,
                feedback:
                  "Secara makna benar, tapi tidak Past Perfect utama (soal tricky, jawaban utama tetap A).",
              },
              {
                value: "d",
                label: "D. I eating before he came",
                isCorrect: false,
                feedback: "Struktur salah.",
              },
            ]}
          />
        </motion.section>

        <br />

        {/* tips */}
        <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Past Perfect digunakan untuk menunjukkan kejadian yang terjadi
              lebih dulu sebelum kejadian lain di masa lalu. Ingat urutannya:{" "}
              <span className="text-white font-semibold">
                Past Perfect → Past Simple
              </span>
              .
            </p>

            <p>
              Gunakan kata penghubung seperti{" "}
              <span className="text-white font-semibold">
                before, after, when, by the time
              </span>{" "}
              untuk membantu menentukan urutan kejadian.
            </p>

            <p>
              Jangan lupa, semua subjek (I, you, he, she, it, we, they) tetap
              memakai kata{" "}
              <span className="text-white font-semibold">“had”</span> tanpa
              perubahan.
            </p>

            <p>
              Jika ada dua kejadian di masa lalu, gunakan Past Perfect untuk
              kejadian yang lebih dulu selesai, dan Past Simple untuk kejadian
              berikutnya.
            </p>

            <p>
              Kata <span className="text-white font-semibold">“just”</span>{" "}
              sering dipakai untuk menunjukkan sesuatu baru saja selesai sebelum
              kejadian lain terjadi.
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
            onClick={() => navigate("/intermediate/IntermediateGrammarPage1")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/future-tenses")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
