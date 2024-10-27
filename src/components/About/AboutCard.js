import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruv Agrawal </span>
            from <span className="purple"> Jhansi, UttarPradesh.</span>
            <br />
            I am currently a Second year undergrad at IIT(ISM) Dhanbad pursuing
            Bachelor of Technology in Computer Science and Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket Matches
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Work Hard until it makes a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dhruv</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
