import "./about.css";
import Row from "../../Assets/react-bootstrap/esm/Row";
import Col from "../../Assets/react-bootstrap/esm/Col";
import Button from "../../Assets/react-bootstrap/esm/Button";
import { faDownload, faEye, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import AboutImg from "../../Assets/image/log.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "http://localhost:3000/Dhaneskotti.pdf";
  link.target = "_blank";
  link.download = "Dhaneskotti.pdf";
  link.click();
};

const handleView = () => {
  window.open("http://localhost:3000/Dhaneskotti.pdf", "_blank");
};

function about() {
  return (
    <>
      <section className="sectionTwo" id="about">
        <div className="container about">
          <header>
            <div className="title">
              <h1> About Me</h1>
              <h4 className="sub-title"> My Introduction</h4>
            </div>
          </header>
        </div>
        <div className="container parent__main">
          <div className="main">
            <Row>
              <Col md={4} className="image" data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-delay="300"
                data-aos-offset="0">
                <div className="img mx-auto">
                  <img src={AboutImg} alt="About Me" />
                </div>
              </Col>
              <Col md={8} className="content">
                <p data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                // data-aos-delay="100"
                >
                  Hello there! I'm an enthusiastic Web developer with a passion
                  for creating clean and efficient code. With hands-on experience
                  in both MEAN (MongoDB, Express.js, Angular, Node.js) and MERN
                  (MongoDB, Express.js, React, Node.js) stacks, I thrive on
                  building dynamic and interactive web applications Eager to
                  contribute creativity and Adept at problem-solving skills to
                  innovative projects, while This fuels my drive to continuously
                  learn and adapt to new tools, frameworks, and methodologies.
                  From staying up-to-date with the latest industry trends to
                  embracing emerging technologies. I approach every project with
                  the same dedication and fervor. If you're seeking a dynamic web
                  developer who brings both technical expertise and a genuine
                  enthusiasm for innovation to the table, I'm here and excited to
                  embark on this journey with you. Let's build the future, one
                  line of code at a time
                </p>
                <div className="button"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-delay="200">
                  <Button
                    variant="primary"
                    className="contact_btn"
                    onClick={handleDownload}

                  >
                    <span className="text">Download CV </span>
                    <FontAwesomeIcon
                      icon={faDownload}
                      className="icon"
                    ></FontAwesomeIcon>
                  </Button>
                  <Button
                    variant="primary"
                    className="contact_btn"
                    onClick={handleView}
                  >
                    <span className="text">View CV</span>
                    <FontAwesomeIcon
                      icon={faEye}
                      className="icon"
                    ></FontAwesomeIcon>
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-end align-items-end">
        <Button href="#home" variant="primary" className="upArrow">
          <FontAwesomeIcon
            icon={faArrowUp}
            className="icon"
          ></FontAwesomeIcon>
        </Button>
      </div>
    </>
  );
}

export default about;
