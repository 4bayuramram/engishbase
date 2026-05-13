// DiscourseMarkersPage.jsx
"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../../components/grammar/TestPanel1";

export default function DiscourseMarkersPage() {
  const navigate = useNavigate();

  return (
    <main
      className="min-h-screen bg-[#512621] px-6 py-20 md:px-16"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background */}
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
            Discourse Markers
          </h1>

          <p className="mt-6 leading-relaxed text-white/70">
            Discourse Markers adalah kata atau frasa yang digunakan untuk
            menghubungkan ide, mengatur alur pembicaraan, memperjelas hubungan
            antar gagasan, dan membantu komunikasi terdengar lebih natural,
            terstruktur, dan profesional.
          </p>
        </motion.div>

        {/* Definition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            Pengertian Discourse Markers
          </h2>

          <div className="mt-4 space-y-4 leading-relaxed text-white/70">
            <p>
              Dalam speaking maupun writing, discourse markers berfungsi seperti
              "rambu lalu lintas" yang membantu pembaca atau pendengar memahami
              arah pembicaraan.
            </p>

            <div className="rounded-2xl bg-black/20 p-4 text-white">
              Idea 1 → Discourse Marker → Idea 2
            </div>

            <p>
              Tanpa discourse markers, tulisan sering terasa kaku, terputus, dan
              kurang kohesif.
            </p>

            <p>
              Penggunaan discourse markers yang tepat sangat penting dalam
              academic writing, IELTS Writing & Speaking, TOEFL, presentasi,
              serta komunikasi profesional.
            </p>
          </div>
        </motion.section>

        {/* Addition */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            1. Addition & Sequencing
          </h2>

          <div className="mt-4 space-y-4 leading-relaxed text-white/70">
            <p>
              Digunakan untuk menambahkan informasi atau mengurutkan ide secara
              sistematis.
            </p>

            <div className="rounded-2xl bg-black/20 p-5">
              <p className="font-semibold text-white">Addition Markers:</p>

              <p className="mt-2">
                Furthermore, Moreover, In addition, Besides, Also, Too.
              </p>
            </div>

            <div className="rounded-2xl bg-black/20 p-5">
              <p className="font-semibold text-white">Sequencing Markers:</p>

              <p className="mt-2">
                Firstly, Secondly, Finally, To begin with, Lastly.
              </p>
            </div>

            <p className="text-white">
              Furthermore, the company expanded its operations into Southeast
              Asia.
            </p>

            <p className="text-white">
              Firstly, the data must be collected carefully before analysis
              begins.
            </p>
          </div>
        </motion.section>

        {/* Contrast */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            2. Contrast & Opposition
          </h2>

          <div className="mt-4 space-y-4 leading-relaxed text-white/70">
            <p>
              Digunakan untuk menunjukkan pertentangan, perbedaan ide, atau
              situasi yang kontras.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              However, Nevertheless, On the other hand, In contrast, Conversely,
              Although.
            </div>

            <p className="text-white">
              The proposal seemed promising. However, the investors rejected it.
            </p>

            <p className="text-white">
              Many employees preferred remote work. On the other hand, some felt
              less productive at home.
            </p>

            <p>
              Dalam writing formal, marker seperti{" "}
              <span className="text-white">however</span> dan{" "}
              <span className="text-white">nevertheless</span> jauh lebih formal
              dibanding <span className="text-white">but</span>.
            </p>
          </div>
        </motion.section>

        {/* Cause Effect */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            3. Cause, Effect & Purpose
          </h2>

          <div className="mt-4 space-y-4 leading-relaxed text-white/70">
            <p>
              Marker ini menjelaskan hubungan sebab-akibat atau tujuan dari
              suatu tindakan.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              Therefore, Consequently, As a result, Thus, Due to, In order to.
            </div>

            <p className="text-white">
              The roads were flooded; therefore, the event was postponed.
            </p>

            <p className="text-white">
              The organization invested heavily in training in order to improve
              productivity.
            </p>

            <p>
              Kata seperti <span className="text-white">therefore</span> dan{" "}
              <span className="text-white">consequently</span> sering muncul
              dalam academic essays dan research papers.
            </p>
          </div>
        </motion.section>

        {/* Clarification */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            4. Emphasis & Clarification
          </h2>

          <div className="mt-4 space-y-4 leading-relaxed text-white/70">
            <p>
              Digunakan untuk memperjelas maksud atau memberikan penekanan pada
              informasi penting.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              Indeed, In fact, Actually, Specifically, In other words, To put it
              another way.
            </div>

            <p className="text-white">
              In fact, the research findings were far more significant than
              expected.
            </p>

            <p className="text-white">
              The system lacks flexibility. In other words, it cannot adapt to
              sudden changes efficiently.
            </p>

            <p>
              Marker seperti <span className="text-white">in other words</span>{" "}
              sangat berguna saat menjelaskan ide kompleks agar lebih mudah
              dipahami.
            </p>
          </div>
        </motion.section>

        {/* Examples Summary */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            5. Examples & Summaries
          </h2>

          <div className="mt-4 space-y-4 leading-relaxed text-white/70">
            <p>
              Digunakan untuk memberikan contoh atau menyimpulkan pembahasan.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              For example, For instance, Such as, Namely, In conclusion,
              Overall, To sum up.
            </div>

            <p className="text-white">
              Many countries, for example Japan and Germany, invest heavily in
              technology education.
            </p>

            <p className="text-white">
              In conclusion, effective communication requires both clarity and
              coherence.
            </p>

            <p>
              Marker rangkuman biasanya muncul pada bagian akhir essay,
              presentation, atau laporan formal.
            </p>
          </div>
        </motion.section>

        {/* Spoken */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">
            6. Spoken Discourse Markers
          </h2>

          <div className="mt-4 space-y-4 leading-relaxed text-white/70">
            <p>
              Dalam percakapan sehari-hari, discourse markers membantu pembicara
              terdengar lebih natural dan menjaga kelancaran komunikasi.
            </p>

            <div className="rounded-2xl bg-black/20 p-5 text-white">
              Well, You know, I mean, Anyway, By the way, Actually, Right.
            </div>

            <p className="text-white">
              Well, I think we should reconsider the proposal.
            </p>

            <p className="text-white">
              By the way, have you submitted the application form?
            </p>

            <p>
              Spoken markers biasanya lebih informal dibanding marker akademik.
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
            question="1. Pilih discourse marker yang paling tepat untuk menunjukkan pertentangan formal:"
            options={[
              {
                value: "a",
                label:
                  "A. The policy seemed effective. Besides, many experts criticized it heavily.",
                isCorrect: false,
                feedback:
                  "'Besides' digunakan untuk tambahan informasi, bukan kontras.",
              },
              {
                value: "b",
                label:
                  "B. The policy seemed effective. However, many experts criticized it heavily.",
                isCorrect: true,
                feedback:
                  "Benar, 'however' digunakan untuk menunjukkan kontras formal.",
              },
              {
                value: "c",
                label:
                  "C. The policy seemed effective. Therefore, many experts criticized it heavily.",
                isCorrect: false,
                feedback: "'Therefore' menunjukkan hasil, bukan pertentangan.",
              },
              {
                value: "d",
                label:
                  "D. The policy seemed effective. In addition, many experts criticized it heavily.",
                isCorrect: false,
                feedback: "'In addition' menunjukkan penambahan informasi.",
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
            question="2. Pilih discourse marker yang paling tepat untuk menunjukkan hasil atau consequence:"
            options={[
              {
                value: "a",
                label:
                  "A. The experiment failed. For instance, the equipment malfunctioned repeatedly.",
                isCorrect: false,
                feedback:
                  "'For instance' digunakan untuk contoh, bukan consequence.",
              },
              {
                value: "b",
                label:
                  "B. The experiment failed. Consequently, the research timeline had to be extended.",
                isCorrect: true,
                feedback:
                  "Benar, 'consequently' menunjukkan akibat atau hasil.",
              },
              {
                value: "c",
                label:
                  "C. The experiment failed. In other words, the researchers continued confidently.",
                isCorrect: false,
                feedback:
                  "'In other words' digunakan untuk klarifikasi, bukan consequence.",
              },
              {
                value: "d",
                label:
                  "D. The experiment failed. Moreover, the timeline remained unchanged.",
                isCorrect: false,
                feedback: "'Moreover' menunjukkan tambahan informasi.",
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
            question="3. Pilih penggunaan discourse marker yang paling akademik dan gramatikal:"
            options={[
              {
                value: "a",
                label:
                  "A. The company improved productivity. Like, employees became more motivated.",
                isCorrect: false,
                feedback: "'Like' terlalu informal untuk academic writing.",
              },
              {
                value: "b",
                label:
                  "B. The company improved productivity. You know, employees became more motivated.",
                isCorrect: false,
                feedback: "'You know' termasuk spoken marker informal.",
              },
              {
                value: "c",
                label:
                  "C. The company improved productivity. Furthermore, employee satisfaction increased significantly.",
                isCorrect: true,
                feedback:
                  "Benar, 'furthermore' sangat cocok untuk academic writing formal.",
              },
              {
                value: "d",
                label:
                  "D. The company improved productivity. Well, the staff also worked harder.",
                isCorrect: false,
                feedback: "'Well' lebih cocok untuk percakapan informal.",
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
          className="mt-10 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
        >
          <h2 className="text-2xl font-semibold text-white">Tips Penting</h2>

          <div className="mt-4 space-y-3 leading-relaxed text-white/70">
            <p>
              Jangan menggunakan discourse markers terlalu berlebihan karena
              tulisan bisa terasa tidak natural.
            </p>

            <p>
              Marker formal seperti{" "}
              <span className="text-white">
                however, furthermore, consequently
              </span>{" "}
              lebih cocok untuk academic writing.
            </p>

            <p>
              Marker informal seperti{" "}
              <span className="text-white">well, like, you know</span> lebih
              cocok untuk speaking sehari-hari.
            </p>

            <p>
              Perhatikan hubungan logika antar kalimat sebelum memilih marker.
            </p>

            <p>
              Kesalahan umum adalah menggunakan marker tambahan untuk hubungan
              yang sebenarnya kontras atau consequence.
            </p>

            <p>
              Dalam IELTS dan TOEFL, penggunaan discourse markers yang tepat
              dapat meningkatkan coherence dan cohesion score.
            </p>
          </div>
        </motion.section>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => navigate("/advance/nominalisation")}
            className="rounded-full border border-white/20 bg-transparent px-10 py-4 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            Kembali ke Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/advance/academic-writing")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#4b2d3b] transition hover:scale-105 hover:shadow-xl"
          >
            Lanjut ke Materi Berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}