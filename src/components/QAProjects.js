import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function QAProjects() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <h1 className="text-center" style={{ color: "white" }}>
          Quality Assurance <span className="purple">Projects</span>
        </h1>

        <Row className="mt-4">
          {/* Project 1 */}
          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>QA Manual Testing – OrangeHRM</Card.Title>
                <Card.Text>
                  Manual functional testing using black-box testing approach.
                  Includes test scenarios and detailed test cases.
                </Card.Text>
               <Link
                    to="/qa/orangehrm-manual"
                    className="btn btn-primary"
                >
                    View Detail
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Project 2 */}
          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Bug Reporting Practice – QA Documentation</Card.Title>
                <Card.Text>
                  A bug reporting and defect documentation exercise from the Sanbercode QA Bootcamp, based on provided sample cases and screenshots.
                </Card.Text>
                <Link
                    to="/qa/bug-reporting"
                    className="btn btn-primary"
                >
                    View Detail
                </Link>
              </Card.Body>
            </Card>
          </Col>

           {/* Project 3 */}
          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>API Testing – Reqres | Postman</Card.Title>
                <Card.Text>
                  An API testing project completed during the Sanbercode QA Bootcamp using Reqres as a mock API service.
                The scope includes manual API testing and API automation using Postman, focusing on request validation,
                response verification, test scripts, and environment variables.
                </Card.Text>
                <Link
                    to="/qa/reqres-postman"
                    className="btn btn-primary"
                >
                    View Detail
                </Link>
              </Card.Body>
            </Card>
          </Col>

            {/* Project 4 */}
          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>API Automation Testing – Reqres | Cypress</Card.Title>
                <Card.Text>
                  An API automation testing project developed as part of the Sanbercode QA Bootcamp,
                  using Cypress to validate API behavior without UI interaction.
                </Card.Text>
                <Link
                    to="/qa/reqres-cypress"
                    className="btn btn-primary"
                >
                    View Detail
                </Link>
              </Card.Body>
            </Card>
          </Col>

            {/* Project 5 */}
          <Col md={6} className="mb-4">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Final Project – API Automation Testing – OrangeHRM | Cypress</Card.Title>
                <Card.Text>
                  The official Final Project of the Sanbercode Quality Assurance Bootcamp, focused on implementing API automation testing for the OrangeHRM application using Cypress.
                    This project demonstrates the design of an automation strategy, structured assertions, API intercept validation, and analysis of test execution results as part of an end-to-end QA workflow.
                </Card.Text>
                <Link
                    to="/qa/orangehrm-final"
                    className="btn btn-primary"
                >
                    View Detail
                </Link>
              </Card.Body>
            </Card>
          </Col>

        <div style={{ marginTop: "30px" }}>
              <a href="#/project" className="btn btn-primary">
                Back to Projects
              </a>
            </div>

        </Row>
      </Container>
    </Container>
  );
}

export default QAProjects;
