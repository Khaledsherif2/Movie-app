import MultiSlider from "../../components/Multislider/MultiSlider";
import Navbar from "../../components/Navbar/Navbar";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import "./Home.css";

function Home() {
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
         Old  Movies

        <hr />
        <MultiSlider />
      </div>

    
    </div>
  );
}

export default Home;
