import React from 'react';
import { Container, Row, Col, Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

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
            <div>
                Home Page
            </div>
        );
    }
}

export default Home;