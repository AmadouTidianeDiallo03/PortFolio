import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import DetailProjet from "./pages/DetailProjet";
import Competences from "./pages/Competences";
import Apropos from "./pages/Apropos";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Introuvable from "./pages/Introuvable";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/components.css";

function App() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:slug" element={<DetailProjet />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Introuvable />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
