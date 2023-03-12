import { createContext, useState } from "react";

export const AuthContext = createContext({
  userName: "",
  isAuth: false,
  login: (name) => {},
  logout: () => {},
})

const AuthContextProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState(false)
  const [userName, setUserName] = useState("")

  const login = (name) => {
    setIsAuth(true)
    setUserName(name)
  }

  const logout = () => {
    setIsAuth(false)
    setUserName("")
  }

  return (
    <AuthContext.Provider value={{isAuth, login, logout, userName}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider