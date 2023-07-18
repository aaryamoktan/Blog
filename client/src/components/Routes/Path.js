import React from 'react'
import Home from '../../conent/Home/Home'
import Nevbar from '../../conent/Nevbar/Nevbar'
import { Route,Routes } from 'react-router-dom'
import Write from '../../conent/write/Write'
import Post from '../../conent/post/Post'
import Singleposst from '../../conent/singlepost/Singleposst'
import Setting from '../../conent/Setting/Setting'
import Logins from '../../conent/login/Logins'
import Registration from '../../conent/login/Registration'
const Path = () => {
  return (
    <>
    <Nevbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/write" element={<Write/>}/>
    <Route path="/profile" element={<Singleposst/>}/>
    <Route path="/content" element={<Post/>}/>
    <Route path="/setting" element={<Setting/>}/>
    <Route path="/loginsystem" element={<Logins/>}/>
    <Route path="/registraion" element={<Registration/>}/>
    </Routes>
   
      
    </>
  )
}

export default Path