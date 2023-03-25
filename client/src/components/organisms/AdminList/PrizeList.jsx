import { NoBGButton, PrimaryButton } from "@/components/atoms/Buttons"
import { ContainerMain } from "@/components/atoms/Container"
import { MediumText } from "@/components/atoms/Texts"
import ListPrize from "@/components/molecules/Lists/ListPrize"
import { AddPrizeModal } from "@/components/molecules/Modal"
import { apiEndpoint } from "@/configs/config"
import { Modal } from "antd"
import axios from "axios"
import React, { memo, useEffect, useState } from "react"
import { BiTrash } from "react-icons/bi"

const PrizeList = ({ prizes, refetch }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [list, setList] = useState(prizes)
  const [listChecked, setListChecked] = useState([])

  useEffect(() => {
    setList(prizes)
  }, [setList, prizes])

  const onAdd = () => {
    setIsModalOpen(true)
  }

  const onCancel = () => {
    setIsModalOpen(false)
  }

  const onSubmit = async (unit, caption, file) => {
    const formData = new FormData()
    formData.append("unit", unit)
    formData.append("caption", caption)
    formData.append("id_session", prizes[0].id_session)
    formData.append("theFiles", file)
    axios.post(`${apiEndpoint}/api/upload/prize`, formData).then(({ data }) => {
      refetch()
      setIsModalOpen(false)
    })
  }

  const showConfirmDelete = () => {
    Modal.confirm({
      title: "Hapus Selected Prize?",
      content: "Apakah anda ingin menghapus selected Prize?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        for (let prizeId of listChecked) {
          axios
            .delete(`${apiEndpoint}/api/prize/detail/${prizeId}`, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            })
            .then(() => refetch())
        }
        setListChecked([])
      },
      onCancel() {
        console.log("Cancel")
      },
    })
  }

  const deleteHandler = (id, isChecked) => {
    console.log(listChecked)
    if (isChecked) {
      setListChecked((prevState) => [...prevState, id])
    } else {
      setListChecked((prevState) => prevState.filter((n) => n !== id))
    }
  }

  return (
    <ContainerMain className="px-5 py-3 mt-4 overflow-auto h-[585px]">
      <MediumText className="flex justify-between items-center">
        <NoBGButton
          disabled={list.length >= 6}
          onClick={onAdd}
          className="border-[1px] border-cusBlack mb-4"
        >
          Add Prize
        </NoBGButton>
        <PrimaryButton
          className="bg-red-600"
          onClick={showConfirmDelete}
          disabled={!listChecked.length}
        >
          <BiTrash className="scale-150" />
        </PrimaryButton>
      </MediumText>
      {list[0]?.id_prize && (
        <ListPrize prizes={list} onDelete={deleteHandler} />
      )}
      <AddPrizeModal
        isDisplay={isModalOpen}
        onOk={onSubmit}
        onCancel={onCancel}
      />
    </ContainerMain>
  )
}

export default memo(PrizeList)
