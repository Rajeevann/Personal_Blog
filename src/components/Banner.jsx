import React, { useEffect, useState } from "react";
import { Col, Container, Row, useAccordionButton } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../src/assets/img/header-img.svg";
import "../../src/components/banner.css";
import TypeWriter from "./Animations/TypeWriter";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__rollIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi I'm Rajeevan `}</h1>
                </div>
              )}
            </TrackVisibility>
            <h2 className="wrap">
              <TypeWriter />
            </h2>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInRight" : ""
                  }
                >
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    nostrum atque neque dicta consequuntur quaerat quod
                    cupiditate libero explicabo ipsam.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
