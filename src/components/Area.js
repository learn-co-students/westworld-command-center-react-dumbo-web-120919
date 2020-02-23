import React from 'react';
import '../stylesheets/Area.css'

import HostList from './HostList'

const Area = (props) => {

  let areaNameArr = props.area.name.split("_")
  areaNameArr = areaNameArr.map( name => (name.slice(0,1).toUpperCase()) + name.slice(1) )
  let newAreaName = areaNameArr.join(" ")

  let hosts = props.hosts
  let thisAreaHosts = hosts.filter( host => host.area === props.area.name )
  let activeAreaHosts = thisAreaHosts.filter( host => host.active === true )

  return (
    <div className='area' id={props.area.name}>
      <h3 className='labels'>{newAreaName}</h3>
      <HostList thisAreaHosts={activeAreaHosts} context="area" />
    </div>
  )

}

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
