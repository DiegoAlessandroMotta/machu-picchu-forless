import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  text?: string
  textSize?: string
  row?: boolean
  textStyles?: string
  textAfterChildren?: boolean
  fitWidth?: boolean
  verticalCentered?: boolean
}

export const Label = ({
  children,
  text,
  textSize,
  textStyles,
  row,
  textAfterChildren,
  fitWidth,
  verticalCentered,
}: Props) => {
  const className = `
    ${textSize ? textSize : 'text-base'}
    ${textStyles}
  `

  return (
    <label
      className={`flex gap-1.5 text-neutral-700 ${row ? 'flex-row' : 'flex-col'} ${fitWidth ? 'w-fit' : 'w-full'} ${verticalCentered ? 'items-center' : ''}`}
    >
      {text && !textAfterChildren && <span className={className}>{text}</span>}
      {children}
      {text && textAfterChildren && <span className={className}>{text}</span>}
    </label>
  )
}
