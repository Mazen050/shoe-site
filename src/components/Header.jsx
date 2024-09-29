import { useState } from 'react'
import './Header.css'
import logo from './image.png'
import search_icon from './search.png'
import bag from './bag.png'
import menue from './menue.png'


function Header() {
  return (
    <div className='header'>
      <img className='logo' src={logo}></img>
      <div className='nav-bar-container'>
        <nav className='nav-bar'>
          <a className='nav-item'>Home</a>
          <a className='nav-item'>Offers</a>
          <a className='nav-item'>Collections</a>
          <a className='nav-item'>Contact</a>
        </nav>
        <div className='search-container'>
        <img src={search_icon} className='search-icon'></img>
        <input className='search' type='text' placeholder='Search'></input>
        </div>
        <div className='cart-menue'>
          <img src={bag} className='cart'></img>
          <img src={menue} className='menue'></img>
        </div>
      </div>
    </div>
  )
}

export default Header
