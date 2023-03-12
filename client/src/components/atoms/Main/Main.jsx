import React from 'react'

const Main = ({children, className}) => {
  return (
    <main className={`p-4 w-[calc(100%-245px)] ${className}`}>{children}</main>
  )
}

export default Main