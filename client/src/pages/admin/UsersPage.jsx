import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import { ListUserList } from "@/components/organisms/AdminList"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useQuery } from "react-query"

const UsersPage = () => {
  const { data } = useQuery("activeUser", () =>
    axios.get(`${apiEndpoint}/api/user/active`).then((res) => res.data),
  )
  
  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage title="List Users" />
        <ListUserList users={data} />
      </Main>
    </AdminTemplate>
  )
}

export default UsersPage
