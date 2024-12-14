import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Biwott Collins</span> from <span className="purple">Nairobi, Kenya</span>.
            <br />
            I hold a Bachelor’s degree in Information Technology from Meru University of Science and Technology.
            <br />
            <br />
            With a comprehensive background in technology, I offer a wide range of expertise including:
            <br />
            <br />
            - <b className="purple">Software Development:</b> Crafting elegant and functional applications using modern technologies and frameworks.
            <br />
            - <b className="purple">Networking:</b> Designing, implementing, and managing network infrastructures to ensure optimal connectivity and performance.
            <br />
            - <b className="purple">IT Support:</b> Providing reliable support and solutions to troubleshoot and resolve technical issues effectively.
            <br />
            <br />
            My passion for technology extends beyond coding; I am committed to leveraging my skills to make a significant impact and provide comprehensive tech assistance.
          </p>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to make a difference and solve problems in the field of technology!"
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
