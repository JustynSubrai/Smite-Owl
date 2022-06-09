import React from 'react'
import { Link } from 'react-router-dom'
import './Global.scss'

function Global() {
  return (
    <>
      <div className='nav-container'>
        <nav className='nav'>
          <div className="logo-container">
            <a href='/'><img className='logo' src='images/smitelogo.png'/></a>
            <h1 className='title'>Smite Owl</h1>
          </div>
          <ul className='nav-links'>
            <li></li>
            <li><Link className='linkTags' to='/gods'>Gods</Link></li>
            <li><Link className='linkTags' to='/tier'>Tier List</Link></li>
            <li><Link className='linkTags' to='/builds'>Builds</Link></li>
            <li><Link className='linkTags' to='/leaderboards'>Leaderboards</Link></li>
            <li><Link className='linkTags' to='/notes'>Patch Notes</Link></li>
            <li><input className='searchbar' type='search' placeholder='Search Players'></input></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Global
