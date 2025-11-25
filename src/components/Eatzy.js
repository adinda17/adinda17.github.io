import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Eatzy = () => {
  return (
    <div className="project-detail container">
      <h1 className="project-title">Analysis and Design of “Eatzy” Android Application</h1>
      <p><strong>Publication:</strong> ARS 2019 - <a href="https://seminar.ilkom.unsri.ac.id/index.php/ars/article/download/2122/1017" target="_blank" rel="noreferrer">Download PDF</a></p>
      <p><strong>University:</strong> Sriwijaya University</p>
      <p><strong>Role:</strong> Designer / Developer</p>

      <div className="project-content">
        <p><strong>Description:</strong> This project was developed during my third year at Sriwijaya University and presented at the <strong>Annual Research Seminar (ARS) 2019</strong>. We designed an Android mobile application called <strong>“Eatzy”</strong>, aimed at helping users find food and beverage recommendations, recipes, and restaurant suggestions in an interactive mobile experience.</p>

        <p>The development process followed the <strong>Rational Unified Process (RUP)</strong>, including requirements analysis, system design, implementation, and testing. The application features an intuitive interface and utilizes an internal database to store menu and recommendation information, allowing users to easily search and find recommendations based on their preferences.</p>

        <p><strong>Tools & Technology:</strong> Android Studio, Java, RUP Method</p>
        <p><strong>Outcome:</strong> Fully functional Android prototype for food recommendations, documented and published in ARS 2019.</p>

    

        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default Eatzy;
