import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <style>
        {`
          .home-about-section {
            padding: 5rem 0;
          }

          .home-about-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .home-about-description {
            text-align: left;
          }

          .home-about-body {
            font-size: 1.1em;
            line-height: 1.6;
          }

          .home-about-social {
            text-align: center;
          }

          .home-about-social-links {
            list-style: none;
            padding: 0;
          }

          .social-icons {
            display: inline-block;
            margin: 0 10px;
          }

          .icon-colour {
            color: #333;
            font-size: 2em;
          }

          .purple {
            color: #6a1b9a;
          }

          @media (max-width: 768px) {
            .home-about-description {
              text-align: center;
            }
            .myAvtar {
              display: none;
            }
          }
        `}
      </style>
      <Container className="home-about-container">
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> MY OBJECTIVE </span>
            </h1>
            <p className="home-about-body">
              As a frontend specialist, I am dedicated to creating visually stunning and highly functional web experiences.
              <br />
              <br />
              I excel in crafting engaging user interfaces with my expertise in <i><b className="purple">HTML, CSS, and JavaScript</b></i>.
              I leverage modern frameworks like <i><b className="purple">React.js and Vue.js</b></i> to build dynamic, responsive applications.
              <br />
              <br />
              My approach involves writing clean, scalable code and ensuring cross-browser compatibility, making sure that applications work seamlessly across <b className="purple">desktops, tablets, and mobile devices</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar d-none d-md-block">
            {/* Removed image as per previous request */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/collo6738"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/CFCWiser?t=WI01ourj_AAHYDY9bI4ZdQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/biwott-collins-52098726b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gaffer703?igsh=anh4NGFzM2p4YTR3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons" >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
