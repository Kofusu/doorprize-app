import React, { memo, useEffect, useState } from "react"

import { ContainerMain } from "@/components/atoms/Container"
import { MediumText } from "@/components/atoms/Texts"
import { Searchbar } from "@/components/molecules/Searchbar"
import ListSession from "@/components/molecules/Lists/ListSession"
import { NoBGButton, PrimaryButton } from "@/components/atoms/Buttons"
import AddSessionsModal from "@/components/molecules/Modal/AddSessionsModal"
import axios from "axios"
import { Link } from "react-router-dom"
import { apiEndpoint } from "@/configs/config"
import { BiTrash } from "react-icons/bi"
import { Modal } from "antd"

const SessionList = ({ sessions, refetch }) => {
  const [list, setList] = useState(sessions)
  const [listChecked, setListChecked] = useState([])
  const [modalDisplay, setModalDisplay] = useState(false)

  useEffect(() => {
    setList(sessions)
  }, [setList, sessions])

  const deleteHandler = (id, isChecked) => {
    if (isChecked) {
      setListChecked((prevState) => [...prevState, id])
    } else {
      setListChecked((prevState) => prevState.filter((n) => n !== id))
    }
  }

  const onOpenModal = () => {
    setModalDisplay(true)
  }

  const onOk = (text) => {
    axios
      .post(
        `${apiEndpoint}/api/session`,
        {
          sessionName: text,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      )
      .then((res) => {
        refetch()
        setModalDisplay(false)
      })
  }

  const onCancel = () => {
    setModalDisplay(false)
  }

  const showConfirmDelete = () => {
    Modal.confirm({
      title: "Hapus Selected Session?",
      content: "Apakah anda ingin menghapus selected Session?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        for (let id of listChecked) {
          axios
            .delete(`${apiEndpoint}/api/session/${id}`, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            })
            .then(() => {
              refetch()
            })
        }
        setListChecked([])
      },
      onCancel() {
        console.log("Cancel")
      },
    })
  }

  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <div>
          <NoBGButton
            onClick={onOpenModal}
            className="bg-inherit text-cusBlack border-[1px] border-cusBlack"
            disabled={list?.length >= 4}
          >
            Tambah Sesi
          </NoBGButton>
          <Link to="/admin/background">
            <NoBGButton className="bg-inherit text-cusBlack border-[1px] border-cusBlack">
              Edit Background
            </NoBGButton>
          </Link>
        </div>
        <PrimaryButton className="bg-red-600" onClick={showConfirmDelete} disabled={!listChecked.length}>
          <BiTrash className="scale-150" />
        </PrimaryButton>
      </MediumText>
      <ListSession sessions={sessions} onDelete={deleteHandler} />
      <AddSessionsModal
        isDisplay={modalDisplay}
        onOk={onOk}
        onCancel={onCancel}
      />
    </ContainerMain>
  )
}

export default memo(SessionList)
