import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { Input } from '@/components/atoms/Input'
import { InputCounter } from '@/components/atoms/InputCounter'
import { InputSelector } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'
import { router } from '@inertiajs/react'
import { useCallback, useRef } from 'react'

interface Props {
  packageId: string
}

const countryOptions = [
  {
    label: 'United States',
    value: 'united-states'
  },
  {
    label: 'Perú',
    value: 'peru'
  }
]

export const ReservationCard = ({ packageId }: Props) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (formRef.current === null) {
        return
      }

      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData.entries())

      const startDate = data?.startDate
      const country = data?.country
      const numTravellers = data?.numTravellers

      router.visit('/booking', {
        data: {
          startDate,
          country,
          numTravellers,
          selectedPackage: packageId
        }
      })
    },
    []
  )

  return (
    <div className="w-96 overflow-hidden rounded-lg shadow-md">
      <div className="bg-primary px-8 py-4 text-center text-lg text-white">
        From <span className="text-2xl font-bold">$2199</span> / per person
      </div>
      <form
        className="flex flex-col gap-3 bg-white px-8 py-8"
        onSubmit={handleSubmitForm}
        ref={formRef}
      >
        <Label text="Start Date" className="font-bold" fullWidth>
          <Input type="date" name="startDate" />
        </Label>

        <Label text="Country" className="font-bold" fullWidth>
          <InputSelector
            options={countryOptions}
            showDefaultDisabledOption
            name="country"
          />
        </Label>

        <Label text="Num Travellers" className="font-bold" fullWidth>
          <InputCounter name="numTravellers" defaultValue={2} />
        </Label>

        <ButtonPrimary type="submit" fullWidth>
          Book Now!
        </ButtonPrimary>
      </form>
    </div>
  )
}
