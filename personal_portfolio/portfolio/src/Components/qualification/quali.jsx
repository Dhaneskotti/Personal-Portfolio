import './quali.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function Quali() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <section className='sectionFour' id='quali'>
            <h2 className='title'>Qualification</h2>
            <h4 className="sub-title d-flex justify-content-center mb-5"> My Personal Journey</h4>
            <div className='quali__conatiner container'>
                <div className='quali__sections'>
                    <div className='quali__content'>
                        <div className='quali__data'>
                            <div className='quali__data-content'
                                data-aos="fade-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-delay="100">
                                <h5 className='quali__title px-4'>
                                    Apollo Arts And Science College
                                </h5>
                                <div className='quali__sub-tite px-4 text-end'>
                                    University Of Madras
                                </div>
                                <div className='quali__sub-tite px-4 mt-1'>
                                    Bachelor of Science, Department of Computer Science
                                </div>
                                <div className='quali__sub-tite px-4 my-1'>
                                    Percentage : 79.14
                                </div>
                                <div className='quali__year px-4'>
                                    Year of Passing 2020-2023
                                </div>
                            </div>
                            <div>
                                <span className='quali__round'>

                                </span>
                                <span className='quali__line'>

                                </span>
                            </div>
                        </div>
                        <div className='quali__data'>
                            <div></div>
                            <div>
                                <span className='quali__round'>

                                </span>
                                <span className='quali__line'>

                                </span>
                            </div>
                            <div className='quali__data-content' data-aos="fade-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-delay="300">
                                <h5 className='quali__title px-4'>
                                    Jaigopal Garodia National HR SEC
                                </h5>
                                <div className='quali__sub-tite px-4 text-end'>
                                    State board
                                </div>
                                <div className='quali__sub-tite px-4 mt-1'>
                                    Computer Application
                                </div>
                                <div className='quali__sub-tite px-4 my-1'>
                                    <span className='pe-4'>
                                        10<sup>th</sup> Percentage : 79.14
                                    </span>
                                    <span>
                                        12<sup>th</sup> Percentage : 79.14
                                    </span>
                                </div>
                                <div className='quali__year px-4'>
                                    Year of Passing 2016-2020
                                </div>
                            </div>
                        </div>
                        <div className='quali__data'>
                            <div className='quali__data-content' data-aos="fade-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-delay="400">
                                <h5 className='quali__title px-4'>
                                    St Paul's Mahajana HR SEC
                                </h5>
                                <div className='quali__sub-tite px-4 text-end'>
                                    State board
                                </div>
                                <div className='quali__year px-4'>
                                    Year of Passing 2005-2016
                                </div>
                            </div>
                            <div>
                                <span className='quali__round'>

                                </span>
                                <span className='quali__line'>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Quali;