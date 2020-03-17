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
                    <Col className="bg-white" lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                        <Navbar bg="gray" sticky="top" variant="dark">

                            <Navbar.Brand onClick={() => onRouteChange('landing')} id="" href="#home" className="Garamond">Finman</Navbar.Brand>
                            <img className="resize" src="https://img.icons8.com/ios-filled/50/000000/airplane-tail-fin.png" />
                            <Nav className="ml-auto">
                                <Nav.Link onClick={() => onRouteChange('signin')} className="grow pointer text-white" href="#home">Sign In</Nav.Link>
                                <Nav.Link onClick={() => onRouteChange('register')} className="grow pointer text-white" href="#features">Sign Up</Nav.Link>
                            </Nav>
                        </Navbar>
                        <p>{this.state.apiResponse}</p>
                        <Jumbotron className="jumbo d-flex">
                            <Button className="grow pointer mv3-ns w-30 h-25 justify-content-center align-self-center " onClick={() => onRouteChange('register')} variant="primary">Get Started</Button>
                        </Jumbotron>
                        
                        <div class="card-deck" >

                            <div className="card" className="card border-light mb-3 shadow-5">
                                <img src="https://datavizcatalogue.com/methods/images/top_images/pie_chart.png" class="card-img-top" class="pimg" alt="..." />
                                <div className="card-body bg-gray" >
                                    <h5 className="card-title">Categorization</h5>
                                    <p className="card-text ws-normal">Visually categorizes all your transactions.</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                            <div className="card" className="card border-light mb-3 shadow-5">
                                <img src="https://plaid.com/assets/img/phones/screen1.png" class="card-img-top" class="pimg" alt="..." />
                                <div className="card-body bg-gray">
                                    <h5 className="card-title ws-normal">Financially Manage your Accounts</h5>
                                    <p className="card-text ws-normal">Links all your bank accounts on one platform.</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                            <div className="card" className="card border-light mb-3 shadow-5">
                                <img src="https://miro.medium.com/max/1024/1*2Aw5D8J-MD9-7a1fK1wuuQ.jpeg" class="card-img-top" class="pimg" alt="..." />
                                <div className="card-body bg-gray">
                                    <h5 className="card-title">Budget</h5>
                                    <p className="card-text ws-normal">Customize your budgeting goals.</p>
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
