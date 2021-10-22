import React from "react";
import aboutme from "./projectThumbnails/aboutme.webp";
import { FaBookOpen, FaSuitcase } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function About() {
  return (
    <div id="about" className="About_container">
      <div className="About_section">
        <h2> About Me</h2>
        <p>
          Hey there,
          <span className="About_section_span">
            {" "}
            Hello Everyone!! Iam Srinivas Teja, pre-final year student from NIT
            Raipur pursuing my bachelors in Electronics and Communication
            Engineering.
          </span>{" "}
          Iam interested in Web development and I enjoy building websites,
          currently Iam more focused on Front-end Web development. I wish myself
          to get better and this field and building this portfolio website is a
          part of it. Know more about my technical skills below. Happy to see
          you and thanks for spending your valuable time. I would definitely
          love to hear your feedback, contact me through form given Below..
        </p>
        <VerticalTimeline
          contentStyle={{ background: "rgb(9,9,29)" }}
          className="TimeLine vertical-timeline.vertical-timeline-custom-line"
        >
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{
              background: "rgb(9, 9, 29)",
              padding: "1rem",
            }}
            date="March 2020-June 2020"
            iconStyle={{ background: "rgb(9, 9, 29)", color: "white" }}
            icon={<FaSuitcase />}
          >
            <h3 className="vertical-timeline-element-title">
              Technical Content Writer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              GeeksForGeeks
            </h4>
            <p>Data Structures and Algorithms</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            date="2019-present"
            contentStyle={{
              background: "rgb(9, 9, 29)",
              padding: "1rem",
            }}
            iconStyle={{ background: "rgb(9, 9, 29)", color: "white" }}
            icon={<FaBookOpen />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology in Electronics and Communications
            </h3>
            <h4 className="vertical-timeline-element-subtitle">NIT Raipur</h4>
            <p>Current CPI 8.93</p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            iconStyle={{ background: "#fff", color: "rgb(9, 9, 29)" }}
            icon={<FaStar />}
          /> */}
        </VerticalTimeline>
      </div>
      <div className="About_section-ImageDiv">
        <img className="About_section_img" src={aboutme} alt="pic" />
      </div>
    </div>
  );
}
