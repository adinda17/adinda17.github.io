import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // pastikan path CSS sesuai

const NuriPpt = () => {
  return (
    <Container fluid className="home-about-section" style={{ minHeight: "100vh" }}>
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={12}>
            <h1 style={{ fontSize: "2.5em", color: "white", marginBottom: "30px" }}>
              Nuri UI/UX Project — <span className="purple">Presentation</span>
            </h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRdhS4q0esOjOBHiSOxqaflAHtY9LdpqxQoqcUdyHF2PsuklUZc-0gI0-dT9cWWV1QxL6C6rmCxweZc/pubembed?start=false&loop=false&delayms=3000"
                frameBorder="0"
                width="600"
                height="400"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                title="Nuri Project Presentation"
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
