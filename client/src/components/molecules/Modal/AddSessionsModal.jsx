import { MediumText } from "@/components/atoms/Texts";
import { Modal } from "antd";
import React, { useState } from "react";

const AddSessionsModal = ({ isDisplay, onOk, onCancel }) => {
  const [input, setInput] = useState("")

  const onchange = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = () => {
    onOk(input)
  }

  return (
    <Modal
      open={isDisplay}
      onCancel={onCancel}
      onOk={submitHandler}
      title="Add Session"
      okButtonProps={{ className: "bg-secondary hover:opacity-70" }}
    >
      <div className="flex flex-col">
        <label className="mb-1"><MediumText className="text-[18px]">Nama Sesi</MediumText></label>
        <input onChange={onchange} value={input} type="text" className="border-secondary border-2 p-2" />
      </div>
    </Modal>
  );
};

export default AddSessionsModal;
