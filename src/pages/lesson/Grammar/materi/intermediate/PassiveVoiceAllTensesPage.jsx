// PassiveVoiceAllTensesPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function PassiveVoiceAllTensesPage() {
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
            Lesson 7 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Passive Voice (All Tenses)
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Passive Voice adalah bentuk kalimat di mana subjek menerima tindakan,
            bukan melakukan aksi. Fokus utama ada pada objek atau hasil tindakan.
          </p>
        </motion.div>

        {/* Definition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Pengertian Passive Voice
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Passive Voice digunakan ketika kita ingin menekankan hasil tindakan
              daripada pelakunya.
            </p>

            <p className="text-white font-semibold">
              Rumus dasar: Subject + To Be + Verb 3 (+ by Agent)
            </p>

            <p>
              Contoh: The room is cleaned every day.
            </p>
          </div>
        </motion.section>

        {/* Formula */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Passive Voice dalam All Tenses
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Passive Voice selalu menggunakan <span className="text-white font-semibold">to be + V3</span>,
              yang berubah sesuai tense.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Present Simple: is/am/are + V3</li>
              <li>Past Simple: was/were + V3</li>
              <li>Present Perfect: has/have been + V3</li>
              <li>Future: will be + V3</li>
            </ul>

            <p className="text-white">
              Contoh: The report has been finished.
            </p>
          </div>
        </motion.section>

        {/* Functions */}
        <motion.section
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Fungsi Passive Voice
          </h2>

          <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
            <li>Menekankan hasil tindakan, bukan pelaku.</li>
            <li>Digunakan saat pelaku tidak diketahui.</li>
            <li>Sering dipakai dalam laporan dan tulisan formal.</li>
            <li>Membuat kalimat lebih objektif.</li>
          </ul>
        </motion.section>

        {/* Notes */}
        <motion.section
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Cara Mengubah Active ke Passive</h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Active: She is writing a letter.
            </p>
            <p>
              Passive: A letter is being written by her.
            </p>

            <p className="text-white">
              Objek berubah menjadi subjek, dan verb diubah menjadi V3.
            </p>
          </div>
        </motion.section>

        {/* TEST 1 (C correct) */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih bentuk Passive Voice yang benar dari kalimat: 'They have finished the report.'"
            options={[
              {
                value: "a",
                label: "A. The report is finished",
                isCorrect: false,
                feedback: "Ini Simple Present, bukan Present Perfect.",
              },
              {
                value: "b",
                label: "B. The report was finished",
                isCorrect: false,
                feedback: "Ini Past Simple, bukan Present Perfect.",
              },
              {
                value: "c",
                label: "C. The report has been finished",
                isCorrect: true,
                feedback: "Benar, menggunakan Present Perfect Passive.",
              },
              {
                value: "d",
                label: "D. The report had been finished",
                isCorrect: false,
                feedback: "Ini Past Perfect, bukan Present Perfect.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 (B correct) */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Ubah kalimat: 'She was writing a letter' ke Passive Voice yang benar:"
            options={[
              {
                value: "a",
                label: "A. A letter was written by her",
                isCorrect: false,
                feedback: "Ini Past Simple Passive, bukan Past Continuous.",
              },
              {
                value: "b",
                label: "B. A letter was being written by her",
                isCorrect: true,
                feedback: "Benar, ini Past Continuous Passive.",
              },
              {
                value: "c",
                label: "C. A letter is being written by her",
                isCorrect: false,
                feedback: "Ini Present Continuous Passive.",
              },
              {
                value: "d",
                label: "D. A letter had been written by her",
                isCorrect: false,
                feedback: "Ini Past Perfect Passive.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 (A correct) */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih bentuk Passive Voice yang benar dari: 'They will have completed the project.'"
            options={[
              {
                value: "a",
                label: "A. The project will have been completed",
                isCorrect: true,
                feedback: "Benar, ini Future Perfect Passive.",
              },
              {
                value: "b",
                label: "B. The project will be completed",
                isCorrect: false,
                feedback: "Ini Future Simple Passive.",
              },
              {
                value: "c",
                label: "C. The project has been completed",
                isCorrect: false,
                feedback: "Ini Present Perfect Passive.",
              },
              {
                value: "d",
                label: "D. The project was completed",
                isCorrect: false,
                feedback: "Ini Past Simple Passive.",
              },
            ]}
          />
        </motion.section>

        {/* Tips */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Selalu cari <span className="text-white font-semibold">verb utama</span> sebelum mengubah ke passive.
            </p>

            <p>
              Gunakan <span className="text-white font-semibold">to be sesuai tense</span> (is, was, has been, will be).
            </p>

            <p>
              Verb selalu berubah menjadi <span className="text-white font-semibold">V3 (past participle)</span>.
            </p>

            <p>
              Gunakan Passive Voice ketika pelaku tidak penting atau tidak diketahui.
            </p>

            <p>
              Semakin formal tulisan, semakin sering Passive Voice digunakan.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/intermediate/conditional-3")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/reported-speech")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}