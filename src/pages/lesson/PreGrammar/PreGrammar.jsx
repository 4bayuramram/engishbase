import { motion } from "framer-motion";
import Card from "../../../components/card/Card";

const lessons = [
  {
    title: "Noun",
    description: "Learn about nouns in English.",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80&fm=webp",
    link: "/noun",
  },
  {
    title: "Adjective",
    description: "Learn how to describe things using adjectives.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80&fm=webp",
    link: "/adjective",
  },
  {
    title: "Verb",
    description: "Learn action words (verbs) like run, eat, read, and jump.",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=600&q=80&fm=webp",
    link: "/verb",
  },
  {
    title: "Pronoun",
    description:
      "Learn pronouns like I, you, he, she, we, and they to replace nouns in sentences.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&fm=webp",
    link: "/pronoun",
  },
  {
    title: "Pattern",
    description:
      "Learn basic sentence patterns like Subject + Verb + Object to form correct English sentences.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&fm=webp",
    link: "/pattern",
  },
  {
    title: "To Be",
    description:
      "Learn 'am, is, are' to describe identity, feelings, and states in English sentences.",
    image:
      "https://st4.depositphotos.com/20596548/24053/i/1600/depositphotos_240532302-stock-photo-two-young-men-communicate-cafe.jpg",
    link: "/tobe",
  },
  {
    title: "Past",
    description:
      "Learn past tense (was, were, and regular/irregular verbs) to describe actions and events that happened in the past.",
    image:
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&w=600&q=80",
    link: "/past",
  },
  {
    title: "Didn’t vs Not",
    description:
      "Learn how to use didn’t and not correctly to form negative sentences in the past tense.",
    image:
      "https://plus.unsplash.com/premium_photo-1661505271288-7cf05ba55fca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
    link: "/didntvsnot",
  },
];

const PreGrammarPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section
        className="w-full h-[55vh] sm:h-[65vh] md:h-[75vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1732730224306-3b469ea9e640?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0')",
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-col items-center justify-center h-full text-center px-6"
        >
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm tracking-widest text-blue-500 font-semibold uppercase mb-3">
              English Foundation
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Pre-Grammar
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Start your journey with basic English structure and foundational
              concepts.
            </p>
          </div>
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* SECTION DIVIDER */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center py-10"
      >
        <div className="w-20 h-1 bg-blue-200 rounded-full" />
      </motion.div>

      {/* SECTION TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-6 px-6"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Choose Your Lesson
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Learn step by step with structured materials
        </p>
      </motion.div>

      {/* LESSON GRID */}
      <div className="grid gap-6 px-6 pb-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {lessons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <Card {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PreGrammarPage;
