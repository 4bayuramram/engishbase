// AdvancedPassivePage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function AdvancedPassivePage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen bg-[#512621] px-6 py-20 md:px-16"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
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
            Lesson 4 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Advanced Passive Voice
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Advanced Passive Voice adalah pengembangan dari struktur dasar
            passive (Subject + be + V3) yang digunakan dalam konteks formal,
            akademik, laporan, dan English proficiency tingkat lanjut (C1+).
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
            Pengertian Advanced Passive
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Passive voice tingkat lanjut digunakan untuk menekankan tindakan
              daripada pelaku, terutama dalam writing formal, academic essay,
              berita, dan laporan ilmiah.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + be + V3 (dasar passive structure)
            </div>

            <p>
              Namun dalam level advanced, passive dapat dikombinasikan dengan
              modal, infinitive, gerund, perfect tense, dan reporting structure.
            </p>
          </div>
        </motion.section>

        {/* Modal Passive */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-3xl bg-white/10 p-8 border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            1. Passive dengan Modal Verbs
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + Modal + be + V3
            </div>

            <p className="text-white">
              The report must be submitted by Friday.
            </p>

            <p>
              Digunakan untuk menyatakan kewajiban, kemungkinan, atau saran
              dalam bentuk pasif.
            </p>
          </div>
        </motion.section>

        {/* Infinitive Passive */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            2. Passive Infinitive
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <div className="rounded-2xl bg-black/20 p-4 text-white">
              to be + V3
            </div>

            <p className="text-white">
              She deserves to be rewarded for her hard work.
            </p>

            <p>
              Digunakan setelah verb seperti: want, need, deserve, expect, hope.
            </p>
          </div>
        </motion.section>

        {/* Gerund Passive */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            3. Passive Gerund (-ing form)
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <div className="rounded-2xl bg-black/20 p-4 text-white">
              being + V3
            </div>

            <p className="text-white">He hates being interrupted.</p>

            <p className="text-white">I remember being taught how to drive.</p>

            <p>
              Digunakan setelah verb atau preposisi seperti: enjoy, avoid, hate,
              remember, mind.
            </p>
          </div>
        </motion.section>

        {/* Perfect Passive */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            4. Passive Perfect Tenses
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p className="text-white">Present Perfect Passive:</p>
            <div className="rounded-2xl bg-black/20 p-4 text-white">
              have/has been + V3
            </div>
            <p className="text-white">The documents have been checked.</p>

            <p className="text-white mt-4">Past Perfect Passive:</p>
            <div className="rounded-2xl bg-black/20 p-4 text-white">
              had been + V3
            </div>
            <p className="text-white">The keys had been lost.</p>
          </div>
        </motion.section>

        {/* Reporting Passive */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            5. Impersonal Passive (Reporting Verbs)
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Digunakan dalam laporan berita, opini umum, atau academic writing.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              It + is/was + V3 + that-clause
            </div>

            <p className="text-white">
              It is believed that the company is growing.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + is/was + V3 + to + infinitive
            </div>

            <p className="text-white">The company is believed to be growing.</p>
          </div>
        </motion.section>

        {/* Get Passive */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            6. Passive dengan “Get”
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Bentuk informal passive yang sering digunakan dalam percakapan.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              get + V3
            </div>

            <p className="text-white">He got fired yesterday.</p>

            <p>
              Menunjukkan kejadian yang dialami subjek (sering tidak terduga).
            </p>
          </div>
        </motion.section>

        {/* Continuous Passive */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            7. Passive Continuous
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <div className="rounded-2xl bg-black/20 p-4 text-white">
              be + being + V3
            </div>

            <p className="text-white">The room is being cleaned right now.</p>

            <p>Menunjukkan aksi yang sedang berlangsung dalam bentuk pasif.</p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat passive modal yang paling benar:"
            options={[
              {
                value: "a",
                label: "The report must be submitted by Friday.",
                isCorrect: true,
                feedback: "Benar, struktur modal passive tepat digunakan.",
              },
              {
                value: "b",
                label: "The report must submitted by Friday.",
                isCorrect: false,
                feedback: "Salah, harus ada 'be' sebelum V3.",
              },
              {
                value: "c",
                label: "The report must be submitting by Friday.",
                isCorrect: false,
                feedback: "Salah bentuk verb setelah modal.",
              },
              {
                value: "d",
                label: "The report must been submitted by Friday.",
                isCorrect: false,
                feedback: "Struktur modal passive salah.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih passive reporting verb yang benar:"
            options={[
              {
                value: "a",
                label: "It believed that the company is growing.",
                isCorrect: false,
                feedback: "Salah, kurang 'is'.",
              },
              {
                value: "b",
                label: "It is believed that the company is growing.",
                isCorrect: true,
                feedback: "Benar, impersonal passive tepat.",
              },
              {
                value: "c",
                label: "The company believed to be growing.",
                isCorrect: false,
                feedback: "Struktur tidak lengkap.",
              },
              {
                value: "d",
                label: "The company is believing to grow.",
                isCorrect: false,
                feedback: "Salah bentuk verb.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih passive gerund yang benar:"
            options={[
              {
                value: "a",
                label: "He hates being interrupted.",
                isCorrect: true,
                feedback: "Benar, struktur gerund passive tepat.",
              },
              {
                value: "b",
                label: "He hates to be interrupt.",
                isCorrect: false,
                feedback: "Salah bentuk verb.",
              },
              {
                value: "c",
                label: "He hates interrupting.",
                isCorrect: false,
                feedback: "Active form, bukan passive.",
              },
              {
                value: "d",
                label: "He hates being interrupt.",
                isCorrect: false,
                feedback: "V3 salah.",
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
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Dalam <span className="text-white">passive voice</span>, fokus
              utama adalah pada{" "}
              <span className="text-white">aksi (action)</span>, bukan pelaku
              (doer). Jadi pastikan subjek tidak selalu harus disebutkan jika
              tidak penting.
            </p>

            <p>
              Ingat pola dasar: <span className="text-white">be + V3</span>.
              Jika bentuk ini tidak muncul, kemungkinan besar kalimat tersebut
              belum benar-benar passive.
            </p>

            <p>
              Setelah <span className="text-white">modal verb</span> (can, must,
              should, might), selalu gunakan bentuk{" "}
              <span className="text-white">be + V3</span>, bukan langsung V3.
            </p>

            <p>
              Gunakan <span className="text-white">being + V3</span> untuk
              passive yang berbentuk gerund, terutama setelah verb seperti{" "}
              <span className="text-white">enjoy, avoid, hate, remember</span>.
            </p>

            <p>
              Hati-hati dengan{" "}
              <span className="text-white">perfect passive</span>: gunakan{" "}
              <span className="text-white">have/has/had been + V3</span>, bukan
              hanya "have + V3".
            </p>

            <p>
              Dalam <span className="text-white">reporting passive</span>, dua
              bentuk yang paling sering muncul adalah{" "}
              <span className="text-white">It is said that...</span> dan{" "}
              <span className="text-white">Subject + is said to...</span>.
            </p>

            <p>
              Bentuk <span className="text-white">get + V3</span> lebih
              informal, jadi hindari penggunaannya dalam writing akademik atau
              formal.
            </p>

            <p>
              Jangan mencampur{" "}
              <span className="text-white">active dan passive structure</span>{" "}
              dalam satu kalimat tanpa alasan yang jelas, karena bisa membuat
              makna menjadi tidak natural.
            </p>

            <p>
              Passive voice sering muncul dalam{" "}
              <span className="text-white">academic writing, news report,</span>{" "}
              dan <span className="text-white">formal essay</span>, jadi penting
              untuk mengenali konteks penggunaannya.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/advance/cleft-sentences")}
            className="rounded-full border border-white/20 px-10 py-4 text-white hover:bg-white/10 transition"
          >
            Kembali ke Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/advance/subjunctive")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-gray-700 hover:shadow-xl transition"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
