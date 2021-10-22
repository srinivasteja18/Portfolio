import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import prfl from "./projectThumbnails/prfl.webp";

export default function Home() {
  return (
    <div id="home" className="Home_section">
      <div className="Home_section_container">
        <div className="Home_section_content">
          <p className="Home_section_text">Hi, I am</p>
          <p className="Home_section_name">Moparthi Srinivas Teja</p>
          <p className="Home_section_text">I am a Front End Developer</p>
          <a href="https://drive.google.com/file/d/19_7o-E8bevl_dCP2LcXKf4qVX8wDd5kO/view?usp=sharing">
            <button className="Home_section_resume">
              Resume <FaDownload />
            </button>
          </a>

          <div className="Home_section_icons">
            <a href="https://github.com/srinivasteja18">
              <FaGithub className="Home_section_icon" />
            </a>
            <a href="https://www.linkedin.com/in/moparthi-srinivas-teja/">
              <FaLinkedin className="Home_section_icon" />
            </a>

            <a href="https://twitter.com/SrinivasTeja_18">
              <FaTwitter className="Home_section_icon" />
            </a>

            <a href="https://www.instagram.com/srinivasteja18/">
              <FaInstagram className="Home_section_icon" />
            </a>
            <a href="https://www.facebook.com/srinivasteja17/">
              <FaFacebook className="Home_section_icon" />
            </a>
          </div>
        </div>
        <div className="Home_section_image">
          <img src={prfl} alt="logo" />
        </div>
      </div>
    </div>
  );
}
