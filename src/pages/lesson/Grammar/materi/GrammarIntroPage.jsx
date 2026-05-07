// GrammarIntroPage no 1
"use client";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function GrammarIntroPage() {
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
            Beginner Lesson
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Introduction to English Grammar
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Selamat datang 👋 Di sini kamu akan mulai memahami dasar grammar
            bahasa Inggris dengan cara yang sederhana, santai, dan mudah
            dimengerti.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="mt-16 space-y-10">
          {/* What is Grammar */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Apa itu Grammar?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Grammar adalah kumpulan aturan yang membantu kita menyusun kata
              menjadi kalimat yang benar. Ibaratnya, grammar itu seperti “peta”
              yang membuat kita tidak tersesat saat berbicara atau menulis
              bahasa Inggris.
            </p>
          </motion.section>

          {/* Why important */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Kenapa Grammar itu Penting?
            </h2>

            <ul className="mt-4 space-y-3 text-white/70">
              <li>• Biar orang lain paham maksud kamu dengan jelas</li>
              <li>• Menghindari salah arti saat bicara</li>
              <li>• Membuat kamu lebih percaya diri</li>
              <li>• Dipakai di kerja, sekolah, dan dunia internasional</li>
            </ul>
          </motion.section>

          {/* Basic structure */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Struktur Dasar Kalimat
            </h2>

            <p className="mt-4 text-white/70">
              Dalam bahasa Inggris, pola paling dasar adalah:
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white">
              <p className="text-center font-semibold">
                Subject + Verb + Object
              </p>
            </div>

            <p className="mt-4 text-white/70">
              Contoh sederhana:
              <br />
              <span className="text-white font-medium">
                I (Subject) eat (Verb) rice (Object)
              </span>
            </p>
          </motion.section>

          {/* TEST PANEL */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TestPanel
              question="Pilih susunan kalimat yang benar dalam bahasa Inggris:"
              options={[
                {
                  value: "a",
                  label: "A. She reads a book",
                  isCorrect: true,
                  feedback:
                    "Benar karena mengikuti pola Subject + Verb + Object (She = subject, reads = verb, a book = object).",
                },
                {
                  value: "b",
                  label: "B. Reads she a book",
                  isCorrect: false,
                  feedback:
                    "Salah karena verb tidak boleh mendahului subject dalam kalimat deklaratif.",
                },
                {
                  value: "c",
                  label: "C. A book she reads",
                  isCorrect: false,
                  feedback:
                    "Salah dalam konteks basic sentence structure (kecuali gaya tertentu seperti emphasis atau literary style).",
                },
              ]}
            />
          </motion.section>

          {/* Friendly note */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Tips dari aku untuk kamu
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Jangan buru-buru ingin langsung jago. Grammar itu bukan hafalan,
              tapi kebiasaan. Semakin sering kamu membaca dan latihan, semakin
              natural kamu akan paham.
            </p>
          </motion.section>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => navigate("/beginner/SVOPatternPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
