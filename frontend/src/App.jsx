import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"; // สมมุติมีหน้า Contact เพิ่ม

function App() {
  return (
    <div className="flex" style={{background: "linear-gradient(154deg, rgba(214, 214, 214, 0.82) 0%, rgba(188, 252, 184, 0.86) 100%)"}}>
      <Router>
        <Navbar /> {/* แสดง Navbar ทุกหน้า */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> {/* เพิ่มหน้าใหม่ */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
