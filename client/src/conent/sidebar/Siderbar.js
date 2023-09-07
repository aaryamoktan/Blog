import React from 'react'
const img = require("../../images/log.jpg")
const Siderbar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebaritems'>
          <span className='sidebaritem'>
            ABOUT-ME
          </span>
          <img src={img} alt="/img" />
          <p>I’m a big fan of short sentences. I love them because people can understand them easily. There's great value in short sentences that are readable, digestible, and punchy.
            Writers often get caught up in the pressure of a good intro that they deliver long, run-on sentences. The problem with these sentences is that it makes readers work hard, which isn’t a great incentive to keep reading.
          </p>
        </div>
        <div className='sidebaritems'>
          <span className='sidebaritem'>
            CATEGORIES
          </span>  <ul className='sidebarlist'>
            <li className='siderlistitem'>Life</li>
            <li className='siderlistitem'>Music</li>
            <li className='siderlistitem'>Style</li>
            <li className='siderlistitem'>Sport</li>
            <li className='siderlistitem'>Tech</li>
            <li className='siderlistitem'>Cinema</li>
          </ul>
        </div>
        <div className='sidebaritems'>
          <span className='sidebaritem'>
            FOLLOW-ME
          </span>
          <div className='sidebarsocialmedia'>
            <div className='facebook'><i class="fa-brands fa-facebook" style={{"color": "#0561ff" }} ></i></div>
            <div className='instagram'><i class="fa-brands fa-instagram" style={{"color":"#fc0367"}}></i></div>
            <div className='twiter'><i class="fa-brands fa-twitter" style={{"color":"#009dff"}}></i></div>
            <div className='youtube'><i class="fa-brands fa-youtube" style={{"color":"#ff0000"}} ></i></div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Siderbar