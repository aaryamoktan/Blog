import React from 'react'
const img = require("../../images/env.jpg")
const Headers = () => {
  return (
    <>
        <div className='header'>
            <div className='headertitles'>
                <span className='headertitlesm'>React & Node</span>
                <span className='headertitlelr'>Blog </span>

            </div>
            <div className='headerimg'>
                <img src={img} alt="lmmf"/>
            </div>
        </div>

    </>
  )
}

export default Headers