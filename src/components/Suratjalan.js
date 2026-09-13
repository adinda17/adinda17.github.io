import React from "react";
import QAPPTTemplate from "./QA/QAPPTTemplate";
import demoVideo from "../../Assets/Projects/suratjalan-demo.gif";
// Kalau pakai video, ganti baris di atas jadi:
// import demoVideo from "../../Assets/Projects/suratjalan-demo.mp4";

function Suratjalan() {
  return (
    <QAPPTTemplate
      title="SuratJalan Digital: Baropi Group Delivery Note System"
      subtitle="Independent Project | Information Systems Analysis & Design"
      pptLink="https://adinda17.github.io/SuratJalanDigitalPpt.pdf"
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
              src={demoGif}
              alt="SuratJalan Digital system demo"
              style={{ width: "100%", borderRadius: "8px" }}
            />

            {/* Kalau pakai video, ganti <img> di atas jadi:
            <video autoPlay loop muted playsInline style={{ width: "100%", borderRadius: "8px" }}>
              <source src={demoVideo} type="video/mp4" />
            </video>
            */}
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
