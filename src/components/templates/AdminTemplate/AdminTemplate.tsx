import React, { FC, ReactNode, useContext, useEffect, useState } from "react";

import { HeaderAdmin } from "@/components/organisms/HeaderAdmin";
import { SidebarAdmin } from "@/components/organisms/SidebarAdmin";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/authContext";

interface Props {
  children: ReactNode;
}

const AdminTemplate: FC<Props> = ({ children }) => {
  const ctx = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!ctx.isAuth) {
      router.replace("/login")
    }
  }, [router])

  return (
    <>
      <HeaderAdmin name={ctx.userName} />
      <div className="flex h-full w-full">
        <SidebarAdmin pathname={router.pathname} />
        {children}
      </div>
    </>
  );
};

export default AdminTemplate;
