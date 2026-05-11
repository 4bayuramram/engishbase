// ReportedSpeechPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ReportedSpeechPage() {
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
            Lesson 8 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Reported Speech
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Materi ini membahas Reported Speech, yaitu cara melaporkan ucapan
            orang lain tanpa mengutip kata-katanya secara langsung.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Pengertian Reported Speech
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Reported Speech</span>{" "}
              digunakan untuk menyampaikan kembali perkataan seseorang tanpa
              menggunakan tanda kutip.
            </p>

            <p>
              Berbeda dengan Direct Speech, Reported Speech mengalami perubahan
              struktur seperti tenses, kata ganti, dan keterangan waktu.
            </p>

            <p className="text-white">
              Direct: She said, "I am tired." <br />
              Reported: She said that she was tired.
            </p>
          </div>
        </motion.section>

        {/* Rules */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Aturan Perubahan (Rules)
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              1. <span className="text-white font-semibold">Tenses</span>{" "}
              mengalami backshift (present → past, past → past perfect, dll).
            </p>

            <p>
              2. <span className="text-white font-semibold">Pronoun</span>{" "}
              berubah sesuai subjek (I → he/she, we → they).
            </p>

            <p>
              3. <span className="text-white font-semibold">Time/Place</span>{" "}
              berubah (now → then, here → there, today → that day).
            </p>

            <p className="text-white">
              Example: "I am happy today" → He said that he was happy that day.
            </p>
          </div>
        </motion.section>

        {/* Types */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Jenis Reported Speech
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              <span className="text-white font-semibold">1. Statements</span>{" "}
              menggunakan "that" (opsional).
            </p>

            <p className="text-white">
              He said, "I am busy." → He said (that) he was busy.
            </p>

            <p>
              <span className="text-white font-semibold">2. Questions</span>{" "}
              menggunakan if/whether atau question word.
            </p>

            <p className="text-white">
              "Do you like tea?" → She asked if I liked tea.
            </p>

            <p>
              <span className="text-white font-semibold">3. Commands</span>{" "}
              menggunakan to + verb.
            </p>

            <p className="text-white">
              "Close the door" → He told me to close the door.
            </p>
          </div>
        </motion.section>

        {/* Notes */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Catatan Penting</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Jika reporting verb dalam bentuk present (says), maka tidak ada
              perubahan tense.
            </p>

            <p>Tanda kutip (") dihilangkan dalam Reported Speech.</p>

            <p className="text-white">
              She says, "I am happy" → She says she is happy.
            </p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih perubahan Reported Speech yang paling tepat:"
            options={[
              {
                value: "a",
                label:
                  'He said, "I will go tomorrow" → He said he will go tomorrow',
                isCorrect: false,
                feedback: "Harus terjadi perubahan will → would.",
              },
              {
                value: "b",
                label:
                  'He said, "I will go tomorrow" → He said that he would go the next day',
                isCorrect: false,
                feedback:
                  "Struktur sudah benar tetapi opsi ini bukan jawaban terbaik.",
              },
              {
                value: "c",
                label:
                  'He said, "I will go tomorrow" → He said that he will go the next day',
                isCorrect: false,
                feedback: "Tense tidak berubah (will seharusnya would).",
              },
              {
                value: "d",
                label:
                  'He said, "I will go tomorrow" → He said that he would go the next day',
                isCorrect: true,
                feedback: "Benar, will → would dan tomorrow → the next day.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih perubahan kalimat tanya yang benar:"
            options={[
              {
                value: "a",
                label:
                  'She asked, "Do you like coffee?" → She asked do I like coffee',
                isCorrect: false,
                feedback: "Struktur pertanyaan salah, harus pakai if/whether.",
              },
              {
                value: "b",
                label:
                  'She asked, "Do you like coffee?" → She asked that I like coffee',
                isCorrect: false,
                feedback: "That tidak digunakan untuk pertanyaan yes/no.",
              },
              {
                value: "c",
                label:
                  'She asked, "Do you like coffee?" → She asked if do I like coffee',
                isCorrect: false,
                feedback: "Urutan kata tidak boleh inverted.",
              },
              {
                value: "d",
                label:
                  'She asked, "Do you like coffee?" → She asked if I liked coffee',
                isCorrect: true,
                feedback: "Benar, menggunakan if + perubahan tense.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih perubahan kalimat perintah yang benar:"
            options={[
              {
                value: "a",
                label:
                  'He said, "Open the window" → He told me to open the window',
                isCorrect: true,
                feedback: "Benar, menggunakan to + verb.",
              },
              {
                value: "b",
                label:
                  'He said, "Open the window" → He told me open the window',
                isCorrect: false,
                feedback: "Harus menggunakan to sebelum verb.",
              },
              {
                value: "c",
                label:
                  'He said, "Open the window" → He said that I open the window',
                isCorrect: false,
                feedback: "Struktur command tidak menggunakan that clause.",
              },
              {
                value: "d",
                label:
                  'He said, "Open the window" → He told that I to open the window',
                isCorrect: false,
                feedback: "Struktur salah total.",
              },
            ]}
          />
        </motion.section>

        {/* Tips */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>Ingat pola utama: backshift tense jika reporting verb past.</p>
            <p>Ubah pronoun sesuai subjek pelapor.</p>
            <p>Gunakan if/whether untuk yes-no questions.</p>
            <p>Gunakan to + verb untuk commands.</p>
            <p>Hapus tanda kutip dalam Reported Speech.</p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/intermediate/passive-voice")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white hover:bg-white/10"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/modal-verbs")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357]"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
