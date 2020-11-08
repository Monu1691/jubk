import React from 'react';
import {Logo, footerBg} from '../asset/img';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer className="site-footer" style={{backgroundImage: `url(${footerBg})`}}>
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer-bx">
                <div className=" mb-3"><img src={Logo} /></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora possimus in repellendus aspernatur. Tempora, praesentium eveniet</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-bx">
                <h3>Useful Links</h3>
                <ul>
                  <li><a href="">Home</a></li>
                  <li><a href="">Schedule</a></li>
                  <li><a href="">Gallery</a></li>
                  <li><a href="">News</a></li>
                  <li><a href="">Contact</a></li>
                </ul>
              </div>
            </Col>
            <Col lg={2}>
              <div className="footer-bx">
                <h3>Other Links</h3>
                <ul>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Code of Conduct</a></li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="footer-bx"></div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
