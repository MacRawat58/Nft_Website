import React from "react";
import { Container} from "reactstrap"

const Trending = () => {
    return (
        <div className="">

            <Container className="trending--container">
                <h2 className="feature--header">Trending in All Categories</h2>
                <p className="feature--p">A play of light and shade, chairoscuro is the realm between the light and dark.</p>
            <div className="feature--right">
                <p>Recently Added <span>|</span> Mostly used</p>
                </div>
            </Container>
    </div>
    )
}

export default Trending;
