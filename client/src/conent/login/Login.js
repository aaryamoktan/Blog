import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
        <div className='registerContainer'>
            <div className='registerInner'>
                <form> 
                    <label>Email-Id </label><br/>
                    <input type="email"/><br/>
                    <label>Password </label><br/>
                    <input type="password"/><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
            
        </>
    )
}

export default Login