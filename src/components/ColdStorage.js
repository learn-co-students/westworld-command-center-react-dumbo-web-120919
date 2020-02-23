import React from 'react';
import { Segment } from 'semantic-ui-react'

import HostList from './HostList'

const ColdStorage = (props) => {

  let hosts = props.hosts
  let hostsInStorage = hosts.filter( host => host.active === false )
  
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList hostsInStorage={hostsInStorage} context="coldStorage" />
      </Segment>
    </Segment.Group>
  )
}

export default ColdStorage
