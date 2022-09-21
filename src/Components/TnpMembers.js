import React from 'react'

export default function TnpMembers () {

    return (
        <div className="member-container">
        <h4 className='heading'>TnP Members</h4>
        <div className="member">
            <h6> Executive Members</h6>
            <button type="button" className="btn btn-outline-primary btn-sm">
                View
            </button>
        </div>
        <div className="member">
            <h6> Technical Members</h6>
            <button type="button" className="btn btn-outline-primary btn-sm"> View
            </button>
        </div>
        <div className="member">
            <h6> Core Members</h6>
            <button type="button" className="btn btn-outline-primary btn-sm"> View
            </button>
        </div>
      </div>
    )
}
