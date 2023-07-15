import React from 'react'
import Home from '../../conent/Home/Home'
import Nevbar from '../../conent/Nevbar/Nevbar'
import { Route,Routes } from 'react-router-dom'
import Write from '../../conent/write/Write'
import Singleposst from '../../conent/singlepost/Singleposst'
const Path = () => {
  return (
    <>
    <Nevbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/write" element={<Write/>}/>
    <Route path="/profile" element={<Singleposst/>}/>
    </Routes>
   
      
    </>
  )
}

export default Path