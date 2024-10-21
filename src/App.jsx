import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Register-Login/Login";
import Stream from "./pages/stream/stream";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Watchlist from "./pages/WatchList/Watchlist";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Admin from "./pages/Admin-page/Admin";
import Create from "./pages/Create-mov/Create";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginProvider } from "./context/Login";
import { EmailProvider } from "./context/Email";

function App() {
  return (
    <>
      <EmailProvider>
        <LoginProvider>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/create" element={<Create />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/stream" element={<Stream />} />
              <Route path="/search" element={<Search />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </LoginProvider>
      </EmailProvider>
    </>
  );
}

export default App;
