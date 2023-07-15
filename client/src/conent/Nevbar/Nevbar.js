import React from 'react'
import { Link } from 'react-router-dom'
const Nevbar = () => {
  return (
   <>
   <div className='top'>
    <div className='left'>
      <div className='icon'>
        <div className='facebook'><i class="fa-brands fa-facebook "></i></div>
        <div className='instagram'><i class="fa-brands fa-instagram"></i></div>
        <div className='twiter'><i class="fa-brands fa-twitter"></i></div>
        <div className='youtube'><i class="fa-brands fa-youtube " ></i></div>
      </div>
    </div>
    <div className='center'>
      <ul>
        <Link to="/" style={{"color":"black"}}><li>HOME</li></Link>
        <Link to="/" style={{"color":"black"}}><li>CONTENT</li></Link>
        <Link to="/" style={{"color":"black"}}><li>WRITE</li></Link>
        <Link to="/" style={{"color":"black"}}><li>SETTING</li></Link>
        <Link to="/" style={{"color":"black"}}><li>LOGOUTS</li></Link>
        
      </ul>
    </div>
   <Link to="/profile"> <div className='right'>
      <img src="https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/358640149_1764766103993536_7119475189517747661_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hU9X0NweBEkAX8I9gHr&_nc_ht=scontent.fktm18-1.fna&oh=00_AfAf_R3x8uYJQi71mww1cnFYnmL6__cB21QmQzQGp3vZDA&oe=64B51376" alt="pp"/>
      <div className='search'>
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    </Link>
   </div>
   </>
  )
}

export default Nevbar