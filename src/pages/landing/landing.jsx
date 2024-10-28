import "./landing.css";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { EmailContext } from "../../context/Email";
import Accordion from "../../components/Accordion/Accordion";

const Landing = () => {
  const { setEmail } = useContext(EmailContext);
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="reg-part">
        <div className="reg-top">
          <img src="../../../images/aflamk.png" alt="logo" />
          <button className="sign-in" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>
        <div className="reg-content">
          <h1>
            Endless movies, TV <br /> shows, and more.
          </h1>
          <h2>Enjoy anywhere. Unsubscribe anytime.</h2>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <form className="email-form" onSubmit={() => navigate("/login")}>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Get Started</button>
          </form>
        </div>
      </div>
      <div className="tv-part">
        <div className="tv-content">
          <h2>Enjoy Watching Them on TV.</h2>
          <p>
            Whether it’s Smart TV, Xbox, Apply TV, Watch Your <br /> Favorite
            Program with Great Pleasure.
          </p>
        </div>
        <div className="tv-img">
          <img src="../../../img-landing/landing-tv.webp" />
        </div>
      </div>
      <div className="statics">
        <div className="static">
          <h2>29+</h2>
          <p>Total Videos</p>
        </div>
        <div className="static">
          <h2>5+</h2>
          <p>Position</p>
        </div>
        <div className="static">
          <h2>5+</h2>
          <p>Subscribers</p>
        </div>
        <div className="static">
          <h2>100+</h2>
          <p>Awards</p>
        </div>
      </div>
      <div className="download">
        <div className="download-img">
          <img src="../../../img-landing/landing-download.webp" />
        </div>
        <div className="download-content">
          <h2>
            Download Favorites, Watch them <br /> Offline!.
          </h2>
          <br /> <br />
          <p>It’s super easy to save your favorite shows!</p>
        </div>
      </div>
      <div className="watch">
        <div className="watch-content">
          <h2>Watch Anywhere You Want.</h2>
          <br /> <br />
          <p>
            Watch an endless number of shows, on your phone, <br /> tablet,
            laptop, and TV.
          </p>
        </div>
        <div className="watch-img">
          <img src="../../../img-landing/landing-watch.webp" />
        </div>
      </div>
      <Accordion />
    </div>
  );
};

export default Landing;
