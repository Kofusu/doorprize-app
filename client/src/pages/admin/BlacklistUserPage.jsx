import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import BlacklistUserList from "@/components/organisms/AdminList/BlacklistUserList"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const BlacklistUserPage = () => {
  const [pageState, setPageState] = useState(1)
  const { data, refetch } = useQuery(`blacklistUser-${pageState}`, () =>
    axios
      .get(`${apiEndpoint}/api/user/blacklist/${pageState}`)
      .then((res) => res.data),
  )
  const { data: dataLengkap, refetch: refetchLengkap } = useQuery(
    "blacklistUser",
    () =>
      axios.get(`${apiEndpoint}/api/user/blacklist`).then((res) => res.data),
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
        <TitleAdminPage title="Blacklist User" />
        <BlacklistUserList
          users={data?.userData}
          page={pageState}
          prev={prevPage}
          next={nextPage}
          refetch={refetchAll}
          usersLengkap={dataLengkap}
        />
      </Main>
    </AdminTemplate>
  )
}

export default BlacklistUserPage
