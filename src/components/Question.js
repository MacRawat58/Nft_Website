
import React from "react";
import { Container, Row, Col, Button  } from "reactstrap";


const Question = () =>{
    return (
        <div className="newSection">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="ques--left">
                        <h2 className="noteDrop--header">We will try to help you if you are confused.</h2>
                        <p className="noteDrop--p">A fequently asked question (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.</p>
                        </div>
                    </Col>
                    <Col md={6}>
                    <div className="ques--right">
                        <h2 className="ques--header">We will try to help you if you are confused.</h2>
                        <p className="ques--p">A fequently asked question (FAQ) forum is often used in articles, websites, email lists, and online forums where common questions tend to recur.</p>
                        </div>
                        <Button className="hero--btn lftBtn1">Veiw All</Button>
                    </Col>
                </Row>
                <hr className="newSection hr"/>
            </Container>
        </div>
    )
}

export default Question;