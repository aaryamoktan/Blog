import React from 'react'
import Home from '../../conent/Home/Home'
import Nevbar from '../../conent/Nevbar/Nevbar'
import { Route,Routes } from 'react-router-dom'
const Path = () => {
  return (
    <>
    <Nevbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
    </Routes>
      
    </>
  )
}

export default Path