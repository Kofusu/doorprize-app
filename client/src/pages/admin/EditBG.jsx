import { Main } from "@/components/atoms/Main"
import { TitleAdminPage } from "@/components/molecules/TitleAdminPage"
import { Background } from "@/components/organisms/AdminList"
import { AdminTemplate } from "@/components/templates/AdminTemplate"

const EditBG = () => {
  return (
    <AdminTemplate>
      <Main>
        <TitleAdminPage placeHolder="Doorprize /" title="Background Sesi" />
        <Background />
      </Main>
    </AdminTemplate>
  )
}

export default EditBG
