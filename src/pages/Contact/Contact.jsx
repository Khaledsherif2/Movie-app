import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/Login";

const Contact = () => {
  const { decodeToken } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!decodeToken) {
      navigate("/login");
      return;
    }
  }, [decodeToken, navigate]);

  return (
    <>
      <Navbar />
      <Header name="Contact Us" />
      <div className="contact">
        <div className="container">
          <form>
            <div className="form-grid">
              <input type="text" placeholder="Enter Your Name" />
              <input type="email" placeholder="Enter Your Email" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
            </div>
            <div>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
