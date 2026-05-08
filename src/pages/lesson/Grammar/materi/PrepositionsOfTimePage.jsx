"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function PrepositionsOfTimePage() {
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
            Lesson 13
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Prepositions of Time
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar penggunaan prepositions of time
            seperti <strong>in</strong>, <strong>on</strong>, dan{" "}
            <strong>at</strong> untuk menunjukkan waktu dalam bahasa Inggris.
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
              Apa itu Prepositions of Time?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Prepositions of time adalah kata depan yang digunakan untuk
              menjelaskan waktu terjadinya suatu aktivitas atau kejadian.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              in / on / at
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
                <h3 className="font-semibold text-white text-lg">1. In</h3>
                <p className="mt-2">
                  Digunakan untuk bulan, tahun, musim, dan periode waktu yang
                  panjang.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• in January</p>
                  <p>• in 2025</p>
                  <p>• in the morning</p>
                  <p>• in summer</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">2. On</h3>
                <p className="mt-2">
                  Digunakan untuk hari dan tanggal tertentu.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• on Monday</p>
                  <p>• on my birthday</p>
                  <p>• on 17 August</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">3. At</h3>
                <p className="mt-2">
                  Digunakan untuk jam atau waktu yang spesifik.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• at 7 o’clock</p>
                  <p>• at noon</p>
                  <p>• at night</p>
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
              <p>• Gunakan "in" untuk waktu yang umum atau panjang</p>
              <p>• Gunakan "on" untuk hari dan tanggal spesifik</p>
              <p>• Gunakan "at" untuk jam atau waktu yang tepat</p>
              <p>• Jangan tertukar antara "in the morning" dan "at night"</p>
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
              <p>• I was born in 2005</p>
              <p>• We study English on Monday</p>
              <p>• She wakes up at 5 a.m.</p>
              <p>• They play football in the afternoon</p>
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
              question="Pilih penggunaan preposition of time yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. I go to school at Monday",
                  isCorrect: false,
                  feedback: "Salah karena hari menggunakan preposition 'on'.",
                },
                {
                  value: "b",
                  label: "B. I go to school on Monday",
                  isCorrect: true,
                  feedback: "Benar karena 'on' digunakan untuk hari tertentu.",
                },
                {
                  value: "c",
                  label: "C. I go to school in 7 o’clock",
                  isCorrect: false,
                  feedback: "Salah karena jam menggunakan preposition 'at'.",
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
              Cara mudah mengingat:
              <br />• <strong>In</strong> → waktu panjang
              <br />• <strong>On</strong> → hari & tanggal
              <br />• <strong>At</strong> → jam spesifik
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
            onClick={() => navigate("/beginner/AdverbsOfFrequencyPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/PrepositionsOfPlacePage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}