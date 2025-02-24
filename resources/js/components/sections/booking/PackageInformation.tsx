import { Input } from '@/components/atoms/Input'
import { InputRadioCheckbox } from '@/components/atoms/InputRadioCheckbox'
import { InputSelector } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'
import toursData from '@/mocks/tours.json'
import { useEffect, useState } from 'react'

interface Props {
  refreshSummary: () => void
}

interface QueryParamsType {
  startDate?: string
  country?: string
  selectedPackage?: string
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

const packageOptions = toursData.map((tour) => ({
  label: tour.title,
  value: tour.id
}))

export const PackageInformation = ({ refreshSummary }: Props) => {
  const [formData] = useState<QueryParamsType>(() => {
    const urlParams = new URLSearchParams(window.location.search)

    const data = {
      startDate: urlParams.get('startDate'),
      country: urlParams.get('country'),
      numTravellers: urlParams.get('numTravellers'),
      selectedPackage: urlParams.get('selectedPackage')
    }

    return {
      startDate: data.startDate ?? undefined,
      country: data.country ?? undefined,
      selectedPackage: data.selectedPackage ?? undefined
    }
  })

  useEffect(() => {
    refreshSummary()
  }, [refreshSummary])

  // const bookingInformation = useBookingContext()

  return (
    <section className="flex flex-col gap-4 rounded-lg bg-white px-6 py-8 shadow-md md:px-12">
      <Label text="Packages" className="font-semibold" fullWidth>
        <InputSelector
          options={packageOptions}
          showDefaultDisabledOption
          name="selectedPackage"
          onChange={refreshSummary}
          defaultValue={formData.selectedPackage}
          required
        />
      </Label>

      <div className="grid gap-4 md:grid-cols-2">
        <Label text="Full Name" className="font-semibold" fullWidth>
          <Input name="clientFullName" placeholder="Bill Gates" required />
        </Label>
        <Label text="Email" className="font-semibold" fullWidth>
          <Input
            name="clientEmail"
            type="email"
            placeholder="billgs@domain.com"
            required
          />
        </Label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <Label text="Group or private Service" className="font-semibold" />

          <div className="mt-auto flex gap-8 py-2">
            <Label text="Group" textEnd row verticalCentered>
              <InputRadioCheckbox
                type="radio"
                value="group"
                name="serviceType"
                onChange={refreshSummary}
                required
              />
            </Label>

            <Label text="Private" textEnd row verticalCentered>
              <InputRadioCheckbox
                type="radio"
                value="private"
                name="serviceType"
                onChange={refreshSummary}
                required
              />
            </Label>
          </div>
        </div>

        <div>
          <Label text="Country" className="font-semibold" fullWidth>
            <InputSelector
              options={countryOptions}
              showDefaultDisabledOption
              name="country"
              onChange={refreshSummary}
              defaultValue={formData.country}
              required
            />
          </Label>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Label text="Start Date" className="font-semibold" fullWidth>
          <Input
            type="date"
            name="startDate"
            onChange={refreshSummary}
            defaultValue={formData.startDate}
            required
          />
        </Label>
        <Label text="Alternative Date" className="font-semibold" fullWidth>
          <Input
            type="date"
            name="alternativeDate"
            onChange={refreshSummary}
            required
          />
        </Label>
      </div>
    </section>
  )
}
