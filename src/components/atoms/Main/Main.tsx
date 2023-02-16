import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Main: FC<Props> = ({children}) => {
  return (
    <main className="p-4 w-[calc(100%-245px)]">{children}</main>
  )
}

export default Main