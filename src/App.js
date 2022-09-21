import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './Components/Navbar'
import LeftSide from './Components/LeftSide'
import PostList from './Components/PostList'
import RightSide from './Components/RightSide'
import { Routes, Route } from 'react-router-dom';
import CreatePost from './Components/CreatePost'
import ShowPost from './Components/ShowPost'

export default function App () {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  // const [loader, setLoader] = useState(false)

  useEffect(() => {
    getPosts()
  } , [])

 const  getPosts = async () => {
    const posts = await axios.get('http://localhost:8000/api/posts')
    setPosts(posts.data.Posts);
  }

 const  onFormSubmit = data => {
    // console.log("app ", data);
    // return;
    // console.log("app ", data);
    // if (data.isEdit) {
    //   // if is edit true
    //   this.editCustomer(data);
    // } else {
    //   // if is edit false
      // console.log(data)
      createPost(data);
    }

 const createPost = async (data) => {
    // this.setState({ loader: true });
    try {
      
      await axios.post('http://localhost:8000/api/createPost', {
        type: data.type,
        title: data.title,
        content: data.content
      });

    getPosts();
      
    } catch (error) {
      console.log(error);
    }
  };
 const  getPost = async (id) => {
    try{
      const post = await axios.get(`http://localhost:8000/api/post/${id}`);
      setPost(post.data.Post)
    }
    catch (error) {
      console.log(error)
    }
  }
  
    return (
      <>
      <Navbar />
      <div className="main-container">
        <LeftSide />
        <Routes>
          <Route path='/' element={<PostList posts={posts} />}></Route>
          <Route path='/createPost' element={ <CreatePost onFormSubmit= {onFormSubmit} /> }></Route>
          <Route path='/post/:id' element={ <ShowPost getPost={getPost} post= {post} /> }></Route>
        </Routes>
        <RightSide />
        </div>
      </>
    )
}

