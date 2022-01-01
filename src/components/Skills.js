import React from "react";
import Skill from "./Skill";
import html from "./projectThumbnails/html.png";
import css from "./projectThumbnails/css.png";
import mongo from "./projectThumbnails/mongodb.png";
import cplus from "./projectThumbnails/plusC.png";
import javascript from "./projectThumbnails/javascript.png";
import react from "./projectThumbnails/react.png";
import dsa from "./projectThumbnails/dsa.png";
import nodejs from "./projectThumbnails/nodejs.png";
import express from "./projectThumbnails/express.png";
import skills from "./projectThumbnails/skillspic.png";

export default function Skills() {
  return (
    <div id="skills" className="skills-section spacer">
      <div className="skills-container">
        <h1>SKILLS</h1>
        <div className="skills-grid">
          <Skill name="HTML" pic={html} />
          <Skill name="CSS" pic={css} />
          <Skill name="Javascript" pic={javascript} />
          <Skill name="ReactJS" pic={react} />
          <Skill name="C++" pic={cplus} />
          <Skill name="DSA" pic={dsa} />
          <Skill name="NodeJs" pic={nodejs} />
          <Skill name="ExpressJs" pic={express} />
          <Skill name="MongoDB" pic={mongo} />
        </div>
      </div>
      <div className="skills-container-imgDiv">
        <img src={skills} alt="" />
      </div>
    </div>
  );
}
