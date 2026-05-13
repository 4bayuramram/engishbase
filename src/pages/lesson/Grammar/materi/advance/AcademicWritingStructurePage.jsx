// AcademicWritingStructurePage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function AcademicWritingStructurePage() {
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
            Lesson 8 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Academic Writing Structure
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Academic writing structure adalah pola organisasi tulisan formal
            yang digunakan dalam esai, jurnal, laporan penelitian, dan berbagai
            jenis tulisan akademik lainnya agar ide tersusun logis, objektif,
            dan mudah dipahami.
          </p>
        </motion.div>

        {/* Intro */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Pengertian Academic Writing Structure
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Dalam academic writing, ide tidak ditulis secara acak. Setiap
              bagian memiliki fungsi tertentu agar tulisan menjadi koheren,
              sistematis, dan akademis.
            </p>

            <p>Struktur academic writing umumnya terbagi menjadi tiga level:</p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              <p>1. Struktur Makro → organisasi keseluruhan teks</p>
              <p>2. Struktur Paragraf → organisasi isi paragraf</p>
              <p>3. Struktur Mikro → grammar dan sentence structure</p>
            </div>

            <p>
              Ketiga struktur ini saling mendukung agar tulisan memiliki alur
              argumentasi yang kuat dan mudah diikuti pembaca.
            </p>
          </div>
        </motion.section>

        {/* Macro Structure */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            1. Struktur Makro (Overall Essay Structure)
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Struktur makro adalah kerangka utama dalam penulisan akademik.
              Hampir semua academic essay menggunakan pola:
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              Introduction → Body → Conclusion
            </div>

            <div className="space-y-3">
              <p>
                <span className="text-white font-semibold">Introduction</span>{" "}
                berisi background topic, research problem, dan thesis statement.
              </p>

              <p>
                <span className="text-white font-semibold">Body</span> berisi
                argumen, teori, evidence, data, dan analisis.
              </p>

              <p>
                <span className="text-white font-semibold">Conclusion</span>{" "}
                merangkum seluruh pembahasan dan menegaskan kembali thesis.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <p className="text-white">Contoh thesis statement:</p>

              <p className="mt-2 text-white">
                "Online learning has significantly transformed modern education
                by increasing accessibility, flexibility, and independent
                learning opportunities."
              </p>
            </div>

            <p>
              Thesis statement menjadi pusat dari seluruh pembahasan dalam body
              paragraphs.
            </p>
          </div>
        </motion.section>

        {/* PEEL */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            2. Struktur Paragraf (PEEL Method)
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Dalam academic writing, setiap paragraf harus fokus pada satu ide
              utama dan berkembang secara logis.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              <p>P → Point</p>
              <p>E → Evidence</p>
              <p>E → Explanation</p>
              <p>L → Link</p>
            </div>

            <div className="space-y-3">
              <p>
                <span className="text-white font-semibold">Point</span> =
                kalimat utama paragraf.
              </p>

              <p>
                <span className="text-white font-semibold">Evidence</span> =
                data, fakta, atau kutipan.
              </p>

              <p>
                <span className="text-white font-semibold">Explanation</span> =
                analisis bagaimana evidence mendukung argumen.
              </p>

              <p>
                <span className="text-white font-semibold">Link</span> =
                transisi menuju paragraf berikutnya.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <p className="text-white font-semibold">Contoh Singkat PEEL:</p>

              <p className="mt-3 text-white">
                Point: Social media affects students' concentration.
              </p>

              <p className="text-white">
                Evidence: A 2023 study found that students who frequently check
                social media have lower academic performance.
              </p>

              <p className="text-white">
                Explanation: Constant notifications interrupt focus and reduce
                study efficiency.
              </p>

              <p className="text-white">
                Link: Therefore, managing screen time is important for academic
                success.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Grammar */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            3. Struktur Mikro (Grammar & Formality)
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Academic writing menekankan formalitas, objektivitas, dan
              kejelasan grammar.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl bg-black/20 p-5">
                <p className="text-white font-semibold">Complete Sentences</p>

                <p className="mt-2">
                  Setiap kalimat harus memiliki subject dan verb yang lengkap.
                </p>

                <p className="mt-2 text-white">
                  Incorrect: Because the experiment failed.
                </p>

                <p className="text-white">
                  Correct: The experiment failed because the temperature was
                  unstable.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 p-5">
                <p className="text-white font-semibold">Appropriate Tenses</p>

                <p className="mt-2">
                  Simple Present digunakan untuk fakta umum.
                </p>

                <p className="mt-2 text-white">Water boils at 100°C.</p>

                <p className="mt-3">
                  Simple Past digunakan untuk penelitian terdahulu.
                </p>

                <p className="mt-2 text-white">
                  The researchers conducted the experiment in 2022.
                </p>
              </div>

              <div className="rounded-2xl bg-black/20 p-5">
                <p className="text-white font-semibold">
                  Formal Academic Style
                </p>

                <p className="mt-2">
                  Hindari contractions dan bahasa informal.
                </p>

                <p className="mt-2 text-white">
                  Informal: Students don't understand the theory.
                </p>

                <p className="text-white">
                  Formal: Students do not understand the theory.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Passive Voice */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            4. Passive Voice & Objectivity
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Passive voice sering digunakan untuk membuat tulisan lebih
              objektif dan fokus pada proses atau hasil.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              Object + Be + V3
            </div>

            <p className="text-white">
              The data were analyzed using statistical software.
            </p>

            <p className="text-white">
              The samples were collected from three different regions.
            </p>

            <p>
              Dalam academic writing modern, active voice juga masih digunakan,
              terutama jika ingin membuat kalimat lebih jelas dan langsung.
            </p>
          </div>
        </motion.section>

        {/* Cohesion */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            5. Cohesion & Academic Flow
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Academic writing membutuhkan hubungan yang jelas antar ide dan
              antar paragraf.
            </p>

            <div className="rounded-2xl bg-black/20 p-5">
              <p className="text-white font-semibold">
                Common Academic Transitions:
              </p>

              <p className="mt-2">
                Furthermore, Moreover, In contrast, Therefore, Consequently,
                Nevertheless, In addition, As a result.
              </p>
            </div>

            <p>
              Transitions membantu pembaca memahami alur logika dan hubungan
              antar argumen.
            </p>

            <p className="text-white">
              Weak cohesion membuat tulisan terasa melompat-lompat dan sulit
              dipahami.
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
            question="1. Pilih paragraf akademik yang paling sesuai dengan struktur PEEL:"
            options={[
              {
                value: "a",
                label:
                  "A. Social media is popular. Many students use Instagram every day. It is interesting and entertaining.",
                isCorrect: false,
                feedback:
                  "Paragraf tidak memiliki evidence dan explanation yang jelas.",
              },
              {
                value: "b",
                label:
                  "B. Many students experience stress. Exams are difficult. Teachers should understand students better.",
                isCorrect: false,
                feedback:
                  "Argumen masih terlalu umum dan tidak memiliki struktur PEEL lengkap.",
              },
              {
                value: "c",
                label:
                  "C. Online learning is flexible. Students can study anywhere. Technology is important nowadays.",
                isCorrect: false,
                feedback:
                  "Paragraf belum menunjukkan analisis akademik yang kuat.",
              },
              {
                value: "d",
                label:
                  "D. Online learning improves educational accessibility. A recent study found that rural students gained greater access to higher education through online platforms. This demonstrates that digital learning reduces geographical barriers in education. Consequently, universities continue expanding virtual learning systems.",
                isCorrect: true,
                feedback:
                  "Benar, paragraf mengikuti struktur PEEL secara lengkap dan koheren.",
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
            question="2. Pilih kalimat yang paling sesuai untuk academic writing:"
            options={[
              {
                value: "a",
                label:
                  "A. I think this theory is kinda confusing for students.",
                isCorrect: false,
                feedback:
                  "Terlalu informal dan menggunakan first-person opinion.",
              },
              {
                value: "b",
                label:
                  "B. You can clearly see that students don't like the new policy.",
                isCorrect: false,
                feedback:
                  "Menggunakan second-person point of view dan contraction.",
              },
              {
                value: "c",
                label: "C. The experiment was cool and gave awesome results.",
                isCorrect: false,
                feedback: "Kosakata terlalu informal untuk konteks akademik.",
              },
              {
                value: "d",
                label:
                  "D. The findings indicate that the new policy significantly reduced student absenteeism.",
                isCorrect: true,
                feedback:
                  "Benar, formal, objektif, dan sesuai standar academic writing.",
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
            question="3. Pilih struktur conclusion yang paling akademis dan efektif:"
            options={[
              {
                value: "a",
                label:
                  "A. That's why this topic is important and people should care more about it.",
                isCorrect: false,
                feedback: "Terlalu informal dan kurang akademis.",
              },
              {
                value: "b",
                label:
                  "B. In conclusion, there are many things about this topic that can still be discussed later.",
                isCorrect: false,
                feedback: "Terlalu umum dan tidak merangkum argumen utama.",
              },
              {
                value: "c",
                label:
                  "C. This essay talked about education, technology, and students in modern society.",
                isCorrect: false,
                feedback:
                  "Kesimpulan terlalu deskriptif dan tidak menunjukkan analisis.",
              },
              {
                value: "d",
                label:
                  "D. In conclusion, the evidence demonstrates that technology has fundamentally transformed modern education by increasing accessibility, flexibility, and independent learning opportunities.",
                isCorrect: true,
                feedback:
                  "Benar, kesimpulan merangkum argumen utama secara formal dan akademis.",
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
          <h2 className="text-2xl font-semibold text-white">
            Tips Penting Academic Writing
          </h2>

          <div className="mt-4 space-y-3 text-white/70 leading-relaxed">
            <p>
              Selalu pastikan setiap body paragraph memiliki satu ide utama yang
              jelas.
            </p>

            <p>
              Gunakan struktur PEEL agar argumen lebih logis dan mudah diikuti.
            </p>

            <p>
              Hindari bahasa informal seperti slang, contractions, atau ekspresi
              emosional berlebihan.
            </p>

            <p>
              Gunakan transition signals seperti{" "}
              <span className="text-white">
                furthermore, however, therefore
              </span>{" "}
              untuk menjaga cohesion.
            </p>

            <p>Pastikan thesis statement konsisten dengan seluruh isi essay.</p>

            <p>
              Periksa grammar secara detail terutama subject-verb agreement,
              tense consistency, dan sentence completeness.
            </p>

            <p>
              Jangan hanya memberikan fakta; selalu tambahkan explanation dan
              analysis setelah evidence.
            </p>

            <p>
              Academic writing yang baik bukan hanya formal, tetapi juga jelas,
              logis, dan terstruktur dengan baik.
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
            onClick={() => navigate("/advance/discourse-markers")}
            className="rounded-full border border-white/20 bg-transparent px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            Kembali ke Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/advance/formal-informal")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#4b3a2f] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}