import React from "react";
import { Card } from "react-bootstrap";

function Projects() {
  return (
    <>
      <h1 className="text-center project-header animate__animated animate__fadeInDown">
        Projects
      </h1>
      <div className="projects row d-flex justify-content-evenly m-3 animate__animated animate__fadeInDown">
        <Card className="text-white col-lg-2 col-sm-11 col-md-5 p-0 project">
          <Card.Img
            src="/images/card1.jpg"
            alt="Card image"
            className="projectImage"
          />
          <Card.ImgOverlay>
            <Card.Title className="projectTitle">Card title</Card.Title>
            <Card.Text className="text-dark justify-content-end">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-white col-lg-2 col-sm-11 col-md-5 p-0 project">
          <Card.Img
            src="/images/card1.jpg"
            alt="Card image"
            className="projectImage"
          />
          <Card.ImgOverlay>
            <Card.Title className="projectTitle">Card title</Card.Title>
            <Card.Text className="text-dark justify-content-end">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-white col-lg-2 col-sm-11 col-md-5 p-0 project">
          <Card.Img
            src="/images/card1.jpg"
            alt="Card image"
            className="projectImage"
          />
          <Card.ImgOverlay>
            <Card.Title className="projectTitle">Card title</Card.Title>
            <Card.Text className="text-dark justify-content-end">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="text-white col-lg-2 col-sm-11 col-md-5 p-0 project">
          <Card.Img
            src="/images/card1.jpg"
            alt="Card image"
            className="projectImage"
          />
          <Card.ImgOverlay>
            <Card.Title className="projectTitle">Card title</Card.Title>
            <Card.Text className="text-dark justify-content-end">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </>
  );
}

export default Projects;
