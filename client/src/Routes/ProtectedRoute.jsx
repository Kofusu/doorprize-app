import { AuthContext } from '@/context/authContext'
import useLocalStorage from '@/hooks/useLocalStorage'
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { localStorageName: isAuth } = useLocalStorage("isAuth", false)
  if (isAuth === "false") {
    return <Navigate to='/login' />
  }
  return (
    <Outlet />
  )
}

export default ProtectedRoute