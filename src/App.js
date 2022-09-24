import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './Components/Navbar'
import LeftSide from './Components/LeftSide'
import PostList from './Components/PostList'
import RightSide from './Components/RightSide'
import { Routes, Route, useNavigate } from 'react-router-dom';
import CreatePost from './Components/CreatePost'
import ShowPost from './Components/ShowPost'
import EditPost from './Components/EditPost'
import DeletePost from './Components/DeletePost'

export default function App () {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  // const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    // setLoading(true)
    fetchPosts().then(res => {
        // check status for response and set data accordingly

        setPosts(res.data.Posts);
        // setLoading(false)
        // log the data
        // console.log(res.data)
    })  
  },[])

 const fetchPosts = async () => {
    const posts = await axios.get('http://localhost:8000/api/posts')
    return posts;
}

 const onFormSubmit = data => {
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

    // getPosts();
      
    } catch (error) {
      console.log(error);
    }
  };
 const getPost = async (id) => {
    try{
      const post = await axios.get(`http://localhost:8000/api/post/${id}`);
      setPost(post.data.Post)
    }
    catch (error) {
      console.log(error)
    }
  }

const updatePost = async (id, type, title, content) => {
    try {
      await axios.put(`http://localhost:8000/api/post/update/${id}`, {
        type: type,
        title: title,
        content: content
      });
    fetchPosts();
   setTimeout(() => {
    navigate('/')
   }, 500);
    } catch (error) {
      console.log(error)
    }
}
const deletePost = async (id) => {
  try{
    alert('Do you want to delete this post ? ');
    await axios.delete(`http://localhost:8000/api/post/delete/${id}`);
    
    }
    catch (error) {
      console.log(error)
    }
}
   return (
      <>
      <div className="nav-container">
        <Navbar />
      </div>
       <div className="main-container">
        <LeftSide />
        <Routes>
          <Route path='/' element={<PostList posts={ posts  } />}></Route>
          <Route path='/createPost' element={ <CreatePost onFormSubmit= {onFormSubmit} /> }></Route>
          <Route path='/post/:id' element={ <ShowPost getPost={getPost} post= {post} /> }></Route>
          <Route path='/post/update/:id' element = {<EditPost getPost={getPost} post= {post} Edit= {updatePost}/>}></Route>
          <Route path='/post/delete/:id' element = {<DeletePost  Delete={deletePost} />}></Route>
        </Routes>
      
        <RightSide />
        </div>
      </>
    )
}

