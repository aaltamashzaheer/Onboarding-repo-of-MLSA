/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WordPress VS Wix | Which one is better for your business in 2022?",
    description:
      "WordPress and Wix are two of the most popular website builders in the world. But which one is better for your business? In this article, we will compare WordPress vs Wix side by side and show you the pros and cons of each one.",
    url: "https://www.linkedin.com/pulse/wordpress-vs-wix-which-one-better-your-business-2022-altamash-zaheer/?trackingId=Aa8OHtJlQUqpGswvae7akw%3D%3D",
  },
  {
    title: "7 Reasons Why You Need Database in 2022?",
    description:
      "A database is a collection of data that is stored in a computer system. Databases are used to store, organize, and retrieve large amounts of information quickly and efficiently. They are also used for data analysis and reporting purposes.",
    url: "https://www.linkedin.com/pulse/7-reasons-why-you-need-database-2022-altamash-zaheer/?trackingId=fJOM%2FfV3QsSvFw567n6p0g%3D%3D",
  },
  {
    title: "Screenig App Using Html CSS JavaScript",
    description:
      "A screening app created using Html CSS and Bootstrap. Includes a quiz, and a results page.",
    url: "https://github.com/aaltamashzaheer/Basic-Web-Projects-using-HTML-CSS-and-JavaScript/tree/main/Screenig%20App%20Using%20Html%20CSS%20JavaScript",
  },
  {
    title: "Netflix Clone Using Django",
    description:
      "A Netflix clone created using Django and deployed to Heroku. Includes movies and TV shows, a search function, and a watchlist.",
    url: "https://github.com/aaltamashzaheer/Django-Netflix-clone",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
