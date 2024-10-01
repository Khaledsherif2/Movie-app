import Header from "../../components/Header/Header";
import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <>
      <Header name="Login & Register" />
      <div className="login-container">
        <div className="auth-container">
          <div className="toggle-container">
            <span
              className={!isRegister ? "active" : "inactive"}
              onClick={() => setIsRegister(false)}
            >
              Login
            </span>
            <span className="space">|</span>
            <span
              className={isRegister ? "active" : "inactive"}
              onClick={() => setIsRegister(true)}
            >
              Register
            </span>
          </div>

          {isRegister ? (
            <form className="auth-form">
              <input
                type="text"
                placeholder="User Name"
                className="auth-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="auth-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="auth-input"
              />
              <button type="submit" className="auth-button">
                Register
              </button>
            </form>
          ) : (
            <form className="auth-form">
              <input
                type="text"
                placeholder="User Name"
                className="auth-input"
              />
              <input
                type="password"
                placeholder="Password"
                className="auth-input"
              />
              <div className="remember-container">
                <label className="checkbox">
                  <input type="checkbox" /> Remember me
                </label>
                <Link to="#" className="forgot-password">
                  Forgot Password?
                </Link>
              </div>
              <button type="submit" className="auth-button">
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
