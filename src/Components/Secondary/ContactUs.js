import React from "react";
import Navbar from "../Shared/Navbar";
import "../../StyleSheet/ContactUs.css";
import Footer from "../Shared/Footer";
import { Divider } from "@material-ui/core";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import { Alert } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      success: false,
      error: false,
      validated: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    this.setState({ validated: true });
    if (form.checkValidity() === true) {
      emailjs
        .sendForm(
          "gmail",
          "covid_19_template",
          e.target,
          "user_qMyuwdXPgx3N53tP8Lpis"
        )
        .then(
          (result) => {
            console.log(result.text);

            this.setState({
              name: "",
              email: "",
              message: "",
              success: true,
              validated: false,
            });
          },
          (error) => {
            console.log(error.text);

            this.setState({
              name: "",
              email: "",
              message: "",
              error: true,
              validated: false,
            });
          }
        );
    }
  };
  handleClose = (e) => {
    this.setState({ success: false, error: false });
  };

  render() {
    const src1 = "../../images/contactUs2.svg";
    return (
      <div id={"contactRoot"}>
        <Snackbar
          name="success"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.success}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="success">
            Your message was sent successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          name="error"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={this.state.error}
          autoHideDuration={3000}
          onClose={this.handleClose}
        >
          <Alert onClose={this.handleClose} severity="error">
            There was an error while sending your message!
          </Alert>
        </Snackbar>
        <Navbar />
        <section id="contactSection">
          <h1>CONTACT US</h1>
          <Divider id={"mainDivider"} />
          <h3>Get in touch, your feedback is most welcome</h3>
          <Container id={"contactContainer"}>
            <Row className={"justify-content-md-center"}>
              <Col md={5} id={"contactIllustration"}>
                <Image id="contactUs" src={src1} alt={"contactUs"} fluid />
              </Col>
              <Col md={1} />
              <Col md={5}>
                <Form
                  noValidate
                  validated={this.state.validated}
                  id={"contactForm"}
                  onSubmit={this.handleSubmit}
                >
                  <Form.Group controlId="formBasicUserName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control
                      required
                      name="name"
                      size="lg"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please insert a valid name.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      size="lg"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                    <Form.Control.Feedback type="invalid">
                      Please insert a valid email.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="formBasicUserMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      required
                      name="message"
                      as="textarea"
                      rows="5"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please insert a valid message.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="primary" type="submit" id={"submitButton"}>
                    Send Message
                  </Button>
                </Form>
              </Col>
              <Col md={1} />
            </Row>
          </Container>
        </section>
        <Footer id={"footer"} />
      </div>
    );
  }
}

export default ContactUs;
