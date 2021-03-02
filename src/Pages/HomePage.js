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
          * why were you waiting till 29 years to start coding ? * why germany
          and now polska kurwa maç? * * where do you see yourself in 5 years? *
          why did you choose us? * do you have any questions for us? * why web
          development * how did you get here? * please tell me more about
          yourself. * What are your ambitions for the future? * What is your
          biggest weakness? -{" "}
          <strong>
            sometimes its hard to stay motivated during coding. at least the
            first few months. so i made a 3 weeks break. . maybe the reason for
            it was the pandemic, lack of social interaction, having no feedback
            for my clean-code, lack of confidence. i was waiting for the very
            last day to start applying for a job, knowing that i am running out
            of money, external pressure, and i'm punishing myself with
            restrictions.{" "}
          </strong>
          * What is your biggest strength? - logic, * What are you proud of? *
          What are your biggest achievements so far? * A self-taught front end
          web developer, heavily focused on React.js fhjksfhkshfksjdhfkhfkdj A
          self-taught front end web developer, heavily A self-taught front end
          web developer, heavily focused on React.js A self-taught front end web
          developer, heavily focused on React.js fhjksfhkshfksjdhfkhfkdj A
          self-taught front end web developer, heavily focused on React.js
          fhjksfhkshfksjdhfkhfkdj A self-taught front end web developer, heavily
          focused on React.js fhjksfhkshfksjdhfkhfkdj A self-taught front end
          web developer, heavily focused on React.js fhjksfhkshfksjdhfkhfkdj
          fhjksfhkshfksjdhfkhfkdj focused on React.js A self-taught front end
          web developer, heavily focused on React.js A self-taught front end web
          developer, heavily focused on React.js fhjksfhkshfksjdhfkhfkdj A
          self-taught front end web developer, heavily focused on React.js
          fhjksfhkshfksjdhfkhfkdj fhjksfhkshfksjdhfkhfkdj A self-taught front
          end web developer, heavily focused on React.js A self-taught front end
          web developer, heavily focused on React.js fhjksfhkshfksjdhfkhfkdj A
          self-taught front end web developer, heavily focused on React.js
          fhjksfhkshfksjdhfkhfkdj fhjksfhkshfksjdhfkhfkdj A self-taught front
          end web developer, heavily focused on React.js A self-taught front end
          web developer, heavily focused on React.js fhjksfhkshfksjdhfkhfkdj A
          self-taught front end web developer, heavily focused on React.js
          fhjksfhkshfksjdhfkhfkdj A self-taught front end web developer, heavily
          focused on React.js fhjksfhkshfksjdhfkhfkdj A self-taught front end
          web developer, heavily focused on React.js fhjksfhkshfksjdhfkhfkdj
          fhjksfhkshfksjdhfkhfkdj fhjksfhkshfksjdhfkhfkdj
        </p>
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
