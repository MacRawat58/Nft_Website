import React from "react";
import card1 from "../images/cardIN1.png"; 
import { Container } from "reactstrap";

const Card = () => {
    return (
        <Container>
            {/* <Carousel> */}
                <Container>

        <div class="container1">
        <div class="upper-container"></div>
            <div class="img-sec"><img src={card1} alt=""/></div>
        <div class="card-body">
        <h2 className="feature--Cardheader cardHead">FriYaywiz</h2>
                <p className="feature--Cardp">A play of light and shade, chairoscuro is the realm.</p>
      </div>
      </div>
                </Container>
            {/* </Carousel> */}
        </Container>
    )
}

export default Card;