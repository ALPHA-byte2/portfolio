import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/collo.png"; // Update to the correct image path if needed
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define styles based on window width
  const imageStyle = {
    maxHeight: windowWidth <= 576 ? "250px" : windowWidth <= 768 ? "300px" : "400px",
    width: windowWidth <= 576 ? "90%" : windowWidth <= 768 ? "80%" : "auto",
    border: "5px solid purple",
    borderRadius: "50%", // For rounded-circle effect
    margin: windowWidth <= 768 ? "0 auto" : "initial",
    display: "block" // Centering image horizontally on small screens
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BIWOTT COLLINS </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img
                src={homeLogo} // Updated to use homeLogo
                alt="home pic"
                className="img-fluid"
                style={imageStyle} // Apply dynamic styles
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
