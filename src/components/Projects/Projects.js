import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Personal Portfolio"
              description={
                <div>
                  My Personal Portfolio is a well-crafted website designed to showcase my professional profile, skills, and projects. It features a clean and intuitive layout with four main sections:
                  <br />
                  <br />
                  <strong>Home Page:</strong> An engaging introduction to who I am, highlighting key aspects of my background and expertise.
                  <br />
                  <strong>About:</strong> A detailed description of my journey, skills, and experiences.
                  <br />
                  <strong>Projects:</strong> A showcase of my recent work and achievements, demonstrating my technical abilities and project involvement.
                  <br />
                  <strong>Resume:</strong> An online version of my resume, providing a comprehensive overview of my qualifications and career history.
                  <br />
                  <br />
                  <strong>Technologies Used:</strong>
                  <ul>
                    <li><u>Frontend:</u> JavaScript, React</li>
                    <li><u>Styling:</u> CSS</li>
                  </ul>
                  The portfolio is designed to effectively present my professional profile and make a strong impression on visitors.
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Integrated Hospital Management System"
              description={
                <div>
                  The Integrated Hospital Management System enhances communication and collaboration among hospitals. It enables seamless sharing of doctors' expertise and electronic transfer of patient records, eliminating paper-based processes.
                  <br />
                  <br />
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Cross-Hospital Communication: Efficient collaboration and sharing of specialized doctors.</li>
                    <li>Electronic Patient Records: Accurate and streamlined transfer of medical records.</li>
                    <li>Paperless Operations: Digital solutions replace traditional paper methods.</li>
                  </ul>
                  <strong>Technologies Used:</strong>
                  <ul>
                    <li><u>Frontend:</u> HTML, CSS, JavaScript, React.js</li>
                    <li><u>Backend:</u> PHP</li>
                  </ul>
                  The system modernizes hospital management, improving coordination and patient care.
                </div>
              }
            />
          </Col>

  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Vehicle Tracking IoT Device"
              description={
                <div>
                  The Vehicle Tracking IoT Device monitors vehicle movements using GPS and IoT technology, sending coordinates every 10 minutes. Integrated with Google Maps, it provides real-time tracking and distance calculation.
                  <br />
                  <br />
                  <strong>Key Features:</strong>
                  <ul>
                    <li>Real-Time Tracking: GPS coordinates sent every 10 minutes for monitoring.</li>
                    <li>Google Maps Integration: Coordinates displayed on Google Maps for route visualization.</li>
                    <li>Distance Calculation: Calculates distance covered based on coordinates.</li>
                  </ul>
                  <strong>Technologies Used:</strong>
                  <ul>
                    <li><u>IoT Tracker:</u> For GPS tracking and data transmission</li>
                    <li><u>ESP32:</u> Provides Wi-Fi connectivity</li>
                    <li>Wiring: Ensures connectivity between components</li>
                  </ul>
                  This IoT solution enhances vehicle monitoring and fleet management.
                </div>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Transport System"
              description={
                <div>
                  The E-Transport System manages an organization's fleet with features for vehicle records, driver registrations, vehicle assignments, and bookings. It includes real-time tracking via GPS.
                  <br />
                  <br />
                  <strong>Technologies Used:</strong>
                  <ul>
                    <li><u>Frontend:</u> HTML, CSS, JavaScript</li>
                    <li><u>Backend:</u> PHP</li>
                    <li>Database: MySQL (via XAMPP)</li>
                  </ul>
                  The system streamlines vehicle management and enhances operational control.
                </div>
              }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
