import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";
import IMG2 from "../../assets/portfolio2.webp";
import IMG3 from "../../assets/portfolio3.webp";
import IMG4 from "../../assets/portfolio4.webp";
import IMG5 from "../../assets/portfolio5.webp";
import IMG6 from "../../assets/portfolio6.webp";

// data to dynamically generate components

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Lorem",
    github: "https://github.com",
    demo: "#nothing",
  },
  {
    id: 2,
    image: IMG2,
    title: "Lorem",
    github: "https://github.com",
    demo: "#nothing",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lorem",
    github: "https://github.com",
    demo: "#nothing",
  },
  {
    id: 4,
    image: IMG4,
    title: "Lorem",
    github: "https://github.com",
    demo: "#nothing",
  },
  {
    id: 5,
    image: IMG5,
    title: "Lorem",
    github: "https://github.com",
    demo: "#nothing",
  },
  {
    id: 6,
    image: IMG6,
    title: "Lorem",
    github: "https://github.com",
    demo: "#nothing",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
