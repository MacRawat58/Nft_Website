import React from "react";
import card1 from "../images/card1.png"; 
import { Container, Col } from "reactstrap";

const CategoryCard = () => {
    return (
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
    )
}

export default CategoryCard;