import React from "react";
import QAPPTTemplate from "./QA/QAPPTTemplate";
// File gif ini ada di folder public/Assets/Projects/, jadi TIDAK di-import,
// cukup direferensikan langsung sebagai path string di bawah.

function Suratjalan() {
  return (
    <QAPPTTemplate
      title="SuratJalan Digital: Baropi Group Delivery Note System"
      subtitle="Independent Project | Information Systems Analysis & Design"
      pptLink="https://docs.google.com/presentation/d/e/2PACX-1vRQ0v9W3Wk6LbcilwUaSVoHd3-RdNvCE76rmnHVTKfu3lGLb_tLDvESOu7wXZz0O5UCw5-13j5VpwHS/pubembed?start=false&loop=false&delayms=3000"
      backLink="/project"
      summary={
        <>
          <p>
            <strong>Role-Based Delivery Note Digitalization Project</strong>
          </p>

          <p>
            This is an independent Information Systems project analyzing and
            redesigning the delivery note ("Surat Jalan") process for{" "}
            <strong>Baropi Group</strong>, a multi-brand F&B and hospitality
            company. The project covers the full analysis-to-prototype
            journey of replacing a paper-based, multi-division workflow with
            a role-based digital system.
          </p>

          <div style={{ margin: "24px 0" }}>
            <img
              src="/Assets/Projects/suratjalan-demo.gif"
              alt="SuratJalan Digital system demo"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>

          <p>
            <strong>Analysis & Design Scope:</strong>
          </p>
          <ul>
            <li>Stakeholder interviews and requirement elicitation across multiple divisions and outlets</li>
            <li>Business process analysis and mapping (As-Is vs. To-Be)</li>
            <li>Conceptual data modeling (entities, relationships, and attributes)</li>
            <li>Role-Based Access Control (RBAC) design and authorization logic</li>
            <li>Document status/workflow lifecycle design (state modeling)</li>
            <li>Design trade-off evaluation between alternative technical solutions</li>
            <li>Functional specification writing for system implementation</li>
            <li>Rapid prototyping using a low-code platform</li>
          </ul>

          <p>
            <strong>Final System Scope:</strong>
          </p>
          <ul>
            <li>Digital delivery note creation, restricted to the sender's own division/outlet</li>
            <li>Sequential digital signature workflow (Sender → Sent → In Transit → Receiver → Completed)</li>
            <li>Unit-aware item validation (whole numbers for pcs/dus, decimals for kg/liter)</li>
            <li>Simplified external-party handling via a shared "External" account for non-employee transactions</li>
            <li>Role-scoped dashboards, showing only transactions relevant to each division/outlet</li>
            <li>PDF export for cases still requiring physical documentation</li>
          </ul>

          <p>
            <strong>Outcome:</strong>
            <br />
            This project demonstrates end-to-end Information Systems thinking
            — from stakeholder analysis and business process modeling to
            access-control design, data modeling, and prototype delivery —
            resulting in a functional system that eliminates paper-based
            delivery notes across a real multi-business-unit organization.
          </p>
        </>
      }
    />
  );
}

export default Suratjalan;