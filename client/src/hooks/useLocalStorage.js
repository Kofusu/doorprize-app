import React, { useEffect, useState } from "react"

const useLocalStorage = (name, initialValue) => {
  const [localStorageName, setLocalStorageName] = useState(initialValue)

  useEffect(() => {
    if (!localStorage.getItem(name)) {
      localStorage.setItem(name, initialValue)
    }
    setLocalStorageName(localStorage.getItem(name))
  }, [])

  return { localStorageName }
}

export default useLocalStorage
