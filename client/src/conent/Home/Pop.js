import {React,useState }from 'react'

const Pop = () => {
    const [modal,setmodal]=useState(true);
    const toggleModal =()=>
    {
        setmodal(false)
    }
  if(modal===true)
  {
    return(
        <>
            <div className='pop'>Pop
    <button onClick={toggleModal}>clcik</button></div>
        </>
    )
  }
  else{
    return(
        <>
            <h1>offer 50%  fro opeening shoon</h1>
        </>
    )
  }
}

export default Pop