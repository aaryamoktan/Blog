import React, { useState } from 'react'
const img = require("../../images/env.jpg")
const Write = () => {
const [data,setdata] =useState(
  {
    pic:"",
    title:"",
    story:""
  }
)
const onchange=(e)=>
{
  setdata({...data,[e.target.name]:e.target.value})
}
const submit=(e)=>
{
  e.preventDefault();
  console.log(data)
}
  return (
    <>
      <div className='writeContainer'>
        <div className='writeInner'>
        <div className='writeImg'>
          <img src={img} alt=""/>
        </div>
          <div className='writeForm'>
            <form onClick={submit}>
            <input type="file" onChange={onchange} name="pic" value={data.pic}/>
              <input className='title' onChange={onchange} name="title" value={data.title} placeholder='Title' style={{ border: "none" }} />
              <br />
              <input className='story' onChange={onchange} name="story" value={data.story} placeholder=' Tell your stroy...' style={{ border: "none" }} />
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Write