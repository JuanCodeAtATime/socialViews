import React from "react";
// import { Link } from "react-router-dom";
import Searchfrom from "../components/SearchForm"
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
// import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css"
// import { Router } from "express";

function Landing() {
    return (
        <div>
            <Hero>
                <Row>
                    <Col size="md-8">
                        <Searchfrom></Searchfrom>
                    </Col>
                </Row>
                <Row style={{ marginTop: "175px" }}>
                    {/* <Col size="md-3" style={{ marginRight: "20px" }}> */}
                    <Col size="md-4">
                        <Jumbotron > <h3 className="jumbotronH3"><b>#BELIZE</b></h3><hr></hr>

                        </Jumbotron>

                    </Col>
                    <Col size="md-4">
                        <Jumbotron> <h3 className="jumbotronH3"><b>#ICELAND</b></h3><hr></hr>

                        </Jumbotron>

                    </Col>
                    <Col size="md-4">
                        <Jumbotron> <h3 className="jumbotronH3"><b>#NEW ZEALAND</b></h3><hr></hr>

                        </Jumbotron>

                    </Col>
                </Row>

            </Hero>
            {/* <Container>

            </Container> */}
        </div>
    );
}

export default Landing;
