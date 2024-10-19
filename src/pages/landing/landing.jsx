import "./Landing.css";
import { useEffect, useContext, useState } from "react";
import MultiSlider from "../../components/Multislider/MultiSlider";
import { useNavigate } from "react-router";
import { LoginContext } from "../../context/Login";
import { EmailContext } from "../../context/Email";

const Landing = () => {
  const { decodeToken } = useContext(LoginContext);
  const { setEmail } = useContext(EmailContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    if (decodeToken) {
      navigate("/home");
      return;
    }
  }, [decodeToken, navigate]);

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
          <h2>550+</h2>
          <p>Total Videos</p>
        </div>
        <div className="static">
          <h2>10+</h2>
          <p>Position</p>
        </div>
        <div className="static">
          <h2>200+</h2>
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

      <div className="latest-movies">
        <p className="latest-movies-title">Latest & Popular Movies</p>
        <MultiSlider />
      </div>

      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-container">
          {[
            {
              question: "What is Afalmk?",
              answer:
                "Aflamk is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!",
            },
            {
              question: "How expensive is Afalmk?",
              answer:
                "Afalmk offers affordable packages starting from $9.99/month.",
            },
            {
              question: "Can I watch with Afalmk everywhere?",
              answer: "Yes, Afalmk is available on all devices and regions.",
            },
            {
              question: "How easy is cancelling the subscription?",
              answer:
                "Cancelling your subscription is simple and can be done with one click in your account settings.",
            },
            {
              question: "What else can I watch with Afalmk?",
              answer:
                "You can watch a variety of movies, TV shows, documentaries, and more with Afalmk.",
            },
          ].map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className={`faq-question ${
                  activeIndex === index ? "open" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <span className="arrow">
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
