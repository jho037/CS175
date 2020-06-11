import React from 'react';
import './App.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import Landing from './components/Landing/Landing.js'

import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Particles from 'react-particles-js'
import Accsettings from './components/Accsettings/Accsettings'
import Home from './components/Home/Home'
import Compare from './components/Home/Compare'
import Team from './components/Home/Roster'
import Stats from './components/Home/Stats'
import Players from './components/Home/Table'
import HomeNav from './components/Home/HomeNav'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";


const particlesOptions = {  //used to edit the background particles
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
}

const initialState = { //default state for a user, just a function
  route: 'landing',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      searchfield: '',
      roster: [],
      route: 'landing',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        goal: '',
        accessToken: ''
      }
    }
  }

  loadUser = (data) => {      //loaduser with data received when signin is called 
    this.setState({
      user: {
        id: data._id,
        name: data.name,
        email: data.email
      }
    })
  }

  onRouteChange = (route) => { //on signout, reset the state to initialState
    if (route === 'signout') {
      this.setState(initialState);
      this.setState({ route: "landing" });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
      this.setState({ route: route });
    }
    else {
      this.setState({ route: route });
    }

  }
  addPlayer = (name) => {
    console.log(name)
    fetch('http://localhost:9000/addPlayer', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        addPlayer: name
      })
    })
      .then(response => response.json())
      .then(res => {
        console.log(res)
        this.setState({ roster: res });
      });
  }

  dropPlayer = (name) => {
    fetch('http://localhost:9000/dropPlayer', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        addPlayer: name
      })
    })
      .then(response => response.json())
      .then(res => {
        this.setState({ roster: res });
      });
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
      <div>
        {/* <Link user={this.state.user.id} /> */}
        {/* <SignIn></SignIn> */}
        {/* <Register></Register> */}
        {/* <Particles className='particles'
          params={particlesOptions}
        /> */}
        {route === 'landing'
          ? <div>
            <Landing isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}></Landing>
          </div>

          :
          route === 'signin' ?
            <div>
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange} user={this.user} updateTransactions={this.updateTransactions} />
            </div>

            :
            route === 'register' ?
              <div>
                <Register user={this.user} loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              </div>

              :
              route === 'players' ?
                <Container fluid="true" >
                  <Row >
                    <Col className="bg-white" lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                      <HomeNav user={this.state.user.id} onRouteChange={this.onRouteChange} updateTransactions={this.updateTransactions} />
                      <Players addPlayer={this.addPlayer}></Players>
                    </Col>
                  </Row>
                </Container>

                :
                route === 'home' ?

                  <Container fluid="true" >
                    <Row >
                      <Col className="bg-white" lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                        <HomeNav user={this.state.user.id} onRouteChange={this.onRouteChange} updateTransactions={this.updateTransactions} />
                        <Home></Home>
                      </Col>
                    </Row>
                  </Container>
                  :
                  route === 'compare' ?

                    <Container fluid="true" >
                      <Row >
                        <Col className="bg-white" lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                          <HomeNav user={this.state.user.id} onRouteChange={this.onRouteChange} updateTransactions={this.updateTransactions} />
                          <Compare></Compare>
                        </Col>
                      </Row>
                    </Container>
                    :
                    route === 'team' ?

                      <Container fluid="true" >
                        <Row >
                          <Col className="bg-white" lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                            <HomeNav user={this.state.user.id} onRouteChange={this.onRouteChange} updateTransactions={this.updateTransactions} />
                            <Team dropPlayer={this.dropPlayer} roster={this.state.roster}></Team>
                          </Col>
                        </Row>
                      </Container>
                      :
                      route === 'stats' ?

                        <Container fluid="true" >
                          <Row >
                            <Col className="bg-white" lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                              <HomeNav user={this.state.user.id} onRouteChange={this.onRouteChange} updateTransactions={this.updateTransactions} />
                              <Stats></Stats>
                            </Col>
                          </Row>
                        </Container>
                        :
                        route === 'Accsettings' ?
                          <div>
                            <Container fluid="true">
                              <Row >
                                <Col className="bg-white" lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }} sm={{ span: 12, offset: 0 }}>
                                  <HomeNav user={this.state.user.id} onRouteChange={this.onRouteChange} updateTransactions={this.updateTransactions} />
                                  <Accsettings loadUser={this.loadUser} user={this.state.user} onRouteChange={this.onRouteChange}></Accsettings>
                                </Col>
                              </Row>
                            </Container>

                          </div>
                          : <div>ohasdfasdf</div>
        }
      </div>
    );
  }
}

export default App;
