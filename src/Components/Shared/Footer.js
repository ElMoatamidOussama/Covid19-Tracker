import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import "../../StyleSheet/footer.css";
import { Divider } from "@material-ui/core";

const footer = () => {
  return (
    <footer id={"footer"}>
      <Container>
        <Row>
          <Col md={4}>
            <p className={"title"}>Oussama EL-MOATAMID</p>
            <p>
              23 Years-old Full-Stack Software Engineer with expertise in CRM &
              Marketing Automation.
              <br />
              <br />
              Passionate about Software Development, autonomous, fast-learner
              and a problem-solver.
              <br />
              <br />
              Currently, looking forward to opportunities for future
              collaborations.
            </p>
          </Col>
          <Col md={1}></Col>
          <Col md={4}>
            <p className={"title"}>Contact</p>
            <Row>
              <Col sm={1}>
                <Icon name="home" size="large" />
              </Col>
              <Col sm={11}>
                <p>
                  Boulveard-Ghandi, <br />
                  <span id="address">Casablanca, Morocco</span>
                </p>
              </Col>
            </Row>
            <p className="footerContact">
              <Icon name="phone" size="large" id={"phoneIcon"} />
              +(212) 625 107 601
              <br />
            </p>
            <p className="footerContact">
              <Icon name="mail" size="large" id={"mailIcon"} />
              oussamaelmoatamid@gmail.com
            </p>
          </Col>
          <Col md={3}>
            <p className={"title"}>Connect</p>
            <p className="footerContact">
              <span>
                <a href="https://www.linkedin.com/in/oussama-el-moatamid">
                  <Icon name="linkedin" size="large" />
                  <span>/oussama-el-moatamid</span>
                </a>
              </span>
            </p>
            <p className="footerContact">
              <span>
                <a href="https://github.com/ElMoatamidOussama">
                  <Icon name="github" size="large" />
                  <span>/ElMoatamidOussama</span>
                </a>
              </span>
            </p>
            <p className="footerContact">
              <span>
                <a href="https://twitter.com/ELMOATAMIDOUSS1">
                  <Icon name="twitter" size="large" />
                  <span>/ElMoatamidOussama</span>
                </a>
              </span>
            </p>
          </Col>
        </Row>
        <Divider />
        <Row className={"justify-content-md-center"}>
          <Col md={4}>
            <span className="footerContact" id={"copyRights"}>
              <p>&copy; 2O20 Oussama EL-MOATAMID, all rights reserved.</p>
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
