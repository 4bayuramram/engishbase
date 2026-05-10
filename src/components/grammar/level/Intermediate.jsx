import React from "react";
import AnimatedList from "../../bits/AnimatedList/AnimatedList.jsx";
import { useNavigate } from "react-router-dom";

const Intermediate = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "1. Present Perfect vs Past Simple",
      path: "/intermediate/IntermediateGrammarPage1",
    },
    {
      title: "2. Past Perfect Tense",
      path: "/intermediate/PastPerfectTensePage",
    },
    {
      title: "3. Future Perfect & Continuous",
      path: "/intermediate/future-tenses",
    },
    {
      title: "4. Conditional Type 1",
      path: "/intermediate/conditional-1",
    },
    {
      title: "5. Conditional Type 2",
      path: "/intermediate/conditional-2",
    },
    {
      title: "6. Conditional Type 3",
      path: "/intermediate/conditional-3",
    },
    {
      title: "7. Passive Voice (All Tenses)",
      path: "/intermediate/passive-voice",
    },
    {
      title: "8. Reported Speech",
      path: "/intermediate/reported-speech",
    },
    {
      title: "9. Modal Verbs Advanced",
      path: "/intermediate/modal-verbs",
    },
    {
      title: "10. Complex Sentences",
      path: "/intermediate/complex-sentences",
    },
    {
      title: "11. Relative Clauses",
      path: "/intermediate/relative-clauses",
    },
    {
      title: "12. Gerunds & Infinitives",
      path: "/intermediate/gerunds-infinitives",
    },
    {
      title: "13. Gerunds & Infinitives",
      path: "/intermediate/gerunds-infinitives",
    },
  ];

  return (
    <section
      className="w-full flex justify-center px-4 py-10 bg-[#f3f3f8] -mt-px -mb-px"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* stabilizer */}
      <div className="fixed inset-0 bg-[#f3f3f8] -z-10" />

      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-3 text-black">
          Intermediate Level
        </h2>

        <p className="text-black/80 mb-6 leading-relaxed">
          Mendalami struktur grammar yang lebih kompleks untuk komunikasi yang
          lebih natural dan akurat.
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

export default Intermediate;
