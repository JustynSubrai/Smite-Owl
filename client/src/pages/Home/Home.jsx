import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'

function Home() {
  return (
    <div className='homeBg'>
        <div className='home-nav-container'>
        <nav className='home-nav'>
          <div className="home-logo-container">
            <a href='/'><img className='logo' src='images/smitelogo.png'/></a>
            <h1 className='home-title'>Smite Owl</h1>
          </div>
          <ul className='home-nav-links'>
            <li></li>
            <li><Link className='homeLinkTags' to='/gods'>Gods</Link></li>
            <li><Link className='homeLinkTags' to='/tier'>Tier List</Link></li>
            <li><Link className='homeLinkTags' to='/builds'>Builds</Link></li>
            <li><Link className='homeLinkTags' to='/leaderboards'>Leaderboards</Link></li>
            <li><Link className='homeLinkTags' to='/notes'>Patch Notes</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Home
