import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import CardSlider from "../../components/CardSlider/CardSlider";
import Header from "../../components/Header/Header";

const Home = () => {
  const cards = [
    { title: "IT", imageUrl: "../../../img-home/horror.jpg" },
    { title: "IT", imageUrl: "../../../img-home/horror.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
    { title: "Alaa Eldin", imageUrl: "../../../img-home/Alaaeldin.jpg" },
  ];

  return (
    <>
      <Navbar />
      <Header name="Moviesta" />
      <div className="home">
        <Slider />
        <div className="cards-container">
          <h2>Recommeneded For You</h2>
          <CardSlider cards={cards} />
          <h2>Action Movies</h2>
          <CardSlider cards={cards} />
          <h2>Horror Movies</h2>
          <CardSlider cards={cards} />
        </div>
        <Slider />
        <div className="cards-container">
          <h2> Award Winning Movies </h2>
          <CardSlider cards={cards} />
          <h2> Romantic Movies </h2>
          <CardSlider cards={cards} />
        </div>
      </div>
    </>
  );
};

export default Home;
