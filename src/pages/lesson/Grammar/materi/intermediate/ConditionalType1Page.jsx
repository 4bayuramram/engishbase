// ConditionalType1Page.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ConditionalType1Page() {
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
            Lesson 4 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Conditional Type 1
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Materi ini membahas Conditional Sentence Type 1, yaitu kalimat
            pengandaian yang digunakan untuk menyatakan situasi yang mungkin
            terjadi di masa depan jika syarat tertentu terpenuhi.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Pengertian Conditional Type 1
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Conditional Sentence Type 1
              </span>{" "}
              digunakan untuk membahas situasi yang realistis dan mungkin
              terjadi di masa depan.
            </p>

            <p>
              Tipe conditional ini digunakan ketika suatu hasil akan terjadi
              jika syarat tertentu terpenuhi.
            </p>

            <p>
              Conditional Type 1 sering digunakan untuk membuat{" "}
              <span className="text-white font-semibold">
                prediksi, janji, peringatan,
              </span>{" "}
              atau{" "}
              <span className="text-white font-semibold">
                kemungkinan nyata
              </span>
              .
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
            Rumus & Struktur
          </h2>

          <div className="mt-6 space-y-6 text-white/70">
            <div>
              <h3 className="text-xl font-semibold text-white">Pola Utama</h3>

              <div className="mt-3 space-y-2">
                <p>
                  <span className="text-white font-semibold">If Clause:</span>{" "}
                  If + Subject + Verb 1/s/es
                </p>

                <p>
                  <span className="text-white font-semibold">Main Clause:</span>{" "}
                  Subject + will + Verb 1
                </p>

                <p className="text-white">
                  Example: If it rains, I will stay at home.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Pola Terbalik
              </h3>

              <div className="mt-3 space-y-2">
                <p>Subject + will + Verb 1 + if + Subject + Verb 1/s/es</p>

                <p className="text-white">
                  Example: I will buy a new phone if I have enough money.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Variasi Modal
              </h3>

              <div className="mt-3 space-y-2">
                <p>
                  Kata <span className="text-white font-semibold">will</span>{" "}
                  dapat diganti dengan{" "}
                  <span className="text-white font-semibold">
                    can, may, might,
                  </span>{" "}
                  atau <span className="text-white font-semibold">should</span>.
                </p>

                <p className="text-white">
                  Example: If it is sunny, we can go to the beach.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Components */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Komponen Utama</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">If Clause</span> adalah
              bagian kalimat yang menyatakan syarat atau kondisi.
            </p>

            <p className="text-white">Example: If you study hard</p>

            <p>
              <span className="text-white font-semibold">Main Clause</span>{" "}
              adalah bagian kalimat yang menyatakan hasil atau konsekuensi.
            </p>

            <p className="text-white">Example: you will pass the exam.</p>
          </div>
        </motion.section>

        {/* Functions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Fungsi Conditional Type 1
          </h2>

          <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
            <li>Membuat prediksi tentang sesuatu yang mungkin terjadi.</li>

            <li>Memberi peringatan.</li>

            <li>Membuat janji atau penawaran.</li>

            <li>Menjelaskan konsekuensi dari suatu tindakan.</li>
          </ul>
        </motion.section>

        {/* Examples */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Contoh Kalimat</h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Positif:{" "}
              <span className="text-white">
                If you study hard, you will pass the exam.
              </span>
            </p>

            <p>
              Negatif:{" "}
              <span className="text-white">
                If she doesn't hurry, she will miss the bus.
              </span>
            </p>

            <p>
              Peringatan:{" "}
              <span className="text-white">
                If you touch that wire, you will get an electric shock.
              </span>
            </p>

            <p>
              Modal:{" "}
              <span className="text-white">
                If it is sunny, we can go to the beach.
              </span>
            </p>
          </div>
        </motion.section>

        {/* Important Notes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">Catatan Penting</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Setelah kata <span className="text-white font-semibold">if</span>,
              gunakan{" "}
              <span className="text-white font-semibold">
                Simple Present Tense
              </span>
              , bukan <span className="text-white font-semibold">will</span>.
            </p>

            <p className="text-white"> If it will rain, I will stay home (salah)</p>

            <p className="text-white"> If it rains, I will stay home (benar)</p>

            <p>
              Jika If Clause berada di awal kalimat, gunakan tanda koma (,)
              sebelum Main Clause.
            </p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat Conditional Type 1 yang benar:"
            options={[
              {
                value: "a",
                label: "A. If you study hard, you will pass the exam",
                isCorrect: true,
                feedback:
                  "Benar, menggunakan struktur Conditional Type 1 dengan tepat.",
              },
              {
                value: "b",
                label: "B. If you will study hard, you pass the exam",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan 'will' setelah if.",
              },
              {
                value: "c",
                label: "C. If you studied hard, you will pass the exam",
                isCorrect: false,
                feedback: "Tense pada if clause tidak tepat.",
              },
              {
                value: "d",
                label: "D. If you study hard, you passing the exam",
                isCorrect: false,
                feedback:
                  "Main clause tidak menggunakan struktur future tense.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih kalimat yang paling tepat:"
            options={[
              {
                value: "a",
                label: "A. If she hurry, she will catch the bus",
                isCorrect: false,
                feedback: "Verb pada subject 'she' harus menggunakan s/es.",
              },
              {
                value: "b",
                label: "B. If she hurries, she will catch the bus",
                isCorrect: false,
                feedback:
                  "Kalimat ini benar, tetapi bukan jawaban utama pada soal ini.",
              },
              {
                value: "c",
                label: "C. She will catch the bus if she hurries",
                isCorrect: true,
                feedback: "Benar, ini adalah pola terbalik Conditional Type 1.",
              },
              {
                value: "d",
                label: "D. She catches the bus if she will hurry",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan 'will' setelah if.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih penggunaan Conditional Type 1 yang benar:"
            options={[
              {
                value: "a",
                label: "A. If it rain, we will stay home",
                isCorrect: false,
                feedback: "Verb pada subject 'it' harus menggunakan 'rains'.",
              },
              {
                value: "b",
                label: "B. If it rains, we will stay home",
                isCorrect: true,
                feedback:
                  "Benar, menggunakan Simple Present setelah if dan future tense pada main clause.",
              },
              {
                value: "c",
                label: "C. If it will rain, we stay home",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan 'will' setelah if.",
              },
              {
                value: "d",
                label: "D. If it raining, we will stay home",
                isCorrect: false,
                feedback: "Struktur if clause tidak tepat.",
              },
            ]}
          />
        </motion.section>

        <br />

        {/* Tips */}
        <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Gunakan Conditional Type 1 untuk situasi yang realistis dan
              mungkin terjadi di masa depan.
            </p>

            <p>
              Setelah <span className="text-white font-semibold">if</span>,
              gunakan <span className="text-white font-semibold">Verb 1</span>,
              bukan <span className="text-white font-semibold">will</span>.
            </p>

            <p>
              Gunakan{" "}
              <span className="text-white font-semibold">will + Verb 1</span>{" "}
              pada Main Clause.
            </p>

            <p>
              Jika If Clause berada di depan kalimat, gunakan tanda koma (,).
            </p>

            <p>
              Conditional Type 1 sering dipakai untuk prediksi, janji,
              peringatan, dan kemungkinan nyata.
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
            onClick={() => navigate("/intermediate/future-tenses")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/conditional-2")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}


