// ConditionalType3Page.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function ConditionalType3Page() {
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
            Lesson 6 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Conditional Type 3
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Materi ini membahas Conditional Sentence Type 3, yaitu kalimat
            pengandaian untuk menyatakan penyesalan, kritik, atau situasi yang
            tidak mungkin terjadi di masa lampau.
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
            Pengertian Conditional Type 3
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Conditional Sentence Type 3
              </span>{" "}
              digunakan untuk membicarakan situasi masa lalu yang tidak terjadi
              dan hasil yang berbeda jika kondisi masa lalu berubah.
            </p>

            <p>
              Conditional ini biasanya dipakai untuk mengungkapkan{" "}
              <span className="text-white font-semibold">
                penyesalan, kritik, rasa kecewa,
              </span>{" "}
              atau membayangkan hasil berbeda dari kejadian masa lampau.
            </p>

            <p>
              Karena membahas masa lalu yang sudah terjadi, situasi pada
              Conditional Type 3 bersifat{" "}
              <span className="text-white font-semibold">mustahil diubah.</span>
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
                  If + Subject + had + Verb 3
                </p>

                <p>
                  <span className="text-white font-semibold">Main Clause:</span>{" "}
                  Subject + would/could/might + have + Verb 3
                </p>

                <p className="text-white">
                  Example: If I had studied harder, I would have passed the
                  exam.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Pola Terbalik
              </h3>

              <div className="mt-3 space-y-2">
                <p>
                  Subject + would/could/might + have + Verb 3 + if + Subject +
                  had + Verb 3
                </p>

                <p className="text-white">
                  Example: She would have arrived on time if she had taken a
                  taxi.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">
                Penggunaan Modal
              </h3>

              <div className="mt-3 space-y-2">
                <p>
                  Selain <span className="text-white font-semibold">would</span>
                  , Conditional Type 3 juga dapat menggunakan{" "}
                  <span className="text-white font-semibold">could</span> atau{" "}
                  <span className="text-white font-semibold">might</span>.
                </p>

                <p className="text-white">
                  Example: If they had trained harder, they could have won the
                  match.
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
              <span className="text-white font-semibold">If Clause</span>{" "}
              menyatakan kondisi masa lalu yang sebenarnya tidak terjadi.
            </p>

            <p className="text-white">Example: If I had woken up earlier</p>

            <p>
              <span className="text-white font-semibold">Main Clause</span>{" "}
              menunjukkan hasil berbeda yang sebenarnya tidak terjadi juga.
            </p>

            <p className="text-white">
              Example: I would have caught the train.
            </p>
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
            Fungsi Conditional Type 3
          </h2>

          <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
            <li>Mengungkapkan penyesalan tentang masa lalu.</li>

            <li>Membicarakan hasil berbeda dari kejadian masa lampau.</li>

            <li>Menyampaikan kritik atau rasa kecewa.</li>

            <li>Membayangkan situasi hipotetis di masa lalu.</li>
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
            Fakta dari Conditional Type 3
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Conditional Type 3 selalu memiliki fakta yang berkebalikan dengan
              kalimat pengandaiannya.
            </p>

            <p className="text-white">
              If I had studied harder, I would have passed the exam.
            </p>

            <p className="text-white">
              Fact: I didn't study hard, so I didn't pass the exam.
            </p>

            <p className="text-white">
              If it hadn't rained yesterday, we would have gone to the beach.
            </p>

            <p className="text-white">
              Fact: It rained yesterday, so we didn't go to the beach.
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
            Perbedaan Type 2 & Type 3
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Type 2:</span> Membahas
              situasi khayalan di masa sekarang atau masa depan.
            </p>

            <p className="text-white">
              If I had money, I would buy a new laptop.
            </p>

            <p>
              <span className="text-white font-semibold">Type 3:</span> Membahas
              penyesalan atau situasi hipotetis di masa lalu.
            </p>

            <p className="text-white">
              If I had had money, I would have bought a new laptop.
            </p>
          </div>
        </motion.section>

        {/* Notes */}
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
              <span className="text-white font-semibold">had + Verb 3</span>,
              bukan would have.
            </p>

            <p className="text-white">
              If I would have studied harder, I would have passed. (salah)
            </p>

            <p className="text-white">
              If I had studied harder, I would have passed. (benar)
            </p>

            <p>Gunakan koma (,) jika if clause berada di awal kalimat.</p>

            <p className="text-white">
              If she had left earlier, she would have caught the bus.
            </p>
          </div>
        </motion.section>

        {/* TEST 1 */}
        <motion.section className="mt-10">
          <TestPanel
            question="1. Pilih kalimat Conditional Type 3 yang paling tepat:"
            options={[
              {
                value: "a",
                label:
                  "A. If they had prepared better, they would have succeeded",
                isCorrect: true,
                feedback:
                  "Benar, menggunakan Past Perfect dan would have + Verb 3 dengan tepat.",
              },
              {
                value: "b",
                label: "B. If they prepared better, they would have succeeded",
                isCorrect: false,
                feedback:
                  "If clause pada Type 3 harus menggunakan had + Verb 3.",
              },
              {
                value: "c",
                label: "C. If they had prepared better, they would succeed",
                isCorrect: false,
                feedback:
                  "Main clause pada Type 3 harus menggunakan would have + Verb 3.",
              },
              {
                value: "d",
                label:
                  "D. If they would have prepared better, they would have succeeded",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan would setelah if clause.",
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
                  "A. If she had taken the earlier train, she would have arrived on time",
                isCorrect: true,
                feedback:
                  "Benar, struktur Conditional Type 3 digunakan dengan tepat.",
              },
              {
                value: "b",
                label:
                  "B. If she took the earlier train, she would have arrived on time",
                isCorrect: false,
                feedback: "If clause harus menggunakan Past Perfect.",
              },
              {
                value: "c",
                label:
                  "C. If she had taken the earlier train, she would arrive on time",
                isCorrect: false,
                feedback: "Main clause harus menggunakan would have + Verb 3.",
              },
              {
                value: "d",
                label:
                  "D. If she would have taken the earlier train, she would have arrived on time",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan would setelah if.",
              },
            ]}
          />
        </motion.section>

        {/* TEST 3 */}
        <motion.section className="mt-10">
          <TestPanel
            question="3. Pilih penggunaan Conditional Type 3 yang benar:"
            options={[
              {
                value: "a",
                label: "A. If I had known the truth, I would tell you",
                isCorrect: false,
                feedback:
                  "Main clause pada Type 3 harus menggunakan would have + Verb 3.",
              },
              {
                value: "b",
                label: "B. If I knew the truth, I would have told you",
                isCorrect: false,
                feedback: "If clause harus menggunakan Past Perfect.",
              },
              {
                value: "c",
                label:
                  "C. If I would have known the truth, I would have told you",
                isCorrect: false,
                feedback: "Tidak boleh menggunakan would setelah if.",
              },
              {
                value: "d",
                label: "D. If I had known the truth, I would have told you",
                isCorrect: true,
                feedback:
                  "Benar, ini adalah struktur Conditional Type 3 yang tepat.",
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
              Gunakan Conditional Type 3 untuk membicarakan penyesalan atau
              situasi yang tidak terjadi di masa lalu.
            </p>

            <p>
              Setelah <span className="text-white font-semibold">if</span>,
              gunakan{" "}
              <span className="text-white font-semibold">had + Verb 3</span>.
            </p>

            <p>
              Gunakan{" "}
              <span className="text-white font-semibold">
                would/could/might + have + Verb 3
              </span>{" "}
              pada Main Clause.
            </p>

            <p>
              Jangan gunakan{" "}
              <span className="text-white font-semibold">would</span> setelah{" "}
              <span className="text-white font-semibold">if</span>.
            </p>

            <p>
              Conditional Type 3 selalu membahas sesuatu yang sudah terjadi dan
              tidak bisa diubah lagi.
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
            onClick={() => navigate("/intermediate/conditional-2")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/passive-voice")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
