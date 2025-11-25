import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // pastikan path css sesuai

const NuriPpt = () => {
  return (
    <Container fluid className="home-about-section" style={{ minHeight: "100vh" }}>
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={10}>
            <h1 style={{ fontSize: "2.5em", color: "white" }}>
              QA Project: <span className="purple">Test Plan</span>
            </h1>
            <p style={{ color: "white", fontSize: "1.1em", lineHeight: "1.6" }}>
              This project contains the Test Plan for <strong>APLIKASI PINJAM SULTAN (Mobile App)</strong>. 
              The app is used for borrowing various tools and vehicles. 
              The test plan was prepared based on the PRD provided by MySkill.
            </p>

            <h3 style={{ color: "white", marginTop: "30px" }}>View Test Plan</h3>

            <div style={{ marginTop: "20px" }}>
              <iframe
                src="https://docs.google.com/presentation/d/149Z1mUZuYKk266lR8ygVCKvfLqvZRxLT0XTTVZwEdi4/edit?usp=sharing"
                width="100%"
                height="600px"
                frameBorder="0"
                allowFullScreen
                title="Nuri Test Plan"
              ></iframe>
            </div>

            <div style={{ marginTop: "30px" }}>
              <a href="#/project" className="btn btn-primary">
                Back to Projects
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NuriPpt;
