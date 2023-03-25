import React, {
  ChangeEvent,
  FC,
  memo,
  ReactElement,
  useEffect,
  useState,
} from "react"

import { ContainerMain } from "@/components/atoms/Container"
import { MediumText } from "@/components/atoms/Texts"
import { Title } from "@/components/atoms/Titles"
import { Searchbar } from "@/components/molecules/Searchbar"
import UserList from "@/components/molecules/Lists/UserList"
import axios from "axios"
import { ExportExcelButton } from "@/components/molecules/ExportExcelButton"
import { apiEndpoint } from "@/configs/config"
import { NoBGButton, PrimaryButton, SecondaryButton } from "@/components/atoms/Buttons"
import AddUsersModal from "@/components/molecules/Modal/AddUsersModal"

const ListUserList = ({ users, prev, next, page, usersLengkap, refetch, count }) => {
  const [list, setList] = useState(users)
  const [isOnModal, setIsOnModal] = useState(false)

  useEffect(() => {
    setList(users)
  }, [setList, users])

  const changeHandler = (e) => {
    if (e.target.value !== "") {
      setList(() =>
        usersLengkap?.filter((us) =>
          us.nama_user.toLowerCase().includes(e.target.value.toLowerCase()),
        ),
      )
    } else {
      setList(users)
    }
  }

  const openModal = () => setIsOnModal(true)

  const onOkModal = (data) => {
    setIsOnModal(false)
    axios.post(`${apiEndpoint}/api/user`,
    {
      nama_user: data.nama,
      nama_pt: data.namaPt,
      no_hp: data.noHp,
      domisili: data.domisili,
      status: "active"
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }).then(() => {
      refetch()
    })
  }

  const onCancelModal = () => {
    setIsOnModal(false)
  }

  const changeUserStatus = (id, status) => {
    axios
      .patch(
        `${apiEndpoint}/api/user/status`,
        {
          id,
          status,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      )
      .then(() => {
        refetch()
        setList((user) =>
          user.filter((us) => {
            if (us.id_user !== id) {
              return us
            }
          }),
        )
      })
  }

  return (
    <ContainerMain className="py-[25px] mt-6">
      <MediumText className="flex px-5 justify-between items-center">
        <div className="flex items-center">
          <Title className="text-2xl font-medium mr-4">List User</Title>
          <ExportExcelButton excelData={users} fileName="List-User" />
          <NoBGButton onClick={openModal}>Tambah User</NoBGButton>
        </div>
        <Searchbar onChange={changeHandler} />
      </MediumText>
      <UserList users={list} changeStatus={changeUserStatus} />
      <div className="mt-4 ml-4">
        <PrimaryButton disabled={page <= 1} onClick={prev}>
          Prev
        </PrimaryButton>
        <PrimaryButton disabled={list?.length < 10 || page * 10 === count} onClick={next}>
          Next
        </PrimaryButton>
      </div>
      <AddUsersModal isDisplay={isOnModal} onOk={onOkModal} onCancel={onCancelModal} refetch={refetch} />
    </ContainerMain>
  )
}

export default memo(ListUserList)
