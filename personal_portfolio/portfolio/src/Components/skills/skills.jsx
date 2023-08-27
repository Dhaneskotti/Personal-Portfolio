import './skills.css'
import Accordion from 'react-bootstrap/Accordion';
import Row from "../../Assets/react-bootstrap/esm/Row";
import Col from "../../Assets/react-bootstrap/esm/Col";
// import Button from "../../Assets/react-bootstrap/esm/Button";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faNodeJs, faAngular, faBootstrap, faReact, faGithub, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
function Skills() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section className="sectionThree" id="skills">
            <h2 className='title mb-2'>Skills</h2>
            <h4 className="sub-title d-flex justify-content-center mb-2"> My Technical Skills</h4>
            <div className='container container__skills'>
                <div className='Accordion__skills'>
                    <Row>
                        <Col>
                            <Accordion data-aos="fade-right">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='Accordion'>
                                        <FontAwesomeIcon
                                            icon={faCode}
                                            className="icon Accordion"
                                        ></FontAwesomeIcon>
                                        &nbsp;
                                        FRONT-END
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>HTML</h5>
                                                <h6>90%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={90} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>CSS</h5>
                                                <h6>80%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={80} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>SCSS</h5>
                                                <h6>60%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={60} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>JAVASCRIPT & (ES6+)</h5>
                                                <h6>75%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={75} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>TYPESCRIPT</h5>
                                                <h6>60%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={60} />
                                        </div>
                                        <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className='Accordion'>
                                        <FontAwesomeIcon
                                            icon={faAngular}
                                            className="icon Accordion"
                                        ></FontAwesomeIcon>
                                        &nbsp;
                                        <FontAwesomeIcon
                                            icon={faNodeJs}
                                            className="icon Accordion"
                                        ></FontAwesomeIcon>
                                        &nbsp;
                                        FRAMEWORK
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>ANGULAR</h5>
                                                <h6>75%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={75} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>NODE.JS</h5>
                                                <h6>40%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={40} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>EXPRESS.JS</h5>
                                                <h6>40%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={40} />
                                        </div>
                                        <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                        <Col>
                            <Accordion data-aos="fade-left">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='Accordion'>
                                        <FontAwesomeIcon
                                            icon={faBootstrap}
                                            className="icon Accordion"
                                        ></FontAwesomeIcon>
                                        &nbsp;
                                        <FontAwesomeIcon
                                            icon={faReact}
                                            className="icon Accordion"
                                        ></FontAwesomeIcon>
                                        &nbsp;
                                        LIBRARIES
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>BOOTSTRAP</h5>
                                                <h6>90%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={90} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>MATERIAL</h5>
                                                <h6>100%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={100} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>REACT</h5>
                                                <h6>50%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={50} />
                                        </div>
                                        <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className='Accordion'>
                                        <FontAwesomeIcon
                                            icon={faDatabase}
                                            className="icon Accordion"
                                        ></FontAwesomeIcon>
                                        &nbsp;
                                        DATABASE
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>MONGO DB</h5>
                                                <h6>50%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={50} />
                                        </div>
                                        <br />
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>MYSQL</h5>
                                                <h6>60%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={60} />
                                        </div>
                                        <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col md={6} className='mx-auto'>
                            <Accordion data-aos="fade-up">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header className='Accordion'>
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            className="icon Accordion"
                                        ></FontAwesomeIcon>
                                        &nbsp;
                                        VERSION CONTROL
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div>
                                            <div className='d-flex justify-content-between'>
                                                <h5>GITHUB</h5>
                                                <h6>60%</h6>
                                            </div>
                                            <ProgressBar variant="custom" animated now={60} />
                                        </div>
                                        <br />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </div>
            </div>
        </section>
    );
}

export default Skills;