import React from "react";
import { Col, Row } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import "../../StyleSheet/footer.css";

const footer = () => {
  return (
    <div>
      <footer id={"footer"}>
        <Row className={"justify-content-md-center"}>
          <Col md={3}>
            <span className="footerContact">
              &copy; 2O20 Oussama EL-MOATAMID, all rights reserved
            </span>
          </Col>
          <Col md={2}>
            <span className="footerContact">
              <a href="https://www.linkedin.com/in/oussama-el-moatamid">
                <Icon name="linkedin" size="large" />
                <span>/oussama-el-moatamid</span>
              </a>
            </span>
          </Col>
          <Col md={2}>
            <span className="footerContact">
              <a href="https://github.com/ElMoatamidOussama">
                <Icon name="github" size="large" />
                <span>/ElMoatamidOussama</span>
              </a>
            </span>
          </Col>
          <Col md={3}>
            <span className="footerContact">
              <Icon name="mail" size="large" />
              <span>oussamaelmoatamid@gmail.com</span>
            </span>
          </Col>
          <Col md={2}>
            <span className="footerContact">
              <Icon name="phone" size="large" />
              <span>+(212)625107601</span>
            </span>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default footer;
