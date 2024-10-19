import Navbar from "../../components/Navbar/Navbar";
import "./stream.css";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/Login";
import Header from "../../components/Header/Header";

function Stream() {
  const { decodeToken } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!decodeToken) {
      navigate("/login");
      return;
    }
  }, [decodeToken, navigate]);

  return (
    <>
      <Navbar />
      <Header name="Movie name" data="2024 • HD • 2h 30m" />
      <div className="stream">
        <section className="content-details">
          <div className="video-container" id="video-container">
            <iframe
              src="https://www.youtube.com/embed/FEHSMnoHIXQ?si=NpeU2wDnZdSal7Qo"
              title="YouTube video player"
              className="responsive-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="movie-description">
            <p className="release-date">Date: January 1, 2024</p>
            <p className="description">
              Get access to the direct Project Overview with this report. Just
              by a quick glance, you’ll have an idea of the total tasks allotted
              to the team, number of milestones given & completed, total Links
              created for the project and the total time taken by all the users.
              Each section would elaborate the data further, if chosen.
            </p>
          </div>
          <div className="share-links">
            <h2>Share this movie:</h2>
            <a className="share-links-a" href="facebook.com">
              <img className="icons" src="/icons/facebook.png" alt="facebook" />
            </a>
            <a className="share-links-a" href="twitter.com">
              <img className="icons" src="/icons/twitter.png" alt="Twitter" />
            </a>
            <a className="share-links-a" href="instagram.com">
              <img className="icons" src="/icons/social.png" alt="Instagram" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Stream;
