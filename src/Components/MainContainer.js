// import React, { Component } from 'react'
// import LeftSide from './LeftSide'
// import PostList from './PostList'
// import RightSide from './RightSide'
// import { Routes, Route } from 'react-router-dom';
// import CreatePost from './CreatePost'
// import ShowPost from './ShowPost'

// export default class MainContainer extends Component {
//   render() {
//     const {posts, onFormSubmit, showPost, post} = this.props;
//     return (
//       <>
//         <div className="main-container">
//         <LeftSide />
//         <Routes>
//           <Route path='/' element={<PostList posts={posts} />}></Route>
//           <Route path='/createPost' element={ <CreatePost onFormSubmit= {onFormSubmit} /> }></Route>
//           <Route path={`/post/${post.id}`} element={ <ShowPost post = {post}showPost = {showPost}/> }></Route>
//         </Routes>
//         <RightSide />
        
     

//         </div>
//       </>
//     )
//   }
// }
