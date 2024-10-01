import { useState } from "react";
import "./About.css";

function About() {
  const items = [
    {
      id: 1,
      title: "What is Aflamk",
      content:
        "Aflamk is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      id: 2,
      title: "Where can i watch",
      content:
        "Watch anywhere, anytime. Sign in with your Aflamk account to watch instantly on the web at Aflamk.com from your personal computer or on any internet-connected device that offers the Aflamk app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Aflamk with you anywhere.",
    },
    {
      id: 3,
      title: "How do i cancel",
      content:
        "Aflamk is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 4,
      title: "What can i watch in Aflamk",
      content:
        "Aflamk has an extensive library of feature films, documentaries, TV shows, anime, award-winning Aflamk originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 5,
      title: "is Aflamk good for kids",
      content:
        "The Aflamk Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(true);
  };

  return (
    <div className="about">
      <div className="nav-about">
        <h3>About Us</h3>
        <a href="/">Home</a>
        <span>|</span>
        <p>About Us</p>
      </div>

      <div className="choose-us">
        <div className="left">
          <h5>Why Choose Us</h5>
          <p>
            Our company stands out due to our commitment to delivering
            high-quality services that meet the unique needs of our clients.
            With a team of experienced professionals, we focus on innovation,
            customer satisfaction, and tailored solutions that drive success. We
            prioritize transparency, reliability, and excellence in everything
            we do.
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
            Our primary objective is to empower businesses and individuals with
            cutting-edge solutions that enhance efficiency and foster growth. We
            strive to be a trusted partner by delivering customized strategies
            that meet evolving market demands, ensuring sustainable success for
            our clients.
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
            <iframe className="frame"
              
              src="https://www.youtube.com/embed/BXrCWq7DCfg?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        )}

        <h5>See Videos How It Works</h5>
        <img src="./img-about/title-bg.webp" alt="Title Background" />
        <p>
          Watch our videos to explore how our innovative solutions work and how
          they <br /> can help you achieve your goals effectively.
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
          Our team is comprised of highly skilled and experienced professionals
          who are passionate <br /> about delivering exceptional results.
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

      <div className="accordion">
        {items.map((item, index) => (
          <div key={item.id} className="accordion-item">
            <div
              className={`accordion-title ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              {item.title}
              <span>{activeIndex === index ? "▲" : "▼"}</span>
            </div>
            <div
              className={`accordion-content ${
                activeIndex === index ? "show" : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
