import React from "react";
import QAPPTTemplate from "./QA/QAPPTTemplate";

function QASauceDemoKatalon() {
  return (
    <QAPPTTemplate
      title="Automation Testing"
      subtitle="SauceDemo | Katalon Studio"
      pptLink="https://docs.google.com/presentation/d/e/2PACX-1vQWXaN2ELNYxQ79SMd7fNp8R6pXRApGtm9SWe8DFcRT4xfR3E-CCOokmgdWB_aMPxMKCPldRq9aa5rc/pubembed?start=false&loop=false&delayms=3000"
      backLink="/project"
      summary={
        <>
          <p>
            <strong>Independent Automation Testing Project</strong>
          </p>

          <p>
            This project is a self-initiated automation testing practice conducted on the
            <strong> SauceDemo demo e-commerce website</strong> using <strong>Katalon Studio</strong>.
            The objective of this project is to strengthen hands-on experience in web automation
            testing by simulating real user flows and validating application behavior.
          </p>

          <p>
            <strong>Scope of Testing:</strong>
          </p>
          <ul>
            <li>Login functionality (valid and invalid credentials)</li>
            <li>Product listing and selection</li>
            <li>Add to cart and cart validation</li>
            <li>Checkout process and order completion flow</li>
          </ul>

          <p>
            <strong>Testing Activities:</strong>
          </p>
          <ul>
            <li>Developed automated test cases using Katalon Studio</li>
            <li>Implemented web UI automation with reusable test steps</li>
            <li>Executed test scenarios to validate functional behavior</li>
            <li>Analyzed test results to ensure application stability</li>
          </ul>

          <p>
            <strong>Outcome:</strong><br />
            This project demonstrates practical experience in web automation testing,
            understanding of end-to-end user flows, and the ability to apply automation tools
            in a real-world testing scenario.
          </p>
        </>
      }
    />
  );
}

export default QASauceDemoKatalon;
