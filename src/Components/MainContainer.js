import React, { Component } from 'react'
import Guide from './Guide'
import PostList from './PostList'
import Features from './Features'
import Search from './Search'
import Post from './Post'
export default class MainContainer extends Component {
  render() {
    const posts = this.props.posts;
    console.log('hi from MainContainer component ');
    return (
      <div>
        <div className="main-container">
        {/* <Search />
        <Guide /> */}
        <PostList posts={posts} />
        {/* <Features /> */}
        {/* <Post /> */}
        </div>
      </div>
    )
  }
}
