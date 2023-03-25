import { Main } from "@/components/atoms/Main"
import { Title } from "@/components/atoms/Titles"
import LoginForm from "@/components/organisms/LoginForm/LoginForm"
import { apiEndpoint } from "@/configs/config"
import { AuthContext } from "@/context/authContext"
import useLocalStorage from "@/hooks/useLocalStorage"
import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const ctx = useContext(AuthContext)
  const { localStorageName } = useLocalStorage("isAuth", false)
  const navigate = useNavigate()

  if (localStorageName === "true") navigate("/admin/dashboard")

  const onSubmit = () => {
    axios
      .post(
        `${apiEndpoint}/api/auth/login`,
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        },
      )
      .then((res) => {
        console.log(res)
        if (res.data.success) {
          ctx.login(res.data.username)
          navigate("/admin/dashboard")
        } else {
          alert("Gagal Login")
        }
      })
      .catch((err) => {
        alert("Username / Password Salah")
      })
  }

  const handleusernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <Main className="bg-secondaryAdmin h-screen w-screen flex justify-center flex-col items-center">
      <Title>
        <span className="text-white">Login</span>
      </Title>
      <LoginForm
        onSubmit={onSubmit}
        onUsernameChange={handleusernameChange}
        onPasswordChange={handlePasswordChange}
      />
    </Main>
  )
}

export default LoginPage
