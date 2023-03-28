import { MediumText } from "@/components/atoms/Texts"
import React from "react"

const SessionUser = ({ data, sessionHighlight, onChangeSession }) => {
  return (
    <div className="sticky top-[35px] mx-auto flex bg-secondaryAdmin w-fit rounded-3xl gap-2 select-none">
      {data?.map((session) => (
        <div
          key={session.id_session}
          onClick={() => onChangeSession(session.id_session)}
          className={`text-white min-w-[10vw] flex justify-center items-center rounded-3xl py-[2px] px-[35px] cursor-pointer ${
            sessionHighlight === session.id_session && "bg-primary"
          }`}
        >
          <MediumText className="text-[24px]">
            {session.nama_session}
          </MediumText>
        </div>
      ))}
    </div>
  )
}

export default SessionUser
