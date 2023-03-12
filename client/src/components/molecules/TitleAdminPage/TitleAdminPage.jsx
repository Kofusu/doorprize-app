import { ContainerMain } from "@/components/atoms/Container"
import { MediumText, RegularText } from "@/components/atoms/Texts"
import { Title } from "@/components/atoms/Titles"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

const TitleAdminPage = ({ title, placeHolder }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const adminPage = location.pathname.split("/")

  return (
    <ContainerMain className="bg-cusWhite h-[87px] flex items-center w-full px-8 rounded-xl">
      <RegularText>
        <Title level={2} className="text-[22px] font-normal">
          <span
            className="cursor-pointer"
            onClick={() => navigate("/" + adminPage[1] + "/" + adminPage[2])}
          >
            Admin /
          </span>{" "}
          <span className="cursor-pointer" onClick={() => navigate(-1)}>
            {placeHolder && placeHolder + " "}
          </span>
          <MediumText>{title}</MediumText>
        </Title>
      </RegularText>
    </ContainerMain>
  )
}

export default TitleAdminPage
