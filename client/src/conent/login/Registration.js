import React from 'react'
import LoginRoutes from '../../components/Routes/LoginRoutes'

const Registration = () => {
  const [data,setdata] = useState(
    {
        username:'',
        email:'',
        passowrd:''
    }
)
const onchange = (e)=>
{
    setdata({...data,[e.target.name]:e.target.value})

}
const submit = (e)=>
{
    e.preventDefault();
}
  return (
    <>
    <LoginRoutes/>
        <div className='registerContainer'>
       
            <div className='registerInner'>
                <form onClick={submit}>
                    <label>User-Name: </label><br/>
                    <input type="text" className='input' onChange={onchange} value={data.username} placeholder='Enter Your Name ......'/><br/>
                    <label>Email-Id </label><br/>
                    <input type="email" className='input' onChange={onchange} value={data.email}  placeholder='Enter Your Email-Id ......'/><br/>
                    <label>Password </label><br/>
                    <input type="password" className='input' onChange={onchange} value={data.password} placeholder="**********"/><br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Registration