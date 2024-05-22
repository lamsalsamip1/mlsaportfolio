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
    title: "CleanCam",
    description:
      "Computer Vision based tool to detect littering. Won 1st place at DeerHack 2023",
    url: "https://devfolio.co/projects/cleancam-a709",
  },
  {
    title: "NEB Exam Preparation Apps",
    description:
      "English and Nepali subject exam preparation app for school.",
    url: "https://play.google.com/store/apps/developer?id=Samip+Lamsal&hl=en&gl=US",
  },
  {
    title: "Federal Election 2079 Tracker",
    description:
      "Web app to track the results of the federal election 2079.",
    url: "https://ktmelection.netlify.app/",
  },
  {
    title: "Nepali Handwritten Digit Recognition",
    description:
      "A NN based model to detect nepali handwritten digits.",
    url: "https://devfolio.co/projects/nepali-handwritten-digit-recognizer-178e",
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
