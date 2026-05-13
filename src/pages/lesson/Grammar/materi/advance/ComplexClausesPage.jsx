// ComplexClausesPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ComplexClausesPage() {
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
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-white/70">
            Lesson 10 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Complex Clauses
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Complex sentence adalah kalimat yang terdiri dari 1 independent
            clause dan 1 atau lebih dependent clause. Materi ini membahas
            adverbial clause, adjective clause, dan noun clause dalam konteks
            penggunaan akademik.
          </p>
        </motion.div>

        {/* DEFINITION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Pengertian</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <b>Complex sentence</b> terdiri dari induk kalimat (independent
              clause) dan anak kalimat (dependent clause) yang tidak bisa
              berdiri sendiri.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Independent clause = bisa berdiri sendiri <br />
              Dependent clause = tidak bisa berdiri sendiri
            </div>
          </div>
        </motion.section>

        {/* TYPES */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Jenis Dependent Clause
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <b>1. Adverbial Clause</b> → menjelaskan waktu, sebab, syarat.
              Contoh: because, although, when, if.
            </p>

            <p>
              <b>2. Adjective Clause</b> → menjelaskan noun. Contoh: who, which,
              that, whose.
            </p>

            <p>
              <b>3. Noun Clause</b> → berfungsi sebagai subject atau object.
              Contoh: what, that, whether, why.
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
          <h2 className="text-2xl font-semibold text-white">Contoh Kalimat</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p className="text-white">
              I will call you when I arrive at the station.
            </p>
            <p>→ Adverbial clause (when I arrive at the station)</p>

            <p className="text-white">
              The woman, who is wearing a red jacket, is my teacher.
            </p>
            <p>→ Adjective clause (who is wearing a red jacket)</p>

            <p className="text-white">
              I don’t know what you are talking about.
            </p>
            <p>→ Noun clause (what you are talking about)</p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat yang mengandung noun clause yang benar:"
            options={[
              {
                value: "a",
                label: "A. I will go home because I am tired.",
                isCorrect: false,
                feedback: "Ini adverbial clause, bukan noun clause.",
              },
              {
                value: "b",
                label: "B. I don’t understand what he meant in the meeting.",
                isCorrect: true,
                feedback:
                  "Benar, 'what he meant' adalah noun clause sebagai object.",
              },
              {
                value: "c",
                label: "C. The book which I bought is expensive.",
                isCorrect: false,
                feedback: "Ini adjective clause.",
              },
              {
                value: "d",
                label: "D. She left early because she was sick.",
                isCorrect: false,
                feedback: "Ini adverbial clause.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih kalimat adverbial clause yang paling tepat:"
            options={[
              {
                value: "a",
                label: "A. If you study hard, you will pass the exam.",
                isCorrect: true,
                feedback:
                  "Benar, 'if you study hard' adalah adverbial clause (condition).",
              },
              {
                value: "b",
                label: "B. The man who lives next door is a doctor.",
                isCorrect: false,
                feedback: "Ini adjective clause.",
              },
              {
                value: "c",
                label: "C. I know what you did yesterday.",
                isCorrect: false,
                feedback: "Ini noun clause.",
              },
              {
                value: "d",
                label: "D. The girl that won the competition is my sister.",
                isCorrect: false,
                feedback: "Ini adjective clause.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih kalimat adjective clause yang benar:"
            options={[
              {
                value: "a",
                label: "A. I will leave when the meeting ends.",
                isCorrect: false,
                feedback: "Ini adverbial clause.",
              },
              {
                value: "b",
                label: "B. I wonder why he was late today.",
                isCorrect: false,
                feedback: "Ini noun clause.",
              },
              {
                value: "c",
                label: "C. I believe that she is honest.",
                isCorrect: false,
                feedback: "Ini noun clause.",
              },
              {
                value: "d",
                label:
                  "D. The student who scored highest received a scholarship.",
                isCorrect: true,
                feedback:
                  "Benar, 'who scored highest' adalah adjective clause.",
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
              Kenali dulu fungsi klausa: <b>noun, adjective, atau adverbial</b>.
            </p>
            <p>Noun clause biasanya menjawab “what / why / how / whether”.</p>
            <p>Adjective clause selalu menjelaskan kata benda (noun).</p>
            <p>Adverbial clause sering diawali because, if, when, although.</p>
            <p>Perhatikan bahwa dependent clause tidak bisa berdiri sendiri.</p>
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
            onClick={() => navigate("/advance/formal-informal")}
            className="rounded-full border border-white/20 bg-transparent px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            Materi sebelumnya
          </button>

          <button
            onClick={() => navigate("/grammar-page")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Selesai
          </button>
        </motion.div>
      </div>
    </main>
  );
}
