import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [grammarOpen, setGrammarOpen] = useState(false);
  const [practiceOpen, setPracticeOpen] = useState(false);

  return (
    <nav className="w-full bg-surface-container-high border-b border-outline-variant font-manrope">
      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <div className="text-primary font-headline-md">EnglishBase</div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-body-md text-onSurface items-center">
          <Link to="/" className="hover:text-primary transition">
            HOME
          </Link>

          {/* BASIC GRAMMAR DROPDOWN */}
          <Link to="/pre-grammar" className="hover:text-primary transition">
            PRE-GRAMMAR
          </Link>

          <Link to="/grammar-page" className="hover:text-primary transition">
            GRAMMAR
          </Link>

          {/* PRACTICE DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setPracticeOpen(!practiceOpen)}
              className="hover:text-primary transition"
            >
              PRATICE ▾
            </button>

            {practiceOpen && (
              <div className="absolute top-8 left-0 bg-surface-container-low shadow-md rounded-lg p-3 flex flex-col gap-2 w-48 z-50">
                <Link
                  to="/practice/reading"
                  className="hover:text-primary"
                  onClick={() => setPracticeOpen(false)}
                >
                  Reading
                </Link>

                <Link
                  to="/practice/quiz"
                  className="hover:text-primary"
                  onClick={() => setPracticeOpen(false)}
                >
                  Quiz (Soon)
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-onSurface text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-body-md bg-surface-container">
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          {/* MOBILE BASIC GRAMMAR */}
          <div>
            <button
              onClick={() => setGrammarOpen(!grammarOpen)}
              className="w-full text-left"
            >
              Basic Grammar ▾
            </button>

            {grammarOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-body-sm">
                <Link to="/noun" onClick={() => setOpen(false)}>
                  Noun
                </Link>

                <Link to="/adjective" onClick={() => setOpen(false)}>
                  Adjective
                </Link>

                <Link to="/verb" onClick={() => setOpen(false)}>
                  Verb
                </Link>

                <Link to="/pronoun" onClick={() => setOpen(false)}>
                  Pronoun
                </Link>

                <Link to="/pattern" onClick={() => setOpen(false)}>
                  Pattern
                </Link>

                <Link to="/tobe" onClick={() => setOpen(false)}>
                  To Be
                </Link>

                <Link to="/past" onClick={() => setOpen(false)}>
                  Past
                </Link>

                <Link to="/didntvsnot" onClick={() => setOpen(false)}>
                  Didn't vs Not
                </Link>
              </div>
            )}
          </div>

          <Link to="/grammar" onClick={() => setOpen(false)}>
            Grammar
          </Link>

          {/* MOBILE PRACTICE */}
          <div>
            <button
              onClick={() => setPracticeOpen(!practiceOpen)}
              className="w-full text-left"
            >
              Practice ▾
            </button>

            {practiceOpen && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-body-sm">
                <Link to="/reading" onClick={() => setOpen(false)}>
                  Reading
                </Link>

                <Link to="/practice/quiz" onClick={() => setOpen(false)}>
                  Quiz (Soon)
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
