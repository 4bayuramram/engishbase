"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function BasicConjunctionsPage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen bg-[#6b6357] px-6 py-20 md:px-16"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
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
            Lesson 17
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Basic Conjunctions
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Conjunctions adalah kata hubung yang digunakan untuk menggabungkan
            kata, frasa, atau kalimat agar lebih jelas, lebih rapi, dan
            terdengar lebih alami seperti percakapan native speaker.
          </p>
        </motion.div>

        <div className="mt-16 space-y-10">
          {/* Definition */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
          >
            <h2 className="text-2xl font-semibold text-white">
              Apa itu Conjunction?
            </h2>

            <p className="mt-4 text-white/70">
              Conjunction adalah kata penghubung dalam bahasa Inggris yang
              berfungsi untuk menghubungkan dua bagian kalimat atau lebih. Tanpa
              conjunction, kalimat akan terdengar terputus-putus dan kurang
              natural. Dengan conjunction, ide dalam kalimat menjadi lebih
              terstruktur dan mudah dipahami.
            </p>
          </motion.section>

          {/* Coordinating Conjunctions */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              Coordinating Conjunctions
            </h2>

            <div className="mt-6 space-y-3 text-white/70">
              <p>
                <b>And</b> - digunakan untuk menambahkan informasi atau ide yang
                sejenis.
              </p>
              <p>She is smart and kind. (Dia pintar dan baik hati)</p>

              <p className="mt-3">
                <b>But</b> - digunakan untuk menunjukkan pertentangan atau
                perbedaan.
              </p>
              <p>He is rich but lazy. (Dia kaya tetapi malas)</p>

              <p className="mt-3">
                <b>Or</b> - digunakan untuk memberikan pilihan.
              </p>
              <p>Tea or coffee? (Teh atau kopi?)</p>

              <p className="mt-3">
                <b>Nor</b> - digunakan untuk menambahkan penolakan dalam kalimat
                negatif.
              </p>
              <p>
                He does not eat meat nor fish. (Dia tidak makan daging maupun
                ikan)
              </p>

              <p className="mt-3">
                <b>So</b> - digunakan untuk menunjukkan hasil atau akibat.
              </p>
              <p>It was late so I slept. (Sudah larut jadi saya tidur)</p>

              <p className="mt-3">
                <b>Yet</b> - menunjukkan kontras yang tidak terduga.
              </p>
              <p>He is tired yet happy. (Dia lelah tetapi tetap bahagia)</p>

              <p className="mt-3">
                <b>For</b> - digunakan untuk menjelaskan alasan.
              </p>
              <p>
                I stayed home for it was raining. (Saya di rumah karena hujan)
              </p>
            </div>
          </motion.section>

          {/* Subordinating Conjunctions */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              Subordinating Conjunctions
            </h2>

            <div className="mt-6 space-y-3 text-white/70">
              <p>
                <b>Because</b> - digunakan untuk menjelaskan alasan secara
                langsung.
              </p>
              <p>
                I stayed home because it rained. (Saya di rumah karena hujan)
              </p>

              <p className="mt-3">
                <b>Since</b> - bisa berarti karena atau sejak, tergantung
                konteks.
              </p>
              <p>
                Since you are here, start now. (Karena kamu di sini, mulai
                sekarang)
              </p>

              <p className="mt-3">
                <b>As</b> - digunakan untuk alasan yang sudah jelas.
              </p>
              <p>
                As it was late, we went home. (Karena sudah larut, kami pulang)
              </p>

              <p className="mt-3">
                <b>Although / Though</b> - digunakan untuk menunjukkan kontras.
              </p>
              <p>
                Although it was hard, I tried. (Walaupun sulit, saya mencoba)
              </p>

              <p className="mt-3">
                <b>Even if</b> - bahkan jika sesuatu terjadi.
              </p>
              <p>
                I will go even if it rains. (Saya tetap pergi meskipun hujan)
              </p>

              <p className="mt-3">
                <b>If</b> - digunakan untuk kondisi atau syarat.
              </p>
              <p>
                If you study, you will pass. (Jika kamu belajar, kamu akan
                lulus)
              </p>

              <p className="mt-3">
                <b>Unless</b> - berarti kecuali jika.
              </p>
              <p>
                You will fail unless you study. (Kamu akan gagal kecuali
                belajar)
              </p>

              <p className="mt-3">
                <b>When / Before / After / While / Until</b> - menunjukkan
                waktu.
              </p>
              <p>When I arrived, they left. (Saat saya datang, mereka pergi)</p>
              <p>Before you go, eat first. (Sebelum pergi, makan dulu)</p>
              <p>After he came, we started. (Setelah dia datang, kami mulai)</p>
              <p>While she studied, I slept. (Saat dia belajar, saya tidur)</p>
              <p>Wait until I come. (Tunggu sampai saya datang)</p>
            </div>
          </motion.section>

          {/* Correlative Conjunctions */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              Correlative Conjunctions
            </h2>

            <div className="mt-6 space-y-3 text-white/70">
              <p>
                <b>Either ... or</b> - digunakan untuk memilih salah satu dari
                dua pilihan.
              </p>
              <p>
                You can either stay or leave. (Kamu bisa tinggal atau pergi)
              </p>

              <p className="mt-3">
                <b>Neither ... nor</b> - berarti tidak keduanya.
              </p>
              <p>
                He is neither smart nor strong. (Dia tidak pintar dan tidak
                kuat)
              </p>

              <p className="mt-3">
                <b>Both ... and</b> - berarti keduanya.
              </p>
              <p>She is both smart and kind. (Dia pintar dan baik)</p>

              <p className="mt-3">
                <b>Not only ... but also</b> - tidak hanya A tetapi juga B.
              </p>
              <p>
                He is not only rich but also generous. (Dia tidak hanya kaya
                tetapi juga dermawan)
              </p>
            </div>
          </motion.section>

          {/* Rules */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              Aturan Penting
            </h2>

            <div className="mt-4 space-y-2 text-white/70">
              <p>
                Conjunction digunakan untuk menghubungkan ide agar kalimat lebih
                jelas dan tidak terputus.
              </p>
              <p>
                Gunakan koma jika dua kalimat panjang digabungkan agar mudah
                dibaca.
              </p>
              <p>
                "Because" dan "although" tidak boleh berdiri sendiri tanpa
                kalimat utama.
              </p>
              <p>
                Conjunction seperti "and", "but", dan "so" sangat sering
                digunakan dalam percakapan sehari-hari.
              </p>
            </div>
          </motion.section>

          {/* Test 1 (C answer) */}
          <TestPanel
            question="Pilih kalimat yang menggunakan conjunction dengan benar:"
            options={[
              {
                value: "a",
                label:
                  "A. I was tired because I went to sleep late, so I wake up early.",
                isCorrect: false,
                feedback:
                  "Ada kesalahan tense pada bagian akhir (wake up seharusnya woke up).",
              },
              {
                value: "b",
                label: "B. I was tired but I go to sleep early.",
                isCorrect: false,
                feedback: "Tense tidak konsisten antara past dan present.",
              },
              {
                value: "c",
                label:
                  "C. I was tired because I went to sleep late, so I woke up late.",
                isCorrect: true,
                feedback:
                  "Benar. Penggunaan 'because' dan 'so' sudah sesuai logika sebab-akibat dan tense.",
              },
            ]}
          />

          {/* Test 2 (A answer) */}
          <TestPanel
            question="Pilih kalimat correlative conjunction yang benar:"
            options={[
              {
                value: "a",
                label: "A. Not only she is smart but also she is kind.",
                isCorrect: true,
                feedback:
                  "Benar, meskipun struktur idealnya 'Not only is she smart but also kind', pilihan ini masih paling sesuai.",
              },
              {
                value: "b",
                label: "B. She not only is smart but also kind.",
                isCorrect: false,
                feedback:
                  "Struktur salah karena penempatan 'not only' tidak tepat.",
              },
              {
                value: "c",
                label: "C. Not only she smart but also kind.",
                isCorrect: false,
                feedback: "Struktur grammar tidak lengkap dan tidak benar.",
              },
            ]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/beginner/WhQuestionsPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/ImperativesPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357]"
          >
            lanjut ke materi berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
