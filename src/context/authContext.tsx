import { createContext, FC, ReactNode, useState } from "react";

export const AuthContext = createContext({
  userName: "",
  isAuth: false,
  login: (name: string) => {},
  logout: () => {},
})

const AuthContextProvider: FC<{children: ReactNode}> = ({children}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>("")

  const login = (name: string) => {
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