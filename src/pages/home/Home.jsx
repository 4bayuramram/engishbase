import { motion } from "framer-motion";
import DotField from "../../components/bits/FieldDot/FieldDot";
import heroImage from "../../assets/hero-image.png";

import Section3 from "../../components/home/Section3";
import Section4 from "../../components/home/Section4";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-onBackground font-manrope">
      {/* HERO SECTION */}
      <section className="px-6 py-24 bg-gradient-to-b from-white via-white to-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* LEFT: TEXT */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="inline-block mb-4 text-xs tracking-[0.25em] uppercase text-blue-500 font-semibold">
              belajar dari dasar dengan 
            </p>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              EnglishBase
            </h1>

            <p
              className="mt-5 text-gray-600 max-w-xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Belajar bahasa Inggris pelan-pelan dari dasar grammar, dengan
              penjelasan yang simpel dan mudah diikuti. Membantu kamu lebih
              mudah mengingat materi dan melatih kemampuan pemahaman setiap
              hari.
            </p>

            <motion.div
              className="mt-8 flex justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
             
            </motion.div>
          </motion.div>

          {/* RIGHT: IMAGE */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/30 via-transparent to-blue-100/20 blur-2xl scale-110" />

              <motion.img
                src={heroImage}
                alt="Hero Image"
                className="relative w-full h-full object-cover rounded-3xl shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 - DOTFIELD BACKGROUND */}
      <section className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            cursorRadius={280}
            cursorForce={0.08}
            bulgeOnly={true}
            bulgeStrength={32}
            gradientFrom="rgba(35, 35, 40, 0.95)"
            gradientTo="rgba(10, 10, 15, 0.7)"
            glowRadius={90}
            glowColor="rgba(120, 120, 140, 0.18)"
            sparkle={false}
            waveAmplitude={0}
          />
        </div>

        <motion.div
          className="relative z-10 flex items-center justify-center min-h-[500px] px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-onSurface">
              Learn Step by Step
            </h2>

            <p className="mt-4 text-on-surface-variant max-w-lg mx-auto">
              Interactive visual learning experience with responsive dot
              animation background.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3 & 4 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Section3 />
        <Section4 />
      </motion.div>
    </div>
  );
}
