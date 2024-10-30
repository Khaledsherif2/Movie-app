import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/landing";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Register-Login/Login";
import Stream from "./pages/stream/stream";
import Footer from "./components/Footer/Footer";
import Watchlist from "./pages/WatchList/Watchlist";
import Movies from "./pages/Movies/Movies";
import Search from "./pages/Search/Search";
import Admin from "./pages/Admin/Admin";
import Create from "./pages/AddMovie/Create";
import NotFound from "./pages/NotFound/NotFound";
import NotAuthorized from "./pages/NotAuthorized/NotAuthorized";
import AdminRoute from "./Routes/AdminRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginProvider } from "./context/Login";
import { EmailProvider } from "./context/Email";
import { MovieProvider } from "./context/WatchMovie";
import { SocketProvider } from "./context/Socket";
import { NotificationProvider } from "./context/NotificationContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <SocketProvider>
          <EmailProvider>
            <MovieProvider>
              <LoginProvider>
                <NotificationProvider>
                  <ToastContainer />
                  <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                      path="/home"
                      element={
                        <ProtectedRoute>
                          <Home />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/movies"
                      element={
                        <ProtectedRoute>
                          <Movies />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/watchlist"
                      element={
                        <ProtectedRoute>
                          <Watchlist />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/about"
                      element={
                        <ProtectedRoute>
                          <About />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <ProtectedRoute>
                          <Profile />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/contact"
                      element={
                        <ProtectedRoute>
                          <Contact />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/search"
                      element={
                        <ProtectedRoute>
                          <Search />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/stream"
                      element={
                        <ProtectedRoute>
                          <Stream />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/admin"
                      element={
                        <AdminRoute>
                          <Admin />
                        </AdminRoute>
                      }
                    />
                    <Route
                      path="/create"
                      element={
                        <ProtectedRoute>
                          <Create />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="/notAuthorized" element={<NotAuthorized />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                  <Footer />
                </NotificationProvider>
              </LoginProvider>
            </MovieProvider>
          </EmailProvider>
        </SocketProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
