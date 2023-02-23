import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const Main: FC<Props> = ({children, className}) => {
  return (
    <main className={`p-4 w-[calc(100%-245px)] ${className}`}>{children}</main>
  )
}

export default Main