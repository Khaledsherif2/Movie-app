import MultiSlider from "../../components/Multislider/MultiSlider";
import Navbar from "../../components/Navbar/Navbar";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import "./Home.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/Login";

function Home() {
  const { decodeToken } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!decodeToken) {
      navigate("/login");
      return;
    }
  }, [decodeToken, navigate]);

  return (
    <div className="home">
      <Navbar />
      <SimpleSlider />
      <div className="mlti-container">
        Latest Movies
        <hr />
        <MultiSlider />
      </div>
      <div className="mlti-container ">
        Movies
        <hr />
        <MultiSlider />
      </div>
      <SimpleSlider />
      <div className="mlti-container ">
        Old Movies
        <hr />
        <MultiSlider />
      </div>
    </div>
  );
}

export default Home;
