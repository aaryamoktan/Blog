import React from 'react'
import LoginRoutes from '../../components/Routes/LoginRoutes'
const Registration = () => {
  return (
    <>
    <LoginRoutes/>
        <div className='registerContainer'>
            <div className='registerInner'>
                <form>
                    <label>User-Name: </label><br/>
                    <input type="text"/><br/>
                    <label>Email-Id </label><br/>
                    <input type="email"/><br/>
                    <label>Password </label><br/>
                    <input type="password"/><br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Registration