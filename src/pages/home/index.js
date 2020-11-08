import React from 'react';
import Header from '../../layout/header';
import Footer from '../../layout/footer';
import Banner from './components/banner';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="main">
        <Container>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quos odit sequi pariatur sit dolorem numquam velit, earum magnam, nam natus culpa amet, repudiandae deleniti voluptatum dicta repellat repellendus tempore. Sapiente incidunt alias, tenetur accusamus quam, reprehenderit. Inventore repellendus obcaecati exercitationem!
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default Home;
