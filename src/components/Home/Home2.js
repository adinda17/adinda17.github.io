import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
  I’m an Information Systems graduate looking to build my career as a
  <b className="purple"> System Analyst</b>, where I can turn real business problems into structured, working systems.
  While working as a Graphic Designer at an F&B company in Palembang, I independently designed and built
  <b className="purple"> SuratJalan Digital</b>, a role-based digital delivery note system that replaced a fully paper-based process across 5+ divisions and outlets, and a
  <b className="purple"> Marketing Request Management System</b> that structured design approvals and revisions previously handled only through WhatsApp.
  I’m committed to continuously learning and building systems that make real work easier.
  <br />
  <br />
  I further strengthened this through the
  <b className="purple"> KlinikGo Health System Analyst Project-Based Internship</b>, designing an end-to-end patient registration system covering queue management, BPJS flow, and automated schedule change notifications.
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
