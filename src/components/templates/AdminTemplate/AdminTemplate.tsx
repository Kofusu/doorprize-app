import React, { FC, ReactNode, useEffect, useState } from "react";

import { HeaderAdmin } from "@/components/organisms/HeaderAdmin";
import { SidebarAdmin } from "@/components/organisms/SidebarAdmin";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Props {
  children: ReactNode;
}

const AdminTemplate: FC<Props> = ({ children }) => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    if (!user) {
      router.replace('/login')
    }
  }, [user])

  return (
    <>
      <HeaderAdmin name={user?.email as string} />
      <div className="flex h-full w-full">
        <SidebarAdmin pathname={router.pathname} />
        {children}
      </div>
    </>
  );
};

export default AdminTemplate;
