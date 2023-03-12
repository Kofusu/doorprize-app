import { apiEndpoint } from "@/configs/config"
import React from "react"

const UserTemplate = ({ children }) => {
  return (
    <>
      <img
        src={`${apiEndpoint}/public/Background.png`}
        className="-z-10 fixed inset-0 h-screen w-screen object-cover"
      />
      <main>{children}</main>
    </>
  )
}

export default UserTemplate
