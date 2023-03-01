import React, { FC, ReactNode, useContext } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/authContext";

const { confirm } = Modal;

type Props = {
  children: ReactNode
};

const LogoutConfirmModal: FC<Props> = ({children}) => {
  const ctx = useContext(AuthContext)
  const router = useRouter()
  const showDeleteConfirm = () => {
    confirm({
      title: "Logout?",
      content: "Apakah anda ingin keluar dari mode Admin?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        ctx.logout();
        router.replace('/login')
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return <div onClick={showDeleteConfirm}>{children}</div>;
};

export default LogoutConfirmModal;
