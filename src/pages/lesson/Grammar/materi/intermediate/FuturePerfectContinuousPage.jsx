// FuturePerfectContinuousPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function FuturePerfectContinuousPage() {
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
            Lesson 3 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Future Perfect & Continuous
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Materi ini membahas Future Perfect dan Future Perfect Continuous
            Tense, yaitu tense yang digunakan untuk menunjukkan suatu aksi yang
            akan sudah selesai atau sudah berlangsung dalam jangka waktu tertentu
            di masa depan.
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
            Pengertian Future Perfect & Continuous
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Future Perfect Tense
              </span>{" "}
              digunakan untuk menyatakan bahwa suatu tindakan akan sudah selesai
              sebelum waktu tertentu di masa depan.
            </p>

            <p>
              Sedangkan{" "}
              <span className="text-white font-semibold">
                Future Perfect Continuous Tense
              </span>{" "}
              digunakan untuk menekankan durasi atau lamanya suatu aktivitas
              yang terus berlangsung hingga titik waktu tertentu di masa depan.
            </p>

            <p>
              Fokus utama Future Perfect adalah{" "}
              <span className="text-white font-semibold">
                hasil atau penyelesaian tindakan
              </span>
              , sedangkan Future Perfect Continuous fokus pada{" "}
              <span className="text-white font-semibold">
                durasi kegiatan
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
              <h3 className="text-xl font-semibold text-white">
                Future Perfect
              </h3>

              <div className="mt-3 space-y-2">
                <p>
                  <span className="text-white font-semibold">
                    Positif (+):
                  </span>{" "}
                  Subject + will have + Verb 3
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Negatif (-):
                  </span>{" "}
                  Subject + will not have + Verb 3
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Tanya (?):
                  </span>{" "}
                  Will + Subject + have + Verb 3?
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Future Perfect Continuous
              </h3>

              <div className="mt-3 space-y-2">
                <p>
                  <span className="text-white font-semibold">
                    Positif (+):
                  </span>{" "}
                  Subject + will have been + Verb-ing
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Negatif (-):
                  </span>{" "}
                  Subject + will not have been + Verb-ing
                </p>

                <p>
                  <span className="text-white font-semibold">
                    Tanya (?):
                  </span>{" "}
                  Will + Subject + have been + Verb-ing?
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Main Uses */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Fungsi Utama
          </h2>

          <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
            <li>
              Menunjukkan aktivitas yang akan selesai sebelum waktu tertentu di
              masa depan.
            </li>

            <li>
              Menekankan lamanya suatu aktivitas yang sedang berlangsung hingga
              titik waktu tertentu di masa depan.
            </li>

            <li>
              Digunakan untuk memperkirakan durasi aktivitas di masa depan.
            </li>

            <li>
              Sering digunakan dengan kata seperti{" "}
              <span className="text-white font-semibold">
                by, for, since, when, by the time
              </span>
              .
            </li>
          </ul>
        </motion.section>

        {/* Time Signals */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Time Signals
          </h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Beberapa kata keterangan waktu yang sering digunakan:
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>By tomorrow</li>
              <li>By next year</li>
              <li>For two hours</li>
              <li>For five years</li>
              <li>When you arrive</li>
              <li>By the time he comes</li>
            </ul>
          </div>
        </motion.section>

        {/* Difference */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Perbedaan Penting
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Future Perfect:
              </span>{" "}
              fokus pada hasil atau selesainya tindakan.
            </p>

            <p className="text-white">
              Example: I will have finished my homework by 8 PM.
            </p>

            <p>
              <span className="text-white font-semibold">
                Future Perfect Continuous:
              </span>{" "}
              fokus pada durasi atau lamanya aktivitas berlangsung.
            </p>

            <p className="text-white">
              Example: I will have been studying for three hours by 8 PM.
            </p>
          </div>
        </motion.section>

        {/* Examples */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Contoh Kalimat
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Future Perfect:{" "}
              <span className="text-white">
                They will have completed the project by Friday.
              </span>
            </p>

            <p>
              Future Perfect Continuous:{" "}
              <span className="text-white">
                By next month, she will have been teaching for ten years.
              </span>
            </p>

            <p>
              Pertanyaan:{" "}
              <span className="text-white">
                Will you have been waiting long before the bus arrives?
              </span>
            </p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat yang benar:"
            options={[
              {
                value: "a",
                label:
                  "A. She will have been cook for two hours by dinner time",
                isCorrect: false,
                feedback: "Harus menggunakan verb-ing yaitu 'cooking'.",
              },
              {
                value: "b",
                label:
                  "B. She have been cooking for two hours by dinner time",
                isCorrect: false,
                feedback: "Struktur Future Perfect Continuous tidak lengkap.",
              },
              {
                value: "c",
                label:
                  "C. She will cooking for two hours by dinner time",
                isCorrect: false,
                feedback: "Struktur grammar salah.",
              },
              {
                value: "d",
                label:
                  "D. She will have been cooking for two hours by dinner time",
                isCorrect: true,
                feedback:
                  "Benar, menggunakan struktur Future Perfect Continuous dengan tepat.",
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
                label:
                  "A. They will have finish the project by Monday",
                isCorrect: false,
                feedback: "Harus menggunakan Verb 3 yaitu 'finished'.",
              },
              {
                value: "b",
                label:
                  "B. They will have finished the project by Monday",
                isCorrect: false,
                feedback:
                  "Ini sebenarnya benar untuk Future Perfect, tetapi bukan jawaban utama pada soal ini.",
              },
              {
                value: "c",
                label:
                  "C. They will have been working on the project for five days by Monday",
                isCorrect: true,
                feedback:
                  "Benar, menunjukkan durasi aktivitas hingga waktu tertentu di masa depan.",
              },
              {
                value: "d",
                label:
                  "D. They working on the project by Monday",
                isCorrect: false,
                feedback: "Struktur tense tidak tepat.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih kalimat Future Perfect Continuous yang benar:"
            options={[
              {
                value: "a",
                label:
                  "A. I will been studying for three hours tonight",
                isCorrect: false,
                feedback: "Kurang kata 'have'.",
              },
              {
                value: "b",
                label:
                  "B. I will have been studying for three hours by tonight",
                isCorrect: true,
                feedback:
                  "Benar, menggunakan struktur lengkap Future Perfect Continuous.",
              },
              {
                value: "c",
                label:
                  "C. I have been studying for three hours tomorrow",
                isCorrect: false,
                feedback: "Tense tidak sesuai.",
              },
              {
                value: "d",
                label:
                  "D. I will have studying for three hours tonight",
                isCorrect: false,
                feedback: "Kurang kata 'been'.",
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
              Gunakan{" "}
              <span className="text-white font-semibold">
                Future Perfect
              </span>{" "}
              jika ingin menekankan bahwa suatu pekerjaan akan selesai di masa
              depan.
            </p>

            <p>
              Gunakan{" "}
              <span className="text-white font-semibold">
                Future Perfect Continuous
              </span>{" "}
              jika ingin menekankan berapa lama aktivitas berlangsung hingga
              waktu tertentu di masa depan.
            </p>

            <p>
              Future Perfect biasanya memakai pola{" "}
              <span className="text-white font-semibold">
                will have + Verb 3
              </span>
              .
            </p>

            <p>
              Future Perfect Continuous memakai pola{" "}
              <span className="text-white font-semibold">
                will have been + Verb-ing
              </span>
              .
            </p>

            <p>
              Kata seperti{" "}
              <span className="text-white font-semibold">
                for, since, by, when
              </span>{" "}
              sering menjadi petunjuk penggunaan tense ini.
            </p>

            <p>
              Jangan lupa, setelah{" "}
              <span className="text-white font-semibold">been</span> harus
              menggunakan{" "}
              <span className="text-white font-semibold">Verb-ing</span>.
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
            onClick={() => navigate("/intermediate/PastPerfectTensePage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/conditional-1")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}