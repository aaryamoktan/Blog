import React from 'react'
import Headers from '../Headers/Headers'
import Siderbar from '../sidebar/Siderbar'
import Post from '../post/Post'

const Home = () => {
  return (
    <>
      <Headers/>
      <div className='home'><Post/>
      <Siderbar/>
      
      </div>
    </>
  )
}

export default Home