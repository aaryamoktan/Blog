import React from 'react'
import { Link } from 'react-router-dom'
const LoginRoutes = () => {
    return (
        <>
        <div className='logins'>
            <div className='login'>
                <Link to="/loginsystem" style={{ "color": "black", "fontFamily": "cursive" }}>Login</Link>
            </div>
            <div className='registration'>
                <Link to="/registraion" style={{ "color": "black", "fontFamily": "cursive" }}>Registration</Link>
            </div>
        </div>
        </>
    )
}

export default LoginRoutes