// IntermediateGrammarPage1.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function IntermediateGrammarPage1() {
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
            Intermediate Level
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Present Perfect vs Past Simple
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan memahami dua tense yang sering membingungkan
            tetapi sangat penting dalam bahasa Inggris modern.
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
          <h2 className="text-2xl font-semibold text-white">Perbedaan Utama</h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            <span className="text-white font-semibold">Past Simple</span>{" "}
            digunakan untuk kejadian yang sudah selesai di waktu tertentu di
            masa lalu.
            <br />
            <br />
            <span className="text-white font-semibold">Present Perfect </span>
            digunakan untuk kejadian yang tidak menyebutkan waktu spesifik, atau
            masih memiliki dampak sampai sekarang.
          </p>
        </motion.section>

        {/* Comparison Table */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Perbandingan Singkat
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-white/80 text-sm">
              <thead>
                <tr className="text-white">
                  <th className="text-left p-2">Fitur</th>
                  <th className="text-left p-2">Present Perfect</th>
                  <th className="text-left p-2">Past Simple</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Fokus</td>
                  <td className="p-2">Hasil / pengalaman sekarang</td>
                  <td className="p-2">Kejadian selesai di masa lalu</td>
                </tr>
                <tr>
                  <td className="p-2">Waktu</td>
                  <td className="p-2">Tidak spesifik</td>
                  <td className="p-2">Spesifik</td>
                </tr>
                <tr>
                  <td className="p-2">Kata kunci</td>
                  <td className="p-2">already, yet, ever, since</td>
                  <td className="p-2">yesterday, ago, last week</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Grammar Rules */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Rumus Dasar</h2>

          <div className="mt-6 space-y-6 text-white/70">
            <div>
              <p className="text-white font-semibold">Present Perfect</p>
              <p>Subject + have/has + V3</p>
              <p className="mt-1">Contoh: She has finished her homework.</p>
            </div>

            <div>
              <p className="text-white font-semibold">Past Simple</p>
              <p>Subject + V2</p>
              <p className="mt-1">
                Contoh: She finished her homework yesterday.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Examples */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Contoh Perbedaan
          </h2>

          <div className="mt-6 space-y-4 text-white/70">
            <p>
              Past Simple:{" "}
              <span className="text-white">I saw that movie last week.</span>
            </p>
            <p>
              Present Perfect:{" "}
              <span className="text-white">I have seen that movie.</span>
            </p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat Present Perfect yang benar:"
            options={[
              {
                value: "a",
                label: "A. I saw that movie yesterday",
                isCorrect: false,
                feedback: "Ini Past Simple karena ada 'yesterday'.",
              },
              {
                value: "b",
                label: "B. I see that movie",
                isCorrect: false,
                feedback: "Ini bentuk present simple, bukan present perfect.",
              },
              {
                value: "c",
                label: "C. I have seen that movie",
                isCorrect: true,
                feedback: "Benar, ini Present Perfect tanpa waktu spesifik.",
              },
              {
                value: "d",
                label: "D. I am seeing that movie",
                isCorrect: false,
                feedback: "Ini present continuous, bukan present perfect.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih kalimat Past Simple yang benar:"
            options={[
              {
                value: "a",
                label: "A. I have eaten breakfast",
                isCorrect: false,
                feedback: "Ini Present Perfect.",
              },
              {
                value: "b",
                label: "B. I eat breakfast",
                isCorrect: false,
                feedback: "Ini present simple.",
              },
              {
                value: "c",
                label: "C. I ate breakfast yesterday",
                isCorrect: true,
                feedback: "Benar, ada waktu spesifik (yesterday).",
              },
              {
                value: "d",
                label: "D. I have eating breakfast",
                isCorrect: false,
                feedback: "Struktur grammar salah.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih kalimat yang paling tepat untuk pengalaman hidup:"
            options={[
              {
                value: "a",
                label: "A. I have visited Bali",
                isCorrect: true,
                feedback:
                  "Benar, pengalaman hidup menggunakan Present Perfect.",
              },
              {
                value: "b",
                label: "B. I visited Bali yesterday",
                isCorrect: false,
                feedback: "Ini fokus waktu spesifik, bukan pengalaman umum.",
              },
              {
                value: "c",
                label: "C. I visit Bali",
                isCorrect: false,
                feedback: "Ini present simple.",
              },
              {
                value: "d",
                label: "D. I am visited Bali",
                isCorrect: false,
                feedback: "Struktur ini salah.",
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
          className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Tips Penting</h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            Gunakan Past Simple jika kamu menyebutkan waktu yang jelas seperti
            yesterday, last week, atau in 2010. Gunakan Present Perfect jika
            kamu hanya fokus pada pengalaman atau hasil tanpa menyebut waktu
            spesifik.
          </p>

          <p className="mt-4 text-white/70">
            Kunci utamanya:{" "}
            <span className="text-white font-semibold">
              Past = selesai, Present Perfect = masih relevan sekarang.
            </span>
          </p>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-16 text-center">
          <button
            onClick={() => navigate("/intermediate/PastPerfectTensePage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#5a5248] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}