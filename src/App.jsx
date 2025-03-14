import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import TechStackPage from "./components/pages/TechStackPage";
import CertificationPage from "./components/pages/CertificationPage";
import ProjectPage from "./components/pages/ProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/tech-stacks" element={<TechStackPage />} />
        <Route exact path="/certifications" element={<CertificationPage />} />
        <Route exact path="/projects" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
