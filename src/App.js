import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import MainContainer from './Components/MainContainer'
import Search from './Components/Search'
export default class App extends Component {
  render() {
    return (
      <>
     <Navbar />
      <Search />
    <MainContainer />
      </>
    )
  }
}

