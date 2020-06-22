import React from "react";
import Navbar from "../Shared/Navbar";
import "../../StyleSheet/ContactUs.css";
import Footer from "../Shared/Footer";
import { Divider } from "@material-ui/core";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
const ContactUs = (props) => {
  return (
    <div id={"contactRoot"}>
      <Navbar />
      <section id="contactSection">
        <h1>CONTACT US</h1>
        <Divider id={"mainDivider"} />
        <h3>Get in touch, your feedbacks are most welcome</h3>
        <Container id={"contactContainer"}>
          <Row className={"justify-content-md-center"}>
            <Col md={1} />
            <Col md={5}>
              <Form id={"contactForm"}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control size="lg" type="text" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control size="lg" type="email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows="5" />
                </Form.Group>
                <Button variant="primary" type="submit" id={"submitButton"}>
                  Send
                </Button>
              </Form>
            </Col>
            <Col md={1} />
            <Col md={5} id={"contactInfoSection"}>
              <div className={"contactInfoDiv"}>
                <Icon name={"map pin"} size={"big"} />
                <span className={"infoText"}>Casablanca, Morocco</span>
              </div>
              <div className={"contactInfoDiv"}>
                <Icon name={"mail"} size={"big"} />
                <span className={"infoText"}>oussamaelmoatamid@gmail.com</span>
              </div>
              <div className={"contactInfoDiv"}>
                <Icon name={"phone"} size={"big"} id={"phoneIcon"} />
                <span className={"infoText"}>+(212) 625 107 601</span>
              </div>
              <Divider />
              <div id={"socialMediaDiv"}>
                <a href={"https://www.facebook.com/oussama.elmoatamid"}>
                  <Icon name={"facebook"} size={"big"}></Icon>
                </a>
                <a href={"linkedin.com/in/oussama-el-moatamid"}>
                  <Icon name={"linkedin"} size={"big"} />
                </a>
                <a href={"https://github.com/ElMoatamidOussama"}>
                  <Icon name={"github"} size={"big"} />
                </a>
              </div>
              <Divider />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};
export default ContactUs;
