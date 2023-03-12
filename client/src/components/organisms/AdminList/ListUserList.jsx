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

const ListUserList = ({ users }) => {
  const [list, setList] = useState(users)

  useEffect(() => {
    setList(users)
  }, [setList, users])

  const changeHandler = (e) => {
    setList((user) =>
      users.filter((us) =>
        us.nama_user.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    )
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
        </div>
        <Searchbar onChange={changeHandler} />
      </MediumText>
      <UserList users={list} changeStatus={changeUserStatus} />
    </ContainerMain>
  )
}

export default memo(ListUserList)
