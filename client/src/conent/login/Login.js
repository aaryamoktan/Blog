import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data,setdata] = useState(
        {
            email:'',
            passowrd:''
        }
    )
    const onchange = (e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})

    }
    const sumbit = (e)=>
    {
        e.preventDefault();
    }
    return (
        <>
        <div className='loginContainer'>
        
            <div className='loginInner'>
                <form onClick={sumbit}> 
                    <label>Email-Id </label><br/>
                    <input type="email" onchnage={onchange} value={data.email} name="email" placeholder='Enter Your Email-Id.......................'/><br/>
                    <label>Password </label><br/>
                    <input type="password" onchnage={onchange} value={data.password} name="password" placeholder='*******************************'/><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
            
        </>
    )
}

export default Login