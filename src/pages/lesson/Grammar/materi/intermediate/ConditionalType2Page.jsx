// ConditionalType2Page.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ConditionalType2Page() {
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
            Lesson 5 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Conditional Type 2
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Materi ini membahas Conditional Sentence Type 2, yaitu kalimat
            pengandaian untuk situasi yang tidak nyata, imajiner, atau kecil
            kemungkinan terjadi di masa sekarang maupun masa depan.
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
            Pengertian Conditional Type 2
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Conditional Sentence Type 2
              </span>{" "}
              digunakan untuk membahas situasi yang tidak nyata
              (unreal/hypothetical) atau bertentangan dengan fakta saat ini.
            </p>

            <p>
              Conditional ini dipakai ketika seseorang membayangkan sesuatu yang
              sulit, mustahil, atau hanya khayalan.
            </p>

            <p>
              Type 2 sering digunakan untuk{" "}
              <span className="text-white font-semibold">
                berimajinasi, bermimpi, memberi saran,
              </span>{" "}
              atau membicarakan situasi yang berbeda dari kenyataan.
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
                  If + Subject + Verb 2
                </p>

                <p>
                  <span className="text-white font-semibold">Main Clause:</span>{" "}
                  Subject + would/could + Verb 1
                </p>

                <p className="text-white">
                  Example: If I had a million dollars, I would buy a mansion.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Pola Terbalik
              </h3>

              <div className="mt-3 space-y-2">
                <p>Subject + would/could + Verb 1 + if + Subject + Verb 2</p>

                <p className="text-white">
                  Example: I would travel around the world if I had enough
                  money.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Penggunaan Were
              </h3>

              <div className="mt-3 space-y-2">
                <p>
                  Dalam Conditional Type 2 formal, semua subject dapat
                  menggunakan{" "}
                  <span className="text-white font-semibold">were</span>.
                </p>

                <p className="text-white">
                  Example: If I were you, I would accept the offer.
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
              bagian kalimat yang menyatakan pengandaian atau kondisi tidak
              nyata.
            </p>

            <p className="text-white">Example: If I had more free time</p>

            <p>
              <span className="text-white font-semibold">Main Clause</span>{" "}
              adalah bagian yang menunjukkan hasil imajiner dari kondisi
              tersebut.
            </p>

            <p className="text-white">Example: I would learn Japanese.</p>
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
            Fungsi Conditional Type 2
          </h2>

          <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
            <li>Membicarakan situasi khayalan atau tidak nyata.</li>

            <li>Menyatakan impian atau harapan.</li>

            <li>Memberi saran dengan lebih halus.</li>

            <li>Membahas situasi yang bertentangan dengan fakta.</li>
          </ul>
        </motion.section>

        {/* Facts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Fakta dari Conditional Type 2
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Conditional Type 2 biasanya memiliki fakta yang berkebalikan
              dengan kalimat pengandaiannya.
            </p>

            <p className="text-white">
              If I had more time, I would learn French.
            </p>

            <p className="text-white">
              Fact: I don't have enough time, so I don't learn French.
            </p>
          </div>
        </motion.section>

        {/* Comparison */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Perbedaan Type 1 & Type 2
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Type 1:</span> Situasi
              realistis dan mungkin terjadi.
            </p>

            <p className="text-white">If I have money, I will buy it.</p>

            <p>
              <span className="text-white font-semibold">Type 2:</span> Situasi
              imajiner atau tidak nyata.
            </p>

            <p className="text-white">If I had money, I would buy it.</p>
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
          <h2 className="text-2xl font-semibold text-white">Contoh Kalimat</h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              Positif:{" "}
              <span className="text-white">
                If I won the lottery, I would buy a sports car.
              </span>
            </p>

            <p>
              Negatif:{" "}
              <span className="text-white">
                If she didn't live so far away, we would visit her more often.
              </span>
            </p>

            <p>
              Saran:{" "}
              <span className="text-white">
                If I were you, I would study harder.
              </span>
            </p>

            <p>
              Khayalan:{" "}
              <span className="text-white">
                If I were a superhero, I would help everyone.
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
              gunakan <span className="text-white font-semibold">Verb 2</span>,
              bukan <span className="text-white font-semibold">would</span>.
            </p>

            <p className="text-white">
              If I would have money, I would travel the world. (salah)
            </p>

            <p className="text-white">
              If I had money, I would travel the world. (benar)
            </p>

            <p>
              Gunakan <span className="text-white font-semibold">were</span>{" "}
              untuk semua subject dalam bentuk formal.
            </p>

            <p className="text-white">If I were you, I would apologize.</p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat Conditional Type 2 yang paling tepat:"
            options={[
              {
                value: "a",
                label: "A. If I have enough money, I would buy a yacht",
                isCorrect: false,
                feedback:
                  "If clause pada Conditional Type 2 harus menggunakan Verb 2.",
              },
              {
                value: "b",
                label: "B. If I had enough money, I would buy a yacht",
                isCorrect: true,
                feedback:
                  "Benar, menggunakan struktur Conditional Type 2 dengan tepat.",
              },
              {
                value: "c",
                label: "C. If I would have enough money, I bought a yacht",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan 'would' setelah if clause.",
              },
              {
                value: "d",
                label: "D. If I had enough money, I will buy a yacht",
                isCorrect: false,
                feedback:
                  "Main clause pada Type 2 menggunakan would/could, bukan will.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 2 */}
        <motion.section className="mt-10">
          <TestPanel
            question="2. Pilih kalimat yang benar secara grammar dan makna:"
            options={[
              {
                value: "a",
                label:
                  "A. If she were more careful, she will not make mistakes",
                isCorrect: false,
                feedback: "Main clause harus menggunakan would/could.",
              },
              {
                value: "b",
                label: "B. If she is more careful, she would not make mistakes",
                isCorrect: false,
                feedback:
                  "If clause pada Type 2 harus menggunakan Simple Past.",
              },
              {
                value: "c",
                label:
                  "C. If she would be more careful, she would not make mistakes",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan 'would' setelah if.",
              },
              {
                value: "d",
                label:
                  "D. If she were more careful, she would not make mistakes",
                isCorrect: true,
                feedback:
                  "Benar, menggunakan Conditional Type 2 dengan struktur yang tepat.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih penggunaan Conditional Type 2 yang benar:"
            options={[
              {
                value: "a",
                label: "A. If I were rich, I will travel around the world",
                isCorrect: false,
                feedback: "Main clause harus menggunakan would/could.",
              },
              {
                value: "b",
                label: "B. If I am rich, I would travel around the world",
                isCorrect: false,
                feedback:
                  "If clause harus menggunakan Verb 2 untuk Conditional Type 2.",
              },
              {
                value: "c",
                label: "C. If I were rich, I would travel around the world",
                isCorrect: true,
                feedback:
                  "Benar, ini adalah struktur Conditional Type 2 yang tepat.",
              },
              {
                value: "d",
                label: "D. If I would be rich, I would travel around the world",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan 'would' setelah if.",
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
              Gunakan Conditional Type 2 untuk situasi yang tidak nyata,
              khayalan, atau sangat kecil kemungkinan terjadi.
            </p>

            <p>
              Setelah <span className="text-white font-semibold">if</span>,
              gunakan <span className="text-white font-semibold">Verb 2</span>,
              bukan <span className="text-white font-semibold">would</span>.
            </p>

            <p>
              Gunakan{" "}
              <span className="text-white font-semibold">
                would/could + Verb 1
              </span>{" "}
              pada Main Clause.
            </p>

            <p>
              Dalam situasi formal, gunakan{" "}
              <span className="text-white font-semibold">were</span> untuk semua
              subject.
            </p>

            <p>
              Conditional Type 2 sering dipakai untuk berimajinasi, memberi
              saran, dan membicarakan hal yang bertentangan dengan kenyataan.
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
            onClick={() => navigate("/intermediate/conditional-1")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/conditional-3")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
