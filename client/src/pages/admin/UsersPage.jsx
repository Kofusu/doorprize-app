import { PrimaryButton } from "@/components/atoms/Buttons"
import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import { ListUserList } from "@/components/organisms/AdminList"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const UsersPage = () => {
  const [pageState, setPageState] = useState(1)
  const { data, refetch } = useQuery(`activeUser-${pageState}`, () =>
    axios
      .get(`${apiEndpoint}/api/user/active/${pageState}`)
      .then((res) => res.data),
  )

  const { data: dataLengkap, refetch: refetchLengkap } = useQuery("activeUser", () =>
    axios.get(`${apiEndpoint}/api/user/active`).then((res) => res.data),
  )

  useEffect(() => {
    refetch()
  }, [pageState])

  const refetchAll = () => {
    refetch()
    refetchLengkap()
  }

  const nextPage = () => {
    if (data.userData.length >= 10) {
      setPageState((p) => p + 1)
    }
  }

  const prevPage = () => {
    if (pageState > 1) {
      setPageState((p) => p - 1)
    }
  }

  const toPage = (num) => {
    setPageState(num)
  }

  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage title="List Users" />
        <ListUserList
          users={data?.userData}
          page={pageState}
          prev={prevPage}
          next={nextPage}
          usersLengkap={dataLengkap}
          refetch={refetchAll}
          count={data?.count}
        />
      </Main>
    </AdminTemplate>
  )
}

export default UsersPage
