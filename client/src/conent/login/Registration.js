import React from 'react'
import LoginRoutes from '../../components/Routes/LoginRoutes'
const img=require("../../images/log.jpg")
const Registration = () => {
  return (
    <>
    <LoginRoutes/>
        <div className='registerContainer'>
       
            <div className='registerInner'>
                <form>
                    <label>User-Name: </label><br/>
                    <input type="text" className='input' placeholder='Enter Your Name ......'/><br/>
                    <label>Email-Id </label><br/>
                    <input type="email" className='input'  placeholder='Enter Your Email-Id ......'/><br/>
                    <label>Password </label><br/>
                    <input type="password" className='input' placeholder="**********"/><br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Registration