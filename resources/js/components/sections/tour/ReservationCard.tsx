import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { Input } from '@/components/atoms/Input'
import { InputCounter } from '@/components/atoms/InputCounter'
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
        <Label text="Start Date" className="font-bold" fullWidth>
          <Input type="date" />
        </Label>

        <Label text="Country" className="font-bold" fullWidth>
          <InputSelector options={options} showDefaultDisabledOption />
        </Label>

        <Label text="Num Travellers" className="font-bold" fullWidth>
          <InputCounter />
        </Label>

        <ButtonPrimary type="submit" fullWidth>
          Book Now!
        </ButtonPrimary>
      </form>
    </div>
  )
}
