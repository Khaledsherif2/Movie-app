import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Register-Login/Login";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Stream from "./pages/stream/stream";
import Home from "./pages/Home/Home";
import Landing from "./pages/landing/landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/stream" element={<Stream />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
