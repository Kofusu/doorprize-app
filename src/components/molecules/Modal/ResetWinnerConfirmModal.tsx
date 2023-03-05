import React, { FC, ReactNode } from "react";
import { Modal } from "antd";

const { confirm } = Modal;

type Props = {
  children: ReactNode
  onClick: () => void
};

const ResetWinnerConfirmModal: FC<Props> = ({children, onClick}) => {
  const showDeleteConfirm = () => {
    confirm({
      title: "Reset Winner?",
      content: "Apakah anda ingin reset semua pemenang?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        onClick()
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return <div className="absolute right-8" onClick={showDeleteConfirm}>{children}</div>;
};

export default ResetWinnerConfirmModal;
