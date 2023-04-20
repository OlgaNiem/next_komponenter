import React from 'react'
import Link from 'next/link';
import style from '../styles/Home.module.css'
import Logo from './Logo'


const Navbar = () => {
  return (
    <div>
        <div >
      <nav className={style.nav}>
        <Logo />
        <ul className={style.navLinks}>
          <li><Link href="/Home">Home</Link></li>
          <li><Link href="/Blog">Blog</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar