import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"; // สมมุติมีหน้า Contact เพิ่ม

function App() {
  return (
    <Router>
      <Navbar /> {/* แสดง Navbar ทุกหน้า */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* เพิ่มหน้าใหม่ */}
      </Routes>
    </Router>
  );
}

export default App;
