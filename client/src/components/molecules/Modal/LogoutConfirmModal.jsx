import React, { useContext } from "react";
import { Modal } from "antd";
import { AuthContext } from "@/context/authContext";
import { useNavigate } from "react-router-dom";

const { confirm } = Modal;

const LogoutConfirmModal = ({children}) => {
  const ctx = useContext(AuthContext)

  const navigate = useNavigate()
  const showDeleteConfirm = () => {
    confirm({
      title: "Logout?",
      content: "Apakah anda ingin keluar dari mode Admin?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        ctx.logout();
        navigate('/login')
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return <div onClick={showDeleteConfirm}>{children}</div>;
};

export default LogoutConfirmModal;
