import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ name }) => {
  return (
    <div className="main-header">
      <h3>{name}</h3>
      <Link to="/">Home</Link>
      <span>|</span>
      <p>{name}</p>
    </div>
  );
};

export default Header;
