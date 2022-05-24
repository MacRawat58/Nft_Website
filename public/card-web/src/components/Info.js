import React from "react"
import About from "./About"
import Intrests from "./Intrests"
import Footer from "./Footer"
import '../App.css';
import {
    Card, 
    CardBody,
    CardImg,
    CardTitle,
    CardSubtitle,
    Button

} 
from "reactstrap"
import img from "../images/Mac.png"
import email from "../images/Mail.png"

function Info() {


    return (
        <div>


        <Card className="w50">
            <CardImg
                alt="Card image cap"
                src={img}
                top
                width="100%" />
            <CardBody>
                <CardTitle className="name" tag="h5">
                   <strong>
                       Mohit Rawat
                       </strong> 
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    B.Tech(CSE)
                </CardSubtitle>
                <Button className="emailBtn">
                  <img className="btnimg" src={email} alt="mail"/> <small>Email</small>
                </Button>
               <About />
               <Intrests/>
               <Footer />
            </CardBody>
        </Card>
                    </div>
    );
}

    export default Info;