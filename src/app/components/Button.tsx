import * as React from 'react'

type Props = {
  children: React.ReactNode
}

export function Button ({ children }: Props) {
  return (
    <button className='py-[15px] px-[30px] bg-primary-orange rounded'>
      <span className="text-white">
        { children }
      </span>
    </button>
  )
}
