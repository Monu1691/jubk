import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ChooseMod = (props) => {
    return(
        <>
        <Col lg={4}>
            <div className="icon-1 mb-5">
                <div className="flex">
                    <img src={props.img}/>
                </div>
                <div className="flex ml-5">
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                </div>
            </div>
        </Col>        
        </>
    );
}
export default ChooseMod;