import React from 'react'
import './Global.scss'

function Global() {
  return (
    <>
      <div className='nav-container'>
        <nav className='nav'>
          <ul className='nav-links'>
            <li>Gods</li>
            <li>Tier List</li>
            <li>Builds</li>
            <li>Leaderboards</li>
            <li>Patch Notes</li>
            <li><input type='search' placeholder='Search Players'></input></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Global
