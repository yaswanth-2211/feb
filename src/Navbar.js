import React from 'react'
import './Navbar.css'

export default function Navbar({image}) {
  return (
    <div id='nav'>
        <p id='page-title'>TravelMedia.in</p>
        <img id='image-nav' src={image}/>
    </div>
  )
}
