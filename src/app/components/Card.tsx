import * as React from 'react'

type Props = {
  children: React.ReactNode
}

export function Card ({ children }: Props) {
  return (
    <div className="w-[261px] h-[82px] flex items-center justify-center">
      { children }
    </div>
  )
}