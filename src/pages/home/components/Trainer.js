import React from 'react';
import { Container } from 'react-bootstrap';
import {  Trainer1, Trainer2, Trainer3  } from '../../../asset/img/index';
import { Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Trainer = () => {
    return (
    <>
        <section className="trainer">
            <div className="heading">
               <h6>Pillars of Dennis</h6>
               <h4>Our Trainer</h4>
            </div>
            <Container>
               <Row>
                  <Col lg={4}>
                     <div className="img-1 mt-5">
                        <img src={Trainer1}/>
                        <div className="mask">
                           <h4>Kalorita Core</h4>
                           <h6>Aerobics Trainer</h6>
                           <div className="social-media">
                              <ul>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faFacebookF} />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faTwitter} />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faLinkedin} />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>   
                  </Col>
                  <Col lg={4}>
                     <div className="img-1 mt-5">
                        <img src={Trainer2}/>
                        <div className="mask">
                           <h4>John Doe</h4>
                           <h6>Aerobics Trainer</h6>
                           <div className="social-media">
                              <ul>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faFacebookF} />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faTwitter} />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faLinkedin} />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>   
                  </Col>
                  <Col lg={4}>
                     <div className="img-1 mt-5">
                        <img src={Trainer3}/>
                        <div className="mask">
                           <h4>Lana Rhodes</h4>
                           <h6>Aerobics Trainer</h6>
                           <div className="social-media">
                              <ul>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faFacebookF} />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faTwitter} />
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="#">
                                       <FontAwesomeIcon className="" icon={faLinkedin} />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>   
                  </Col>
               </Row>
            </Container>
         </section>
    </>
    );
};
export default Trainer;       