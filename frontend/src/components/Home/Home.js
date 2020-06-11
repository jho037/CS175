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
                <a href="https://www.nba.com/lakers/">
                    <img alt="Qries" src="https://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.png"
                    />
                </a>
                {/* <img className="w-20" href="https://google.com" src="https://i.pinimg.com/originals/db/59/ac/db59ac972e2158696592f6760dc356f7.png" /> */}
                <a href="https://www.nba.com/warriors/?tmd=1">
                    <img alt="Qries" src="https://content.sportslogos.net/logos/6/235/full/3152_golden_state_warriors-primary-2020.png"
                    />
                </a>
                <a href="https://www.nba.com/bucks/">
                    <img alt="Qries" src="https://content.sportslogos.net/logos/6/225/full/8275_milwaukee_bucks-primary-2016.png"
                    />
                </a>
                <a href="https://www.nba.com/heat/">
                    <img alt="Qries" src="https://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif"
                    />
                </a>
                <a href="https://www.nba.com/celtics/">
                    <img alt="Qries" src="https://content.sportslogos.net/logos/6/213/full/slhg02hbef3j1ov4lsnwyol5o.png"
                    />
                </a>
                </div>                
                </Col>
                </Row>
            </Container>
            
        );
    }
}

export default Home;