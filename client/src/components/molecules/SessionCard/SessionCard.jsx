import { RegularText } from "@/components/atoms/Texts"
import { Checkbox } from "antd"
import React, { useState } from "react"
import { AiOutlineRight } from "react-icons/ai"
import { Link } from "react-router-dom"

const SessionCard = ({ session, onDelete }) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <Link to={`/admin/sessions/${session?.id_session}`} onClick={(e) => {
      if (isHover) e.preventDefault()
    }}>
      <div className="my-4 cursor-pointer h-[100px] shadow-md shadow-slate-500 border-[1px] bg-cusWhite flex items-center justify-between px-4 rounded-xl">
        <RegularText className="text-[20px] flex items-center gap-4">
          <Checkbox
          className="scale-150"
            onMouseEnter={() => {
              setIsHover(true)
            }}
            onMouseLeave={() => {
              setIsHover(false)
            }}
            onChange={(e) => {
              e.stopPropagation()
              onDelete(session.id_session, e.target.checked)
            }}
          />
          <span>{session?.nama_session}</span>
        </RegularText>
        <AiOutlineRight size={24} />
      </div>
    </Link>
  )
}

export default SessionCard
