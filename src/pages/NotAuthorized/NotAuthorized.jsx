import Header from "../../components/Header/Header";
import "./NotAuthorized.css";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header name="Not Authorized" />
      <div className="notFound">
        <div className="container">
          <h1 className="title">403</h1>
          <h2 className="subtitle">Oops! Not Authorized</h2>
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
