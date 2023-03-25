import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import { AdminDashboardCardList } from "@/components/organisms/AdminDashboardCardList"
import { DashboardList } from "@/components/organisms/AdminList"
import { AdminTemplate } from "@/components/templates/AdminTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useQuery } from "react-query"

const DashboardPage = () => {
  const { data, refetch } = useQuery("dashboard", () =>
    axios.get(`${apiEndpoint}/api/user/dashboard`).then((res) => res.data),
  )

  const resetHandler = async () => {
    await axios.delete(`${apiEndpoint}/api/user/winner`).then(res => res.data)
    refetch()
  }

  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage title="Dashboard" />
        <AdminDashboardCardList
          jumlahPemenang={data?.winner?.length}
          jumlahBlacklistUser={data?.jumlahBlacklistUser}
          jumlahDoorprize={data?.jumlahDoorprize}
          jumlahUser={data?.jumlahUser}
        />
        <DashboardList onReset={resetHandler} winner={data?.winner} />
      </Main>
    </AdminTemplate>
  )
}

export default DashboardPage
