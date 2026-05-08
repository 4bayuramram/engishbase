
import AnimatedList from "../../bits/AnimatedList/AnimatedList.jsx";
import { useNavigate } from "react-router-dom";

const Beginner = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "1. Introduction to English Grammar",
      path: "/beginner/GrammarIntroPage",
    },
    {
      title: "2. Basic Sentence Structure (SVO Pattern)",
      path: "/beginner/SVOPatternPage",
    },
    {
      title: "3. Present Simple Tense Usage",
      path: "/beginner/PresentSimplePage",
    },
    {
      title: "4. Present Continuous Tense",
      path: "/beginner/PresentContinuousPage",
    },
    {
      title: "5. Past Simple Tense",
      path: "/beginner/PastSimplePage",
    },
    {
      title: "6. Future Simple Tense (Will / Going to)",
      path: "/beginner/FutureSimplePage",
    },
    {
      title: "7. Countable & Uncountable Nouns",
      path: "/beginner/CountableUncountablePage",
    },
    {
      title: "8. Articles (A, An, The)",
      path: "/beginner/ArticlesPage",
    },
    {
      title: "9. Subject & Object Pronouns",
      path: "/beginner/PronounsPage",
    },
    {
      title: "10. Possessive Pronouns",
      path: "/beginner/PossessivePronounsPage",
    },
    {
      title: "11. Basic Adjectives & Comparatives",
      path: "/beginner/AdjectivesComparativesPage",
    },
    {
      title: "12. Adverbs of Frequency",
      path: "/beginner/AdverbsOfFrequencyPage",
    },
    {
      title: "13. Prepositions of Time (in, on, at)",
      path: "/beginner/prepositions-time",
    },
    {
      title: "14. Prepositions of Place",
      path: "/beginner/prepositions-place",
    },
    {
      title: "15. Yes/No Questions Formation",
      path: "/beginner/yes-no-questions",
    },
    {
      title: "16. Wh- Questions (What, Where, Why)",
      path: "/beginner/wh-questions",
    },
    {
      title: "17. Basic Conjunctions (and, but, or)",
      path: "/beginner/conjunctions",
    },
    {
      title: "18. Imperatives (Commands & Instructions)",
      path: "/beginner/imperatives",
    },
    {
      title: "19. Modal Verbs Basics (can, must, should)",
      path: "/beginner/modal-verbs",
    },
    {
      title: "20. Conditionals Type 0 (Facts & General Truths)",
      path: "/beginner/conditionals-type-0",
    },
    {
      title: "20. Conditionals Type 0 (Facts & General Truths)",
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
