import React, { Component } from 'react'
import Guide from './Guide'
import PostList from './PostList'
import Features from './Features'
export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
        <Guide />
        <PostList />
        <Features />
        </div>
      </div>
    )
  }
}
