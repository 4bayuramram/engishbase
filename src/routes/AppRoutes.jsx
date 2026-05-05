import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home.jsx";

import Reading from "../pages/reading/Reading.jsx";


import PreGrammar from "../pages/lesson/PreGrammar/PreGrammar.jsx";
import Grammarpage from "../pages/lesson/Grammar/Grammarpage.jsx";


import Noun from "../pages/lesson/Noun.jsx";
import Adjective from "../pages/lesson/Adjective.jsx";
import Verb from "../pages/lesson/Verb.jsx";
import Pronoun from "../pages/lesson/Pronoun.jsx";
import Pattern from "../pages/lesson/Pattern.jsx";
import Tobe from "../pages/lesson/Tobe.jsx";
import Past from "../pages/lesson/Past.jsx";
import DidntVsNot from "../pages/lesson/DidntVsNot.jsx";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pre-grammar" element={<PreGrammar />} />
      <Route path="/grammar-page" element={<Grammarpage />} />

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
