import React from "react"; 
import { Container, Col, Row } from "reactstrap";
import logo from "../images/logo.png"

const Bottom = () =>{
    return (
        <div>
            <Container>
            <Row>
                <Col md={6} className="bottom--left">
                <Container>
                    <div>
                 <img src={logo} className="nav--logo"  alt="main-logo"/>
                 <h3 className="nav--title">OpenSea</h3>
                    </div>
                    <div>
                        <p>From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>
                    </div>
                    <div>

                    </div>
                </Container>
                </Col>
                <Col md={6} className="bottom--right">
                <Container>
                    <Row>
                    <Col md={4}>
                        <ul >
                            <h4>Resources</h4>
                            <li>Help Center</li>
                            <li>Platform Status</li>
                            <li>Partners</li>
                            <li>Gas-Free Marketplace</li>
                            <li>Suggestions</li>
                            <li>Discord Community</li>
                            <li>Newsletter</li>
                            <li>Docs</li>
                            <li>Blog</li>                            
                        </ul>    
                    </Col>
                    <Col md={4}>
                    <ul>
                            <h4>Resources</h4>
                            <li>Help Center</li>
                            <li>Platform Status</li>
                            <li>Partners</li>
                            <li>Gas-Free Marketplace</li>
                            <li>Suggestions</li>
                            <li>Discord Community</li>
                            <li>Newsletter</li>
                            <li>Docs</li>
                            <li>Blog</li>                            
                        </ul> 
                    </Col>
                    <Col md={4}>
                    <ul >
                            <h4>Resources</h4>
                            <li>Help Center</li>
                            <li>Platform Status</li>
                            <li>Partners</li>
                            <li>Gas-Free Marketplace</li>
                            <li>Suggestions</li>
                            <li>Discord Community</li>
                            <li>Newsletter</li>
                            <li>Docs</li>
                            <li>Blog</li>                            
                        </ul> 
                    </Col>
                    </Row>
                </Container>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Bottom;