import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    console.log('hi from Navabr component ');
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="/">Training and Placement Cell 2.0</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
      </li>
    </ul>
   
  </div>
</nav>
      </div>
    )
  }
}
