import "./Login.css";
import { useState } from "react";

function Login() {
  const [isRegister, setIsRegister] = useState(false);


  return (
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
          <input type="text" placeholder="User Name" className="auth-input" />
          <input type="email" placeholder="Your Email" className="auth-input" />
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
          <input type="text" placeholder="User Name" className="auth-input" />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
          />
          <div className="remember-container">
            <label className="checkbox">
              <input  type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
      )}
    </div>

    </div>
    
  );
}

export default Login;
