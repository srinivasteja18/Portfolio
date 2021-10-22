import React from "react";

export default function skill({ name, pic }) {
  return (
    <div className="skill-card">
      <div className="skill-pic">
        <img src={pic} alt="pic" />
      </div>
      <p className="skill-card-name">{name}</p>
    </div>
  );
}
