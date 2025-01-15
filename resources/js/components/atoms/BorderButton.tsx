interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const BorderButton = ({
  children,
  className = 'border-black',
  ...props
}: Props) => {
  return (
    <button
      className={`rounded-full border-2 bg-transparent px-4 py-2 text-lg font-semibold text-current transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
