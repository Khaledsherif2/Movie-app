import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <img src="../../images/aflamk.png" />
      </div>
      <div className="description">
        With a search first mentality across digital marketing, our passionate
        consulting team is hands-on to help conquer anything
      </div>
      <div className="social-icons">
        <Link to="/contact">
          <i className="fab fa-facebook"></i>
        </Link>
        <Link to="/contact">
          <i className="fab fa-twitter"></i>
        </Link>
        <Link to="/contact">
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="/contact">
          <i className="fab fa-instagram"></i>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/services">Series</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="legal-links">
        <Link to="/contact">Report a Bug</Link>
        <Link to="/contact">Request a Feature</Link>
        <Link to="/contact">Content Grievance</Link>
        <Link to="/contact">Movie Request</Link>
        <Link to="/contact">Submit Your Story</Link>
        <Link to="/contact">Privacy Policy</Link>
        <Link to="/contact">Terms of Services</Link>
        <Link to="/contact">Support</Link>
      </div>
      <div className="bottom-bar">
        <p>Copyright &copy; 2024 All right reserved</p>
        <div>
          <span>Already have an Account?</span>
          <Link to="/login">LOGIN</Link>
          <Link className="btn" to="/login">
            Become a Member
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
