import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';

import WestworldMap from './components/WestworldMap'
import Headquarters from './components/Headquarters'

class App extends Component {

  state = {
    hosts: [],
    areas: []
  }

  // initial fetches
  componentDidMount() {
    this.initialHostsFetch()
    this.initialAreasFetch()
  }
  initialHostsFetch = () => {
    fetch('http://localhost:4000/hosts')
    .then( r => r.json() )
    .then( hosts => {
      this.setState({
        hosts: hosts
      })
    })
  }
  initialAreasFetch = () => {
    fetch('http://localhost:4000/areas')
    .then( r => r.json() )
    .then( areas => {
      this.setState({
        areas: areas
      })
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.state.hosts} />
        <Headquarters hosts={this.state.hosts} />
      </Segment>
    )
  }
}

export default App;
