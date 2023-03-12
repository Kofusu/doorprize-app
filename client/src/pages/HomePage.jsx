import { UserTemplate } from "@/components/templates/UserTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useQuery } from "react-query"

const HomePage = () => {
  const { data } = useQuery("sessionPrize", () =>
    axios.get(`${apiEndpoint}/api/prize`).then((res) => res.data),
  )
  console.log(data);
  return (
    <UserTemplate>
      sssss
    </UserTemplate>
  )
}

export default HomePage
