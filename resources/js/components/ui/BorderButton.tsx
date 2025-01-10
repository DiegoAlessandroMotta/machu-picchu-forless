import { Button } from '@headlessui/react'
import React from 'react'

interface Props {
  children: React.ReactNode
  color?: string
}

export const BorderButton = ({ children, color = 'currentColor' }: Props) => {
  return (
    <Button
      className="border-2 font-semibold text-lg rounded-full px-4 py-2"
      style={{ borderColor: color, color }}
    >
      {children}
    </Button>
  )
}
