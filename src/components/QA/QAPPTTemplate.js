import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function QAPPTTemplate({ title, subtitle, pptLink, sheetLink, summary }) {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <h1 style={{ color: "white" }}>
              {title} <span className="purple">{subtitle}</span>
            </h1>

            {/* PPT Preview */}
            {pptLink && (
              <>
                <h4 style={{ color: "white", marginTop: "25px" }}>
                  Presentation Preview
                </h4>
                <iframe
                  src={pptLink}
                  width="800"
                  height="480"
                  frameBorder="0"
                  allowFullScreen
                  title={`${title} PPT`}
                  style={{ marginTop: "15px", borderRadius: "10px" }}
                />
              </>
            )}

            {/* SUMMARY */}
            {summary && (
              <div
                style={{
                  marginTop: "40px",
                  textAlign: "left",
                  color: "white",
                  background: "rgba(255,255,255,0.05)",
                  padding: "25px",
                  borderRadius: "10px"
                }}
              >
                <h4 className="purple">Project Summary</h4>
                {summary}
              </div>
            )}

            {/* Spreadsheet Preview */}
            {sheetLink && (
              <>
                <h4 style={{ color: "white", marginTop: "40px" }}>
                  Test Case Spreadsheet Preview
                </h4>
                <iframe
                  src={sheetLink}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title={`${title} Spreadsheet`}
                  style={{ marginTop: "15px", borderRadius: "10px" }}
                />
              </>
            )}

            <div style={{ marginTop: "30px" }}>
              <Link to="/qa-projects" className="btn btn-primary">
                ← Back to QA Projects
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default QAPPTTemplate;
