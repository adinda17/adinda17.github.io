import React from "react";
import QAPPTTemplate from "./QAPPTTemplate";

function QAReqresCypress() {
  return (
    <QAPPTTemplate
      title="API Automation Testing"
      subtitle="Reqres | Cypress"
      pptLink={null}
      sheetLink={null}
      summary={
        <>
          <p><strong>Sanbercode QA Bootcamp Project</strong></p>

          <p>
            <strong>API Tested</strong><br />
            Reqres Public API (Mock REST API)
          </p>

          <p>
            <strong>Objective</strong><br />
            To implement API automation testing using Cypress without UI interaction,
            focusing on request validation, response handling, and test structure.
          </p>

          <p>
            <strong>Automation Scope</strong>
            <ul>
              <li>GET List Users</li>
              <li>GET Single User</li>
              <li>GET User Not Found</li>
              <li>POST Create User</li>
              <li>PUT & PATCH Update User</li>
              <li>DELETE User</li>
              <li>REGISTER Success & Failed</li>
              <li>LOGIN Success & Failed</li>
              <li>Delayed Response</li>
            </ul>
          </p>

          <p>
            <strong>Testing Activities</strong>
            <ul>
              <li>Built API automation tests using Cypress</li>
              <li>Implemented Page Object Model (POM) for API requests</li>
              <li>Used fixture data for request payloads</li>
              <li>Validated response status codes for positive and negative scenarios</li>
              <li>Structured tests using <code>describe</code> and <code>it</code> blocks</li>
            </ul>
          </p>

          <p>
            <strong>Automation Code Repository</strong><br />
            <a
              href="https://github.com/adinda17/sanbercode/blob/master/cypress/e2e/Reqres_Test.cy.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Cypress API Automation Code on GitHub
            </a>
          </p>

          <p style={{ marginTop: "20px" }}>
            <strong>Automation Test Execution Preview</strong>
          </p>

          <img
            src="/reqres-api-test.gif"
            alt="Reqres API Automation Cypress"
            style={{
              width: "100%",
              maxWidth: "800px",
              borderRadius: "10px",
              marginTop: "10px"
            }}
          />
        </>
      }
    />
  );
}

export default QAReqresCypress;
