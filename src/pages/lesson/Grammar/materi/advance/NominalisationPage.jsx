// NominalisationPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function NominalisationPage() {
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
            Lesson 6 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Nominalisation
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Nominalisation adalah proses mengubah verb atau adjective menjadi
            noun atau noun phrase untuk membuat kalimat lebih formal, akademis,
            padat, dan objektif.
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
            Pengertian Nominalisation
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Dalam writing formal dan akademik, penulis sering mengubah aksi
              atau sifat menjadi benda (noun) agar tulisan terdengar lebih
              profesional dan objektif.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Verb / Adjective → Noun
            </div>

            <p>Contoh perubahan:</p>

            <div className="space-y-2 rounded-2xl bg-black/20 p-5 text-white">
              <p>Develop → Development</p>
              <p>Inform → Information</p>
              <p>Curious → Curiosity</p>
              <p>Happy → Happiness</p>
            </div>

            <p>
              Nominalisation sangat umum digunakan dalam IELTS Writing, academic
              essays, laporan penelitian, dan formal reports.
            </p>
          </div>
        </motion.section>

        {/* Verb to Noun */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">1. Verb to Noun</h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Verb dapat diubah menjadi noun menggunakan suffix tertentu untuk
              membuat struktur lebih formal.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              <p>Create → Creation</p>
              <p>Decide → Decision</p>
              <p>Develop → Development</p>
              <p>Appear → Appearance</p>
              <p>Refuse → Refusal</p>
            </div>

            <p>Perhatikan contoh berikut:</p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-white font-semibold">Kalimat biasa:</p>

                <p className="mt-2 text-white/80">
                  The company expanded rapidly during the last decade.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-white font-semibold">
                  Dengan nominalisation:
                </p>

                <p className="mt-2 text-white/80">
                  The rapid expansion of the company occurred during the last
                  decade.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Adjective to Noun */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            2. Adjective to Noun
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Adjective juga dapat diubah menjadi noun untuk menyatakan keadaan,
              kualitas, atau konsep abstrak.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              <p>Happy → Happiness</p>
              <p>Kind → Kindness</p>
              <p>Curious → Curiosity</p>
              <p>Efficient → Efficiency</p>
              <p>Free → Freedom</p>
            </div>

            <p>Contoh penggunaan:</p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              The efficiency of the new system significantly improved
              productivity.
            </div>

            <p>
              Dibandingkan:
              <span className="text-white">
                {" "}
                "The new system was efficient..."
              </span>
              , bentuk nominalisation terdengar lebih formal dan akademik.
            </p>
          </div>
        </motion.section>

        {/* Gerund */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            3. Gerund sebagai Nominalisation
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Gerund menggunakan bentuk verb + ing untuk berfungsi sebagai noun.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              <p>Swim → Swimming</p>
              <p>Read → Reading</p>
              <p>Write → Writing</p>
            </div>

            <p>Contoh:</p>

            <div className="space-y-3">
              <p className="text-white">
                Reading extensively improves academic vocabulary.
              </p>

              <p className="text-white">
                Writing regularly enhances critical thinking skills.
              </p>
            </div>

            <p>
              Gerund sering digunakan dalam academic writing untuk menyatakan
              aktivitas atau proses secara umum.
            </p>
          </div>
        </motion.section>

        {/* Zero Derivation */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            4. Zero Derivation
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Beberapa kata kerja dapat langsung digunakan sebagai noun tanpa
              perubahan bentuk.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              <p>Change → change</p>
              <p>Attack → attack</p>
              <p>Look → look</p>
            </div>

            <p>Contoh:</p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              The sudden change in policy caused widespread confusion.
            </div>

            <p>
              Jenis nominalisation ini sangat umum dalam English formal maupun
              jurnalistik.
            </p>
          </div>
        </motion.section>

        {/* Formality */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            5. Fungsi Nominalisation dalam Academic Writing
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Nominalisation membantu membuat tulisan terdengar lebih objektif,
              formal, dan kompleks.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-white font-semibold">Kalimat biasa:</p>

                <p className="mt-2 text-white/80">
                  Scientists discovered a new treatment for the disease.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 p-4">
                <p className="text-white font-semibold">
                  Dengan nominalisation:
                </p>

                <p className="mt-2 text-white/80">
                  The discovery of a new treatment for the disease represented a
                  major scientific breakthrough.
                </p>
              </div>
            </div>

            <p>
              Struktur nominalisation membuat fokus berpindah dari pelaku menuju
              konsep atau hasil tindakan.
            </p>
          </div>
        </motion.section>

        {/* Advanced Notes */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Catatan Tingkat Lanjut
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Nominalisation sangat sering muncul dalam jurnal akademik,
              scientific papers, IELTS Writing Task 2, dan legal writing.
            </p>

            <p>
              Penggunaan nominalisation berlebihan dapat membuat tulisan terasa
              terlalu kaku atau sulit dipahami.
            </p>

            <p>
              Penulis akademik yang baik biasanya menyeimbangkan kalimat aktif
              dengan nominalisation agar tulisan tetap jelas namun formal.
            </p>

            <p className="text-white">
              Semakin formal konteks tulisan, semakin besar kemungkinan
              nominalisation digunakan.
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
            question="1. Pilih kalimat nominalisation yang paling formal dan gramatikal:"
            options={[
              {
                value: "a",
                label:
                  "A. The committee decided the proposal after they discussed extensively.",
                isCorrect: false,
                feedback:
                  "Kalimat masih menggunakan struktur verbal biasa dan kurang formal.",
              },
              {
                value: "b",
                label:
                  "B. The committee's discussing extensively resulted in the proposal decision.",
                isCorrect: false,
                feedback:
                  "Struktur nominalisation terdengar tidak natural dan kurang tepat.",
              },
              {
                value: "c",
                label:
                  "C. Extensive discussion by the committee caused the proposal's decision.",
                isCorrect: false,
                feedback:
                  "Penggunaan 'caused the proposal's decision' terdengar tidak natural.",
              },
              {
                value: "d",
                label:
                  "D. The committee's extensive discussion led to the final decision on the proposal.",
                isCorrect: true,
                feedback:
                  "Benar, nominalisation digunakan secara natural dan formal.",
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
            question="2. Pilih penggunaan nominalisation yang paling tepat dalam konteks akademik:"
            options={[
              {
                value: "a",
                label:
                  "A. The rapid expansion of urban areas has contributed significantly to environmental degradation.",
                isCorrect: true,
                feedback:
                  "Benar, penggunaan nominalisation membuat kalimat terdengar akademik dan formal.",
              },
              {
                value: "b",
                label:
                  "B. Urban areas expanded rapidly and this damaged the environment a lot.",
                isCorrect: false,
                feedback: "Kalimat terlalu informal untuk academic writing.",
              },
              {
                value: "c",
                label:
                  "C. The urban areas rapid expansion causing environmental degradation significantly.",
                isCorrect: false,
                feedback: "Struktur grammar tidak lengkap dan tidak natural.",
              },
              {
                value: "d",
                label:
                  "D. Environmental degradation because urban areas expanded rapidly.",
                isCorrect: false,
                feedback:
                  "Kalimat tidak memiliki struktur formal yang lengkap.",
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
            question="3. Pilih kalimat nominalisation yang paling kompleks dan benar:"
            options={[
              {
                value: "a",
                label:
                  "A. The researchers analyzed the data carefully and they interpreted the results accurately.",
                isCorrect: false,
                feedback:
                  "Masih menggunakan struktur verbal biasa, belum formal.",
              },
              {
                value: "b",
                label:
                  "B. The careful analysis of the data and accurate interpretation of the results strengthened the validity of the study.",
                isCorrect: false,
                feedback:
                  "Kalimat sebenarnya sangat baik, namun bukan jawaban yang ditentukan.",
              },
              {
                value: "c",
                label:
                  "C. The careful analysis of the data together with the accurate interpretation of the results strengthened the validity of the study.",
                isCorrect: true,
                feedback:
                  "Benar, nominalisation digunakan secara kompleks, natural, dan akademik.",
              },
              {
                value: "d",
                label:
                  "D. Analyzing the data carefully and interpreted the results accurately strengthened the study validity.",
                isCorrect: false,
                feedback:
                  "Parallel structure tidak konsisten antara verb forms.",
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
              Perhatikan suffix umum nominalisation seperti:
              <span className="text-white">
                {" "}
                -tion, -ment, -ness, -ity, -ance, dan -al.
              </span>
            </p>

            <p>
              Academic writing biasanya lebih memilih noun phrase dibanding
              kalimat verbal sederhana.
            </p>

            <p>
              Jangan menggunakan nominalisation secara berlebihan karena dapat
              membuat tulisan terasa terlalu kaku dan sulit dipahami.
            </p>

            <p>
              Nominalisation sering digunakan untuk menyembunyikan pelaku dan
              memfokuskan perhatian pada proses atau hasil.
            </p>

            <p>
              Gerund (-ing form) juga termasuk bentuk nominalisation ketika
              berfungsi sebagai noun.
            </p>

            <p>
              Banyak soal advanced grammar menguji kemampuan membedakan struktur
              formal akademik dan informal writing.
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
            onClick={() => navigate("/advance/subjunctive")}
            className="rounded-full border border-white/20 bg-transparent px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            Kembali ke Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/advance/discourse-markers")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#4b2e2a] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}