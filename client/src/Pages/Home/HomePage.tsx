import React from 'react'
import HomeContainer from '../../Containers/Home/HomeContainer';
import { Link } from 'react-router-dom';

type Props = {}

const HomePage = (props: Props) => {
  return (
    <>
      <Link to='/formCreateProduct'>
        <button>Create Products</button>
      </Link>
      <HomeContainer/>
    </>
  )
}

export default HomePage
