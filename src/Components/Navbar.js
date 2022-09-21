import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  
  return ( 
  <nav className="navbar-expand-lg navbar-dark bg-primary fixed navbar-container">
  <div className="left-divs">
  <div className="logo">
  <img src="https://www.tnpgndec.com/images/logo.png?1ea92a3c4c181e2543ff351723276c24" alt="" />
  </div>
  <div className="h5-title">
  <a href="/" >Training and Placement Cell 2.0</a>
  </div>
  </div>
  <div className="right-divs">
    <button className='createPost-btn btn btn-primary'>
    <Link className="navbar-brand" to='/createPost'>Create Post</Link>
    </button>
  </div>
  
</nav>
      
    )
}
