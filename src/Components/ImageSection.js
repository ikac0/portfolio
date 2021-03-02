import React from "react";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="about-info">
        <h4>
          I am<span> Krsteski Ilija</span>
        </h4>
        <p className="about-text">
          A dedicated self-taught web developer, focused mostly on FrontEnd, but
          also familiar with BackEnd technologies.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name:</p>
            <p>Location:</p>
            <p>Nationality:</p>
            <p>Languages:</p>
          </div>
          <div className="right-section">
            <p> Krsteski Ilija</p>
            <p> Berlin, Germany</p>
            <p> Bulgarian, EU</p>
            <p> English, Croatian, German, Macedonian, Bulgarian, Spanish</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSection;
