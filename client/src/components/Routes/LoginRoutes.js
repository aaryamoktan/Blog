import React from 'react'
import { Link } from 'react-router-dom'
const LoginRoutes = () => {
    return (
        <>
        <div className='logins'>
            <div className='login'>
                <Link to="/loginsystem" style={{ "color": "white", "fontSize":"20px"}}>Login</Link>
            </div>
            <div className='registration'>
                <Link to="/registraion" style={{ "color": "white", "fontSize":"20px" }}>Registration</Link>
            </div>
        </div>
        </>
    )
}

export default LoginRoutes