import { PrizeUser, SessionUser } from "@/components/organisms/SessionUser"
import { UserTemplate } from "@/components/templates/UserTemplate"
import { apiEndpoint } from "@/configs/config"
import axios from "axios"
import { useEffect, useState } from "react"
import { useQuery } from "react-query"

const HomePage = () => {
  const { data } = useQuery(
    "sessionPrize",
    () => axios.get(`${apiEndpoint}/api/prize`).then((res) => res.data),
    { initialData: [] },
  )
  const [highlightSession, setHighlightSession] = useState(0)
  const [highlightPrize, setHighlightPrize] = useState([])

  useEffect(() => {
    const filteredFirst = data?.filter(
      (dat) => dat.id_session === data[0]?.id_session,
    )

    setHighlightSession(data[0]?.id_session)
    setHighlightPrize(filteredFirst[0]?.prize)
  }, [data, setHighlightPrize, setHighlightSession])

  const onChangeSession = (sessionId) => {
    const filteredPrize = data?.filter((dat) => dat.id_session === sessionId)

    setHighlightSession(sessionId)
    setHighlightPrize(filteredPrize[0]?.prize)
  }

  return (
    <UserTemplate>
      <SessionUser
        data={data}
        sessionHighlight={highlightSession}
        onChangeSession={onChangeSession}
      />
      <PrizeUser highlightPrize={highlightPrize} />
    </UserTemplate>
  )
}

export default HomePage
