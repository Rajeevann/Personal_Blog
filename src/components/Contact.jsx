import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../src/assets/img/contact-img.svg";

const Contact = () => {
  const formInitalDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitalDetails);
  const [buttonText, setButtonTex] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <div>
      <section className="contact" id="contact">
        <Container>
          <Row>
            <Col md={6}>
              <img src={contactImg} alt="Contact Us" />
            </Col>
            <Col md={6}>
              <h2>Get in Touch</h2>
              <form>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone"
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <textarea
                      type="Message"
                      value={formDetails.message}
                      placeholder="message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    />
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message && (
                          <Col>
                            <p
                              claasName={
                                status.success === false ? "danger" : "success"
                              }
                            >
                              {status.message}
                            </p>
                          </Col>
                        )}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
