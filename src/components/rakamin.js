import React from "react";
import QAPPTTemplate from "./QA/QAPPTTemplate";

function Rakamin() {
  return (
    <QAPPTTemplate
      title="KlinikGo Health System Analysis"
subtitle="Project-Based Internship | Rakamin Academy"
pptLink="https://dl.dropboxusercontent.com/s/ekhl6bw3it746hoi75liv/Final-Project-Rakamin-FIX.pdf"
backLink="/project"
summary={
  <>
    <p>
      <strong>Health System Analyst Project-Based Internship</strong>
    </p>

    <p>
      This project is part of the System Analyst internship program by{" "}
      <strong>Rakamin Academy</strong>, focusing on understanding the full
      Software Development Life Cycle (SDLC) and applying system analysis
      concepts in a real healthcare system case study (KlinikGo).
    </p>

    <p>
      <strong>Learning Scope:</strong>
    </p>
    <ul>
      <li>Introduction to System Analyst role and SDLC fundamentals</li>
      <li>Requirement gathering and business process analysis</li>
      <li>System modeling using UML (Use Case, Activity, Sequence Diagram)</li>
      <li>Process modeling using Flowchart and DFD (Data Flow Diagram)</li>
      <li>Database design fundamentals (ERD, Class Diagram)</li>
      <li>Basic SQL (DDL, DML, JOIN) and data structure understanding</li>
      <li>Wireframing for system interface understanding</li>
      <li>Basic system implementation and software testing concepts</li>
    </ul>

    <p>
      <strong>Final Project Scope:</strong>
    </p>
    <ul>
      <li>Online patient registration system (new & returning patients)</li>
      <li>Doctor selection and scheduling system</li>
      <li>BPJS patient flow integration</li>
      <li>Queue number generation based on online registration order</li>
      <li>Re-registration process (APM machine & counter)</li>
      <li>Doctor schedule management and change notification system</li>
      <li>End-to-end system flow from registration to consultation</li>
    </ul>

    <p>
      <strong>Outcome:</strong><br />
      This project demonstrates end-to-end understanding of system analysis,
      from requirements and process modeling to database structure and system
      flow design, aligned with real-world System Analyst responsibilities.
    </p>
        </>
      }
    />
  );
}

export default Rakamin;
