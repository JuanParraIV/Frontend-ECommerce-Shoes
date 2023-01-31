import React, { useEffect } from 'react'
import { Props } from '../../typing/Home.type'

const Home = ({name,apellido, edad}:Props) => {
  return (
    <div>
      <p>{name}</p>
      <p>{apellido}</p>
      <p>{edad}</p>
    </div>
  )
}

export default Home
