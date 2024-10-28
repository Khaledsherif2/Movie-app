import Header from "../../components/Header/Header";
import "./Login.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { LoginContext } from "../../context/Login";
import { EmailContext } from "../../context/Email";
import { SocketContext } from "../../context/Socket";
import { registerUser, loginUser } from "../../api/auth";

function Login() {
  const socket = useContext(SocketContext);
  const { setCookie } = useContext(LoginContext);
  const { email } = useContext(EmailContext);
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (inputFields.firstName.length < 2 || inputFields.lastName.length < 2) {
      setError("Name must be more than 2 character");
      return;
    }
    const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailFormat.test(inputFields.email)) {
      setError("Invaild Email");
      return;
    }
    if (!inputFields.phone) {
      setError("invalid phone Number");
      return;
    }
    const passFormat = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~-]).{6,}$/;
    if (!passFormat.test(inputFields.password)) {
      setError("Password must be at least 6 characters and contain a symbol");
      return;
    }
    if (inputFields.password.trim() !== inputFields.confirmPassword.trim()) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    const success = await registerUser(inputFields);
    if (success) {
      setIsRegister(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { token } = await loginUser(inputFields);
    let decode = jwtDecode(token);
    socket.emit("registerSocket", decode._id);
    const cookieOptions = rememberMe
      ? { path: "/", maxAge: 60 * 60 * 24 * 2 }
      : { path: "/" };
    setCookie("token", token, cookieOptions);
    navigate("/home");
  };

  return (
    <>
      <Header name={isRegister ? "Register" : "Login"} />
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
            <form className="auth-form" onSubmit={handleRegister}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="auth-input"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="last Name"
                  className="auth-input"
                  onChange={handleChange}
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="auth-input"
                defaultValue={email || ""}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="auth-input"
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="auth-input"
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="auth-input"
                onChange={handleChange}
              />
              {error && <p>{error}</p>}
              <button type="submit" className="auth-button">
                Register
              </button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleLogin}>
              <input
                type="text"
                name="email"
                placeholder="User Name"
                className="auth-input"
                defaultValue={email || ""}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="auth-input"
                onChange={handleChange}
              />
              <div className="remember-container">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={handleRememberMe}
                  />
                  Remember me
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
