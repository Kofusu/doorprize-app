import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import BlacklistUserList from "@/components/organisms/AdminList/BlacklistUserList"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useQuery } from "react-query"

const BlacklistUserPage = () => {
  const { data } = useQuery("blacklistUser", () =>
    axios.get(`${apiEndpoint}/api/user/blacklist`).then((res) => res.data),
  )

  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage title="Blacklist User" />
        <BlacklistUserList users={data} />
      </Main>
    </AdminTemplate>
  )
}

export default BlacklistUserPage
