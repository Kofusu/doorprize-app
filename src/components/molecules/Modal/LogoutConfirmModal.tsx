import React, { FC, ReactNode } from "react";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { logout } from "@/firebase";

const { confirm } = Modal;

type Props = {
  children: ReactNode
};

const LogoutConfirmModal: FC<Props> = ({children}) => {
  const router = useRouter()
  const showDeleteConfirm = () => {
    confirm({
      title: "Logout?",
      content: "Apakah anda ingin keluar dari mode Admin?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        logout();
        router.push('/')
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return <div onClick={showDeleteConfirm}>{children}</div>;
};

export default LogoutConfirmModal;
