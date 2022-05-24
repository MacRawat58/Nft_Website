import React from "react";
import {Container } from "reactstrap"
import FeaturesCard from "./FeaturesCard";

const Features = () =>{



    return (<div className="featuresBody">

            <Container className="feature">
                <h2 className="feature--header">Create & Sell Your NFT’s</h2>
                <p className="feature--p">A play of  light and shade, chairoscuro is the realm between the light and dark.</p>
                <div className="feature--cardSection">
                    <FeaturesCard/>
                    <FeaturesCard/>
                    <FeaturesCard/>
                    <FeaturesCard/>
                </div>
            </Container>
    </div>
    )
}

export default Features;