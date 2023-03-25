import { RegularText } from "@/components/atoms/Texts";
import { GenerateWinnerUser } from "@/components/organisms/GenerateWinner";
import { UserTemplate } from "@/components/templates/UserTemplate"
import { apiEndpoint } from "@/configs/config";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

const PrizeDetailPage = () => {
  const { prizeID } = useParams()
  const { data } = useQuery(`prizeDetail-${prizeID}`, () =>
    axios.get(`${apiEndpoint}/api/prize/detail/${prizeID}`).then(res => res.data),
  )
  console.log(data);
  return (
    <UserTemplate>
      <Link to={'/'} className='flex justify-center items-center fixed top-4 left-4 hover:scale-110 text-white'>
        <AiOutlineArrowLeft size={32} />
      </Link>
      <GenerateWinnerUser winner={data?.winner} prize={data?.prize} />
    </UserTemplate>
  )
}

export default PrizeDetailPage