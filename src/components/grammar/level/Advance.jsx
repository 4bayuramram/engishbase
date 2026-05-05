import React from "react";
import AnimatedList from "../../bits/AnimatedList/AnimatedList";
import { useNavigate } from "react-router-dom";

const Advance = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Mixed Conditionals",
      path: "/advance/mixed-conditionals",
    },
    {
      title: "Inversion",
      path: "/advance/inversion",
    },
    {
      title: "Cleft Sentences",
      path: "/advance/cleft-sentences",
    },
    {
      title: "Advanced Passive Voice",
      path: "/advance/advanced-passive",
    },
    {
      title: "Subjunctive Mood",
      path: "/advance/subjunctive",
    },
    {
      title: "Nominalisation",
      path: "/advance/nominalisation",
    },
    {
      title: "Discourse Markers",
      path: "/advance/discourse-markers",
    },
    {
      title: "Academic Writing Structure",
      path: "/advance/academic-writing",
    },
    {
      title: "Formal vs Informal Style",
      path: "/advance/formal-informal",
    },
    {
      title: "Complex Clauses",
      path: "/advance/complex-clauses",
    },
    {
      title: "Complex Clauses",
      path: "/advance/complex-clauses",
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
        <h2 className="text-3xl font-bold mb-3 text-black">Advance Level</h2>

        <p className="text-black/80 mb-6 leading-relaxed">
          Grammar tingkat lanjut untuk komunikasi profesional dan akademik.
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

export default Advance;
