import React, { useContext, useEffect } from "react"

import { HeaderAdmin } from "@/components/organisms/HeaderAdmin"
import { SidebarAdmin } from "@/components/organisms/SidebarAdmin"
import { AuthContext } from "@/context/authContext"
import { useLocation, useNavigate } from "react-router-dom"
import useLocalStorage from "@/hooks/useLocalStorage"

const AdminTemplate = ({ children }) => {
  const ctx = useContext(AuthContext)
  const location = useLocation()
  return (
    <>
      <HeaderAdmin name={localStorage.getItem("username") || ctx.userName} />
      <div className="flex h-full w-full">
        <SidebarAdmin pathname={location.pathname} />
        {children}
      </div>
    </>
  )
}

export default AdminTemplate
