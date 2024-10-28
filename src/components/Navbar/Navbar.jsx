import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/Login";
import { NotificationContext } from "../../context/NotificationContext";
import NotificationCard from "../Notifications/NotificationCard";

const Navbar = () => {
  const { removeCookie, decodeToken } = useContext(LoginContext);
  const { notifications } = useContext(NotificationContext);
  const [notificationDisplay, setNotificationDisplay] = useState(false);
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  // console.log(decodeToken);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="../../images/aflamk.png" alt="logo" />
          </Link>
        </div>
        <div className="links">
          <ul style={decodeToken.role === "ADMIN" ? { gap: "21px" } : {}}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/watchlist">Watch List</Link>
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
            {decodeToken.role === "ADMIN" ? (
              <li>
                <Link to="/admin">Dashborad</Link>
              </li>
            ) : (
              <li>
                <Link to="/create">Upload Movie</Link>
              </li>
            )}
          </ul>
        </div>
        <div className="icons">
          <div>
            <i
              className="fa-regular fa-magnifying-glass"
              onClick={() => {
                navigate("/search");
              }}
            ></i>
          </div>
          <div>
            <i
              className="fa-sharp fa-solid fa-bell"
              onClick={() =>
                setNotificationDisplay(notificationDisplay ? false : true)
              }
            ></i>
            {notifications.length > 0 && <span>{notifications.length}</span>}
            {notificationDisplay && (
              <>
                <div className="notifications">
                  <h3>Notifications</h3>
                  {notifications.length === 0 ? (
                    <p>No new notifications</p>
                  ) : (
                    notifications.map((notification, index) => (
                      <NotificationCard
                        key={index}
                        notification={notification}
                      />
                    ))
                  )}
                </div>
              </>
            )}
          </div>
          <div>
            <Link to="/profile">
              <img
                src={
                  decodeToken
                    ? decodeToken.avatar
                      ? decodeToken.avatar
                      : "../../../images/avatar.png"
                    : "../../../images/avatar.png"
                }
                alt="avatar"
              />
            </Link>
          </div>
          <i
            className="fa-duotone fa-solid fa-bars-staggered"
            onClick={() => setMenu(true)}
          ></i>
          <button
            className="btn"
            onClick={() => {
              removeCookie("token");
              navigate("/");
            }}
          >
            Log Out
          </button>
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
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/movies">Movies</Link>
                </li>
                <li>
                  <Link to="/watchlist">Watch List</Link>
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
                {decodeToken.role === "ADMIN" ? (
                  <li>
                    <Link to="/admin">Dashborad</Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/create">Upload Movie</Link>
                  </li>
                )}
              </ul>
              <button
                className="btn"
                onClick={() => {
                  removeCookie("token");
                  navigate("/");
                }}
              >
                Log Out
              </button>
            </div>
          </div>
          <div className="overly"></div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
