"use client";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TestPanel from "../../../../components/grammar/TestPanel1";

export default function ImperativesPage() {
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
            Lesson 18
          </span>

          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Imperatives (Commands & Instructions)
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Imperative sentence adalah kalimat yang digunakan untuk memberi
            perintah, instruksi, larangan, saran, atau ajakan. Kalimat ini
            biasanya tidak menyebutkan subjek karena sudah dipahami bahwa
            subjeknya adalah "you".
          </p>
        </motion.div>

        <div className="mt-16 space-y-10">
          {/* Definition */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              Apa itu Imperative Sentence?
            </h2>

            <p className="mt-4 text-white/70">
              Imperative sentence adalah kalimat dalam bahasa Inggris yang
              digunakan untuk memberikan perintah atau instruksi langsung kepada
              seseorang. Dalam kalimat ini, subjek "you" tidak disebutkan secara
              langsung tetapi sudah dipahami secara otomatis.
              <br />
              <br />
              Contoh sederhana: "Close the door!" sebenarnya berarti "(You)
              close the door!"
            </p>
          </motion.section>

          {/* Commands */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              1. Perintah Langsung (Commands)
            </h2>

            <p className="mt-4 text-white/70">
              Digunakan untuk memberi perintah secara tegas dan langsung.
              Biasanya digunakan oleh guru, orang tua, atau situasi darurat.
            </p>

            <div className="mt-6 space-y-2 text-white/70">
              <p>Close the door! (Tutup pintunya!)</p>
              <p>Sit down! (Duduk!)</p>
              <p>Get out! (Keluar!)</p>
              <p>Listen to me! (Dengarkan saya!)</p>
              <p>Stop talking! (Berhenti bicara!)</p>
              <p>Stand up! (Berdiri!)</p>
            </div>
          </motion.section>

          {/* Instructions */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              2. Instruksi & Arahan (Instructions)
            </h2>

            <p className="mt-4 text-white/70">
              Digunakan dalam panduan, resep, atau petunjuk langkah demi
              langkah. Biasanya bersifat netral dan tidak emosional.
            </p>

            <div className="mt-6 space-y-2 text-white/70">
              <p>Open your book. (Buka bukumu.)</p>
              <p>Turn left at the corner. (Belok kiri di sudut.)</p>
              <p>Mix the flour and water. (Campur tepung dan air.)</p>
              <p>Take this medicine. (Minum obat ini.)</p>
              <p>Type your password. (Ketik kata sandi Anda.)</p>
            </div>
          </motion.section>

          {/* Polite Requests */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              3. Permohonan Sopan (Polite Requests)
            </h2>

            <p className="mt-4 text-white/70">
              Digunakan untuk meminta sesuatu dengan lebih sopan menggunakan
              kata "please" atau "kindly" agar tidak terdengar kasar.
            </p>

            <div className="mt-6 space-y-2 text-white/70">
              <p>Please sit down. (Silakan duduk.)</p>
              <p>Help me with these bags, please. (Tolong bantu saya.)</p>
              <p>Kindly wait your turn. (Mohon tunggu giliran.)</p>
              <p>Pass the salt, please. (Tolong berikan garamnya.)</p>
            </div>
          </motion.section>

          {/* Negative Imperatives */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              4. Larangan (Negative Imperatives)
            </h2>

            <p className="mt-4 text-white/70">
              Digunakan untuk melarang seseorang melakukan sesuatu. Biasanya
              menggunakan "Don't" di awal kalimat.
            </p>

            <div className="mt-6 space-y-2 text-white/70">
              <p>Don't touch the wall! (Jangan sentuh dinding!)</p>
              <p>Don't be late! (Jangan terlambat!)</p>
              <p>Don't make noise. (Jangan berisik.)</p>
              <p>Don't forget your lunch. (Jangan lupa makan siang.)</p>
              <p>No smoking. (Dilarang merokok.)</p>
            </div>
          </motion.section>

          {/* Suggestions */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              5. Ajakan & Saran (Suggestions & Invitations)
            </h2>

            <p className="mt-4 text-white/70">
              Digunakan untuk mengajak seseorang melakukan sesuatu dengan cara
              yang lebih ramah.
            </p>

            <div className="mt-6 space-y-2 text-white/70">
              <p>Let's go! (Ayo pergi!)</p>
              <p>Come in! (Masuklah!)</p>
              <p>Have a nice day. (Semoga harimu menyenangkan.)</p>
            </div>
          </motion.section>

          {/* Characteristics */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              Ciri-ciri Imperative Sentence
            </h2>

            <div className="mt-4 space-y-2 text-white/70">
              <p>1. Dimulai dengan kata kerja dasar (verb base form)</p>
              <p>2. Tidak memiliki subjek yang disebutkan secara langsung</p>
              <p>3. Bisa diakhiri tanda titik (.) atau tanda seru (!)</p>
              <p>
                4. Bisa bersifat tegas, sopan, atau santai tergantung konteks
              </p>
            </div>
          </motion.section>

          {/* Test */}
          <TestPanel
            question="Pilih kalimat imperative yang benar:"
            options={[
              {
                value: "a",
                label: "A. You close the door now!",
                isCorrect: false,
                feedback: "Salah, seharusnya tanpa subjek 'you'.",
              },
              {
                value: "b",
                label: "B. Close the door now!",
                isCorrect: true,
                feedback: "Benar, ini bentuk imperative yang tepat.",
              },
              {
                value: "c",
                label: "C. Closing the door now.",
                isCorrect: false,
                feedback: "Salah karena bentuk verb tidak sesuai imperative.",
              },
            ]}
          />

          {/* Tips */}
          <motion.section className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-semibold text-white">
              Tips Memahami Imperative Sentence
            </h2>

            <div className="mt-4 space-y-3 text-white/70">
              <p>
                - Bayangkan selalu ada "you" di awal kalimat meskipun tidak
                ditulis.
              </p>
              <p>
                - Jika kalimat dimulai dengan verb (kata kerja), kemungkinan
                besar itu imperative.
              </p>
              <p>
                - Perhatikan konteks: jika memberi arahan, larangan, atau
                perintah, itu imperative.
              </p>
              <p>
                - Gunakan tanda seru (!) untuk perintah tegas, dan titik (.)
                untuk instruksi biasa.
              </p>
              <p>
                - Untuk kesimpulan: imperative = cara singkat untuk memberi
                instruksi langsung tanpa subjek.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate("/beginner/BasicConjunctionsPage")}
            className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white"
          >
            Materi Sebelumnya
          </button>

          <button
            onClick={() => navigate("/beginner/ModalVerbsBasicsPage")}
            className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357]"
          >
            lanjut ke materi berikutnya
          </button>
        </motion.div>
      </div>
    </main>
  );
}
