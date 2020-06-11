import React from 'react';
import { Container, Row, Col, Button, Card, Accordion } from 'react-bootstrap';
import './Home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: [],
            sortcat: [],
            filtercat: false,
            searchPlayer: '',
            addPlayer: ''
        }
    }


    render() {
        // const searchPlayers = this.state.players.filter(player => {
        //   return player.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        // })
        return (
            
                <Container fluid="true">
                <Row >
                <Col className="bg-white" >
                <div className="hi mt3">
                <img className="w-70" src="https://i.pinimg.com/originals/db/59/ac/db59ac972e2158696592f6760dc356f7.png" />
                <Accordion defaultActiveKey="0" className="w-25 ml4">
                    <Card>
                        <Card.Header>
                        <Card.Body>STANDINGS</Card.Body>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>1. Team Rockstar</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>2. Team Unicorns</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>3. Team Underpants</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>3. Team Miller</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>3. Team Chocolate</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                </div>
                <div className="mt4 images">
                
                <img className="w-20" href="https://google.com" src="https://i.pinimg.com/originals/db/59/ac/db59ac972e2158696592f6760dc356f7.png" />
                <img className="w-20" src="https://i.pinimg.com/originals/db/59/ac/db59ac972e2158696592f6760dc356f7.png" />
                <img className="w-20" src="https://i.pinimg.com/originals/db/59/ac/db59ac972e2158696592f6760dc356f7.png" />
                <img className="w-20" src="https://i.pinimg.com/originals/db/59/ac/db59ac972e2158696592f6760dc356f7.png" />
                <img className="w-20" src="https://i.pinimg.com/originals/db/59/ac/db59ac972e2158696592f6760dc356f7.png" />
                <img className="w-20" src="https://i.pinimg.com/originals/db/59/ac/db59ac972e2158696592f6760dc356f7.png" />
                </div>                
                </Col>
                </Row>
            </Container>
            
        );
    }
}

export default Home;