import React, { useEffect, useState } from "react";
import { Col, Container, Row, useAccordionButton } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../src/assets/img/header-img.svg";
import "../../src/components/banner.css";
import TypeWriter from "./Animations/TypeWriter";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`Hi I'm Rajeevan `}</h1>
            <h2 className="wrap">
              <TypeWriter />
            </h2>
            <p>teadhsflkjsdhf</p>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
