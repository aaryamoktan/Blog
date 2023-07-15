import React from 'react'

const Siderbar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebaritems'>
          <span className='sidebaritem'>
            ABOUT-ME
          </span>
          <img src="https://scontent.fktm18-1.fna.fbcdn.net/v/t39.30808-6/358640149_1764766103993536_7119475189517747661_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=hU9X0NweBEkAX8I9gHr&_nc_ht=scontent.fktm18-1.fna&oh=00_AfAf_R3x8uYJQi71mww1cnFYnmL6__cB21QmQzQGp3vZDA&oe=64B51376" alt="/img" />
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