// SubjunctiveMoodPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function SubjunctiveMoodPage() {
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
            Lesson 5 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Subjunctive Mood
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Subjunctive Mood adalah bentuk grammar khusus dalam bahasa Inggris
            yang digunakan untuk menyatakan harapan, pengandaian, saran,
            keinginan, situasi hipotetis, atau sesuatu yang bertentangan dengan
            kenyataan.
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
            Pengertian Subjunctive Mood
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Dalam subjunctive mood, kata kerja sering menggunakan{" "}
              <span className="text-white font-semibold">bare infinitive</span>{" "}
              (verb dasar tanpa s/es) atau bentuk lampau untuk menunjukkan bahwa
              situasi tersebut tidak nyata, hanya harapan, atau sekadar
              kemungkinan.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + Verb + that + Subject + Base Verb
            </div>

            <p>
              Berbeda dengan grammar biasa, subjunctive sering mengabaikan
              aturan subject-verb agreement normal.
            </p>

            <p className="text-white">
              The teacher suggested that he study harder.
            </p>
          </div>
        </motion.section>

        {/* Suggest */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            1. Suggest / Verb of Demand
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan setelah kata kerja seperti{" "}
              <span className="text-white">
                suggest, recommend, insist, demand, request
              </span>
              .
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + Verb + that + Subject + Base Verb
            </div>

            <p className="text-white">
              The manager insisted that every employee arrive on time.
            </p>

            <p className="text-white">
              She recommended that he take the scholarship immediately.
            </p>

            <p>
              Perhatikan bahwa verb setelah{" "}
              <span className="text-white">that</span> tetap menggunakan bentuk
              dasar walaupun subject-nya singular.
            </p>
          </div>
        </motion.section>

        {/* Wish */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">2. Wish</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk menyatakan harapan yang bertentangan dengan
              kenyataan.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + wish + Subject + V2 / Were
            </div>

            <p className="text-white">I wish I were taller.</p>

            <p className="text-white">She wishes she knew the answer.</p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + wish + Subject + had + V3
            </div>

            <p className="text-white">
              They wish they had prepared more carefully.
            </p>

            <p>
              Untuk situasi yang tidak nyata di masa kini, gunakan{" "}
              <span className="text-white">V2 / were</span>. Untuk penyesalan
              masa lalu gunakan <span className="text-white">had + V3</span>.
            </p>
          </div>
        </motion.section>

        {/* If Only */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">3. If Only</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              "If only" memiliki fungsi hampir sama dengan wish, tetapi
              terdengar lebih emosional atau dramatis.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              If only + Subject + V2 / Were
            </div>

            <p className="text-white">If only I were more confident.</p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              If only + Subject + had + V3
            </div>

            <p className="text-white">
              If only they had listened to the warnings earlier.
            </p>
          </div>
        </motion.section>

        {/* As If */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            4. As If / As Though
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk menggambarkan sesuatu yang tampak benar tetapi
              sebenarnya tidak nyata.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + Verb + as if + Subject + V2 / Were
            </div>

            <p className="text-white">
              He speaks as if he were the owner of the company.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + Verb + as though + Subject + had + V3
            </div>

            <p className="text-white">
              She looked as though she had seen a ghost.
            </p>
          </div>
        </motion.section>

        {/* Would Rather */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">5. Would Rather</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk menyatakan preferensi terhadap tindakan orang
              lain.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + would rather + Subject + V2
            </div>

            <p className="text-white">
              I would rather you stayed here tonight.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + would rather + Subject + had + V3
            </div>

            <p className="text-white">
              She would rather they had informed her earlier.
            </p>
          </div>
        </motion.section>

        {/* It Is Time */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            6. It Is Time / It Is High Time
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk menyatakan bahwa sesuatu seharusnya sudah
              dilakukan.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              It is time + Subject + V2
            </div>

            <p className="text-white">It is time we left the office.</p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              It is time for + Object + to + V1
            </div>

            <p className="text-white">
              It is time for us to begin the presentation.
            </p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <TestPanel
            question="1. Pilih kalimat subjunctive yang paling tepat dan formal:"
            options={[
              {
                value: "a",
                label:
                  "A. The professor recommended that every participant submit the assignment before Friday.",
                isCorrect: true,
                feedback:
                  "Benar, setelah 'recommended that' digunakan bare infinitive 'submit'.",
              },
              {
                value: "b",
                label:
                  "B. The professor recommended that every participant submits the assignment before Friday.",
                isCorrect: false,
                feedback:
                  "Salah karena subjunctive harus menggunakan base verb.",
              },
              {
                value: "c",
                label:
                  "C. The professor recommended every participant to submit the assignment before Friday.",
                isCorrect: false,
                feedback:
                  "Struktur subjunctive dengan 'that clause' tidak digunakan dengan benar.",
              },
              {
                value: "d",
                label:
                  "D. The professor recommended that every participant submitted the assignment before Friday.",
                isCorrect: false,
                feedback:
                  "Verb setelah subjunctive tidak boleh berbentuk past tense.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <TestPanel
            question="2. Pilih penggunaan wish yang paling tepat:"
            options={[
              {
                value: "a",
                label:
                  "A. She wishes she were able to attend the international conference this year.",
                isCorrect: true,
                feedback:
                  "Benar, 'were' digunakan untuk situasi hipotetis yang tidak nyata.",
              },
              {
                value: "b",
                label:
                  "B. She wishes she is able to attend the international conference this year.",
                isCorrect: false,
                feedback:
                  "Setelah 'wish' untuk kondisi tidak nyata harus menggunakan past form.",
              },
              {
                value: "c",
                label:
                  "C. She wishes she had able to attend the international conference this year.",
                isCorrect: false,
                feedback: "Struktur grammar tidak tepat.",
              },
              {
                value: "d",
                label:
                  "D. She wishes she can attend the international conference this year.",
                isCorrect: false,
                feedback:
                  "Modal 'can' tidak tepat untuk pola wish unreal present.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10"
        >
          <TestPanel
            question="3. Pilih kalimat subjunctive yang paling kompleks dan benar:"
            options={[
              {
                value: "a",
                label:
                  "A. It is high time the government implements stricter environmental regulations.",
                isCorrect: false,
                feedback:
                  "Setelah 'It is high time' digunakan bentuk past tense.",
              },
              {
                value: "b",
                label:
                  "B. It is high time the government implement stricter environmental regulations.",
                isCorrect: false,
                feedback:
                  "Struktur ini kurang tepat untuk pola 'It is high time'.",
              },
              {
                value: "c",
                label:
                  "C. It is high time the government had implemented stricter environmental regulations.",
                isCorrect: false,
                feedback: "Past perfect tidak umum digunakan dalam pola ini.",
              },
              {
                value: "d",
                label:
                  "D. It is high time the government implemented stricter environmental regulations.",
                isCorrect: true,
                feedback:
                  "Benar, setelah 'It is high time' digunakan past tense untuk menyatakan sesuatu yang seharusnya sudah dilakukan.",
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
          <h2 className="text-2xl font-semibold text-white">Tips Penting</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Setelah kata seperti{" "}
              <span className="text-white">
                suggest, insist, recommend, demand
              </span>
              , gunakan base verb tanpa tambahan{" "}
              <span className="text-white">-s</span>.
            </p>

            <p>
              Pada pola <span className="text-white">wish</span> dan{" "}
              <span className="text-white">if only</span>, gunakan past tense
              untuk situasi yang tidak nyata di masa sekarang.
            </p>

            <p>
              Gunakan <span className="text-white">had + V3</span> untuk
              menyatakan penyesalan masa lalu.
            </p>

            <p>
              Dalam subjunctive formal, <span className="text-white">were</span>{" "}
              sering digunakan untuk semua subject, termasuk{" "}
              <span className="text-white">I/he/she</span>.
            </p>

            <p>
              Setelah <span className="text-white">It is time</span> atau{" "}
              <span className="text-white">It is high time</span>, gunakan
              bentuk past tense walaupun maknanya berkaitan dengan masa kini.
            </p>

            <p>
              Subjunctive mood sangat sering muncul dalam academic writing,
              IELTS, TOEFL, Cambridge English, dan formal communication.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/advance/advanced-passive")}
            className="rounded-full border border-white/20 bg-transparent px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            Kembali ke Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/advance/nominalisation")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#3c2a4d] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}