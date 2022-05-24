import React from "react";
import card1 from "../images/card1.png"; 
import { Container, Col } from "reactstrap";

const Resource = () => {

    return (
        <div>

        <div>

        <h2 className="feature--header">Explore  Categories</h2>
                <p className="feature--p">A play of light and shade, chairoscuro is the realm between the light and dark.</p>
        </div>
        <div className="Category">

<Container className="category--card">
   <div class="container2">
        <Col md={6}>
            <div class=""><img class="category--img" src={card1} alt=""/></div>    
        </Col>
        <Col md={6}>
            <div>
                <h2 className="feature--Cardheader category--text">Art</h2>
                <p className="category--p">A play of light and shade, chairoscuro is the realm.</p>
            </div>
        </Col>
    </div>
        
</Container>

</div>
        </div>
    )
}

export default Resource;