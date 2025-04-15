// App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { Home } from './pages/Home';
import { About } from './pages/About';
import "./App.css";

export default function App() {
  return (
    <div>
    <Router>
      <Header />

      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </Router>
    </div>
  );
}