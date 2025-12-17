import React from "react";
import QAPPTTemplate from "./QAPPTTemplate";

function QAReqresPostman() {
  return (
    <QAPPTTemplate
      title="API Manual & Automation Testing"
      subtitle="Reqres | Postman"
      //pptLink="PASTE_GOOGLE_SLIDES_EMBED_LINK"
      sheetLink={null} // tidak pakai spreadsheet embed
      summary={
        <>
          <p><strong>Sanbercode QA Bootcamp Project</strong></p>

          <p>
            <strong>API Tested</strong><br />
            Reqres Public API (Mock REST API)
          </p>

          <p>
            <strong>Objective</strong><br />
            To validate API behavior and response handling using both manual and automated API testing.
          </p>

          <p>
            <strong>Endpoints Tested</strong>
            <ul>
              <li>GET Users</li>
              <li>POST Create User</li>
              <li>PUT / PATCH Update User</li>
              <li>DELETE User</li>
            </ul>
          </p>

          <p>
            <strong>Testing Activities</strong>
            <ul>
              <li>Performed manual API testing using Postman</li>
              <li>Validated status codes and response bodies</li>
              <li>Created automated tests using Postman test scripts</li>
              <li>Executed tests using Collection Runner and environment variables</li>
              <li>Generated HTML report and dashboard from test execution</li>
            </ul>
          </p>

          <p>
            <strong>Deliverables & Evidence</strong>
          </p>

          <ul>
            <li>
              📄 Postman API Documentation<br />
              <a
                href="https://documenter.getpostman.com/view/50420201/2sB3dLTB3V"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Postman Documentation
              </a>
            </li>

            <li style={{ marginTop: "10px" }}>
              📊 API Automation – HTML Report & Dashboard<br />
              <a
                href="https://drive.google.com/drive/folders/1Qxq14Bd-b-N7u6y9O2q2bEgWsmqWgi1u?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Automation Report & Dashboard
              </a>
            </li>

            <li style={{ marginTop: "10px" }}>
              🧪 API Manual Testing Evidence<br />
              <a
                href="https://drive.google.com/drive/folders/14s1409zVkiwJ4to_Qw1hOadkEvnxF48a?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Manual Testing Files
              </a>
            </li>
          </ul>
        </>
      }
    />
  );
}

export default QAReqresPostman;
