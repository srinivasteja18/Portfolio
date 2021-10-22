import React from "react";
import { Carousel } from "react-carousel-minimal";

export default function Experience() {
  const data = [
    {
      image: "https://i.postimg.cc/yx9LvqQJ/portfolio.png",
      caption: `<div class="projects-section-caption">
                    Portfolio Website
                    <br/>
                    <div class="projects-section-buttons">
                      <a href="https://srinivas-teja-18.netlify.app" target="_blank"><button class="projects-section-button" >View</button></a>
                      <a href="https://github.com/srinivasteja18/Sorting-Visualiser" target="_blank"><button class="projects-section-button">Code</button></a>
                    </div>
                    
              </div>`,
    },

    {
      image: "https://i.postimg.cc/bY3rwG3B/sortingvisualiser.png",
      caption: `<div class="projects-section-caption">
                    Sorting Visualizer
                    <br/>
                    <div class="projects-section-buttons">
                    <a href="https://srinivas-teja-18.netlify.app" target="_blank"><button class="projects-section-button" >View</button></a>
                    <a href="https://github.com/srinivasteja18/Sorting-Visualiser" target="_blank"><button class="projects-section-button">Code</button></a>
                    </div>
              </div>`,
    },
    {
      image: "https://i.postimg.cc/SNPKcB0L/pathfinder.png",
      caption: `<div class="projects-section-caption">
                    Pathfinding Visualizer
                    <br/>
                    <div class="projects-section-buttons">
                    <a href="https://srinivasteja-18.netlify.app/" target="_blank"><button class="projects-section-button" >View</button></a>
                    <a href="https://github.com/srinivasteja18/PathFinding-Visualiser" target="_blank"><button class="projects-section-button">Code</button></a>
                    </div>
              </div>`,
    },
    {
      image: "https://i.postimg.cc/wjsj2wHC/rockpaperscissor.png",
      caption: `<div class="projects-section-caption">
                    Rock Paper Scissor
                    <br/>
                    <div class="projects-section-buttons">
                    <a href="https://srinivasteja18.github.io/Rock-Paper-scissor-Game/" target="_blank"><button class="projects-section-button" >View</button></a>
                    <a href="https://github.com/srinivasteja18/Rock-Paper-scissor-Game" target="_blank"><button class="projects-section-button">Code</button></a>
                    </div>
              </div>`,
    },
    {
      image: "https://i.postimg.cc/4ykz5f0V/Front-End-Projects.png",
      caption: `<div class="projects-section-caption color-change">
                    FrontEnd Projects
                    <br/>
                    <div class="projects-section-buttons">
                    <a href="https://github.com/srinivasteja18/Wed-dev-projects-front-End-" target="_blank"><button class=" color-background">Code</button></a>
                    </div>
              </div>`,
    },
  ];
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div id="projects" className="projects-section">
      <div className="project-container">
        <h1> Personal projects</h1>
        <div className="projects-space">
          <Carousel
            data={data}
            time={5000}
            width="870px"
            height="425px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            style={{
              textAlign: "center",
              maxWidth: "875px",
              maxHeight: "430px",
              padding: "2px",
              border: "1px solid white",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}
