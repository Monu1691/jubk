import React from 'react';
import { Container } from 'react-bootstrap';
import { bannerBg } from '../../../asset/img';

const Banner = () => {
  return (
    <>
      <section className="banner-sec" style={{backgroundImage: `url(${bannerBg})`}}>
        <Container>
          
        </Container>
      </section>
    </>
  );
};
export default Banner;