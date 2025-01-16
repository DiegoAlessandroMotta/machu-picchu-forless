import { SVGAttributes } from 'react'

export const Bars3Icon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      {...props}
    >
      <title>bars</title>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      ></path>
    </svg>
  )
}
