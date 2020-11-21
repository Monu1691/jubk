import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import {Logo} from '../asset/img';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>    
      <header className="site-header">
        <Navbar collapseOnSelect expand="lg">
          <Container>
            <div className="LogoDv">
              <Navbar.Brand href="#home">
                <img src={Logo} />
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="mainMenu" />
            <Navbar.Collapse id="mainMenu">
              <ul className="ml-auto navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="header-stripe">
          
        </div>
      </header>
    </>
  );
};
export default Header;
