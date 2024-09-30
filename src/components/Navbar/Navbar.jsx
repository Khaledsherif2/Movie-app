import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [notification, setNotification] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img src="../../images/aflamk.png" />
            </NavLink>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact
                </NavLink>
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
              <img src="../../images/icon.png" />
            </div>
            <i
              className="fa-duotone fa-solid fa-bars-staggered"
              onClick={() => setMenu(true)}
            ></i>
            <button>Log Out</button>
          </div>
        </div>
      </nav>
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
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="overly"></div>
        </>
      )}
    </>
  );
};

export default Navbar;
