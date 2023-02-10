import Image from 'next/image'
import Router from 'next/router'
import React from 'react'
import logo from '../../public/logo.png'

const Logo = () => {
  return (
    <div
        onClick={() => Router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto p-10 w-[250px]"
      >
        {/* <Image
          src="https://i.im.ge/2022/10/14/2sRWAp.logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        /> */}
        <img src="https://i.im.ge/2022/10/14/2aokiD.logo2.png" alt="" className='object-contain'/>
      </div>
  )
}

export default Logo
