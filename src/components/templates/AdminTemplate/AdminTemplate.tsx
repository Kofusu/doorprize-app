import React, { FC, ReactNode } from "react";

import { HeaderAdmin } from "@/components/organisms/HeaderAdmin";
import { SidebarAdmin } from "@/components/organisms/SidebarAdmin";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
}

const AdminTemplate: FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <HeaderAdmin />
      <div className="flex h-full w-full">
        <SidebarAdmin pathname={router.pathname} />
        {children}
      </div>
    </>
  );
};

export default AdminTemplate;
