import React from "react";

const PanelLevel = ({ activeTab, setActiveTab }) => {
  const buttons = [
    { id: "grammar1", label: "Beginner" },
    { id: "grammar2", label: "Intermediate" },
    { id: "grammar3", label: "Advanced" },
  ];

  return (
    <div
      className="w-full px-4 py-3"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="flex justify-center gap-3 flex-wrap">
        {buttons.map((btn) => (
          <button
            key={btn.id}
            onClick={() => setActiveTab(btn.id)}
            className={`px-5 py-2 rounded-full text-sm sm:text-base transition-all duration-300
              border border-gray-300
              ${
                activeTab === btn.id
                  ? "bg-white text-black font-bold shadow-md"
                  : "bg-transparent text-black/60 font-medium hover:text-black"
              }
            `}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PanelLevel;
