import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style.css"; // pastikan path css sesuai

const NPKForecast = () => {
  return (
    <Container fluid className="home-about-section" style={{ minHeight: "100vh" }}>
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col md={10}>
            <h1 style={{ fontSize: "2.5em", color: "white" }}>
              NPK Fertilizer <span className="purple">Price Forecast</span>
            </h1>
            <p style={{ color: "white", fontSize: "1.1em", lineHeight: "1.6" }}>
              During my 6-month internship at <strong>PT Pupuk Sriwidjaja Palembang</strong>,
              I developed a <strong>raw material price forecasting system for NPK fertilizer</strong> 
              to help the company plan procurement more efficiently. <br /><br />

              The system automatically performs <strong>web scraping</strong> every month using <strong>Selenium</strong>, 
              processes the data, and updates the forecasts on the company's website. 
              Scheduled via <strong>Windows Scheduler</strong>, this ensures accurate, real-time predictions, helping 
              reduce over-expenditure and streamline procurement planning. <br /><br />

              <strong>Tools & Technology:</strong> Python, SQL, Streamlit, Selenium, Windows Scheduler
            </p>

            <h3 style={{ color: "white", marginTop: "30px" }}>Price Forecasts</h3>

            <p style={{ color: "white" }}>Urea (Nitrogen):</p>
            <img src={process.env.PUBLIC_URL + "/Assets/Projects/f_urea.png"} alt="Urea 1" style={{ maxWidth: "45%", marginRight: "10px" }} />
            <img src={process.env.PUBLIC_URL + "/Assets/Projects/f_urea2.png"} alt="Urea 2" style={{ maxWidth: "45%" }} />

            <p style={{ color: "white", marginTop: "20px" }}>Phosphate (Phosphor):</p>
            <img src={process.env.PUBLIC_URL + "/Assets/Projects/f_fosfat.png"} alt="Phosphate 1" style={{ maxWidth: "45%", marginRight: "10px" }} />
            <img src={process.env.PUBLIC_URL + "/Assets/Projects/f_fosfat2.png"} alt="Phosphate 2" style={{ maxWidth: "45%" }} />

            <p style={{ color: "white", marginTop: "20px" }}>KCL (Potassium):</p>
            <img src={process.env.PUBLIC_URL + "/Assets/Projects/f_kcl.png"} alt="KCL 1" style={{ maxWidth: "45%", marginRight: "10px" }} />
            <img src={process.env.PUBLIC_URL + "/Assets/Projects/f_kcl2.png"} alt="KCL 2" style={{ maxWidth: "45%" }} />

            <div style={{ marginTop: "30px" }}>
              <a href="#/project" className="btn btn-primary">
                Back to Projects
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NPKForecast;
