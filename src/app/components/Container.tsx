import * as React from 'react'

type Props = {
  children: React.ReactNode
}

export function Container ({ children }: Props) {
  return (
    <div className='bg-gradient-linear w-full'>{children}</div>
  )
}