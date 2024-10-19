import { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
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
      title: "What can i watch in Aflamk",
      content:
        "Aflamk has an extensive library of feature films, documentaries, TV shows, anime, award-winning Aflamk originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 4,
      title: "is Aflamk good for kids",
      content:
        "The Aflamk Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="accordion">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {items.map((item, index) => (
        <div key={item.id} className="accordion-item">
          <div
            className={`accordion-title ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
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
  );
};

export default Accordion;
