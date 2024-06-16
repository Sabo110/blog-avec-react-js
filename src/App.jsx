import Home from "./pages/Home"
import Sport from "./pages/Sport"
import RelationManWoman from "./pages/RelationManWoman"
import Motivation from "./pages/Motivation"
import SingleArticle from "./pages/SingleArticle";

import { Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
function App() {


  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/motivation" element={<Motivation />} />
          <Route path="/relation-homme-femme" element={<RelationManWoman />} />
          <Route path="/sport/:slug" element={<SingleArticle />} />
          <Route path="/motivation/:slug" element={<SingleArticle />} />
          <Route path="/relation-homme-femme/:slug" element={<SingleArticle />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
