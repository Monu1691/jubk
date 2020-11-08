import React from 'react';
import Home from './home';
import About from './about';
import {BrowserRouter as Monu, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../asset/scss/App.scss';

const App = () => {
  return (
    <div className="wrapper">
      <Monu>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        {/* <Route path="/services">
          <div>Services Page</div>
        </Route>
        <Route path="/contact">
          <div>Contact Page</div>
        </Route> */}
      </Monu>
    </div>
  );
};

export default App;
