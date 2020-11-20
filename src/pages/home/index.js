import React from 'react';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Choose1 from './components/Choose';
import SimpleSlider from './components/banner';
import TestimonialSlider from './components/TestimonialSlider';
import Trainer from './components/Trainer';
import { Container } from 'react-bootstrap';
import { aboutImg, aboutImg2, aboutImg3 } from '../../../src/asset/img/index.js';
import { Row, Col } from 'react-bootstrap';

const Home = () => {
   return (
      <>
         <Header />
         <SimpleSlider />
         <div className="welcome">
            <Container>
               <Row>
                  <Col lg={6}>
                     <div className="img">
                        <img src={aboutImg} />
                     </div>
                     <div className="img-bottom mt-5">
                        <ul>
                           <li>
                              <img src={aboutImg} />
                           </li>
                           <li>
                              <img src={aboutImg2} />
                           </li>
                           <li>
                              <img src={aboutImg3} />
                           </li>
                        </ul>
                     </div>
                  </Col>
                  <Col lg={6}>
                     <div className="heading">
                        <h6>About Dennis</h6>
                        <h4>WELCOME TO US</h4>
                     </div>
                     <div className="inner-content">
                        <h4>I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</h4>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</p>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
         <Choose1 />
         <Trainer />
         <TestimonialSlider />
         <Footer />
      </>
   );
};
export default Home;
