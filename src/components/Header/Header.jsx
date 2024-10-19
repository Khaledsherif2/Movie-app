import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ name, data }) => {
  return (
    <div className="main-header">
      <h3>{name}</h3>
      <Link to="/home">Home</Link>
      <span>|</span>
      <p>{data ? data : name}</p>
    </div>
  );
};

export default Header;
