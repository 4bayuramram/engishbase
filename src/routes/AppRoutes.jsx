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
import PresentContinuousPage from "../pages/lesson/Grammar/materi/PresentContinuousPage";
import PastSimplePage from "../pages/lesson/Grammar/materi/PastSimplePage";
import FutureSimplePage from "../pages/lesson/Grammar/materi/FutureSimplePage";
import CountableUncountablePage from "../pages/lesson/Grammar/materi/CountableUncountablePage";
import ArticlesPage from "../pages/lesson/Grammar/materi/ArticlesPage";
import PronounsPage from "../pages/lesson/Grammar/materi/PronounsPage";
import PossessivePronounsPage from "../pages/lesson/Grammar/materi/PossessivePronounsPage";
import AdjectivesComparativesPage from "../pages/lesson/Grammar/materi/AdjectivesComparativesPage";
import AdverbsOfFrequencyPage from "../pages/lesson/Grammar/materi/AdverbsOfFrequencyPage";








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
      {/* routes materi grammar - beginner */}
      <Route path="/beginner/GrammarIntroPage" element={<GrammarIntroPage />} />
      <Route path="/beginner/SVOPatternPage" element={<SVOPatternPage />} />
      <Route
        path="/beginner/PresentSimplePage"
        element={<PresentSimplePage />}
      />
      <Route
        path="/beginner/PresentContinuousPage"
        element={<PresentContinuousPage />}
      />
      <Route path="/beginner/PastSimplePage" element={<PastSimplePage />} />
      <Route path="/beginner/FutureSimplePage" element={<FutureSimplePage />} />
      <Route
        path="/beginner/CountableUncountablePage"
        element={<CountableUncountablePage />}
      />
      <Route path="/beginner/ArticlesPage" element={<ArticlesPage />} />
      <Route path="/beginner/PronounsPage" element={<PronounsPage />} />
      <Route
        path="/beginner/PossessivePronounsPage"
        element={<PossessivePronounsPage />}
      />
      <Route
        path="/beginner/AdjectivesComparativesPage"
        element={<AdjectivesComparativesPage />}
      />
      <Route
        path="/beginner/AdverbsOfFrequencyPage"
        element={<AdverbsOfFrequencyPage />}
      />

      {/* routes halaman baca  */}
      <Route path="/practice/reading" element={<Reading />} />
    </Routes>
  );
}
