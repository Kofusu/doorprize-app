import React, { useContext, useEffect } from "react";

import { HeaderAdmin } from "@/components/organisms/HeaderAdmin";
import { SidebarAdmin } from "@/components/organisms/SidebarAdmin";
import { AuthContext } from "@/context/authContext";
import { useLocation, useNavigate } from "react-router-dom";

const AdminTemplate = ({ children }) => {
  const ctx = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (!ctx.isAuth) {
      navigate("/login")
    }
  }, [navigate, ctx.isAuth])

  return (
    <>
      <HeaderAdmin name={ctx.userName} />
      <div className="flex h-full w-full">
        <SidebarAdmin pathname={location.pathname} />
        {children}
      </div>
    </>
  );
};

export default AdminTemplate;
