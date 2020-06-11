import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, BrowserRouter } from 'react-router-dom'

class HomeNav extends React.Component {
    imports = () => {
        console.log('yeet')
        fetch('http://localhost:9000/import', {
            method: 'get',
        })
    }
    exports = () => {
        console.log('yeet')
        fetch('http://localhost:9000/save', {
            method: 'get',
        })
    }
    render() {
        const { onRouteChange } = this.props;
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Fantasy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <BrowserRouter>
                            <a className="nav-link text-white grow" onClick={() => onRouteChange('team')} href="#">My Team</a>
                            <a className="nav-link text-white grow" onClick={() => onRouteChange('compare')} href="#">Compare</a>
                            <a className="nav-link text-white grow" onClick={() => onRouteChange('stats')} href="#">Advanced Statistics</a>
                            <a className="nav-link text-white grow" onClick={() => onRouteChange('players')} href="#">Players</a>
                        </BrowserRouter>
                        <Button onClick={() => this.imports()} className="mr-5">import</Button>
                        <Button onClick={() => this.exports()} >export</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HomeNav;