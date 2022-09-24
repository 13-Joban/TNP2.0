import React from 'react'
import PlacementResources from './PlacementResources'
import Connect from './Connect'
import PlacementRecord from './PlacementRecord'
import TnpMembers from './TnpMembers'
export default function LeftSide () {

    return (
        <div className="leftside-container">
            <Connect />
            <TnpMembers />
            <PlacementResources />
           <PlacementRecord />
        </div>
    )
}
