import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import { GenerateWinner } from "@/components/organisms/GenerateWinner"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"

const PrizeDetailPage = () => {
  const { prizeID } = useParams()
  const { data } = useQuery(`prizeDetail-${prizeID}`, () =>
    axios.get(`${apiEndpoint}/api/prize/detail/${prizeID}`).then(res => res.data),
  )
  
  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage
          placeHolder={`${data?.prize.nama_session} /`}
          title={data?.prize.nama_prize}
        />
        <GenerateWinner winner={data?.winner} prize={data?.prize} />
      </Main>
    </AdminTemplate>
  )
}

export default PrizeDetailPage
