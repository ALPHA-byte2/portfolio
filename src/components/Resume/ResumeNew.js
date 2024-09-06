import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Projects/collins.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  // Inline styles
  const styles = {
    resumeWrapper: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    },
    resumeSection: {
      flex: 1,
    },
    footer: {
      backgroundColor: "#f8f9fa",
      padding: "1rem",
      textAlign: "center",
      borderTop: "1px solid #e9ecef",
    },
    button: {
      maxWidth: "250px",
    }
  };

  return (
    <div style={styles.resumeWrapper}>
      <Container fluid className="resume-section" style={styles.resumeSection}>
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            download="collins_resume.pdf" // This prompts the download with a custom filename
            style={styles.button}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
      <footer style={styles.footer}>
      
      </footer>
    </div>
  );
}

export default ResumeNew;
