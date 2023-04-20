import React from 'react'
import Image from 'next/image'
import style from '../styles/Home.module.css'

const Content = () => {
  return (
    <div className={style.contentContainer}>
        <Image src="/logo1.png" className={style.contentImg} alt="flower" width={850} height={700} />
        <div className={style.contentText}>
          <p className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
    </div>
  )
}

export default Content