import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a Systems Information graduate with diverse interests in technology, design, and quality assurance.
              Currently working in Visual Communication Design. 
              I have Familiar with various concept and skills related to Python, SQL, and UI/UX design.
              I am particularly drawn to quality assurance, combining analytical dan creative thinking with attention to detail.
              I thrive in multidisciplinary environments and am always eager to learn new skills and explore emerging technologies.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, C++, SQL, Figma, Canva, UML, ERD, and basic web development (HTML, CSS, JavaScript).{" "}
                </b>
              </i>
              — and I enjoy bridging creativity and functionality.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Software testing, Visual Communication Design, data analysis, UI/UX design,{" "}
                </b>
              </i>
              and exploring creative ways to improve testing processes.
              <br />
              <br />
              Whenever possible, I love experimenting with creative testing approaches,
              <b className="purple"> designing posters, user-friendly interfaces, </b> learning new tools, {" "}
              <i>
                <b className="purple">Reading books </b> and  {" "}
                <b className="purple">Watching movies</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
