import React from "react";
import QAPPTTemplate from "./QAPPTTemplate";

function QABugReporting() {
  return (
    <QAPPTTemplate
      title="Bug Reporting Practice"
      subtitle="QA Documentation"
      //pptLink="PASTE_GOOGLE_SLIDES_EMBED_LINK"
      sheetLink="https://docs.google.com/spreadsheets/d/e/2PACX-1vRlPwZgC0QYUcQ26TM0qBf9ksJj48yIzzlEKW5tZbaepv6f3pQujw7zLPw0iiAz_lQrOCuWgyeaC89u/pubhtml?widget=true&amp;headers=false"
      summary={
        <>
          <p><strong>Sanbercode QA Bootcamp Exercise</strong></p>

          <p><strong>Context</strong><br />
          This project focuses on defect documentation practice using sample cases and screenshots provided during the bootcamp.</p>

          <p><strong>Objective</strong><br />
          To practice writing clear, reproducible, and well-structured bug reports.</p>

          <p><strong>Activities</strong></p>
          <ul>
            <li>Analyzed given application screenshots</li>
            <li>Identified functional issues based on expected behavior</li>
            <li>Documented bugs with clear steps to reproduce</li>
            <li>Assigned severity and priority based on user impact</li>
          </ul>

          <p><strong>Deliverables</strong><br />
          Bug Report Documentation (Google Docs / Spreadsheet)</p>
        </>
      }
    />
  );
}

export default QABugReporting;
