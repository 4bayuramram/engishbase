// RelativeClausesPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function RelativeClausesPage() {
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
            Lesson 11 (Intermediate)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Relative Clauses
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Relative Clause (klausa relatif) adalah klausa yang digunakan untuk
            memberikan informasi tambahan tentang noun (kata benda), sehingga
            kalimat menjadi lebih jelas, spesifik, dan informatif.
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
            Pengertian Relative Clause
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Relative Clause adalah dependent clause yang menjelaskan noun
              dalam kalimat utama.
            </p>

            <p>
              Biasanya diterjemahkan sebagai kata{" "}
              <span className="text-white font-semibold">"yang"</span>.
            </p>

            <p>
              Contoh sederhana:
              <br />
              <span className="text-white">
                The book that I read is interesting.
              </span>
            </p>
          </div>
        </motion.section>

        {/* Components */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Komponen Relative Clause
          </h2>

          <div className="mt-4 space-y-4 text-white/70">
            <p>
              <span className="text-white font-semibold">
                1. Relative Pronoun/Adverb
              </span>
              <br />
              who, whom, whose, which, that, where, when, why
            </p>

            <p>
              <span className="text-white font-semibold">
                2. Subject + Verb
              </span>
              <br />
              Setiap relative clause tetap memiliki subjek dan verb.
            </p>
          </div>
        </motion.section>

        {/* Types */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Jenis-Jenis Relative Clause
          </h2>

          <div className="mt-6 space-y-6 text-white/70">
            <div>
              <h3 className="text-white font-semibold text-xl">
                1. Defining (Restrictive)
              </h3>
              <p>
                Memberikan informasi penting. Jika dihapus, makna kalimat
                berubah.
              </p>
              <p className="text-white mt-2">
                The man who lives here is a doctor.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl">
                2. Non-Defining (Non-Restrictive)
              </h3>
              <p>Memberikan informasi tambahan. Diapit koma.</p>
              <p className="text-white mt-2">
                My father, who is 60 years old, is still active.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl">
                3. Contact Clause
              </h3>
              <p>
                Relative pronoun bisa dihilangkan jika berfungsi sebagai objek.
              </p>
              <p className="text-white mt-2">
                The book (that) I read is amazing.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl">
                4. Possessive Clause
              </h3>
              <p>Menggunakan whose untuk menunjukkan kepemilikan.</p>
              <p className="text-white mt-2">
                The girl whose bag is red is my friend.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Usage */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Penggunaan Relative Pronouns
          </h2>

          <ul className="mt-4 space-y-3 text-white/70 list-disc pl-5">
            <li>
              <span className="text-white">Who</span> → orang (subjek)
            </li>
            <li>
              <span className="text-white">Whom</span> → orang (objek formal)
            </li>
            <li>
              <span className="text-white">Which</span> → benda/hewan
            </li>
            <li>
              <span className="text-white">That</span> → orang/benda (defining)
            </li>
            <li>
              <span className="text-white">Whose</span> → kepemilikan
            </li>
            <li>
              <span className="text-white">Where/When/Why</span> →
              tempat/waktu/alasan
            </li>
          </ul>
        </motion.section>

        {/* Position */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Posisi dalam Kalimat
          </h2>

          <div className="mt-4 space-y-3 text-white/70">
            <p>
              Relative clause selalu diletakkan setelah noun yang dijelaskan.
            </p>

            <p className="text-white">
              The girl who won the competition is my sister.
            </p>

            <p className="text-white">
              The movie which you recommended was great.
            </p>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
          <h2 className="text-2xl font-semibold text-white">Kesimpulan</h2>

          <p className="mt-4 text-white/70 leading-relaxed">
            Relative Clause digunakan untuk membuat kalimat lebih detail dan
            jelas dengan menambahkan informasi tentang noun. Dengan memahami
            jenis dan penggunaannya, kamu bisa membuat kalimat bahasa Inggris
            lebih natural dan kompleks.
          </p>
        </motion.section>

        {/* TESTS */}
        <motion.section className="mt-10 space-y-10">
          <TestPanel
            question="1. Pilih kalimat Relative Clause yang paling tepat secara grammar:"
            options={[
              {
                value: "a",
                label: "A. The man which came here is my uncle",
                isCorrect: false,
                feedback: "Untuk manusia gunakan 'who', bukan 'which'.",
              },
              {
                value: "b",
                label: "B. The man who come here is my uncle",
                isCorrect: false,
                feedback: "Verb harus disesuaikan (came).",
              },
              {
                value: "c",
                label: "C. The man who came here is my uncle",
                isCorrect: true,
                feedback: "Benar, struktur dan grammar tepat.",
              },
              {
                value: "d",
                label: "D. The man that came here, is my uncle",
                isCorrect: false,
                feedback: "Tidak perlu koma dalam defining clause.",
              },
            ]}
          />

          <TestPanel
            question="2. Pilih kalimat yang benar dan paling natural:"
            options={[
              {
                value: "a",
                label: "A. The book who I read is interesting",
                isCorrect: false,
                feedback: "Untuk benda gunakan 'which/that'.",
              },
              {
                value: "b",
                label: "B. The book which I read it is interesting",
                isCorrect: false,
                feedback: "Tidak perlu 'it' dalam relative clause.",
              },
              {
                value: "c",
                label: "C. The book that I read is interesting",
                isCorrect: true,
                feedback: "Benar dan natural.",
              },
              {
                value: "d",
                label: "D. The book I read which is interesting",
                isCorrect: false,
                feedback: "Struktur tidak tepat.",
              },
            ]}
          />

          <TestPanel
            question="3. Pilih kalimat paling kompleks dan benar:"
            options={[
              {
                value: "a",
                label: "A. The girl whose I met yesterday is beautiful",
                isCorrect: false,
                feedback: "Whose tidak digunakan seperti itu.",
              },
              {
                value: "b",
                label: "B. The girl who I met her yesterday is beautiful",
                isCorrect: false,
                feedback: "Tidak boleh double object (her).",
              },
              {
                value: "c",
                label: "C. The girl whom I met yesterday is beautiful",
                isCorrect: true,
                feedback: "Benar, bentuk formal dan tepat.",
              },
              {
                value: "d",
                label: "D. The girl which I met yesterday is beautiful",
                isCorrect: false,
                feedback: "Untuk orang gunakan who/whom.",
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
              <span className="text-white font-semibold">relative clause</span>{" "}
              untuk menambahkan informasi tentang noun agar kalimat lebih jelas
              dan spesifik.
            </p>

            <p>
              Pastikan kamu memilih{" "}
              <span className="text-white font-semibold">
                relative pronoun yang tepat
              </span>{" "}
              seperti who (orang), which (benda), that (umum), whose
              (kepemilikan), dan where/when/why (tempat/waktu/alasan).
            </p>

            <p>
              Dalam{" "}
              <span className="text-white font-semibold">defining clause</span>,
              tidak perlu koma karena informasi bersifat penting untuk makna
              kalimat.
            </p>

            <p>
              Dalam{" "}
              <span className="text-white font-semibold">
                non-defining clause
              </span>
              , selalu gunakan koma karena informasi hanya tambahan dan tidak
              mengubah makna utama.
            </p>

            <p>
              Hati-hati dengan{" "}
              <span className="text-white font-semibold">contact clause</span>,
              di mana relative pronoun seperti "that/which/who" bisa dihilangkan
              jika berfungsi sebagai objek.
            </p>

            <p>
              Gunakan <span className="text-white font-semibold">whose</span>{" "}
              untuk menunjukkan kepemilikan, bukan "who" atau "which".
            </p>

            <p>
              Jangan menambahkan subject ganda dalam relative clause, misalnya
              "the book which I read it" (salah) → cukup "the book which I
              read".
            </p>

            <p>
              Perhatikan bahwa relative clause selalu diletakkan{" "}
              <span className="text-white font-semibold">
                langsung setelah noun yang dijelaskan
              </span>{" "}
              agar tidak membingungkan makna kalimat.
            </p>

            <p>
              Untuk meningkatkan kemampuan, biasakan membedakan antara defining
              dan non-defining clause karena ini sering muncul dalam soal
              grammar tingkat lanjut.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/intermediate/complex-sentences")}
            className="rounded-full border border-white/30 px-8 py-3 text-white hover:bg-white/10"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/intermediate/gerunds-infinitives")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357]"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
