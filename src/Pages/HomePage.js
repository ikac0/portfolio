import React from "react";
import {
  faLinkedin,
  faGithub,
  faXing,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Krsteski Ilija</span>
        </h1>
        <p className="h-sub-text">
          <p>
            An ambitious front-end developer with high interest in modern
            technologies, besides that an avid escape room enthusiast with a
            passion for cooking.
          </p>
          <p>
            I have worked as an Operations Manager for a hardware store for 3
            years before deciding to leave my family business aside, since I
            didn't find myself loving my current job. I have decided to move to
            Germany in 2017 for new chanllenges and opportunities.
          </p>
          <p>
            I feel that with my relocation I have broadened my horizons and
            improved as a person. Berlin inspired me to start exploring what I
            am good at. And in 2020, I have discovered my passion for web
            development!
          </p>
          <p>
            I am currently studying and constantly improving to become a great
            front-end developer. Being a self-taught developer with no IT
            academic background besides 800+ hours spent on Udemy, YouTube,
            FreeCodeCamp exercises during the pandemic, has been the greatest
            challenge in my life so far, and now I am more than motivated to
            prove my worth in the tech-world. I have done several pet projects
            to show my potential.
          </p>
          <p>
            My general direction for the future is to finally start doing what I
            love and can see myself doing for a lifetime, continiously learning
            and improving my skills. Looking for a stable career path for myself
            after joining an amazing international company.
          </p>
          <p>
            Heavily focused on: Javascript, React.js, HTML, CSS.
            <br />
            Familiar with many other skills as well as you can see in the skills
            section.
            <br />
            Core strengths: Always focused on the solution, instead of the
            problem. Problem solver, high disciplined, pixel-perfectionist,
            goal-oriented and analytical team player. I truly believe having
            this mindset and dedication, any goal is reachable.
          </p>
          <p>
            Hobbies: cooking , music, escape rooms, travelling, european
            languages.
            <br />
            Personality type: INTJ
          </p>
          <br />
          <h3>Basic info: </h3>
          <br />
        </p>
        <div className="skills-details">
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
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/ilija-krsteski-352b074a"
            target="_blank"
            className="icon-holder"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon li" />
          </a>
          <a
            href="https://www.xing.com/profile/Ilija_Krsteski/cv"
            target="_blank"
            className="icon-holder"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faXing} className="icon xi" />
          </a>
          <a
            href="https://github.com/ikac0"
            target="_blank"
            className="icon-holder"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="icon gh" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
