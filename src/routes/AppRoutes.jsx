import { Routes, Route } from "react-router-dom";

// path base page
import Home from "../pages/home/Home";
import Reading from "../pages/reading/Reading";
import PreGrammar from "../pages/lesson/PreGrammar/PreGrammar";
import GrammarPage from "../pages/lesson/Grammar/GrammarPage";

// path materi Pre-Grammar
import Noun from "../pages/lesson/Noun";
import Adjective from "../pages/lesson/Adjective";
import Verb from "../pages/lesson/Verb";
import Pronoun from "../pages/lesson/Pronoun";
import Pattern from "../pages/lesson/Pattern";
import Tobe from "../pages/lesson/Tobe";
import Past from "../pages/lesson/Past";
import DidntVsNot from "../pages/lesson/DidntVsNot";

// path materi Grammar
import GrammarIntroPage from "../pages/lesson/Grammar/materi/GrammarIntroPage";
import SVOPatternPage from "../pages/lesson/Grammar/materi/SVOPatternPage";
import PresentSimplePage from "../pages/lesson/Grammar/materi/PresentSimplePage";


export default function AppRoutes() {
  return (
    <Routes>
      {/* routes base pages */}
      <Route path="/" element={<Home />} />
      <Route path="/pre-grammar" element={<PreGrammar />} />
      <Route path="/grammar-page" element={<GrammarPage />} />
      {/* routes materi Pre-Grmmar */}
      <Route path="/noun" element={<Noun />} />
      <Route path="/adjective" element={<Adjective />} />
      <Route path="/verb" element={<Verb />} />
      <Route path="/pronoun" element={<Pronoun />} />
      <Route path="/pattern" element={<Pattern />} />
      <Route path="/tobe" element={<Tobe />} />
      <Route path="/past" element={<Past />} />
      <Route path="/didntvsnot" element={<DidntVsNot />} />
      {/* routes materi grammar */}
      <Route path="/beginner/GrammarIntroPage" element={<GrammarIntroPage />} />
      <Route path="/beginner/SVOPatternPage" element={<SVOPatternPage />} />
      <Route
        path="/beginner/PresentSimplePage"
        element={<PresentSimplePage />}
      />

      {/* routes halaman baca  */}
      <Route path="/practice/reading" element={<Reading />} />
    </Routes>
  );
}
