import './contact.css'
import ContactGif from '../../Assets/image/contact2.gif';
import Col from '../../Assets/react-bootstrap/esm/Col';
import Row from '../../Assets/react-bootstrap/esm/Row';
import { faUser, faEnvelope, faPenToSquare, faMessage, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react';
import Button from "../../Assets/react-bootstrap/esm/Button";
import Axios from "axios"
import Validations from './validations';



function Contact() {

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', msg: '' })
    const [errors, setErrors] = useState({})

    let handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    let handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(`Name: ${formData.name}, Email: ${formData.email}, Subject: ${formData.subject} Message: ${formData.msg}`
        // )
        const validationErrors = Validations(formData);
        setErrors(validationErrors);

        console.log(Validations(formData))

        if (Object.keys(validationErrors).length === 0) {
            await Axios.post('http://localhost:2000/contact', {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                msg: formData.msg,
            })
                .then(
                    res => {
                        console.log(res.data)
                    }
                ).catch(
                    err => {
                        console.log(err)
                    }
                )
        }
    };


    return (
        <section className='sectionFour' id='contact'>
            <h2 className='title'>Contact Me</h2>
            <h4 className="sub-title d-flex justify-content-center mb-5"> Get in touch</h4>
            <div className='cont__conatiner container'>
                {/* <div className='quali__sections'> */}
                {/* <div className='quali__content'> */}
                <Row>
                    <Col className="quali__left img img-fluid" md={6} data-aos="fade-right">
                        <img src={ContactGif} alt="Contact" />
                    </Col>
                    <Col className="quali__right" data-aos="fade-left" md={6}>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col md={6} className='col'>
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        className="fa-icon"
                                    ></FontAwesomeIcon>
                                    <input type="text" placeholder='Name' className='input' name='name' value={formData.name} onChange={handleChange} />
                                    {errors.name && <p>{errors.name}</p>}
                                </Col>
                                <Col md={6}>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="fa-icon"
                                    ></FontAwesomeIcon>
                                    <input type="text" placeholder='E-mail' className='input' name='email' value={formData.email} onChange={handleChange} />
                                    {errors.email && <p>{errors.email}</p>}

                                </Col>
                                <Col md={12}>
                                    <FontAwesomeIcon
                                        icon={faPenToSquare}
                                        className="fa-icon"
                                    ></FontAwesomeIcon>
                                    <input type="text" placeholder='Subject' className='input' name='subject' value={formData.subject} onChange={handleChange} />
                                    {errors.subject && <p>{errors.subject}</p>}

                                </Col>
                                <Col md={12}>
                                    <FontAwesomeIcon
                                        icon={faMessage}
                                        className="fa-icon"
                                    ></FontAwesomeIcon>
                                    <textarea type="text" placeholder='Enter your message here . . .' className='input' rows={'6'} name='msg' value={formData.msg} onChange={handleChange} />
                                    {errors.msg && <p>{errors.msg}</p>}

                                </Col>
                                <Col className='d-flex justify-content-end submit_btn_col'>
                                    <Button variant="primary" className="submit_btn" type='submit'>
                                        <span className="text me-2">Submit</span>
                                        <FontAwesomeIcon
                                            icon={faPaperPlane}
                                            className="icon"
                                        ></FontAwesomeIcon>
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
                {/* </div> */}
                {/* </div> */}
            </div>
        </section >
    );
}

export default Contact;