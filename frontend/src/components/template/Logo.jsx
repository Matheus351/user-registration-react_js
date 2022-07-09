import './Logo.css'
import React from 'react'
import logo from '../../assets/img/logo.jpg'

export default props  =>
  <aside className='logo'>
    <a href='/' className='logo'>
        <img src={logo} alt='logo'></img>
    </a>
  </aside>