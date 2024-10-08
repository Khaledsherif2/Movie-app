import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="../../images/aflamk.png" />
          </Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <div>
            {search ? (
              <>
                <i
                  className="fa-regular fa-circle-xmark"
                  style={{ fontSize: "1.8rem" }}
                  onClick={() => setSearch(false)}
                ></i>
                <div className="search">
                  <input type="text" placeholder="Search" />
                </div>
              </>
            ) : (
              <i
                className="fa-regular fa-magnifying-glass"
                onClick={() => setSearch(true)}
              ></i>
            )}
          </div>
          <div>
            <i
              className="fa-sharp fa-solid fa-bell"
              onClick={() => setNotification(notification ? false : true)}
            ></i>
            <span>1</span>
            {notification && (
              <div className="notifications">
                <h3>Notifications</h3>
                <div className="notification-item">
                  <img
                    src="../../images/icon.png"
                    alt="Profile"
                    className="avatar"
                  />
                  <div className="notification-text">
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <span className="time">16 hours ago</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <img src="../../../public/images/avatar.png" />
          </div>
          <i
            className="fa-duotone fa-solid fa-bars-staggered"
            onClick={() => setMenu(true)}
          ></i>
          <button className="btn">Log Out</button>
        </div>
      </div>
      {menu && (
        <>
          <div className="menu">
            <div className="header">
              <div className="logo">
                <img src="../../images/aflamk.png" alt="main-logo" />
              </div>
              <div className="exit">
                <i
                  className="fa-solid fa-circle-xmark"
                  onClick={() => setMenu(false)}
                ></i>
              </div>
            </div>
            <div className="content">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <button className="btn">Log Out</button>
            </div>
          </div>
          <div className="overly"></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
