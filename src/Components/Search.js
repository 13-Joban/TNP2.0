import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    console.log('hi from search component ');
    return (
      <div>
        <div className="input-group mb-3 search-box">
  <input type="text" className="form-control" placeholder="Search Something" aria-label="Search Something" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button">Button</button>
  </div>
</div>
      </div>
    )
  }
}
