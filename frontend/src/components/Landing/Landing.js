import React, { Component } from 'react';
import { Jumbotron, Button, Card, CardDeck } from 'react-bootstrap';
import './Landing.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

export default class Banner extends React.Component {

    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    render() {
        const { onRouteChange } = this.props;
        return (

            <Container fluid="true">
                <Row >
                    <Col className="bg-white " lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                        <Navbar bg="gray" sticky="top" variant="dark">

                            <Navbar.Brand onClick={() => onRouteChange('landing')} id="" href="#home" className="Garamond">FantasyKings</Navbar.Brand>
                            <img className="resize" src="https://img.icons8.com/color/100/000000/crown.png" />
                            <Nav className="ml-auto">
                                <Nav.Link onClick={() => onRouteChange('signin')} className="grow pointer text-white" href="#home">Sign In</Nav.Link>
                                <Nav.Link onClick={() => onRouteChange('register')} className="grow pointer text-white" href="#features">Sign Up</Nav.Link>
                            </Nav>
                        </Navbar>
                        <p>

                        </p>
                        <Jumbotron className="jumbo d-flex">
                            <Button className="grow pointer mv3-ns w-30 h-25 justify-content-center align-self-center " onClick={() => onRouteChange('register')} variant="primary">Get Started Now!</Button>
                        </Jumbotron>
                        
                        <div class="card-deck" >

                            <div className="card" className="card border-light mb-3 shadow-5">
                                <img src="https://specials-images.forbesimg.com/imageserve/5e8bcac2b0a4e4000746d4df/960x0.jpg?fit=scale" class="card-img-top" class="pimg" alt="..." />
                                <div className="card-body bg-gray" >
                                    <h5 className="card-title">Competition</h5>
                                    <p className="card-text ws-normal">Compete with your friends for the pot of your choice!</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                            <div className="card" className="card border-light mb-3 shadow-5">
                                <img src="https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg" class="card-img-top" class="pimg" alt="..." />
                                <div className="card-body bg-gray">
                                    <h5 className="card-title ws-normal">Expert Analysis</h5>
                                    <p className="card-text ws-normal">Secure the best fantasy team with advice from the best NBA Analysts</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                            <div className="card" className="card border-light mb-3 shadow-5">
                                <img src="https://sportshub.cbsistatic.com/i/r/2020/06/08/18bcd22d-d3c7-4e21-b6fc-11e038b63502/thumbnail/450x253/60722076abd6afd76756b173ad850a36/editorialdisney-v1.jpg" class="card-img-top" class="pimg" alt="..." />
                                <div className="card-body bg-gray">
                                    <h5 className="card-title">Player Updates</h5>
                                    <p className="card-text ws-normal">Stay up to date to with player statistics!</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>



        )
    }
}
