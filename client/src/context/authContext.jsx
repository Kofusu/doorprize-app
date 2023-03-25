import useLocalStorage from "@/hooks/useLocalStorage"
import { createContext, useState } from "react"

export const AuthContext = createContext({
  userName: "",
  isAuth: false,
  login: (name) => {},
  logout: () => {},
})

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [userName, setUserName] = useState("")
  const { localStorageName } = useLocalStorage("isAuth", false)

  const login = (name) => {
    setIsAuth(true)
    setUserName(name)
    localStorage.setItem("isAuth", true)
    localStorage.setItem("username", name)
  }

  const logout = () => {
    setIsAuth(false)
    setUserName("")
    localStorage.setItem("isAuth", false)
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, userName }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
