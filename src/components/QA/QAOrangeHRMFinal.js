import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function QAOrangeHRMFinal() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10}>

            {/* TITLE */}
            <h1 style={{ color: "white" }}>
              Final Project <span className="purple">QA Automation – OrangeHRM</span>
            </h1>

            {/* SUMMARY */}
            <div
              style={{
                marginTop: "30px",
                textAlign: "left",
                color: "white",
                background: "rgba(255,255,255,0.05)",
                padding: "25px",
                borderRadius: "10px"
              }}
            >
              <h4 className="purple">Project Overview</h4>
              <p>
                This final project focuses on <strong>end-to-end automation testing</strong> 
                for the <strong>OrangeHRM Demo Website</strong>, covering authentication and 
                employee directory functionalities using Cypress.
              </p>

              <h5>Automation Scope</h5>
              <ul>
                <li>Valid & invalid login</li>
                <li>Forgot password (valid & invalid email)</li>
                <li>Dashboard & Directory navigation</li>
                <li>Employee search (valid, invalid, partial)</li>
                <li>Reset button & dropdown validation</li>
              </ul>

              <h5>Testing Activities</h5>
              <ul>
                <li>Implemented Page Object Model (POM)</li>
                <li>API intercept for login, forgot password & directory</li>
                <li>Assertions on UI, URL, notification, and status code</li>
                <li>Stable execution using proper timeout handling</li>
              </ul>

              <h5>Project Strengths</h5>
              <ul>
                <li>POM → reusable & maintainable automation structure</li>
                <li>Intercept API → backend validation & stable tests</li>
                <li>Complete assertions → UI + API layer</li>
              </ul>
            </div>

            {/* GIF SECTION */}
            <h3 style={{ color: "white", marginTop: "50px" }}>
              Automation Test Execution Preview
            </h3>

            <img
              src="/login.gif"
              alt="Login Automation"
              style={{
                width: "100%",
                maxWidth: "800px",
                marginTop: "25px",
                borderRadius: "10px"
              }}
            />

            <img
              src="/directory.gif"
              alt="Dashboard & Directory Automation"
              style={{
                width: "100%",
                maxWidth: "800px",
                marginTop: "25px",
                borderRadius: "10px"
              }}
            />

            <img
              src="/forgot.gif"
              alt="Forgot Password Automation"
              style={{
                width: "100%",
                maxWidth: "800px",
                marginTop: "25px",
                borderRadius: "10px"
              }}
            />

            {/* GITHUB BUTTON */}
            <div style={{ marginTop: "40px" }}>
              <a
                href="https://github.com/adinda17/sanbercode.git"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Automation Code on GitHub
              </a>
            </div>

           <div style={{ marginTop: "30px" }}>
              <a href="#/qa-projects" className="btn btn-primary">
                Back to QA Projects
              </a>
            </div>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default QAOrangeHRMFinal;
