import React from 'react'
import { Route,Routes,Link } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import LoginRoutes from '../../components/Routes/LoginRoutes'
const Logins = () => {
  return (
    <>
    <LoginRoutes/>
    <Login/>

    </>)
}

export default Logins