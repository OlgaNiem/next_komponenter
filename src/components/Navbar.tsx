import React from 'react'
import Link from 'next/link';
import style from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div>
        <div>
      <nav>
        <ul>
          <li><Link href="/#">Home</Link></li>
          <li><Link href="/#">Blog</Link></li>
          <li><Link href="/#">About</Link></li>
          <li><Link href="/#">Contact</Link></li>
        </ul>
      </nav>
    </div>
    </div>
  )
}

export default Navbar