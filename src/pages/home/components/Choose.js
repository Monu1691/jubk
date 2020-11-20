import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Choose } from '../../../asset/img/index';
import ChooseMod from './ChooseMod';
import {chooseData} from '../../../siteData';

const Choose1 = () =>{
    return(
    <>
    <section className="choose" style={{backgroundImage:`url(${Choose})`}}>
        <Container>
            <Row>
                <div className="heading text-center">
                    <h6>About Classes</h6>
                    <h4>Why Choose Us</h4>
                </div>
                {chooseData && chooseData.length>0 && chooseData.map((i) =>{
                    return(
                        <ChooseMod 
                            img={i.img}
                            title={i.title}
                            text={i.text}
                        />
                    )
                })}
            </Row>
        </Container>
    </section>
    </>
    );
}   
export default Choose1;
