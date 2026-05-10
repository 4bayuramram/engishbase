import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  const glowStyle = {
    textShadow: "0 0 6px rgba(255,255,255,0.9), 0 0 12px rgba(255,255,255,0.6)",
  };

  const noGlowHover = {
    textShadow: "none",
  };

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* GLASS CONTAINER */}
      <div
        className="
        backdrop-blur-xl
        bg-gray-500/10
        border-b border-white/10
        shadow-[0_8px_30px_rgba(0,0,0,0.05)]
      "
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-900 font-bold text-lg tracking-tight"
            style={glowStyle}
            whileHover={noGlowHover}
          >
            English<span className="text-blue-500">Base</span>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm text-gray-700 items-center">
            <Link to="/">
              <motion.span
                whileHover={{ scale: 1.05, ...noGlowHover }}
                className="hover:text-blue-500"
                style={glowStyle}
              >
                Home
              </motion.span>
            </Link>

            <Link to="/pre-grammar">
              <motion.span
                whileHover={{ scale: 1.05, ...noGlowHover }}
                className="hover:text-blue-500"
                style={glowStyle}
              >
                Pre-Grammar
              </motion.span>
            </Link>

            <Link to="/grammar-page">
              <motion.span
                whileHover={{ scale: 1.05, ...noGlowHover }}
                className="hover:text-blue-500"
                style={glowStyle}
              >
                Grammar
              </motion.span>
            </Link>

            {/* PRACTICE */}
            <div className="relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setPracticeOpen(!practiceOpen)}
                className="hover:text-blue-500"
                style={glowStyle}
                whileHover={noGlowHover}
              >
                Practice ▾
              </motion.button>

              <AnimatePresence>
                {practiceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="
                      absolute top-10 left-0 w-48 p-3 rounded-xl
                      bg-white/70 backdrop-blur-lg
                      border border-white/20
                      shadow-xl
                      flex flex-col gap-2
                    "
                  >
                    <Link
                      to="/practice/reading"
                      onClick={() => setPracticeOpen(false)}
                      className="hover:text-blue-500"
                    >
                      Reading
                    </Link>

                    <Link
                      to="/practice/quiz"
                      onClick={() => setPracticeOpen(false)}
                      className="hover:text-blue-500"
                    >
                      Quiz (Soon)
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className="md:hidden text-xl text-gray-800"
            style={glowStyle}
            whileHover={noGlowHover}
          >
            ☰
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="
                md:hidden px-4 pb-4
                bg-white/70 backdrop-blur-xl
                border-t border-white/10
                flex flex-col gap-3 text-sm
              "
            >
              <Link to="/" onClick={() => setOpen(false)} style={glowStyle}>
                Home
              </Link>

              <Link
                to="/pre-grammar"
                onClick={() => setOpen(false)}
                style={glowStyle}
              >
                Pre-Grammar
              </Link>

              <Link
                to="/grammar-page"
                onClick={() => setOpen(false)}
                style={glowStyle}
              >
                Grammar
              </Link>

              {/* PRACTICE MOBILE */}
              <div>
                <button
                  onClick={() => setPracticeOpen(!practiceOpen)}
                  className="w-full text-left"
                  style={glowStyle}
                >
                  Practice ▾
                </button>

                <AnimatePresence>
                  {practiceOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="pl-4 mt-2 flex flex-col gap-2 text-sm"
                    >
                      <Link
                        to="/practice/reading"
                        onClick={() => setOpen(false)}
                        style={glowStyle}
                      >
                        Reading
                      </Link>

                      <Link
                        to="/practice/quiz"
                        onClick={() => setOpen(false)}
                        style={glowStyle}
                      >
                        Quiz (Soon)
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
