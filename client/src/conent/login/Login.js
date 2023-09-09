import React, {useState} from 'react'
import LoginRoutes from '../../components/Routes/LoginRoutes'
const Login = () => {
  const [data1,setdata1] = useState(
    {
      name:"",
      email:"",
      password:""
    }
  )
const onchange =(e)=>
{
  setdata1({...data1,[e.target.name]:e.target.value})
}
const submit = (e)=>
{
    e.preventDefault();
   
}
  return (
    <>
        <div className='loginContainer'>
       
            <div className='loginInner'>
                <form onClick={submit}>
                    <label>Email-Id </label><br/>
                    <input type="text" className='input' onChange={onchange} name="email" value={data1.email} placeholder='Enter Your Email-Id ......'/><br/>
                    <label>Password </label><br/>
                    <input type="password" className='input' onChange={onchange} name="password" value={data1.password}  placeholder="**********"/><br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    </>
  )
}
export default Login