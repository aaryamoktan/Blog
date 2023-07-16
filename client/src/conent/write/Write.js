import React from 'react'

const Write = () => {
  return (
    <>
      <div className='writeContainer'>
        <div className='writeInner'>
          <div className='writeForm'>
            <form>
            <input type="file"  />
              <input className='title' placeholder='Title' style={{ border: "none" }} />
              <br />
              <input className='story' placeholder=' Tell your stroy...' style={{ border: "none" }} />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Write