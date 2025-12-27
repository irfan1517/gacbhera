import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const cards = [
    {
      title: "Know Us",
      image: "/images/about1.jpg",
      icon: "📊",
      text: `Established in 1882 at Lahore, the University of the Punjab is the
      largest and the oldest seat of higher learning in Pakistan.`
    },
    {
      title: "Mission Statement",
      image: "/images/about2.jpg",
      icon: "📋",
      text: `Our mission is to provide quality education and nurture graduates
      with creative thinking, research skills and leadership qualities.`
    },
    {
      title: "Our Vision",
      image: "/images/about3.jpg",
      icon: "👁️",
      text: `Develop scientific, socio-cultural and economic leadership through
      learner-centered teaching and quality research.`
    }
  ];

  return (
    <section className="about-section">
      <h1 className="about-heading title-text">ABOUT US</h1>

      <div className="about-cards">
        {cards.map((card, index) => (
          <div className="about-card" key={index}>
            <div className="image-wrapper">
              <img src={card.image} alt={card.title} />
              <div className="icon-circle">{card.icon}</div>
            </div>

            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
