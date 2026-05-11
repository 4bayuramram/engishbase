// ComplexSentencesPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ComplexSentencesPage() {
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
            Lesson 10 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Complex Sentences
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Complex Sentence adalah kalimat yang terdiri dari satu independent
            clause (induk kalimat) dan satu atau lebih dependent clause (anak
            kalimat) yang menunjukkan hubungan logis antar ide.
          </p>
        </motion.div>

        {/* Definition */}
        <motion.section className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Pengertian Complex Sentence
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Complex Sentence</span>{" "}
              adalah kalimat yang menggabungkan satu induk kalimat dan satu atau
              lebih anak kalimat untuk menunjukkan hubungan ide yang hierarkis.
            </p>

            <p>
              Kalimat ini digunakan untuk memberikan informasi tambahan, alasan,
              kondisi, waktu, atau kontras dalam satu struktur yang lebih
              kompleks.
            </p>
          </div>
        </motion.section>

        {/* Components */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Komponen Utama</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Independent Clause
              </span>{" "}
              adalah klausa yang dapat berdiri sendiri sebagai kalimat utuh.
            </p>

            <p className="text-white">Example: I went to school.</p>

            <p>
              <span className="text-white font-semibold">Dependent Clause</span>{" "}
              adalah klausa yang tidak dapat berdiri sendiri karena diawali
              subordinating conjunction.
            </p>

            <p className="text-white">Example: because I was late</p>
          </div>
        </motion.section>

        {/* Structure */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Struktur Complex Sentence
          </h2>

          <div className="mt-6 space-y-6 text-white/70">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Pola 1 (Independent + Dependent)
              </h3>
              <p className="mt-2">I stayed at home because it was raining.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Pola 2 (Dependent + Independent)
              </h3>
              <p className="mt-2">Because it was raining, I stayed at home.</p>
            </div>

            <div className="text-white/60">
              Catatan: Jika dependent clause di depan, gunakan koma sebelum
              independent clause.
            </div>
          </div>
        </motion.section>

        {/* Types */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Jenis Dependent Clause
          </h2>

          <div className="mt-4 space-y-6 text-white/70 leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-white">
                A. Adverbial Clause
              </h3>
              <p>Menjelaskan waktu, sebab, kontras, syarat, atau tujuan.</p>
              <p className="text-white mt-2">
                After I finished work, I went home.
              </p>
              <p className="text-white">
                Although he was tired, he kept working.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                B. Adjective / Relative Clause
              </h3>
              <p>Menjelaskan noun menggunakan who, which, that, whose.</p>
              <p className="text-white mt-2">
                The book that I bought is expensive.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                C. Noun Clause
              </h3>
              <p>Berfungsi sebagai subjek atau objek dalam kalimat.</p>
              <p className="text-white mt-2">
                What he said surprised everyone.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Advanced Notes */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Catatan Tingkat Lanjut
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Complex Sentence sering digunakan dalam writing akademik untuk
              meningkatkan variasi struktur kalimat.
            </p>

            <p>
              Penggunaan subordinating conjunction sangat penting untuk
              menentukan hubungan logis antar klausa.
            </p>

            <p className="text-white">
              Kesalahan umum: menggabungkan dua independent clause tanpa
              conjunction yang benar (run-on sentence).
            </p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat Complex Sentence yang benar:"
            options={[
              {
                value: "a",
                label: "A. I went home, I was tired",
                isCorrect: false,
                feedback:
                  "Dua independent clause tidak boleh dipisahkan koma saja.",
              },
              {
                value: "b",
                label: "B. I went home because I was tired",
                isCorrect: false,
                feedback:
                  "Struktur benar, tetapi ini bukan pilihan paling kompleks sesuai soal.",
              },
              {
                value: "c",
                label: "C. Because I was tired I went home",
                isCorrect: false,
                feedback: "Harus ada koma setelah dependent clause di awal.",
              },
              {
                value: "d",
                label: "D. Because I was tired, I went home",
                isCorrect: true,
                feedback: "Benar, struktur Complex Sentence lengkap dan tepat.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih kalimat yang menggunakan relative clause dengan benar:"
            options={[
              {
                value: "a",
                label: "A. The man who I met yesterday is my teacher",
                isCorrect: true,
                feedback:
                  "Benar, penggunaan 'who' sebagai relative clause tepat.",
              },
              {
                value: "b",
                label: "B. The man, I met yesterday is my teacher",
                isCorrect: false,
                feedback: "Struktur tidak lengkap tanpa relative pronoun.",
              },
              {
                value: "c",
                label: "C. The man who is I met yesterday my teacher",
                isCorrect: false,
                feedback: "Struktur grammar tidak benar.",
              },
              {
                value: "d",
                label: "D. The man I met yesterday, who is my teacher",
                isCorrect: false,
                feedback: "Struktur klausa tidak tepat dan ambigu.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih kalimat Complex Sentence dengan noun clause yang benar:"
            options={[
              {
                value: "a",
                label: "A. I know that he is coming",
                isCorrect: false,
                feedback:
                  "Kurang kompleks dibanding opsi lain dalam konteks soal.",
              },
              {
                value: "b",
                label: "B. That he is coming I know",
                isCorrect: false,
                feedback: "Struktur tidak natural dalam English.",
              },
              {
                value: "c",
                label: "C. I know he coming that",
                isCorrect: false,
                feedback: "Grammar tidak benar.",
              },
              {
                value: "d",
                label: "D. What he said was surprising",
                isCorrect: true,
                feedback: "Benar, noun clause berfungsi sebagai subjek.",
              },
            ]}
          />
        </motion.section>

        {/* Tips */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Kenali perbedaan independent dan dependent clause sebelum membuat
              kalimat kompleks.
            </p>

            <p>
              Gunakan subordinating conjunction untuk menghubungkan ide secara
              logis.
            </p>

            <p>
              Perhatikan penggunaan koma jika dependent clause berada di awal
              kalimat.
            </p>

            <p>
              Latih variasi kalimat agar writing lebih natural dan akademik.
            </p>

            <p>
              Hindari run-on sentence dengan memastikan setiap klausa terhubung
              dengan benar.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/intermediate/modal-verbs")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/relative-clauses")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
