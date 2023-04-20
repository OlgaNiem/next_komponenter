import React from 'react'
import Image from 'next/image'
import style from '../styles/Home.module.css'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.gridContainer}>
      {
        ['email', 'facebook', 'phone'].map(path =>{
          return(
            <div key={path} className={style.img}>
              <Image src={`/${path}.svg`}alt='socialMedia' width='35' height='35'/>        
            </div>
          )
        })
      }
      </div>

      <div className={style.copyright}>
        Copyright 2023 Olha Niemiets
      </div>
    </div>
  )
}

export default Footer