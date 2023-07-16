import React from 'react'
const img = require("../../images/env.jpg")
const Setting = () => {
    return (
        <>
            <div className='settingContainer'>
                <div className='settingInner'>
                    <div className='settingsue'>
                        <div className='settingupdate'>
                        <h3>Update Account</h3>
                            <div className='settingUpper'>
                                <div className='ppimg'>
                                    <img src={img} alt="" />
                                </div>
                                <div className='pplogo'>
                                    <i class="fa-solid fa-user" type="file" style={{"color":"red"}}></i>
                                </div>
                            </div>
                            <div className='settingForm'>
                                <form>
                                    <div className='innferForm'>
                                    <label>Username</label>
                                    <br/>
                                    <input type="text" className='sinput'  placeholder='Aarya Moktan'/>
                                    <br/>
                                    <label>Email</label>
                                    <br/>
                                    <input  type="email" className='sinput'   placeholder='eg:blog@gmail.com'/>
                                    <br/>
                                    <label>Password</label><br/>
                                    <input type="password" className='sinput' placeholder='Strongpassword:lmekfjwier93483@mkdf ' />
                                    <br/><button type="submit">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='settingDelete'>
                            <buttom type="submit"><i class="fa-solid fa-trash" style={{"color":"#f84949"}}></i></buttom>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Setting