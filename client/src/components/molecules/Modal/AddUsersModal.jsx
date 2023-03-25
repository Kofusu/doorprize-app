import { RegularText, SemiBoldText } from "@/components/atoms/Texts"
import { apiEndpoint } from "@/configs/config"
import { Modal } from "antd"
import axios from "axios"
import React, { useState } from "react"
import { ImportExcelButton } from "../ImportExcelButton"

const AddUsersModal = ({ isDisplay, onOk, onCancel, refetch }) => {
  const [nama, setNama] = useState("")
  const [namaPt, setNamaPt] = useState("")
  const [noHp, setNoHp] = useState("")
  const [domisili, setDomisili] = useState("")

  const onChangeNama = (e) => {
    setNama(e.target.value)
  }

  const onChangeNamaPt = (e) => {
    setNamaPt(e.target.value)
  }

  const onChangeNoHp = (e) => {
    setNoHp(e.target.value)
  }

  const onChangeDomisili = (e) => {
    setDomisili(e.target.value)
  }

  const onChangeFile = async (data) => {
    console.log(data)
    for (let user of data) {
      await axios.post(
        `${apiEndpoint}/api/user`,
        {
          nama_user: user.nama,
          nama_pt: user.nama_pt,
          no_hp: user.no_hp,
          domisili: user.domisili,
          status: "active",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      )
    }
    refetch()
    onCancel()
  }

  const submitHandler = async () => {
    onOk({
      nama,
      namaPt,
      noHp,
      domisili,
    })
  }

  return (
    <Modal
      open={isDisplay}
      onCancel={onCancel}
      onOk={submitHandler}
      title={
        <div className="flex justify-between items-center w-[95%]">
          <SemiBoldText className="text-[22px]">Tambah User</SemiBoldText>
          <ImportExcelButton onChange={onChangeFile} />
        </div>
      }
      okButtonProps={{
        className: "bg-secondary hover:opacity-70 disabled:opacity-30 text-white",
        disabled: (!nama || !namaPt || !noHp || !domisili || isNaN(parseInt(noHp))),
      }}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex flex-col mt-4">
          <label className="mb-1">
            <RegularText className="text-[16px]">Asal PT</RegularText>
          </label>
          <input
            onChange={onChangeNamaPt}
            value={namaPt}
            placeholder="Nama PT"
            className="border-secondary border-2 p-2"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">
            <RegularText className="text-[16px]">Nama User</RegularText>
          </label>
          <input
            onChange={onChangeNama}
            value={nama}
            placeholder="Nama User"
            className="border-secondary border-2 p-2"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">
            <RegularText className="text-[16px]">No HP</RegularText>
          </label>
          <input
            onChange={onChangeNoHp}
            value={noHp}
            type="number"
            placeholder="Nomor handphone"
            className="border-secondary border-2 p-2"
          />
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-1">
            <RegularText className="text-[16px]">Domisili</RegularText>
          </label>
          <input
            onChange={onChangeDomisili}
            value={domisili}
            placeholder="Domisili"
            className="border-secondary border-2 p-2"
          />
        </div>
      </form>
    </Modal>
  )
}

export default AddUsersModal
