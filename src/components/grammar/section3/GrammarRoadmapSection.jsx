"use client";

import { motion } from "framer-motion";

export default function GrammarRoadmapSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#6b6357] px-6 py-24 md:px-16"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Alur Pembelajaran
          </span>

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Roadmap Belajar Grammar
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Pelajari grammar secara bertahap dari level dasar hingga mahir
            dengan alur belajar yang jelas dan terstruktur.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gradient-to-b from-white/0 via-white/60 to-white/0 md:left-1/2" />

          <div className="space-y-16">
            {/* ================= BEGINNER ================= */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-10 md:flex-row md:items-center"
            >
              <div className="hidden md:block md:w-1/2 md:pr-16 md:text-right">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  Pondasi Awal
                </h3>
                <p className="text-white/60">
                  Langkah pertama menuju kefasihan.
                </p>
              </div>

              <div className="absolute left-5 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl md:left-1/2">
                <span className="text-xl text-white">01</span>
              </div>

              <div className="pl-16 md:w-1/2 md:pl-16">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl">
                  <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-white/60">
                    Level 1
                  </span>

                  <h3 className="mb-4 text-3xl font-bold text-white">
                    Beginner
                  </h3>

                  <p className="mb-6 text-white/70">
                    Memahami dasar grammar dan mampu membuat kalimat sederhana
                    untuk komunikasi sehari-hari.
                  </p>

                  <div className="space-y-4">
                    <p className="text-white/80">
                      • Memahami struktur kalimat dasar
                    </p>
                    <p className="text-white/80">
                      • Mengenali subject dan verb
                    </p>
                    <p className="text-white/80">
                      • Mulai percaya diri membuat kalimat sederhana
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= INTERMEDIATE ================= */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-10 md:flex-row-reverse md:items-center"
            >
              <div className="hidden md:block md:w-1/2 md:pl-16">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  Ekspresi Menengah
                </h3>
                <p className="text-white/60">
                  Memperluas jangkauan komunikasi.
                </p>
              </div>

              <div className="absolute left-5 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl md:left-1/2">
                <span className="text-xl text-white">02</span>
              </div>

              <div className="pl-16 md:w-1/2 md:pr-16 md:pl-0">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl">
                  <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-white/60">
                    Level 2
                  </span>

                  <h3 className="mb-4 text-3xl font-bold text-white">
                    Intermediate
                  </h3>

                  <p className="mb-6 text-white/70">
                    Mampu menggunakan grammar dalam percakapan dan penulisan
                    yang lebih natural dan kompleks.
                  </p>

                  <div className="space-y-4">
                    <p className="text-white/80">
                      • Memahami berbagai bentuk tenses
                    </p>
                    <p className="text-white/80">
                      • Membuat kalimat lebih panjang dan jelas
                    </p>
                    <p className="text-white/80">
                      • Meningkatkan kelancaran komunikasi
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ================= ADVANCED ================= */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-10 md:flex-row md:items-center"
            >
              <div className="hidden md:block md:w-1/2 md:pr-16 md:text-right">
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  Mastery & Context
                </h3>
                <p className="text-white/60">Menuju standar profesional.</p>
              </div>

              <div className="absolute left-5 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl md:left-1/2">
                <span className="text-xl text-white">03</span>
              </div>

              <div className="pl-16 md:w-1/2 md:pl-16">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl">
                  <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-white/60">
                    Level 3
                  </span>

                  <h3 className="mb-4 text-3xl font-bold text-white">
                    Advanced
                  </h3>

                  <p className="mb-6 text-white/70">
                    Menguasai grammar untuk komunikasi profesional, akademik,
                    dan penulisan tingkat lanjut.
                  </p>

                  <div className="space-y-4">
                    <p className="text-white/80">
                      • Memahami struktur kompleks
                    </p>
                    <p className="text-white/80">
                      • Menggunakan grammar secara fleksibel
                    </p>
                    <p className="text-white/80">
                      • Komunikasi lebih profesional dan natural
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="rounded-full bg-white px-10 py-4 font-semibold text-[#6b6357] transition hover:scale-105 hover:shadow-xl"
            >
              Mulai Belajar
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
