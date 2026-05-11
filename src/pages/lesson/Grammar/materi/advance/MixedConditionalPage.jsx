// MixedConditionalPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function MixedConditionalPage() {
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
            Lesson 1 (Advanced)
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Mixed Conditional
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Mixed Conditional adalah bentuk conditional sentence yang
            menggabungkan dua waktu berbeda dalam satu kalimat untuk menunjukkan
            hubungan antara situasi masa lalu dan dampaknya pada masa kini, atau
            sebaliknya.
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
            Pengertian Mixed Conditional
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              <span className="text-white font-semibold">
                Mixed Conditional
              </span>{" "}
              digunakan untuk menghubungkan kondisi yang tidak nyata (unreal
              condition) dari waktu yang berbeda.
            </p>

            <p>
              Struktur ini biasanya dipakai untuk menunjukkan penyesalan,
              konsekuensi yang berbeda dari kenyataan, atau hubungan
              sebab-akibat antara masa lalu dan masa kini.
            </p>

            <p>
              Mixed conditional merupakan kombinasi dari conditional type 2 dan
              conditional type 3.
            </p>
          </div>
        </motion.section>

        {/* Type 1 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Tipe 1: Past Condition → Present Result
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk mengandaikan sesuatu yang tidak terjadi di masa
              lalu dan membayangkan dampaknya pada keadaan sekarang.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              If + Past Perfect, would/could/might + Verb 1
            </div>

            <p className="text-white">
              Example: If I had studied harder, I would have a better job now.
            </p>

            <p>
              Fakta: Saya tidak belajar keras dulu, sehingga sekarang pekerjaan
              saya tidak lebih baik.
            </p>
          </div>
        </motion.section>

        {/* Type 2 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10"
        >
          <h2 className="text-2xl font-semibold text-white">
            Tipe 2: Present Condition → Past Result
          </h2>

          <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
            <p>
              Digunakan untuk mengandaikan kondisi saat ini yang berbeda dan
              membayangkan akibat yang berbeda di masa lalu.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              If + Simple Past, would/could/might have + V3
            </div>

            <p className="text-white">
              Example: If I wasn't afraid of flying, I would have gone to London
              last week.
            </p>

            <p>
              Fakta: Sekarang saya takut terbang, sehingga minggu lalu saya
              tidak pergi ke London.
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
            Perbedaan Dua Jenis Mixed Conditional
          </h2>

          <div className="mt-6 space-y-6 text-white/70">
            <div className="rounded-2xl bg-black/20 p-5">
              <h3 className="text-xl font-semibold text-white">
                Past → Present
              </h3>
              <p className="mt-2">
                Fokus pada kesalahan atau situasi masa lalu yang mempengaruhi
                kondisi saat ini.
              </p>
              <p className="mt-2 text-white">
                If she had taken the opportunity, she would be successful now.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <h3 className="text-xl font-semibold text-white">
                Present → Past
              </h3>
              <p className="mt-2">
                Fokus pada kondisi saat ini yang menyebabkan hasil berbeda di
                masa lalu.
              </p>
              <p className="mt-2 text-white">
                If he were more confident, he would have applied for the job.
              </p>
            </div>
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
              Mixed conditional sering digunakan dalam writing akademik,
              argumentasi, dan speaking formal untuk menunjukkan hubungan sebab
              akibat yang kompleks.
            </p>

            <p>
              Modal verbs seperti <span className="text-white">could</span> dan{" "}
              <span className="text-white">might</span> dapat digunakan untuk
              menunjukkan kemungkinan atau kemampuan.
            </p>

            <p className="text-white">
              Kesalahan umum: mencampur struktur tense secara tidak konsisten
              antara if-clause dan result clause.
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
            question="1. Pilih kalimat Mixed Conditional yang paling tepat:"
            options={[
              {
                value: "a",
                label:
                  "A. If she studied harder, she would be accepted last year",
                isCorrect: false,
                feedback:
                  "Struktur tense tidak cocok antara present condition dan past result.",
              },
              {
                value: "b",
                label: "B. If she had studied harder, she would accepted now",
                isCorrect: false,
                feedback:
                  "Harus menggunakan 'would be accepted' atau struktur lain yang lengkap.",
              },
              {
                value: "c",
                label:
                  "C. If she had studied harder, she would have been accepted now",
                isCorrect: false,
                feedback:
                  "Result clause menggunakan bentuk yang tidak tepat untuk present result.",
              },
              {
                value: "d",
                label:
                  "D. If she had studied harder, she would be more successful now",
                isCorrect: true,
                feedback: "Benar, past condition mempengaruhi present result.",
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
            question="2. Pilih kalimat Mixed Conditional dengan struktur benar:"
            options={[
              {
                value: "a",
                label:
                  "A. If I were more organized, I would have finished the project yesterday",
                isCorrect: true,
                feedback:
                  "Benar, present condition mempengaruhi hasil di masa lalu.",
              },
              {
                value: "b",
                label:
                  "B. If I had been more organized, I would have finished now",
                isCorrect: false,
                feedback:
                  "Struktur result clause tidak sesuai dengan present result.",
              },
              {
                value: "c",
                label:
                  "C. If I am more organized, I would have finished yesterday",
                isCorrect: false,
                feedback:
                  "If-clause tidak menggunakan unreal conditional tense.",
              },
              {
                value: "d",
                label: "D. If I was more organized, I will finish yesterday",
                isCorrect: false,
                feedback:
                  "Penggunaan future tense tidak cocok dalam mixed conditional.",
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
            question="3. Pilih kalimat Mixed Conditional yang benar:"
            options={[
              {
                value: "a",
                label:
                  "A. If he had taken the offer, he would be working abroad now",
                isCorrect: true,
                feedback: "Benar, past decision mempengaruhi kondisi sekarang.",
              },
              {
                value: "b",
                label: "B. If he takes the offer, he would worked abroad now",
                isCorrect: false,
                feedback:
                  "Struktur conditional tidak sesuai dan grammar salah.",
              },
              {
                value: "c",
                label:
                  "C. If he were more ambitious, he would have accepted the offer",
                isCorrect: true,
                feedback:
                  "Benar, kondisi saat ini mempengaruhi keputusan di masa lalu.",
              },
              {
                value: "d",
                label: "D. If he had took the offer, he would work abroad now",
                isCorrect: false,
                feedback:
                  "Past perfect salah karena harus menggunakan V3 'taken'.",
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
              Kenali arah waktu dalam kalimat: apakah masa lalu mempengaruhi
              masa kini atau sebaliknya.
            </p>

            <p>
              Gunakan <span className="text-white">Past Perfect</span> untuk
              unreal past condition.
            </p>

            <p>
              Gunakan <span className="text-white">would + Verb 1</span> untuk
              present result.
            </p>

            <p>
              Gunakan <span className="text-white">would have + V3</span> untuk
              past result.
            </p>

            <p>
              Perhatikan konsistensi tense agar hubungan waktu dalam kalimat
              tetap logis dan natural.
            </p>

            <p>
              Latih mixed conditional dengan situasi penyesalan atau
              hypothetical situation agar lebih mudah dipahami.
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
            onClick={() => navigate("/advance/inversion")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
