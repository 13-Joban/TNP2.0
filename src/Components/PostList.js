import React, { Component } from 'react'
import Post from './Post'
export default class PostList extends Component {
  render() {
    return (
      <div>
      <div className="postList-container">
      <Post />
      </div>
      
      </div>
    )
  }
}