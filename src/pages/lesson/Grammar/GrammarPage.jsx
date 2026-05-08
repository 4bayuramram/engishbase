import React, { useState } from "react";
import { motion } from "framer-motion";

import PanelLevel from "../../../components/grammar/PanelLevel";

import Beginner from "../../../components/grammar/level/Beginner";
import Intermediate from "../../../components/grammar/level/Intermediate";
import Advance from "../../../components/grammar/level/Advance";

import GrammarRoadmapSection from "../../../components/grammar/section3/GrammarRoadmapSection";

const GrammarPage = () => {
  const [activeTab, setActiveTab] = useState("grammar1");

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="w-full h-[55vh] sm:h-[65vh] md:h-[75vh] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWd9fHx8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_35%,rgba(255,255,255,0.2)_60%,rgba(255,255,255,0)_100%)]" />

          {/* CONTENT */}
          <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-10">
            {/* Animated Text */}
            <motion.div
              className="max-w-2xl lg:max-w-3xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-3 sm:mb-4">
                Master English Grammar Easily
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                Learn the fundamentals of English grammar with simple
                explanations, practical examples, and structured lessons
                designed to improve your skills step by step.
              </p>
            </motion.div>

            {/* Animated Panel */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <PanelLevel activeTab={activeTab} setActiveTab={setActiveTab} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full p-6">
        {activeTab === "grammar1" && <Beginner />}
        {activeTab === "grammar2" && <Intermediate />}
        {activeTab === "grammar3" && <Advance />}
      </section>

      {/* SECTION 3 */}
      <GrammarRoadmapSection />
    </>
  );
};

export default GrammarPage;
