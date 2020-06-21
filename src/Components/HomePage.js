import React from "react";
import { withRouter } from "react-router";
import "../StyleSheet/HomePage.css";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Button, Icon, Divider } from "semantic-ui-react";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  handleScroll = () => {
    let navBarElement = document.querySelector("#nav-bar");
    if (navBarElement)
      navBarElement.classList.toggle("scrolled", window.scrollY > 120);
  };

  onClick = () => {
    this.props.history.push("/dashboard/");
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  render() {
    const src1 = "../images/table_view.svg",
      src3 = "../images/map_view.svg",
      src2 = "../images/chart_view.svg",
      src4 = "../images/documentation.svg",
      src5 = "../images/github.svg";

    return (
      <div>
        <section id={"main"}>
          <Navbar />
          <section id={"banner"}>
            <Container>
              <Row className={"justify-content-md-center"}>
                <Col md={5}>
                  <p className={"homePageTitle"}>COVID-19 DASHBOARD</p>
                  <p className={"homePageText"}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in.
                  </p>
                  <Button
                    className="homePageButton"
                    size="large"
                    onClick={this.onClick}
                  >
                    Get Started
                    <PlayCircleOutlineIcon fontSize={"large"} />
                  </Button>
                </Col>
                <Col md={1} />
                <Col md={6}>
                  <Image
                    id="google_analytics"
                    src={"../images/all_the_data.svg"}
                    alt={"google_analytics"}
                    fluid
                  />
                </Col>
              </Row>
            </Container>
          </section>
          <Divider />
          <Divider />
          <section id={"features"}>
            <Container>
              <h1> Features </h1>
              <Row className={"justify-content-md-center"}>
                <Col md={3}>
                  <Image src={src1} className={"featuresImage"} />
                  <h3> Tabular View</h3>
                  <p className={"featureDescription"}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat.
                  </p>
                </Col>
                <Col md={1} />
                <Col md={3}>
                  <Image
                    src={src2}
                    className={"featuresImage"}
                    id={"featuresSecondImage"}
                  />
                  <h3> Chart View</h3>
                  <p className={"featureDescription"}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat.
                  </p>
                </Col>
                <Col md={1} />
                <Col md={3}>
                  <Image
                    src={src3}
                    className={"featuresImage"}
                    id={"featuresThirdImage"}
                  />
                  <h3> Map View</h3>
                  <p className={"featureDescription"}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
          <Divider />
          <section id={"api"}>
            <Container>
              <h1> API </h1>
              <Row className={"justify-content-md-center"}>
                <Col md={5}>
                  <Image src={src4} fluid />
                </Col>
                <Col md={6} id={"apiDocumentationPostman"}>
                  <h2>Documentation Available on Postman</h2>
                  <p>
                    Documentation is available on Postman online where all
                    routes can be seen with relevant descriptions, requests and
                    responses.
                  </p>
                  <Button
                    id={"apiDocumentationButton"}
                    size="large"
                    onClick={this.onClick}
                  >
                    Check Documentation <Icon name="chevron circle right" />
                  </Button>
                </Col>
              </Row>
            </Container>
          </section>
          <Divider />
          <section id={"support"}>
            <Container>
              <h1> Support The Project </h1>
              <Row className={"justify-content-md-center"}>
                <Col md={6} id={"githubSupport"}>
                  <p>
                    You can support our project by adding stars on our github
                    repository via the link below.
                  </p>
                  <a href="https://github.com/ElMoatamidOussama/Covid19-Tracker">
                    <Icon size="huge" name="github" id={"githubIcon"} />
                    <p>github.com/ElMoatamidOussama/Covid19-Tracker</p>
                  </a>
                </Col>
                <Col md={6}>
                  <Image src={src5} fluid />
                </Col>
              </Row>
            </Container>
          </section>
          <Divider />
        </section>
        <Footer />
      </div>
    );
  }
}
export default withRouter(HomePage);
