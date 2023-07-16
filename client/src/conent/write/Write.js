import React from 'react'
const img = require("../../images/env.jpg")
const Write = () => {
  
  return (
    <>
      <div className='writeContainer'>
        <div className='writeInner'>
        <div className='writeImg'>
          <img src={img} alt=""/>
        </div>
          <div className='writeForm'>
            <form>
            <input type="file"  />
              <input className='title' placeholder='Title' style={{ border: "none" }} />
              <br />
              <input className='story' placeholder=' Tell your stroy...' style={{ border: "none" }} />
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Write