import React, { useState } from 'react'
const Login = () => {
    const [data,setdata] = useState(
        {
            email:'',
            password:''
        }
    )
    const onchange = (e)=>
    {
        setdata({...data,[e.target.name]:e.target.value})

    }
    const sumbit = (e)=>
    {
        e.preventDefault();
        console.log(data)
    }
    return (
        <>
        <div className='loginContainer'>
        
            <div className='loginInner'>
                <form onClick={sumbit}> 
                    <label>Email-Id </label><br/>
                    <input type="email" onchnage={onchange}   placeholder='Enter Your Email-Id.......................'  name="email" /><br/>
                    <label>Password </label><br/>
                    <input type="password" onchnage={onchange} name="password" placeholder='*******************************'/><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
            
        </>
    )
}

export default Login