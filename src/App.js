import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Locales from "./components/Locales/Locales";
import Productos from "./components/Productos/Productos";
import Negocio from "./components/Negocio/Negocio";
import Local from "./components/Local/Local";
import DashboardNegocio from "./components/DashboardNegocio/DashboardNegocio";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Login />} />
        <Route path="/Locales" element={<Locales />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Negocios" element={<Negocio />} />
        <Route path="/Local" element={<Local />} />
        <Route path="/DashboardNegocio" element={<DashboardNegocio />} />
      </Routes>
    </Router>
  );
};

export default App;
