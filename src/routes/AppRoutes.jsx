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


// path materi Grammar beginner
import GrammarIntroPage from "../pages/lesson/Grammar/materi/beginner/GrammarIntroPage";
import SVOPatternPage from "../pages/lesson/Grammar/materi/beginner/SVOPatternPage";
import PresentSimplePage from "../pages/lesson/Grammar/materi/beginner/PresentSimplePage";
import PresentContinuousPage from "../pages/lesson/Grammar/materi/beginner/PresentContinuousPage";
import PastSimplePage from "../pages/lesson/Grammar/materi/beginner/PastSimplePage";
import FutureSimplePage from "../pages/lesson/Grammar/materi/beginner/FutureSimplePage";
import CountableUncountablePage from "../pages/lesson/Grammar/materi/beginner/CountableUncountablePage";
import ArticlesPage from "../pages/lesson/Grammar/materi/beginner/ArticlesPage";
import PronounsPage from "../pages/lesson/Grammar/materi/beginner/PronounsPage";
import PossessivePronounsPage from "../pages/lesson/Grammar/materi/beginner/PossessivePronounsPage";
import AdjectivesComparativesPage from "../pages/lesson/Grammar/materi/beginner/AdjectivesComparativesPage";
import AdverbsOfFrequencyPage from "../pages/lesson/Grammar/materi/beginner/AdverbsOfFrequencyPage";
import PrepositionsOfTimePage from "../pages/lesson/Grammar/materi/beginner/PrepositionsOfTimePage";
import PrepositionsOfPlacePage from "../pages/lesson/Grammar/materi/beginner/PrepositionsOfPlacePage";
import YesNoQuestionsFormationPage from "../pages/lesson/Grammar/materi/beginner/YesNoQuestionsFormationPage";
import WhQuestionsPage from "../pages/lesson/Grammar/materi/beginner/WhQuestionsPage";
import BasicConjunctionsPage from "../pages/lesson/Grammar/materi/beginner/BasicConjunctionsPage";
import ImperativesPage from "../pages/lesson/Grammar/materi/beginner/ImperativesPage";
import ModalVerbsBasicsPage from "../pages/lesson/Grammar/materi/beginner/ModalVerbsBasicsPage";
import ConditionalsType0Page from "../pages/lesson/Grammar/materi/beginner/ConditionalsType0Page";

// path materi Grammar intermediate
import IntermediateGrammarPage1 from "../pages/lesson/Grammar/materi/intermediate/IntermediateGrammarPage1";
import PastPerfectTensePage from "../pages/lesson/Grammar/materi/intermediate/PastPerfectTensePage";
;





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
      <Route
        path="/beginner/PrepositionsOfTimePage"
        element={<PrepositionsOfTimePage />}
      />
      <Route
        path="/beginner/PrepositionsOfPlacePage"
        element={<PrepositionsOfPlacePage />}
      />
      <Route
        path="/beginner/YesNoQuestionsFormationPage"
        element={<YesNoQuestionsFormationPage />}
      />
      <Route path="/beginner/WhQuestionsPage" element={<WhQuestionsPage />} />
      <Route
        path="/beginner/BasicConjunctionsPage"
        element={<BasicConjunctionsPage />}
      />
      <Route path="/beginner/ImperativesPage" element={<ImperativesPage />} />
      <Route
        path="/beginner/ModalVerbsBasicsPage"
        element={<ModalVerbsBasicsPage />}
      />
      <Route
        path="/beginner/ConditionalsType0Page"
        element={<ConditionalsType0Page />}
      />
      {/* routes materi grammar - intermediate */}
      <Route
        path="/intermediate/IntermediateGrammarPage1"
        element={<IntermediateGrammarPage1 />}
      />
      <Route
        path="/intermediate/PastPerfectTensePage"
        element={<PastPerfectTensePage />}
      />

      {/* routes halaman baca  */}
      <Route path="/practice/reading" element={<Reading />} />
    </Routes>
  );
}
