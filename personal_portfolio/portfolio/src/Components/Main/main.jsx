import React from "react"; // Make sure to import React
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import dhanes from "../../Assets/image/dhanes.png";
import Col from "../../Assets/react-bootstrap/esm/Col";
import Row from "../../Assets/react-bootstrap/esm/Row";
import Button from "../../Assets/react-bootstrap/esm/Button";

const linkedin = "https://www.linkedin.com/in/dhanes-kotti-180090274/";
const github = "https://github.com/dhaneskotti";
const bold = { fontWeight: "bold" };

function Main() {
  return (
    <>
      <section className="sectionOne" id="home">
        <div className="container container__main">
          <div className="container__content">
            <Row>
              <Col sm={6} lg={1} className="parent__container__social-media" data-aos="fade-right">
                <div className="container__social-media">
                  <a href={linkedin} target="_blank" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} className="main_icon" />
                  </a>
                  <a href={github} target="_blank" className="github">
                    <FontAwesomeIcon icon={faGithubSquare} className="main_icon" />
                  </a>
                  <a href="" className="email">
                    <FontAwesomeIcon icon={faEnvelope} className="main_icon" />
                  </a>
                </div>
              </Col>
              <Col lg={7} className="main" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="100"
                data-aos-offset="0">
                <div className="main__title">
                  <p className="name">
                    Hi,I'am <span>Dhaneskotti</span>
                  </p>
                  <h5 className="headline">ASPIRING WEB DEVELOPER</h5>
                  <p className="main__content">
                    Coding the Future: A Promising Web Developer Fresh Out of the
                    Gate. <br />
                    Passionate software Engineer.
                    <br />
                    Technical <span style={bold}>Problem-solving</span>, and{" "}
                    <span style={bold}>adapting to new challenges</span>
                  </p>
                  <Button href="#contact" variant="primary" className="contact_btn">
                    <span className="text">Contact Me</span>
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="icon"
                    ></FontAwesomeIcon>
                  </Button>
                </div>
              </Col>
              <Col sm={6} lg={4} className="parent__content__img" data-aos="zoom-out">
                <div className="content__img">
                  <img src={dhanes} alt="dhaneskotti" />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
