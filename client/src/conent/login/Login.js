import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <>
        <div className='loginContainer'>
        
            <div className='loginInner'>
                <form> 
                    <label>Email-Id </label><br/>
                    <input type="email" placeholder='Enter Your Email-Id.......................'/><br/>
                    <label>Password </label><br/>
                    <input type="password" placeholder='*******************************'/><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
            
        </>
    )
}

export default Login