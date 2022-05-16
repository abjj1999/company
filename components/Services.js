import React from "react";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
function Services() {
  return (
    <>
      <div className="services animate__animated animate__fadeInDown">
        <h1 className="text-center">Services</h1>

        <div className="row d-flex justify-content-center m-5 ">
          <Card className="card col-lg-3 col-md-8 m-2 col-sm-12 hoverEffect">
            <Card.Body>
              <Card.Title className="border-bottom">Service 1</Card.Title>
              <Card.Text>breified version of the service</Card.Text>
              <Link href="/services/service1">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="card col-lg-3 col-md-8 m-2 col-sm-12 hoverEffect">
            <Card.Body>
              <Card.Title className="border-bottom">Service 2</Card.Title>
              <Card.Text>breified version of the service</Card.Text>
              <Link href="/services/service2">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
          <Card className="card col-lg-3 col-md-8 m-2 col-sm-12 hoverEffect">
            <Card.Body>
              <Card.Title className="border-bottom">Service 3</Card.Title>
              <Card.Text>breified version of the service</Card.Text>
              <Link href="/services/service3">
                <Button variant="primary">Learn More</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Services;
