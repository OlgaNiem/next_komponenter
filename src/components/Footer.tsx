import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
  
      {
        ['email', 'facebook', 'phone'].map(path =>{
          return(
            <div key={path}>
              <Image src={`/${path}.svg`}alt='socialMedia' width='50' height='50'/>        
            </div>
          )
        })
      }

      <div className='copyright'>
        Copyright 2021 Olha Niemiets
      </div>
    </div>
  )
}

export default Footer