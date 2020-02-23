import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';

import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'

class Headquarters extends Component {

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={4}>

          <ColdStorage hosts={this.props.hosts} />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details />
        </Grid.Column>
        <Grid.Column width={3}>

          <LogPanel />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
