import { InputCounter } from '@/components/atoms/InputCounter'
import { InputSelector } from '@/components/atoms/InputSelector'
import React from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  widthFit?: boolean
}

interface PropsLabel {
  children: any
  text?: string
  textSize?: string
  row?: boolean
  textStyles?: string
}

const Label = ({ children, text, textSize, textStyles, row }: PropsLabel) => {
  const className = `
    ${textSize ? textSize : 'text-base'}
    ${textStyles}
  `

  return (
    <label
      className={`flex ${row ? 'flex-row' : 'flex-col'} gap-1.5 text-gray-700`}
    >
      {text && <span className={className}>{text}</span>}
      {children}
    </label>
  )
}

const InputDate = ({ widthFit, ...props }: Props) => {
  return (
    <input
      className={`block border border-gray-300 bg-white text-current outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200 ${widthFit ? 'w-fit' : 'w-full'} rounded-md px-2.5 py-1.5`}
      type="date"
      {...props}
    />
  )
}

const options = [
  {
    label: 'Choose an option',
    value: 0,
    disabled: true,
  },
  {
    label: 'Nice',
    value: 69,
  },
  {
    label: 'Huh?',
    value: 8008,
  },
]

export const ReservationCard = () => {
  return (
    <div className="min-w-80 max-w-96 overflow-hidden rounded-lg shadow-md">
      <div className="bg-primary-saturated px-8 py-4 text-center text-lg text-white">
        From <span className="text-2xl font-bold">$2199</span> / per person
      </div>
      <form className="flex flex-col gap-3 bg-white px-8 py-8">
        <Label text="Start Date" textStyles="font-bold">
          <InputDate />
        </Label>

        <Label text="Country" textStyles="font-bold">
          <InputSelector options={options} defaultValue={0} />
        </Label>

        <Label text="Num Travellers" textStyles="font-bold">
          <InputCounter />
        </Label>

        <button
          className="mt-2 rounded bg-primary-saturated px-8 py-2 text-white"
          type="submit"
        >
          Book Now!
        </button>
      </form>
    </div>
  )
}
