import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/ars.jpg";
import emotion from "../../Assets/Projects/nuri.png";
import editor from "../../Assets/Projects/f_fosfat2.png";
import chatify from "../../Assets/Projects/sanbercode.png";
import suicide from "../../Assets/Projects/myskill.png";
import bitsOfCode from "../../Assets/Projects/test_plan.png";
import saucedemo from "../../Assets/Projects/saucedemo.png";
import rakamin from "../../Assets/Projects/rakamin.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


           <Col md={4} className="project-card">
                      <ProjectCard
                        imgPath={rakamin}
                        isBlog={false}
                        title="Analysis & Design of KlinikGo Online Registration System"
                        description="Klinikgo Health System Analyst Project-Based Internship Program by Rakamin Academy"
                        //ghLink="https://github.com/adinda17/katalon-saucedemo-automation.git"
                        linkType="github" 
                        demoLink="/rakamin"
                      />
          </Col>

          <Col md={4} className="project-card">
                      <ProjectCard
                        imgPath={saucedemo}
                        isBlog={false}
                        title="Automation Testing – SauceDemo Website (Katalon)"
                        description="QA automation project using Katalon Studio to test core e-commerce flows on SauceDemo. Covers login, product selection, cart, and checkout scenarios"
                        ghLink="https://github.com/adinda17/katalon-saucedemo-automation.git"
                        linkType="github" 
                        demoLink="/saucedemo-katalon"
                      />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Quality Assurance Testing Projects – Sanbercode Bootcamp"
              description="This project is a collection of Quality Assurance practice projects completed during the Sanbercode Quality Assurance Bootcamp.
              It showcases hands-on experience in manual testing, bug reporting, API testing, and automation testing, following structured QA processes and industry-relevant tools."
              ghLink="https://github.com/adinda17/sanbercode.git"
              linkType="github" 
              demoLink="/qa-projects"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="QA Project: Test Plan Aplikasi Pinjam Sultan "
              description="Developed a detailed Test Plan for the Aplikasi Pinjam Sultan, a mobile app for borrowing tools and vehicles. Based on the provided Product Requirement Document (PRD) from MySkill, covering test scenarios, test cases, and quality assurance strategy to ensure reliable and smooth user experience."
              //ghLink="https://docs.google.com/document/d/11ojEreujZQk0H7GUrdM_6CYycehG8HBzwknRfUabgA0/edit?usp=sharing"
              demoLink="https://docs.google.com/document/d/11ojEreujZQk0H7GUrdM_6CYycehG8HBzwknRfUabgA0/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NPK Fertilizer Raw Material Price Forecast at PT Pupuk Sriwidjaja Palembang"
              description="6-month BUMN internship project at PT Pupuk Sriwidjaja. Built an automated system to forecast NPK raw material prices using Python, SQL, and Selenium for monthly procurement planning."
               demoLink="/npk-forecast"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Project: Eatzy Mobile Application (ARS 2019)"
              description="Android app designed with the RUP approach to recommend food, drinks, and restaurants. Published in ARS 2019."
          
              demoLink="https://garuda.kemdiktisaintek.go.id/documents/detail/1723553"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Revamp MySkill.id Website on Mobile — Case Study"
              description="This project focuses on redesigning the MySkill.id website for mobile devices.
              I analyzed the existing user flow and identified pain points in navigation and content hierarchy.
              Through wireframes and high-fidelity prototypes,
              I proposed a cleaner interface with improved accessibility and usability
              to enhance the overall mobile learning experience."
              ghLink="https://www.behance.net/gallery/156062967/Revamp-MySkillid-Website-on-Mobile-Case-Study"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Nuri UIUX Project-Based Internship (Rakamin Academy)"
              description="During the project-based internship at Rakamin Academy,
              I designed a full UI/UX concept for a mock online shopping website under the Nuri brief.
              I conducted user research, created user flows, and developed prototypes
              for product browsing, cart management, and checkout features.
              The final high-fidelity design focused on intuitive navigation,
              visual consistency, and responsiveness across devices."
              ghLink="https://www.behance.net/gallery/183544091/Nuri-UIUX-Project-Based-Internship-(Rakamin-Academy)"
              pptLink="/nuri-ppt" // ini yang baru
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
