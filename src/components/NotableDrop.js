
import React from "react";
import { Button, Container, Row, Col} from "reactstrap";
import brands from "../images/brands1.png";

const NoteDrop = () =>{
    return (
    <div className="noteDrop">
        <Container>
            <Row>
                <Col md={6}>
              
                </Col>
                <Col md={6}>
                    <Container>
                    <h2 className="noteDrop--header">Notable  Drops</h2>
                    <p className="noteDrop--p">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.</p>
                    <Button className="noteDrop--btn hero--btn lftBtn1">Veiw All</Button>
                    </Container>
                </Col>
            </Row>
            <div className="noteDropBrand">
            <img className="noteDrop--brands" src={brands} alt=""/>

            </div>

        </Container>
    </div>
    )
}

export default NoteDrop;