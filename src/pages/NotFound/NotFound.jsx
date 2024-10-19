import Navbar from "../../components/Navbar/Navbar";
import "./NotFound.css";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="notFound">
        <div className="container">
          <h1 className="title">404</h1>
          <h2 className="subtitle">Oops! Page not found</h2>
          <p className="message">
            We can&apos;t seem to find the page you&apos;re looking for. It
            might have been removed, or the URL may be incorrect.
          </p>
          <button onClick={() => navigate("/home")}>Go Back to Homepage</button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
