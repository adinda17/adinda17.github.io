import React from "react";
import QAPPTTemplate from "./QAPPTTemplate";

function QAOrangeHRMManual() {
  return (
    <QAPPTTemplate
      title="QA Manual Testing"
      subtitle="OrangeHRM"
      //pptLink="PASTE_GOOGLE_SLIDES_EMBED_LINK"
      sheetLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vQuS9nDlgf4TQ3iBsHqzIfCINPt9KYF71GaNmc2lSt8umcMJ17pDQLLVB0RzgCLsXBVzXP26JOFbE2q/pubhtml?widget=true&headers=false"
      summary={
        <>
          <p><strong>Sanbercode QA Bootcamp Project</strong></p>

          <p><strong>Website Tested</strong><br />
          OrangeHRM Demo Website (Human Resource Management System)</p>

          <p><strong>Objective</strong><br />
          To validate core functional features of the OrangeHRM application through structured manual testing.</p>

          <p><strong>Features Tested</strong></p>
          <ul>
            <li>Login</li>
            <li>Forgot Password</li>
            <li>Employee Directory (Search)</li>
          </ul>

          <p><strong>Testing Activities</strong></p>
          <ul>
            <li>Designed test scenarios and detailed test cases</li>
            <li>Executed manual functional testing using black-box approach</li>
            <li>Validated positive and negative test scenarios</li>
            <li>Documented test results in spreadsheet format</li>
          </ul>

          <p><strong>Deliverables</strong><br />
          Test Scenario & Test Case Documentation (Spreadsheet)</p>
        </>
      }
    />
  );
}

export default QAOrangeHRMManual;
