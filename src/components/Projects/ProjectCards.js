import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsBehance } from "react-icons/bs";
import { Link } from "react-router-dom";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* GH / Behance Button */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsBehance /> &nbsp;
            {props.isBlog ? "Detail" : "Behance"}
          </Button>
        )}

        {/* Demo / Detail Button */}
        {!props.isBlog && props.demoLink && (
          props.demoLink.startsWith("/") ? (
            <Link to={props.demoLink} className="btn btn-primary" style={{ marginLeft: "10px" }}>
              <CgWebsite /> &nbsp; Detail
            </Link>
          ) : (
            <Button variant="primary" href={props.demoLink} target="_blank" style={{ marginLeft: "10px" }}>
              <CgWebsite /> &nbsp; Detail
            </Button>
          )
        )}

         {/* PPT Button */}
        {props.pptLink && (
          props.pptLink.startsWith("/") ? (
            <Link
              to={props.pptLink}
              className="btn btn-secondary"
              style={{ marginLeft: "10px", marginTop: "5px" }}
            >
              View PPT
            </Link>
          ) : (
            <Button
              variant="secondary"
              href={props.pptLink}
              target="_blank"
              style={{ marginLeft: "10px", marginTop: "5px" }}
            >
              View PPT
            </Button>
          )
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
