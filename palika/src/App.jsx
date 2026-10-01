import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Notices from "./pages/Notices";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import BirthApplication from "./pages/BirthApplication";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/birth-application"
  element={<BirthApplication />}
/>
<Route
  path="/birth-application"
  element={<BirthApplication />}
/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;