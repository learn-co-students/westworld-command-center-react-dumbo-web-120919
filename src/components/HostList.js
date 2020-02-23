import React from 'react'
import { Card } from 'semantic-ui-react'

import Host from './Host'

const HostList = (props) => {

  let hostCards

  if (props.context === "area") {
    hostCards = props.thisAreaHosts.map( host => <Host key={host.id} host={host} />)
  } else if (props.context === "coldStorage") {
    hostCards = props.hostsInStorage.map( host => <Host key={host.id} host={host} />)
  }

  return(
    <Card.Group itemsPerRow={6}>
      {hostCards}
    </Card.Group>
  )
}

export default HostList
