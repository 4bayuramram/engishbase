import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";

import Reading from "../pages/reading/Reading";


import PreGrammar from "../pages/lesson/PreGrammar/PreGrammar";
import GrammarPage from "../pages/lesson/Grammar/GrammarPage";


import Noun from "../pages/lesson/Noun";
import Adjective from "../pages/lesson/Adjective";
import Verb from "../pages/lesson/Verb";
import Pronoun from "../pages/lesson/Pronoun";
import Pattern from "../pages/lesson/Pattern";
import Tobe from "../pages/lesson/Tobe";
import Past from "../pages/lesson/Past";
import DidntVsNot from "../pages/lesson/DidntVsNot";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pre-grammar" element={<PreGrammar />} />
      <Route path="/grammar-page" element={<GrammarPage />} />

      <Route path="/noun" element={<Noun />} />
      <Route path="/adjective" element={<Adjective />} />
      <Route path="/verb" element={<Verb />} />
      <Route path="/pronoun" element={<Pronoun />} />
      <Route path="/pattern" element={<Pattern />} />
      <Route path="/tobe" element={<Tobe />} />
      <Route path="/past" element={<Past />} />
      <Route path="/didntvsnot" element={<DidntVsNot />} />

      <Route path="/practice/reading" element={<Reading />} />
    </Routes>
  );
}
