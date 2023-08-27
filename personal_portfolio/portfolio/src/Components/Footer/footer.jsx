import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithubSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Col from '../../Assets/react-bootstrap/esm/Col';
import Row from '../../Assets/react-bootstrap/esm/Row';

const linkedin = "https://www.linkedin.com/in/dhanes-kotti-180090274/";
const github = "https://github.com/dhaneskotti";
const bold = { fontWeight: "bold" };

function Footer() {
    return (
        <section className='Footer'>
            <div className='container'>
                <Row>
                    <Col md={4} sm={6}>
                        <p className='footer_name'>
                            Dhaneskotti K
                        </p>
                        <h5>ASPIRING WEB DEVELOPER</h5>
                    </Col>
                    <Col md={4} sm={6}>
                        <ul className='footer_menus'>
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>

                            </li>
                            <li>
                                <a href="#skills">Skills</a>

                            </li>
                            <li>
                                <a href="#quali">Qualification</a>
                            </li>
                            <li>
                                <a href="#work">Works</a>

                            </li>
                            <li>
                                <a href="#contact">ContactMe</a>
                            </li>
                        </ul>
                    </Col>
                    <Col md={4} sm={6}>
                        <ul className='footer_social-media'>
                            <li>
                                <a href={linkedin} target="_blank" className="linkedin">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>

                            </li>
                            <li>
                                <a href={github} target="_blank" className="github">
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                </a>
                            </li>
                            <li>
                                <a href="" className="email">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                            </li>
                            <li>
                                <a href="" className="email">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default Footer;