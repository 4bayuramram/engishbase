// CleftSentencesPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function CleftSentencesPage() {
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
            Lesson 3 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Cleft Sentences
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Cleft sentences adalah struktur kalimat yang memecah satu kalimat
            menjadi dua bagian untuk memberikan penekanan khusus pada informasi
            tertentu seperti subjek, objek, waktu, tempat, atau alasan.
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
            Pengertian Cleft Sentences
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Cleft sentence digunakan untuk memberikan <b>fokus atau penekanan</b>{" "}
              pada bagian tertentu dalam kalimat.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Kalimat biasa → Kalimat cleft = lebih fokus & lebih formal
            </div>

            <p className="text-white">
              John stole the money.
            </p>

            <p className="text-white">
              It was John who stole the money.
            </p>

            <p>
              Kalimat kedua lebih menekankan <b>siapa pelakunya</b>.
            </p>
          </div>
        </motion.section>

        {/* IT CLEFT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            1. It-Cleft Sentences (Paling Umum)
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <div className="rounded-2xl bg-black/20 p-4 text-white">
              It + be + focus + that/who + clause
            </div>

            <p className="text-white">It was John who stole the money.</p>
            <p className="text-white">It is the money that John stole.</p>
            <p className="text-white">It was yesterday that she called me.</p>
            <p className="text-white">It is in Paris that I met him.</p>

            <p>
              Digunakan untuk menekankan <b>orang, benda, waktu, atau tempat</b>.
            </p>
          </div>
        </motion.section>

        {/* WH CLEFT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            2. Wh-Cleft Sentences (Pseudo-Cleft)
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <div className="rounded-2xl bg-black/20 p-4 text-white">
              What + clause + be + focus
            </div>

            <p className="text-white">What I need is a long vacation.</p>
            <p className="text-white">What she said was surprising.</p>
            <p className="text-white">What happened was a misunderstanding.</p>

            <p>
              Digunakan untuk menekankan <b>aksi atau keadaan</b>.
            </p>
          </div>
        </motion.section>

        {/* ALL CLEFT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            3. All-Cleft Sentences
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Menekankan bahwa sesuatu adalah <b>satu-satunya hal</b> yang terjadi.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              All + clause + be + focus
            </div>

            <p className="text-white">All I want is peace.</p>
            <p className="text-white">All he did was complain.</p>
            <p className="text-white">All she needs is support.</p>
          </div>
        </motion.section>

        {/* WHERE WHEN WHY */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            4. Wh-Cleft (Where / When / Why)
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p className="text-white">Where I met her was in Tokyo.</p>
            <p className="text-white">When we left was at midnight.</p>
            <p className="text-white">Why he left is still unknown.</p>

            <p>
              Digunakan untuk menekankan <b>tempat, waktu, atau alasan</b>.
            </p>
          </div>
        </motion.section>

        {/* THERE CLEFT */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            5. There-Cleft (Jarang Digunakan)
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk memperkenalkan informasi baru (lebih natural dalam
              spoken English).
            </p>

            <p className="text-white">There is a book I want to read.</p>
            <p className="text-white">There are many things we should discuss.</p>
          </div>
        </motion.section>

        {/* SUMMARY */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Ringkasan Cepat
          </h2>

          <div className="mt-4 space-y-3 text-white/70">
            <p><b>It-cleft:</b> menekankan orang/benda/waktu/tempat</p>
            <p><b>Wh-cleft:</b> menekankan kejadian atau aksi</p>
            <p><b>All-cleft:</b> menekankan “hanya itu saja”</p>
            <p><b>Where/When/Why:</b> menekankan keterangan</p>
          </div>
        </motion.section>

        {/* VERY HARD TESTS */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <TestPanel
            question="1. Pilih kalimat cleft yang paling tepat dan natural:"
            options={[
              {
                value: "a",
                label: "A. It was the explanation that he gave which was unclear.",
                isCorrect: false,
                feedback: "Terlalu berlebihan dan tidak natural dalam English formal.",
              },
              {
                value: "b",
                label: "B. It was the explanation he gave that was unclear.",
                isCorrect: true,
                feedback: "Benar, struktur it-cleft paling natural.",
              },
              {
                value: "c",
                label: "C. What was unclear was the explanation he gave that it was.",
                isCorrect: false,
                feedback: "Struktur wh-cleft tidak benar.",
              },
              {
                value: "d",
                label: "D. The explanation was unclear that it was given by him.",
                isCorrect: false,
                feedback: "Struktur grammar salah total.",
              },
            ]}
          />
        </motion.section>

        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih wh-cleft yang paling tepat:"
            options={[
              {
                value: "a",
                label: "A. What surprised me was how quickly he resigned.",
                isCorrect: true,
                feedback: "Benar, wh-cleft fokus pada kejadian.",
              },
              {
                value: "b",
                label: "B. What surprised me how quickly he resigned was.",
                isCorrect: false,
                feedback: "Struktur tidak sesuai pola wh-cleft.",
              },
              {
                value: "c",
                label: "C. It surprised me what he resigned quickly.",
                isCorrect: false,
                feedback: "Bukan cleft sentence.",
              },
              {
                value: "d",
                label: "D. How quickly he resigned was surprising what.",
                isCorrect: false,
                feedback: "Grammar tidak valid.",
              },
            ]}
          />
        </motion.section>

        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih kalimat paling formal dan benar secara cleft structure:"
            options={[
              {
                value: "a",
                label: "A. All what he did was complain about everything.",
                isCorrect: false,
                feedback: "Struktur 'all what' tidak benar.",
              },
              {
                value: "b",
                label: "B. All he did was complain about everything.",
                isCorrect: true,
                feedback: "Benar, all-cleft yang tepat dan natural.",
              },
              {
                value: "c",
                label: "C. He did all was complain about everything.",
                isCorrect: false,
                feedback: "Grammar salah.",
              },
              {
                value: "d",
                label: "D. All was what he did complain everything.",
                isCorrect: false,
                feedback: "Struktur tidak valid.",
              },
            ]}
          />
        </motion.section>

        <motion.section className="mt-10">
          <TestPanel
            question="4. Soal tingkat sangat sulit: pilih kalimat cleft paling akurat secara gramatikal dan makna:"
            options={[
              {
                value: "a",
                label:
                  "A. It was not until the final stage that what they realized was the strategy had already failed.",
                isCorrect: true,
                feedback:
                  "Benar, kombinasi inversion + cleft masih grammatically valid dan formal.",
              },
              {
                value: "b",
                label:
                  "B. What was not until the final stage they realized was the strategy had failed already.",
                isCorrect: false,
                feedback: "Struktur wh-cleft tidak benar.",
              },
              {
                value: "c",
                label:
                  "C. The strategy had failed that it was not until the final stage they realized.",
                isCorrect: false,
                feedback: "Struktur tidak natural.",
              },
              {
                value: "d",
                label:
                  "D. It was the final stage that not until they realized the strategy failed.",
                isCorrect: false,
                feedback: "Grammar rusak.",
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
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Gunakan cleft sentence hanya untuk <b>penekanan penting</b>, bukan
              semua kalimat.
            </p>

            <p>
              <b>It-cleft</b> paling aman digunakan dalam writing formal dan ujian.
            </p>

            <p>
              <b>Wh-cleft</b> lebih natural untuk menjelaskan ide atau keadaan.
            </p>

            <p>
              Hindari struktur “what is that” yang tidak sesuai pola cleft.
            </p>

            <p>
              Terlalu banyak cleft sentence bisa membuat tulisan terdengar tidak
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
            onClick={() => navigate("/advance/inversion")}
            className="rounded-full border border-white/20 bg-transparent px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
           kembali ke materi sebelumnya 
          </button>

          <button
            onClick={() => navigate("/advance/advanced-passive")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke materi berikutnya 
          </button>
        </motion.div>
      </div>
    </main>
  );
}