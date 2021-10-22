import React from "react";
import Skill from "./Skill";
import html from "./projectThumbnails/html.png";
import css from "./projectThumbnails/css.png";
import c from "./projectThumbnails/langC.png";
import cplus from "./projectThumbnails/plusC.png";
import javascript from "./projectThumbnails/javascript.png";
import react from "./projectThumbnails/react.png";
import dsa from "./projectThumbnails/dsa.png";
import algo from "./projectThumbnails/func.png";
import oops from "./projectThumbnails/oops.png";
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
          <Skill name="DataStructures" pic={dsa} />
          <Skill name="Algorithms" pic={algo} />
          <Skill name="OOPS" pic={oops} />
          <Skill name="C" pic={c} />
        </div>
      </div>
      <div className="skills-container-imgDiv">
        <img src={skills} alt="" />
      </div>
    </div>
  );
}
