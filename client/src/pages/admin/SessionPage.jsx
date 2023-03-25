import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import { SessionList } from "@/components/organisms/AdminList"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useQuery } from "react-query"

const SessionPage = () => {
  const { data, refetch } = useQuery("sessions", () =>
    axios.get(`${apiEndpoint}/api/session`).then((res) => res.data),
  )
  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage title="Doorprize" />
        <SessionList refetch={refetch} sessions={data} />
      </Main>
    </AdminTemplate>
  )
}

export default SessionPage
