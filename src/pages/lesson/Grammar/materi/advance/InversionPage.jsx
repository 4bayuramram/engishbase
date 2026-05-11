// InversionPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function InversionPage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen bg-[#512621] px-6 py-20 md:px-16"
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
            Lesson 2 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Inversion
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Inversion adalah struktur grammar dalam bahasa Inggris di mana
            posisi subject dan auxiliary verb dibalik untuk memberikan
            penekanan, formalitas, atau membentuk struktur khusus tertentu.
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
            Pengertian Inversion
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>Dalam kalimat normal bahasa Inggris, struktur umumnya adalah:</p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Subject + Verb
            </div>

            <p>
              Namun pada{" "}
              <span className="text-white font-semibold">inversion</span>,
              posisi auxiliary verb dan subject dibalik menjadi:
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Auxiliary Verb + Subject + Main Verb
            </div>

            <p>
              Struktur ini sering digunakan dalam writing formal, akademik,
              sastra, pidato, dan ujian grammar tingkat lanjut.
            </p>
          </div>
        </motion.section>

        {/* Negative Adverbials */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            1. Inversion dengan Negative Adverbials
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Inversi paling umum terjadi ketika kalimat diawali dengan negative
              atau restrictive adverbials untuk memberikan penekanan.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Negative Adverb + Auxiliary + Subject + Verb
            </div>

            <p className="text-white">
              Never have I seen such a beautiful place.
            </p>

            <p className="text-white">Rarely do they arrive on time.</p>

            <p className="text-white">
              Not only did she win the competition, but she also broke the
              record.
            </p>

            <div className="rounded-2xl bg-black/20 p-5">
              <p className="text-white font-semibold">
                Kata yang sering digunakan:
              </p>

              <p className="mt-2">
                Never, Rarely, Seldom, Hardly, Barely, Scarcely, Not only,
                Little, No sooner, Nowhere, Not until.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Conditional */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            2. Inversion pada Conditional Sentences
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Pada conditional inversion, kata{" "}
              <span className="text-white">if</span> dihilangkan lalu auxiliary
              dipindahkan ke depan subject.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Should/Were/Had + Subject + Verb
            </div>

            <div className="space-y-3">
              <p className="text-white">
                Should you need assistance, call me immediately.
              </p>

              <p className="text-white">
                Were I you, I would accept the offer.
              </p>

              <p className="text-white">
                Had they informed us earlier, we could have prepared better.
              </p>
            </div>

            <p>
              Struktur ini sangat formal dan sering ditemukan dalam academic
              writing maupun English proficiency tests.
            </p>
          </div>
        </motion.section>

        {/* Hardly No Sooner */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            3. Inversion dengan Hardly / No Sooner
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk menunjukkan bahwa satu kejadian terjadi segera
              setelah kejadian lainnya.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Hardly/Scarcely/Barely + Had + Subject + V3 + When...
            </div>

            <p className="text-white">
              Hardly had the meeting started when the electricity went out.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              No sooner + Had + Subject + V3 + Than...
            </div>

            <p className="text-white">
              No sooner had she entered the room than everyone became silent.
            </p>

            <p>
              Perhatikan bahwa <span className="text-white">hardly</span>{" "}
              dipasangkan dengan <span className="text-white">when</span>,
              sedangkan <span className="text-white">no sooner</span>{" "}
              dipasangkan dengan <span className="text-white">than</span>.
            </p>
          </div>
        </motion.section>

        {/* Place Expressions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            4. Inversion dengan Place Expressions
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Inversi juga dapat terjadi setelah keterangan tempat atau arah di
              awal kalimat.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Place Expression + Verb + Subject
            </div>

            <p className="text-white">Here comes the train.</p>

            <p className="text-white">
              Under the bridge stood a mysterious figure.
            </p>

            <p className="text-white">Into the room walked the principal.</p>

            <p>
              Jenis inversi ini sering digunakan dalam descriptive writing dan
              literary English.
            </p>
          </div>
        </motion.section>

        {/* So Such */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            5. Inversion dengan So dan Such
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk memberikan penekanan kuat pada adjective atau noun
              phrase.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              So + Adjective + Be + Subject + That...
            </div>

            <p className="text-white">
              So intense was the pressure that many employees resigned.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Such + Be + Subject + That...
            </div>

            <p className="text-white">
              Such was his determination that nobody could stop him.
            </p>

            <p>
              Struktur ini umum digunakan dalam writing formal dan narrative
              style.
            </p>
          </div>
        </motion.section>

        {/* Questions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            6. Inversion pada Questions
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Bentuk inversi paling dasar ditemukan pada kalimat tanya bahasa
              Inggris.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Auxiliary Verb + Subject + Main Verb
            </div>

            <p className="text-white">Are you ready?</p>

            <p className="text-white">Have they completed the assignment?</p>

            <p>
              Struktur ini menjadi dasar bagi bentuk inversion lain yang lebih
              kompleks.
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
              Inversion sering muncul dalam IELTS, TOEFL, Cambridge English,
              academic essays, dan formal speeches.
            </p>

            <p>
              Tidak semua kalimat yang diawali adverb membutuhkan inversion.
              Biasanya inversi hanya terjadi pada negative/restrictive
              expressions tertentu.
            </p>

            <p>
              Kesalahan paling umum adalah lupa menambahkan auxiliary verb atau
              menggunakan urutan subject dan verb yang salah.
            </p>

            <p className="text-white">
              Semakin formal sebuah tulisan, semakin besar kemungkinan inversion
              digunakan.
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
            question="1. Pilih kalimat inversion yang paling tepat dan gramatikal:"
            options={[
              {
                value: "a",
                label:
                  "A. Rarely they have encountered such resistance during negotiations.",
                isCorrect: false,
                feedback:
                  "Salah karena tidak terjadi inversion setelah 'Rarely'.",
              },
              {
                value: "b",
                label:
                  "B. Rarely have the researchers encountered such resistance during negotiations.",
                isCorrect: true,
                feedback:
                  "Benar, auxiliary verb muncul sebelum subject setelah negative adverbial.",
              },
              {
                value: "c",
                label:
                  "C. Rarely the researchers have encountered such resistance during negotiations.",
                isCorrect: false,
                feedback: "Urutan auxiliary dan subject masih salah.",
              },
              {
                value: "d",
                label:
                  "D. Rarely encountered the researchers such resistance during negotiations.",
                isCorrect: false,
                feedback: "Tidak menggunakan auxiliary yang diperlukan.",
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
            question="2. Pilih conditional inversion yang paling tepat:"
            options={[
              {
                value: "a",
                label:
                  "A. Had she informed us earlier, we will change the strategy immediately.",
                isCorrect: false,
                feedback:
                  "Main clause tidak konsisten karena menggunakan future tense.",
              },
              {
                value: "b",
                label:
                  "B. Had she informed us earlier, we could have prevented the crisis.",
                isCorrect: true,
                feedback:
                  "Benar, inversion type 3 dengan struktur yang sepenuhnya konsisten.",
              },
              {
                value: "c",
                label:
                  "C. Were she informed us earlier, we could have prevented the crisis.",
                isCorrect: false,
                feedback:
                  "'Were' tidak dapat digunakan dengan struktur tersebut.",
              },
              {
                value: "d",
                label:
                  "D. Should she informed us earlier, we could prevented the crisis.",
                isCorrect: false,
                feedback: "Grammar pada kedua clause tidak tepat.",
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
            question="3. Pilih kalimat inversion yang paling formal dan benar:"
            options={[
              {
                value: "a",
                label:
                  "A. No sooner had the CEO announced the merger than the company's stock price surged dramatically.",
                isCorrect: true,
                feedback:
                  "Benar, struktur inversion dengan 'No sooner... than...' digunakan secara tepat.",
              },
              {
                value: "b",
                label:
                  "B. No sooner the CEO had announced the merger than the company's stock price surged dramatically.",
                isCorrect: false,
                feedback: "Tidak terjadi inversion setelah 'No sooner'.",
              },
              {
                value: "c",
                label:
                  "C. No sooner had the CEO announced the merger when the company's stock price surged dramatically.",
                isCorrect: false,
                feedback:
                  "'No sooner' harus dipasangkan dengan 'than', bukan 'when'.",
              },
              {
                value: "d",
                label:
                  "D. No sooner did the CEO announced the merger than the company's stock price surged dramatically.",
                isCorrect: false,
                feedback: "Setelah 'did', verb harus bentuk dasar, bukan V3.",
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
          <h2 className="text-2xl font-semibold text-white">Tips</h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Jika kalimat diawali negative adverbials seperti{" "}
              <span className="text-white">never</span>,{" "}
              <span className="text-white">rarely</span>, atau{" "}
              <span className="text-white">seldom</span>, kemungkinan besar
              membutuhkan inversion.
            </p>

            <p>
              Perhatikan posisi{" "}
              <span className="text-white">auxiliary verb</span>; auxiliary
              harus muncul sebelum subject.
            </p>

            <p>
              Pada conditional inversion, hilangkan{" "}
              <span className="text-white">if</span> lalu pindahkan{" "}
              <span className="text-white">had</span>,{" "}
              <span className="text-white">were</span>, atau{" "}
              <span className="text-white">should</span> ke depan.
            </p>

            <p>
              Ingat pasangan:
              <span className="text-white"> Hardly → When</span> dan{" "}
              <span className="text-white">No sooner → Than</span>.
            </p>

            <p>
              Inversion lebih sering muncul pada formal English dibanding
              percakapan santai sehari-hari.
            </p>

            <p>
              Banyak soal advanced grammar menguji inversion secara tidak
              langsung melalui pilihan tense dan auxiliary.
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
            onClick={() => navigate("/advance/mixed-conditionals")}
            className="rounded-full border border-white/20 bg-transparent px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            Kembali ke Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/advance/cleft-sentences")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
