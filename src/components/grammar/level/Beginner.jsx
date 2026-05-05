import React from "react";
import AnimatedList from "../../bits/AnimatedList/AnimatedList.jsx";
import { useNavigate } from "react-router-dom";

const Beginner = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Introduction to English Grammar",
      path: "/beginner/introduction-grammar",
    },
    {
      title: "Basic Sentence Structure (SVO Pattern)",
      path: "/beginner/sentence-structure",
    },
    {
      title: "Present Simple Tense Usage",
      path: "/beginner/present-simple",
    },
    {
      title: "Present Continuous Tense",
      path: "/beginner/present-continuous",
    },
    {
      title: "Past Simple Tense",
      path: "/beginner/past-simple",
    },
    {
      title: "Future Simple Tense (Will / Going to)",
      path: "/beginner/future-simple",
    },
    {
      title: "Countable & Uncountable Nouns",
      path: "/beginner/countable-uncountable",
    },
    {
      title: "Articles (A, An, The)",
      path: "/beginner/articles",
    },
    {
      title: "Subject & Object Pronouns",
      path: "/beginner/pronouns",
    },
    {
      title: "Possessive Pronouns",
      path: "/beginner/possessive-pronouns",
    },
    {
      title: "Basic Adjectives & Comparatives",
      path: "/beginner/adjectives-comparatives",
    },
    {
      title: "Adverbs of Frequency",
      path: "/beginner/adverbs-frequency",
    },
    {
      title: "Prepositions of Time (in, on, at)",
      path: "/beginner/prepositions-time",
    },
    {
      title: "Prepositions of Place",
      path: "/beginner/prepositions-place",
    },
    {
      title: "Yes/No Questions Formation",
      path: "/beginner/yes-no-questions",
    },
    {
      title: "Wh- Questions (What, Where, Why)",
      path: "/beginner/wh-questions",
    },
    {
      title: "Basic Conjunctions (and, but, or)",
      path: "/beginner/conjunctions",
    },
    {
      title: "Imperatives (Commands & Instructions)",
      path: "/beginner/imperatives",
    },
    {
      title: "Modal Verbs Basics (can, must, should)",
      path: "/beginner/modal-verbs",
    },
    {
      title: "Conditionals Type 0 (Facts & General Truths)",
      path: "/beginner/conditionals-type-0",
    },
    {
      title: "Conditionals Type 0 (Facts & General Truths)",
      path: "/beginner/conditionals-type-0",
    },
  ];

  return (
    <section
      className="w-full flex justify-center px-4 py-10 bg-[#f3f3f8] -mt-px -mb-px"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* background stabilizer */}
      <div className="fixed inset-0 bg-[#f3f3f8] -z-10" />

      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-3 text-black">Beginner Level</h2>

        <p className="text-black/80 mb-6 leading-relaxed">
          Belajar dasar grammar seperti tenses sederhana, noun, dan verb.
        </p>

        {/* list container */}
        <div className="relative overflow-hidden">
          <div className="pl-4 sm:pl-16 translate-x-0 sm:translate-x-6 flex justify-center sm:justify-start">
            <AnimatedList
              items={items.map((item) => item.title)}
              onItemSelect={(title) => {
                const found = items.find((i) => i.title === title);
                if (found) navigate(found.path);
              }}
              showGradients={false}
              enableArrowNavigation
              displayScrollbar={false}
            />
          </div>

          {/* bottom seamless cover */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#f3f3f8] pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default Beginner;
