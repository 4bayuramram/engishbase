// FormalVsInformalStylePage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function FormalVsInformalStylePage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen bg-[#512621] px-6 py-20 md:px-16"
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
            Lesson 9 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Formal vs Informal Style
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Materi ini membahas perbedaan gaya bahasa formal dan informal dalam
            bahasa Inggris berdasarkan struktur, kosakata, dan konteks
            penggunaannya dalam komunikasi akademik maupun sehari-hari.
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
            Pengertian Singkat
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <b>Formal style</b> digunakan dalam penulisan akademik, laporan,
              email profesional, dan situasi resmi.
            </p>

            <p>
              <b>Informal style</b> digunakan dalam percakapan sehari-hari,
              chat, atau komunikasi santai.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Formal = presisi + objektif + struktur kompleks <br />
              Informal = santai + langsung + sederhana
            </div>
          </div>
        </motion.section>

        {/* KEY DIFFERENCES */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Perbedaan Utama</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <b>1. Kontraksi</b>: formal tidak menggunakan "don't / I'm",
              informal menggunakannya.
            </p>

            <p>
              <b>2. Phrasal verbs</b>: informal memakai "look into", formal
              memakai "investigate".
            </p>

            <p>
              <b>3. Struktur kalimat</b>: formal lebih panjang dan pasif.
            </p>

            <p>
              <b>4. Kosakata</b>: formal lebih akademis (obtain, commence),
              informal lebih sederhana (get, start).
            </p>
          </div>
        </motion.section>

        {/* EXAMPLES */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Contoh Perbandingan
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p className="text-white">
              Formal: Assistance can be provided upon request.
            </p>
            <p className="text-white">Informal: We can help if you ask.</p>

            <p className="text-white">
              Formal: It is necessary to investigate the issue.
            </p>
            <p className="text-white">
              Informal: We need to look into the problem.
            </p>
          </div>
        </motion.section>

        {/* TESTS */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat yang paling formal dan tepat secara akademik:"
            options={[
              {
                value: "a",
                label: "A. We need to check the problem quickly.",
                isCorrect: false,
                feedback: "Terlalu informal dan sederhana.",
              },
              {
                value: "b",
                label: "B. It is necessary to investigate the issue promptly.",
                isCorrect: true,
                feedback: "Benar, formal, objektif, dan akademik.",
              },
              {
                value: "c",
                label: "C. We should look into the problem fast.",
                isCorrect: false,
                feedback: "Mengandung phrasal verb informal.",
              },
              {
                value: "d",
                label: "D. Check the issue now.",
                isCorrect: false,
                feedback: "Terlalu perintah dan informal.",
              },
            ]}
          />
        </motion.section>

        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih kalimat informal yang benar dan natural:"
            options={[
              {
                value: "a",
                label:
                  "A. One should consider the available options carefully.",
                isCorrect: false,
                feedback: "Terlalu formal dan impersonal.",
              },
              {
                value: "b",
                label:
                  "B. It is recommended that the options be considered carefully.",
                isCorrect: false,
                feedback: "Formal passive structure.",
              },
              {
                value: "c",
                label: "C. You should think about the options carefully.",
                isCorrect: true,
                feedback: "Benar, informal dan natural.",
              },
              {
                value: "d",
                label: "D. The options must be carefully considered.",
                isCorrect: false,
                feedback: "Masih formal pasif.",
              },
            ]}
          />
        </motion.section>

        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih kalimat formal yang paling tepat dan akademik:"
            options={[
              {
                value: "a",
                label: "A. We got the data and started the analysis.",
                isCorrect: true,
                feedback:
                  "Benar, meskipun sederhana tetap paling tepat dibanding opsi lain yang lebih tidak natural.",
              },
              {
                value: "b",
                label:
                  "B. We got the data and then we started to check it out.",
                isCorrect: false,
                feedback: "Mengandung phrasal verb informal.",
              },
              {
                value: "c",
                label: "C. We obtained the data and commenced the analysis.",
                isCorrect: false,
                feedback:
                  "Secara formal benar, tapi opsi ini dibuat lebih kompleks dibanding struktur yang ditargetkan soal.",
              },
              {
                value: "d",
                label: "D. We take the data and begin checking it.",
                isCorrect: false,
                feedback: "Grammar tidak tepat.",
              },
            ]}
          />
        </motion.section>

        {/* TIPS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Tips Penting</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Gunakan <b>formal style</b> untuk essay, laporan, dan email kerja.
            </p>

            <p>
              Hindari kontraksi seperti "don’t", "I’m", atau "can’t" dalam
              tulisan formal.
            </p>

            <p>
              Ganti phrasal verb dengan kata kerja formal seperti investigate,
              obtain, commence.
            </p>

            <p>
              Gunakan kalimat pasif untuk terdengar lebih akademik dan objektif.
            </p>

            <p>
              Jangan terlalu kaku dalam informal—tujuannya tetap komunikasi yang
              natural.
            </p>
          </div>
        </motion.section>

        {/* NAVIGATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/advance/academic-writing")}
            className="rounded-full border border-white/20 bg-transparent px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            Materi sebelumnya
          </button>

          <button
            onClick={() => navigate("/advance/complex-clauses")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke materi berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
