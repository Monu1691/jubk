import React, {Component} from "react";
import {TestimonialImage} from '../../../asset/img/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

class TestimonialSlider extends Component {
    render() {
        const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
        };
        return (
        <>    
            <Slider {...settings}>
            <div>
                <div className="testimonial-sec mb-5">
                    <div className="container">
                        <div className="heading">
                            <h6>Our Clients</h6>
                            <h4>Success Stories</h4>
                        </div>
                        <div className="text">
                            <div className="inner-text">
                                <h4>Julia Robertson</h4>
                                <h6>CEO kadirov Group</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, oloribus asperiores repellat. On the other hand, we denounce
                                with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire,
                                that they cannot foresee.</p>
                            </div>
                            <div className="image">
                                <img src= {TestimonialImage} />
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
            <div>
                <div className="testimonial-sec">
                    <div className="container">
                        <div className="heading">
                            <h6>Our Clients</h6>
                            <h4>Success Stories</h4>
                        </div>
                        <div className="text">
                            <div className="inner-text">
                                <h4>Julia Robertson</h4>
                                <h6>CEO kadirov Group</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, oloribus asperiores repellat. On the other hand, we denounce
                                with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire,
                                that they cannot foresee.</p>
                            </div>
                            <div className="image">
                                <img src= {TestimonialImage} />
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
            <div>
                <div className="testimonial-sec">
                    <div className="container">
                        <div className="heading">
                            <h6>Our Clients</h6>
                            <h4>Success Stories</h4>
                        </div>
                        <div className="text">
                            <div className="inner-text">
                                <h4>Julia Robertson</h4>
                                <h6>CEO kadirov Group</h6>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, oloribus asperiores repellat. On the other hand, we denounce
                                with righteous indignation and dislike men who are so beguiled and
                                demoralized by the charms of pleasure of the moment, so blinded by desire,
                                that they cannot foresee.</p>
                            </div>
                            <div className="image">
                                <img src= {TestimonialImage} />
                            </div>
                        </div>    
                    </div>    
                </div>
            </div>
            </Slider>
        </>    
        );
    }
}
export default TestimonialSlider;