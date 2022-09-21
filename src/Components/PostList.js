import React  from 'react'
import Post from './Post'
export default function PostList (props) {
  
    const {posts} = props;
    return (
      <div className='postlist-container'>
      <h3>Latest Posts</h3>
      {
       posts.map(  post  =>   
     <Post
      id ={post.id}  
      type={post.type}
      title={post.title}
      content={post.content} 
      key={post.id} 

      />
)}
      </div>
    )
}
