import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function AppLayout() {
  const location = useLocation();
  const path = location.pathname;

  // แปลง path เช่น "/about" → "about"
  const title = path === "/" ? "home" : path.replace("/", "");

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />

      <main className="flex-1 p-4">
        <Topbar title={title} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200/80 to-green-100/80">
      <Router>
        <AppLayout />
      </Router>
    </div>
  );
}

export default App;
