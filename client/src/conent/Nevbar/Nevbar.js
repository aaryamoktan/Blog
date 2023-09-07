import React from 'react'
import { Link } from 'react-router-dom'
const img=require("../../images/reg.jpg")
const Nevbar = () => {
  return (
   <>
   <div className='top'>
    <div className='left'>
      <div className='icon'>
        <div className='facebook'><i class="fa-brands fa-facebook" style={{"color": "#0561ff" }}></i></div>
        <div className='instagram'><i class="fa-brands fa-instagram" style={{"color":"#fc0367"}}></i></div>
        <div className='twiter'><i class="fa-brands fa-twitter" style={{"color":"#009dff"}}></i></div>
        <div className='youtube'><i class="fa-brands fa-youtube " style={{"color":"#ff0000"}}></i></div>
      </div>
    </div>
    <div className='center'>
      <ul>
        <Link to="/" style={{"color":"black"}}><li>HOME</li></Link>
        <Link to="/content" style={{"color":"black"}}><li>CONTENT</li></Link>
        <Link to="/write" style={{"color":"black"}}><li>WRITE</li></Link>
        <Link to="/setting" style={{"color":"black"}}><li>SETTING</li></Link>
        <Link to="/loginsystem" style={{"color":"black"}}><li>LOGOUTS</li></Link>
        
      </ul>
    </div>
   <Link to="/profile"> <div className='right'>
      <img src={img} alt="pp"/>
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