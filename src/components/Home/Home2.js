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
  I’m an Information Systems graduate with experience across System Analysis, Quality Assurance, Data Analysis, UI/UX, and Visual Design through professional work and internships.
  <br />
  <br />
  I’ve explored the full Software Development Life Cycle (SDLC), from requirement analysis, process mapping, and system modeling using
  <i>
    <b className="purple">
      {" "}
      Flowcharts, Use Case Diagrams, DFD, Activity Diagrams, Sequence Diagrams.{" "}
    </b>
  </i>
  to testing and validation processes.
  <br />
  <br />
  I also have hands-on experience in Quality Assurance, including manual and automation testing using
  <i>
    <b className="purple">
      {" "}
      Cypress, Katalon, Postman, and SQL{" "}
    </b>
  </i>
  for test execution, API testing, and data validation.
  <br />
  <br />
  One of my key experiences is the
  <b className="purple">
    {" "}
    KlinikGo Health System Analyst Project-Based Internship{" "}
  </b>
  , where I designed an end-to-end online patient registration system, including queue management, BPJS flow, and automated schedule change notifications.
  <br />
  <br />
  I also have experience in Data Analysis as a
  <b className="purple"> Data Analyst Intern at Pupuk Sriwidjaja </b>
  for 6 months, where I worked on analyzing and predicting raw material price trends to support decision-making and business planning.
  <br />
  <br />
  In addition, my experience in Visual Communication Design (F&B marketing) strengthened my ability to understand user behavior, structure content flows, and translate business needs into clear and organized visual systems, which are highly relevant for a System Analyst role.
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
