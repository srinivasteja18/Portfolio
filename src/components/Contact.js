import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaMobile,
  FaEnvelope,
  FaMapMarker,
} from "react-icons/fa";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleOnClick = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      toast("Enter the required details", { type: "error" });
      return;
    }
    if (message === "") {
      toast("Type the message that you want to send", { type: "warning" });
      return;
    }
    emailjs
      .sendForm(
        "service_2brpslk",
        "template_xs5nn63",
        e.target,
        "user_8F7LBmmcSt2r8rrSGPN5q"
      )
      .then((res) => {
        console.log("success");
        setName("");
        setEmail("");
        setMessage("");
        toast("Message sent successfully", { type: "success" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="contact" className=" contact-section">
      <ToastContainer />
      <h1 className="contact-section-h1"> Contact Me</h1>
      <div className="contact-card">
        <div className="contact-card-left">
          <div>
            <h1>Get in Touch</h1>
            <p>
              I would love to hear your feedback, Take a moment and send a
              message
            </p>
          </div>
          <div className="contact-section-details">
            <div>
              <p>
                {" "}
                <FaMobile className="details-icons" />
                8019947779
              </p>
            </div>
            <div>
              <p>
                <FaEnvelope className="details-icons" />
                srinivasmoparthi17@gmail.com
              </p>
            </div>
            <div>
              <p>
                <FaMapMarker className="details-icons" />
                Hyderabad, 508252
              </p>
            </div>
          </div>

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
        <form className="contact-form" onSubmit={handleOnClick}>
          <div className="contact-form-div">
            <h1>Contact Form</h1>
            <label className="contact-section-label">Your Name</label>
            <input
              type="text"
              className="contact-section-input"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="contact-section-label">Your Email Address</label>
            <input
              type="email"
              className="contact-section-input"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="contact-section-label">Message</label>
            <textarea
              className="contact-section-input"
              name="user_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <input type="submit" className="contact-section-button" />
          </div>
        </form>
      </div>
    </div>
  );
}
