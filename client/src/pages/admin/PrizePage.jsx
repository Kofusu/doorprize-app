import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import { PrizeList } from "@/components/organisms/AdminList"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

const PrizePage = () => {
  const { sessionID } = useParams()

  const { data } = useQuery(
    `prizeList-${sessionID}`,
    () =>
      axios
        .get(`${apiEndpoint}/api/session/${sessionID}`)
        .then((res) => res.data),
    { initialData: [] },
  )
  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage title={`${data[0]?.nama_session}`} />
        <PrizeList prizes={data} />
      </Main>
    </AdminTemplate>
  )
}

export default PrizePage
