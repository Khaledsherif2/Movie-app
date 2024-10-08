import Navbar from "./components/Navbar/Navbar";
<<<<<<< HEAD

=======
>>>>>>> master
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Register-Login/Login";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Stream from "./pages/stream/stream";
<<<<<<< HEAD
import Home from "./pages/Home/Home";
import Landing from "./pages/landing/landing";
=======
>>>>>>> master

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
=======
          <Route path="/" element={<Navbar />} />
>>>>>>> master
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
