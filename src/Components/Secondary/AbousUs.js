import React from "react";
import Navbar from "../Shared/Navbar";
import "../../StyleSheet/AboutUs.css";
import Footer from "../Shared/Footer";
import { Divider } from "@material-ui/core";
import { Col, Container, Image, Row } from "react-bootstrap";
const AboutUs = (props) => {
  const src1 = "../../images/AboutUs.svg";
  const mernStackLogo = "../../images/mernStackLogo.png";
  const pythonLogo = "../../images/pythonLogo.png";

  return (
    <div id={"abtoutRoot"}>
      <Navbar />
      <section id="aboutSection">
        <h1>Oussama EL-MOATAMID</h1>
        <Divider id={"mainDivider"} />
        <Container id={"aboutContainer"}>
          <Row className={"justify-content-md-center"}>
            <Col md={5} id={"aboutIllustration"}>
              <Image id="contactUs" src={src1} alt={"contactUs"} fluid />
            </Col>
            <Col md={1} />
            <Col md={6}>
              <div className={"aboutDiv"} id={"firstDiv"}>
                <h3>Who Am I ?</h3>
                <p>
                  23 Years-Old Full-Stack Engineer with expertise in CRM &
                  Marketing Automation.
                </p>
              </div>
              <div className={"aboutDiv"} id={"technicalStackDiv"}>
                <h3>What Is My Technical Stack?</h3>
                <p>
                  <b>MERN:</b> Mongodb, Express.Js, React.Js, Node.Js &nbsp;
                  <b>+</b>&nbsp;
                  <b>Python:</b> Django
                  <Image
                    id="mernStackLogo"
                    src={mernStackLogo}
                    alt={"Mern Stack"}
                  />
                  <Image id="pythonLogo" src={pythonLogo} alt={"Mern Stack"} />
                </p>
              </div>
              <div className={"aboutDiv"}>
                <h3>What Am I Looking For ?</h3>
                <p id={"objectivesParagraph"}>
                  Currently looking for a challenge allowing me to capitalize on
                  my technical skills, develop my soft-skills and lead projects
                  evolving in a creative, dynamic and innovative context.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer id={"myFooter"} />
    </div>
  );
};
export default AboutUs;
