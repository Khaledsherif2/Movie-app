import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./About.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import { LoginContext } from "../../context/Login";
import Accordion from "../../components/Accordion/Accordion";

function About() {
  const [showIframe, setShowIframe] = useState(false);
  const { decodeToken } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!decodeToken) {
      navigate("/login");
      return;
    }
  }, [decodeToken, navigate]);

  const handleClick = () => {
    setShowIframe(true);
  };

  return (
    <>
      <Navbar />
      <Header name="About us" />
      <div className="about">
        <div className="choose-us">
          <div className="left">
            <h5>Why Choose Us</h5>
            <p>
              Our company stands out due to our commitment to delivering
              high-quality services that meet the unique needs of our clients.
              With a team of experienced professionals, we focus on innovation,
              customer satisfaction, and tailored solutions that drive success.
              We prioritize transparency, reliability, and excellence in
              everything we do.
            </p>
          </div>
          <div className="right">
            <img src="./img-about/why-choose-us-02.webp" alt="Why Choose Us" />
          </div>
        </div>
        <div className="info-about">
          <div className="info">
            <h5>Our Sponsor & Partner</h5>
            <p>
              We are proud to collaborate with leading industry sponsors and
              partners who share our vision for innovation and growth. Their
              support helps us continuously improve our services and expand our
              reach. Our partners bring valuable expertise and resources,
              contributing to the long-term success of our clients and projects.
            </p>
          </div>
          <div className="info">
            <h5>Our Objective</h5>
            <p>
              Our primary objective is to empower businesses and individuals
              with cutting-edge solutions that enhance efficiency and foster
              growth. We strive to be a trusted partner by delivering customized
              strategies that meet evolving market demands, ensuring sustainable
              success for our clients.
            </p>
          </div>
          <div className="info">
            <h5>Our Achievement</h5>
            <p>
              Over the years, we have achieved significant milestones, including
              expanding our customer base, receiving industry recognition, and
              successfully completing numerous high-profile projects. Our
              achievements reflect our dedication to quality and innovation.
            </p>
          </div>
        </div>
        <div className="watch-video">
          {showIframe && (
            <div className="video">
              <i
                className="fa-solid fa-x"
                onClick={() => {
                  setShowIframe(false);
                }}
              ></i>
              <iframe
                className="frame"
                src="https://www.youtube.com/embed/BXrCWq7DCfg?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                title="OurApp"
              ></iframe>
            </div>
          )}
          <h5>See Videos How It Works</h5>
          <img src="./img-about/title-bg.webp" alt="Title Background" />
          <p>
            Watch our videos to explore how our innovative solutions work and
            how they <br /> can help you achieve your goals effectively.
          </p>
          <div className="vid">
            <button className="btn-vid" onClick={handleClick}>
              <i className="fa-duotone fa-solid fa-play"></i>
            </button>
            <img src="./img-about/mokup-06.webp" alt="Video Mockup" />
          </div>
        </div>
        <div className="statistics">
          <div className="statistic">
            <img src="./img-about/cout-01.webp" alt="Satisfied Customer Icon" />
            <h5>240</h5>
            <p>Satisfied Customers</p>
          </div>
          <div className="statistic">
            <img src="./img-about/cout-02.webp" alt="Project Complete Icon" />
            <h5>546</h5>
            <p>Projects Complete</p>
          </div>
          <div className="statistic">
            <img src="./img-about/cout-03.webp" alt="Cup of Coffee Icon" />
            <h5>350</h5>
            <p>Cups of Coffee</p>
          </div>
          <div className="statistic">
            <img src="./img-about/cout-04.webp" alt="Award Winning Icon" />
            <h5>156</h5>
            <p>Award Winning</p>
          </div>
        </div>
        <div className="team">
          <h3>Best Team</h3>
          <img src="./img-about/title-bg.webp" alt="Title Background" />
          <p>
            Our team is comprised of highly skilled and experienced
            professionals who are passionate <br /> about delivering exceptional
            results.
          </p>
          <div className="members">
            <div className="member">
              <img src="./img-about/team-03.webp" alt="Khaled" />
              <h5>Khaled</h5>
            </div>
            <div className="member">
              <img src="./img-about/team-01.webp" alt="Ahmed" />
              <h5>Ahmed</h5>
            </div>
            <div className="member">
              <img src="./img-about/team-02.webp" alt="Dina" />
              <h5>Dina</h5>
            </div>
            <div className="member">
              <img src="./img-about/team-04.webp" alt="Yasmeen" />
              <h5>Yasmeen</h5>
            </div>
            <div className="member">
              <img src="./img-about/team-02.webp" alt="Menna" />
              <h5>Menna</h5>
            </div>
          </div>
        </div>
        <Accordion />
      </div>
    </>
  );
}

export default About;
