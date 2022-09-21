import React from 'react'
import Connect from './Connect'
import PlacementRecord from './PlacementRecord'
import TnpMembers from './TnpMembers'
export default function LeftSide () {

    return (
        <div className="leftside-container">
            <Connect />
            <TnpMembers />
           <PlacementRecord />
        </div>
    )
}
