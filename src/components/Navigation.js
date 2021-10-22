import React, { useState, useEffect } from "react";

function Navigation() {
  const [it, setIt] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const handleOnClick = () => {
    if (it) {
      setIt(false);
    } else {
      setIt(true);
    }
  };

  return (
    <div className="Header">
      <div className="Header_Container">
        <button
          className="nav-toggle"
          aria-label="open navigation"
          onClick={handleOnClick}
        >
          <span className="hamburger"></span>
        </button>
        <h2 className="title">
          <span className="title_span">PortFolio</span>
        </h2>
        {it || width >= 800 ? (
          <ul className="nav_list">
            <li className="nav_item">
              <a href="#home">Home</a>
            </li>
            <li className="nav_item">
              <a href="#about">About</a>
            </li>
            <li className="nav_item">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav_item">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav_item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
