import { AuthContext } from '@/context/authContext'
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { isAuth } = useContext(AuthContext)
  if (!isAuth) {
    return <Navigate to='/login' />
  }
  return (
    <Outlet />
  )
}

export default ProtectedRoute