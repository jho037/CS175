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
            <Navbar bg="gray" expand="lg">
                <Navbar.Brand href="/" onClick={() => onRouteChange('home')} className="Garamond">FantasyKings</Navbar.Brand>
                <img className="resize" src="https://img.icons8.com/color/100/000000/crown.png" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <BrowserRouter>
                            <a className="nav-link text-white grow mr-4" onClick={() => onRouteChange('team')} href="#">My Team</a>
                            <a className="nav-link text-white grow mr-4" onClick={() => onRouteChange('compare')} href="#">Compare</a>
                            <a className="nav-link text-white grow mr-4" onClick={() => onRouteChange('stats')} href="#">Advanced Statistics</a>
                            <a className="nav-link text-white grow mr-4" onClick={() => onRouteChange('players')} href="#">Players</a>
                            <a className="nav-link text-white grow mr-1" onClick={() => onRouteChange('signout')} href="#">Sign Out</a>
                        </BrowserRouter>
                        {/* <Button onClick={() => this.imports()} className="mr-5">import</Button>
                        <Button onClick={() => this.exports()} >export</Button> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HomeNav;