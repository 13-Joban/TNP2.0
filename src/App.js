import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './Components/Navbar'
import MainContainer from './Components/MainContainer'
import Search from './Components/Search'


export default class App extends Component {
  state = {
    posts: [],
    post: {},
    loading: false,
    url: 'http://localhost:8000/api/posts'
  }

  getPosts = async () => {
    const posts = await axios.get(this.state.url)
    this.setState({posts: posts.data.Posts});
  }
  componentDidMount (){
    this.getPosts();
   }
  render() {
    return (
      <>
      <Navbar />
     <MainContainer posts={this.state.posts}/>
      </>
    )
  }
}

