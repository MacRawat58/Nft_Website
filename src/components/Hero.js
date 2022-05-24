import React from "react";
import {Button, Container, Row, Col} from "reactstrap" 
import rightImg from "../images/Hero1.png"

const Hero = () =>
    {
        return(
            <Container fluid className="hero">
                <Row>
                 <Col  className="hero--left" md={6}>
                 <h2 className="hero--title">Discover.
                 Collect. & Sell. Extraordinary  <span className="nft">NFT’s</span></h2>
                 <p className="hero--p">On the world’s first & largest NFT marketplace.</p>
                 <Button className="hero--btn lftBtn1">Explore</Button>
                 <Button className="hero--btn lftBtn2">Create</Button>
                 <p className="hero--botmP">Get Featured On The Homepage</p>
                 </Col>
                 <Col className="hero--right" md={6}>
                   <Container>

                     <Row>
                     <img className="rightImg" src={rightImg} alt=""/>
                     </Row>
                     <Row>
                        <p className="hero--author">SoulCurryArt</p>
                     </Row>
                     <Row>
                        <p className="hero--p2">A play of light and shade, chairoscurso is the realm between the light and dark</p>
                     </Row>
                     <Row>
                       <Button className="hero--btn rightBtn">Place Bid</Button>
                     </Row>
                   </Container>
                  
                 </Col>
            
                 </Row>
                  
            </Container>
        )
    }

export default Hero;