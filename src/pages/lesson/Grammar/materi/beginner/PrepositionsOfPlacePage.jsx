"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function PrepositionsOfPlacePage() {
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
            Lesson 14
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Prepositions of Place
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Di materi ini kamu akan belajar prepositions of place yang digunakan
            untuk menunjukkan posisi atau lokasi suatu benda maupun orang.
          </p>
        </motion.div>

        <div className="mt-16 space-y-10">
          {/* Concept */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Apa itu Prepositions of Place?
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Prepositions of place adalah kata depan yang digunakan untuk
              menjelaskan lokasi atau posisi suatu objek dalam kalimat.
            </p>

            <div className="mt-6 rounded-2xl bg-white/5 p-6 text-white text-center font-semibold">
              in / on / under / next to / behind / in front of / between
            </div>
          </motion.section>

          {/* Explanation */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Penjelasan Penggunaan
            </h2>

            <div className="mt-6 space-y-6 text-white/70">
              <div>
                <h3 className="font-semibold text-white text-lg">1. In</h3>
                <p className="mt-2">
                  Digunakan untuk menunjukkan sesuatu berada di dalam.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• The book is in the bag</p>
                  <p>• She is in the room</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">2. On</h3>
                <p className="mt-2">
                  Digunakan untuk menunjukkan sesuatu berada di atas permukaan.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• The phone is on the table</p>
                  <p>• The picture is on the wall</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">3. Under</h3>
                <p className="mt-2">
                  Digunakan untuk menunjukkan sesuatu berada di bawah.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• The cat is under the chair</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">4. Next to</h3>
                <p className="mt-2">
                  Digunakan untuk menunjukkan posisi di samping.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• The school is next to the bank</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">5. Behind</h3>
                <p className="mt-2">
                  Digunakan untuk menunjukkan posisi di belakang.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• The car is behind the house</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">
                  6. In front of
                </h3>
                <p className="mt-2">
                  Digunakan untuk menunjukkan posisi di depan.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• She is standing in front of the door</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-white text-lg">7. Between</h3>
                <p className="mt-2">
                  Digunakan untuk menunjukkan posisi di antara dua benda/orang.
                </p>

                <div className="mt-3 space-y-2">
                  <p>• The park is between the school and the bank</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Grammar Rule */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Aturan Penting
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• Gunakan "in" untuk posisi di dalam sesuatu</p>
              <p>• Gunakan "on" untuk posisi di atas permukaan</p>
              <p>• Gunakan "under" untuk posisi di bawah</p>
              <p>• Gunakan "between" hanya untuk dua objek</p>
              <p>• Gunakan "next to" untuk posisi yang sangat dekat/samping</p>
            </div>
          </motion.section>

          {/* Examples */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Contoh Kalimat
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>• My shoes are under the bed</p>
              <p>• The laptop is on the desk</p>
              <p>• We are in the classroom</p>
              <p>• The hospital is next to the supermarket</p>
              <p>• The cat is behind the sofa</p>
            </div>
          </motion.section>

          {/* Test */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TestPanel
              question="Pilih kalimat dengan preposition of place yang benar:"
              options={[
                {
                  value: "a",
                  label: "A. The book is on the table",
                  isCorrect: true,
                  feedback:
                    "Benar karena 'on' digunakan untuk posisi di atas permukaan meja.",
                },
                {
                  value: "b",
                  label: "B. The book is in the table",
                  isCorrect: false,
                  feedback:
                    "Salah karena benda berada di atas meja, bukan di dalam meja.",
                },
                {
                  value: "c",
                  label: "C. The book is between the table",
                  isCorrect: false,
                  feedback: "Salah karena 'between' digunakan untuk dua objek.",
                },
              ]}
            />

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <TestPanel
                question="Pilih kalimat yang paling tepat menggunakan preposition of place:"
                options={[
                  {
                    value: "a",
                    label: "A. The library is on the bank and the supermarket",
                    isCorrect: false,
                    feedback:
                      "Salah karena 'on' tidak digunakan untuk menunjukkan posisi di antara dua tempat.",
                  },
                  {
                    value: "b",
                    label:
                      "B. The library is under the bank and the supermarket",
                    isCorrect: false,
                    feedback:
                      "Salah karena 'under' berarti di bawah dan tidak sesuai konteks lokasi.",
                  },
                  {
                    value: "c",
                    label:
                      "C. The library is between the bank and the supermarket",
                    isCorrect: true,
                    feedback:
                      "Benar karena 'between' digunakan untuk posisi di antara dua tempat.",
                  },
                ]}
              />
            </motion.section>
          </motion.section>

          {/* Tips */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">Tips</h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Bayangkan posisi benda secara visual untuk menentukan preposition
              yang tepat.
              <br />
              <br />
              • in = di dalam
              <br />
              • on = di atas
              <br />
              • under = di bawah
              <br />
              • next to = di samping
              <br />• behind = di belakang
            </p>
          </motion.section>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/beginner/PrepositionsOfTimePage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/YesNoQuestionsFormationPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
