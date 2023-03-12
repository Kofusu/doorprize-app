import React, { memo, useState } from "react"

import { ContainerMain } from "@/components/atoms/Container"
import { MediumText, RegularText } from "@/components/atoms/Texts"
import { NoBGButton } from "@/components/atoms/Buttons"
import AddBackgroundModal from "@/components/molecules/Modal/AddBackgroudModal"
import axios from "axios"
import { apiEndpoint } from "@/configs/config"

const Background = () => {
  const [modalDisplay, setModalDisplay] = useState(false)
  const [imageKey, setImageKey] = useState(0)

  const onOpenModal = () => {
    setModalDisplay(true)
  }

  const onCancel = () => {
    setModalDisplay(false)
  }

  const onOk = (file) => {
    setModalDisplay(false)
    const formData = new FormData()
    formData.append("theFiles", file)
    axios.post("/api/sessions/background", formData).then(({ data }) => {
      console.log(data)
      setImageKey(Math.random())
    })
  }

  return (
    <ContainerMain className="py-[25px] overflow-auto h-[585px] mt-4">
      <MediumText className="flex px-5 justify-between items-center">
        <NoBGButton
          onClick={onOpenModal}
          className="bg-inherit text-cusBlack border-[1px] border-cusBlack"
        >
          Edit Gambar
        </NoBGButton>
      </MediumText>
      <img
        alt="Backgorund Sesi"
        src={`${apiEndpoint}/public/Background.png?hash=${imageKey}`}
        className="mt-4 mb-2 h-[80%] m-auto"
      />
      <a target="_blank" href={`${apiEndpoint}/public/Background.png`}>
        <RegularText className="text-[20px] text-center block underline cursor-pointer">
          Preview Background
        </RegularText>
      </a>
      <AddBackgroundModal
        onOk={onOk}
        isDisplay={modalDisplay}
        onCancel={onCancel}
      />
    </ContainerMain>
  )
}

export default memo(Background)
