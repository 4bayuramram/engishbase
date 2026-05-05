import React from "react";
import AnimatedList from "../../bits/AnimatedList/AnimatedList.jsx";
import { useNavigate } from "react-router-dom";

const Intermediate = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Present Perfect vs Past Simple",
      path: "/intermediate/present-perfect",
    },
    {
      title: "Past Perfect Tense",
      path: "/intermediate/past-perfect",
    },
    {
      title: "Future Perfect & Continuous",
      path: "/intermediate/future-tenses",
    },
    {
      title: "Conditional Type 1",
      path: "/intermediate/conditional-1",
    },
    {
      title: "Conditional Type 2",
      path: "/intermediate/conditional-2",
    },
    {
      title: "Conditional Type 3",
      path: "/intermediate/conditional-3",
    },
    {
      title: "Passive Voice (All Tenses)",
      path: "/intermediate/passive-voice",
    },
    {
      title: "Reported Speech",
      path: "/intermediate/reported-speech",
    },
    {
      title: "Modal Verbs Advanced",
      path: "/intermediate/modal-verbs",
    },
    {
      title: "Complex Sentences",
      path: "/intermediate/complex-sentences",
    },
    {
      title: "Relative Clauses",
      path: "/intermediate/relative-clauses",
    },
    {
      title: "Gerunds & Infinitives",
      path: "/intermediate/gerunds-infinitives",
    },
    {
      title: "Gerunds & Infinitives",
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
