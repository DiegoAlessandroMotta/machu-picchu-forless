import { InputCounter } from '@/components/atoms/InputCounter'
import { InputDate } from '@/components/atoms/InputDate'
import { InputSelector } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'

const options = [
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
    <div className="w-96 overflow-hidden rounded-lg shadow-md">
      <div className="bg-primary px-8 py-4 text-center text-lg text-white">
        From <span className="text-2xl font-bold">$2199</span> / per person
      </div>
      <form
        className="flex flex-col gap-3 bg-white px-8 py-8"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <Label text="Start Date" textStyles="font-bold">
          <InputDate />
        </Label>

        <Label text="Country" textStyles="font-bold">
          <InputSelector
            options={options}
            showDefaultDisabledOption
          />
        </Label>

        <Label text="Num Travellers" textStyles="font-bold">
          <InputCounter />
        </Label>

        <button
          className="mt-2 rounded bg-primary px-8 py-2 text-white"
          type="submit"
        >
          Book Now!
        </button>
      </form>
    </div>
  )
}
