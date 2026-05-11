// GerundsInfinitivesPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function GerundsInfinitivesPage() {
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
            Lesson 13 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Gerunds & Infinitives
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Gerunds (verb + ing) dan Infinitives (to + verb) adalah bentuk kata
            kerja yang dapat berfungsi sebagai noun, adjective, atau adverb.
            Keduanya sangat penting dalam grammar bahasa Inggris karena sering
            digunakan dalam percakapan maupun tulisan formal.
          </p>
        </motion.div>

        {/* Definition */}
        <motion.section className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Gerund</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Gerund adalah bentuk verb + ing yang berfungsi sebagai kata benda.
            </p>

            <p>
              Contoh:
              <br />
              <span className="text-white">Swimming is healthy.</span>
            </p>

            <p>Fungsi Gerund:</p>
            <ul className="list-disc pl-5">
              <li>Subject: Reading improves knowledge</li>
              <li>Object: I enjoy cooking</li>
              <li>After preposition: He is good at drawing</li>
            </ul>
          </div>
        </motion.section>

        {/* Infinitive */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Infinitive</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>Infinitive adalah bentuk dasar verb dengan tambahan "to".</p>

            <p>
              Contoh:
              <br />
              <span className="text-white">I want to learn English.</span>
            </p>

            <p>Fungsi Infinitive:</p>
            <ul className="list-disc pl-5">
              <li>Subject: To succeed is my goal</li>
              <li>Object: She decided to leave</li>
              <li>Purpose: I study to pass the exam</li>
            </ul>
          </div>
        </motion.section>

        {/* Comparison */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Perbedaan Gerund vs Infinitive
          </h2>

          <div className="mt-4 overflow-x-auto text-white/70">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-white">
                  <th className="p-2">Gerund</th>
                  <th className="p-2">Infinitive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Verb + ing</td>
                  <td className="p-2">To + verb</td>
                </tr>
                <tr>
                  <td className="p-2">Menunjukkan aktivitas nyata</td>
                  <td className="p-2">Menunjukkan tujuan/niat</td>
                </tr>
                <tr>
                  <td className="p-2">Bisa setelah preposisi</td>
                  <td className="p-2">Tidak bisa setelah preposisi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Verb Patterns */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Pola Kata Kerja (Verb Patterns)
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              <span className="text-white">Gerund only:</span> enjoy, avoid,
              finish, mind, suggest
            </p>
            <p>
              <span className="text-white">Infinitive only:</span> want, decide,
              hope, plan, refuse
            </p>
            <p>
              <span className="text-white">Both (meaning change):</span> stop,
              remember, try, like
            </p>

            <p className="text-white mt-2">
              Example:
              <br />
              I stopped smoking (berhenti total)
              <br />I stopped to smoke (berhenti untuk merokok)
            </p>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Kesimpulan</h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            Gerunds digunakan untuk menekankan aktivitas sebagai konsep atau hal
            yang sudah/ sedang terjadi, sedangkan infinitives lebih menekankan
            tujuan, rencana, atau kemungkinan di masa depan.
          </p>
        </motion.section>

        {/* TESTS */}
        <motion.section className="mt-10 space-y-10">
          <TestPanel
            question="1. Pilih kalimat yang benar dan paling natural:"
            options={[
              {
                value: "a",
                label: "A. I enjoy to swim every morning",
                isCorrect: false,
                feedback: "Enjoy harus diikuti gerund (swimming).",
              },
              {
                value: "b",
                label: "B. I enjoy swim every morning",
                isCorrect: false,
                feedback: "Harus bentuk gerund.",
              },
              {
                value: "c",
                label: "C. I enjoy swimming every morning",
                isCorrect: false,
                feedback:
                  "Benar secara konsep, tapi bukan jawaban paling tepat di opsi ini.",
              },
              {
                value: "d",
                label: "D. I enjoy swimming every morning in the sea",
                isCorrect: true,
                feedback: "Paling natural dan benar secara grammar.",
              },
            ]}
          />

          <TestPanel
            question="2. Pilih penggunaan infinitive yang benar:"
            options={[
              {
                value: "a",
                label: "A. She decided going home",
                isCorrect: false,
                feedback: "Decide harus diikuti to + verb.",
              },
              {
                value: "b",
                label: "B. She decided goes home",
                isCorrect: false,
                feedback: "Struktur salah.",
              },
              {
                value: "c",
                label: "C. She decided go home",
                isCorrect: false,
                feedback: "Harus ada 'to'.",
              },
              {
                value: "d",
                label: "D. She decided to go home",
                isCorrect: true,
                feedback: "Benar.",
              },
            ]}
          />

          <TestPanel
            question="3. Pilih kalimat paling benar dan kompleks:"
            options={[
              {
                value: "a",
                label: "A. I stopped to smoking yesterday",
                isCorrect: false,
                feedback: "Salah struktur.",
              },
              {
                value: "b",
                label: "B. I stopped smoking to yesterday",
                isCorrect: false,
                feedback: "Tidak natural.",
              },
              {
                value: "c",
                label: "C. I stopped smoking yesterday to healthier life",
                isCorrect: false,
                feedback: "Struktur tidak tepat.",
              },
              {
                value: "d",
                label: "D. I stopped to smoke because I was tired",
                isCorrect: true,
                feedback: "Benar dan sesuai makna infinitive of purpose.",
              },
            ]}
          />
        </motion.section>

        {/* Tips */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Hafalkan verb yang hanya diikuti gerund atau infinitive karena ini
              sering muncul di soal.
            </p>

            <p>Jika setelah preposition, selalu gunakan gerund (verb + ing).</p>

            <p>Gunakan infinitive untuk menunjukkan tujuan (purpose).</p>

            <p>
              Hati-hati dengan verb yang bisa berubah makna seperti stop,
              remember, try.
            </p>

            <p>
              Latihan kalimat akan lebih efektif daripada hanya menghafal teori.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/intermediate/relative-clauses")}
            className="rounded-full border border-white/30 px-8 py-3 text-white hover:bg-white/10"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/grammar-page")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357]"
          >
            Selesai
          </button>
        </motion.div>
      </div>
    </main>
  );
}
