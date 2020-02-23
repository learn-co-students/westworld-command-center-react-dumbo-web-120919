import React from 'react';
import { Segment } from 'semantic-ui-react';

import Area from './Area'

const WestworldMap = (props) => {

  let areaCards = props.areas.map( area => <Area key={area.id} area={area} hosts={props.hosts} /> )

  return (
    <Segment id="map" >
      {areaCards}
    </Segment>
  )
}

export default WestworldMap
