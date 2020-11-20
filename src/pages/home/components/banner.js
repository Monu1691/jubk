import React from 'react';
import { Container } from 'react-bootstrap';
import { bannerBg, bannerModel } from '../../../asset/img';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Banner() {
   var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };
   return (
      <> 
     <Slider {...settings}>
      <div>
      <section className="banner-sec" style={{backgroundImage: `url(${bannerBg})`}}>
         <Container>
            <Row>
               <Col lg={6}>
                  <div className="box-1">
                     <div className="h1-text">
                        <h1>Transform Your Life</h1>
                     </div>
                     <div className="ican">    
                        <h4>I Can Help you Reach Your Fitness Goal Fast!</h4>
                     </div>
                     <div className="buttons mt-5">
                        <button className="btn btn-warning">Get Started Now</button>
                        <a className="videos ml-5">
                           <FontAwesomeIcon className="i-can float-left text-center" icon={faYoutube} />
                           <span>Watch Reviews</span>
                        </a>    
                     </div>   
                  </div>  
               </Col>
               <Col lg={6}>
                  <div className="img">
                     <img src={bannerModel}/>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      </div>

      <div>
      <section className="banner-sec" style={{backgroundImage: `url(${bannerBg})`}}>
         <Container>
            <Row>
               <Col lg={6}>
                  <div className="box-1">
                     <div className="h1-text">
                        <h1>Transform Your Life</h1>
                     </div>
                     <div className="ican">    
                        <h4>I Can Help you Reach Your Fitness Goal Fast!</h4>
                     </div>
                     <div className="buttons mt-5">
                        <button className="btn btn-warning">Get Started Now</button>
                        <a className="videos ml-5">
                           <FontAwesomeIcon className="i-can float-left text-center" icon={faYoutube} />
                           <span>Watch Reviews</span>
                        </a>    
                     </div>   
                  </div>  
               </Col>
               <Col lg={6}>
                  <div className="img">
                     <img src={bannerModel}/>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      </div>

      <div>
      <section className="banner-sec" style={{backgroundImage: `url(${bannerBg})`}}>
         <Container>
            <Row>
               <Col lg={6}>
                  <div className="box-1">
                     <div className="h1-text">
                        <h1>Transform Your Life</h1>
                     </div>
                     <div className="ican">    
                        <h4>I Can Help you Reach Your Fitness Goal Fast!</h4>
                     </div>
                     <div className="buttons mt-5">
                        <button className="btn btn-warning">Get Started Now</button>
                        <a className="videos ml-5">
                           <FontAwesomeIcon className="i-can float-left text-center" icon={faYoutube} />
                           <span>Watch Reviews</span>
                        </a>    
                     </div>   
                  </div>  
               </Col>
               <Col lg={6}>
                  <div className="img">
                     <img src={bannerModel}/>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
      </div>
     </Slider>
     </>
   );
 }
