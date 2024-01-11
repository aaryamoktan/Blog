import React from 'react'
import Headers from '../Headers/Headers'
import Siderbar from '../sidebar/Siderbar'
import Post from '../post/Post'
import Pop from './Pop'
const Home = () => {

  return (
    <>
      <Headers/>
      <div className='home'><Post/>
      <Pop/>
      <Siderbar/>
      
      </div>
    </>
  )
}

export default Home