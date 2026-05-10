"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function PronounsPage() {
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
            Lesson 9
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Subject & Object Pronouns
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar kata ganti orang yang digunakan
            sebagai subjek (pelaku) dan objek (penerima aksi) dalam kalimat
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
              Apa itu Pronouns?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Pronouns adalah kata ganti yang digunakan untuk menggantikan noun
              (kata benda) agar kalimat tidak berulang dan lebih natural.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              Subject → Object Pronouns
            </div>
          </motion.section>

          {/* Full Table */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Subject & Object Pronouns Lengkap
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4 text-white/80">
              <div className="bg-white/5 p-4 rounded-xl">I → me</div>
              <div className="bg-white/5 p-4 rounded-xl">You → you</div>
              <div className="bg-white/5 p-4 rounded-xl">He → him</div>
              <div className="bg-white/5 p-4 rounded-xl">She → her</div>
              <div className="bg-white/5 p-4 rounded-xl">It → it</div>
              <div className="bg-white/5 p-4 rounded-xl">We → us</div>
              <div className="bg-white/5 p-4 rounded-xl col-span-2">
                They → them
              </div>
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
              Cara Memahami dengan Mudah
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>
                • <span className="text-white font-medium">Subject</span> =
                pelaku aksi (yang melakukan)
              </p>
              <p>
                • <span className="text-white font-medium">Object</span> =
                penerima aksi (yang dikenai)
              </p>
              <p>• Contoh: She loves him → She (melakukan), him (diterima)</p>
              <p>• “It” digunakan untuk benda/hewan/hal umum</p>
              <p>• “We” dan “They” digunakan untuk lebih dari satu orang</p>
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
              <p>• Subject selalu di awal kalimat</p>
              <p>• Object biasanya setelah verb</p>
              <p>• Tidak bisa saling ditukar karena akan mengubah makna</p>
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
              <p>• I help you</p>
              <p>• She calls me</p>
              <p>• They see us</p>
              <p>• We like them</p>
              <p>• He plays it</p>
            </div>
          </motion.section>

          {/* Test */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TestPanel
              question="Pilih kalimat Subject & Object Pronouns yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. Him helps I",
                  isCorrect: false,
                  feedback:
                    "Salah karena posisi subject dan object tidak sesuai aturan.",
                },
                {
                  value: "b",
                  label: "B. Me help she",
                  isCorrect: false,
                  feedback:
                    "Salah karena 'me' tidak bisa digunakan sebagai subject.",
                },
                {
                  value: "c",
                  label: "C. She helps me",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'she' sebagai subject dan 'me' sebagai object digunakan dengan benar.",
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
              Hafalkan pasangan ini seperti “I → me, he → him, she → her”. Kalau
              sudah hafal pasangan, kamu tidak akan bingung lagi saat membuat
              kalimat.
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
            onClick={() => navigate("/beginner/ArticlesPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/PossessivePronounsPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
