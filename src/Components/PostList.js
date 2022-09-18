import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import Features from './Features';

export default class PostList extends Component {
  render() {
    const Posts = this.props.posts;
    console.log('hi from PostList component ');
    return (
      <div>
      
      {
        Posts.map(  post  =>
        
        <div className="card text-center post">
  <div className="card-header">
    Announcement
  </div>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.content}</p>
    <Link to={`/posts/${post.id}`} className="btn btn-primary">View Post</Link>
  </div>
  
</div>)
       
        
      }
      </div>
    )
  }
}
