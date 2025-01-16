import { Input } from '@/components/atoms/Input'
import { InputRadioCheckbox } from '@/components/atoms/InputRadioCheckbox'
import { InputSelector } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'

interface Props {
  onInputChange: () => void
}

const options = [
  {
    label: 'Heart of the Inca',
    value: 'heart-of-the-inca'
  },
  {
    label: 'Package 2',
    value: 'package-2'
  },
  {
    label: 'Package 3',
    value: 'package-3'
  }
]

export const PackageInformation = ({ onInputChange }: Props) => {
  return (
    <section className="flex flex-col gap-4 rounded-lg bg-white px-6 py-8 shadow-md md:px-12">
      <Label text="Packages" className="font-semibold" fullWidth>
        <InputSelector
          options={options}
          showDefaultDisabledOption
          name="selectedPackage"
          onChange={onInputChange}
        />
      </Label>

      <div className="grid gap-4 md:grid-cols-2">
        <Label text="Name" className="font-semibold" fullWidth>
          <Input placeholder="Bill Gates" />
        </Label>
        <Label text="Email" className="font-semibold" fullWidth>
          <Input type="email" placeholder="billgs@domain.com" />
        </Label>
      </div>

      <div className="flex flex-col">
        <Label text="Group or private Service" className="font-semibold" />

        <div className="mt-auto flex gap-8 py-2">
          <Label text="Group" textEnd row verticalCentered>
            <InputRadioCheckbox
              type="radio"
              value="group"
              name="serviceType"
              onChange={onInputChange}
            />
          </Label>

          <Label text="Private" textEnd row verticalCentered>
            <InputRadioCheckbox
              type="radio"
              value="private"
              name="serviceType"
              onChange={onInputChange}
            />
          </Label>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Label text="Start Date" className="font-semibold" fullWidth>
          <Input type="date" name="startDate" onChange={onInputChange} />
        </Label>
        <Label text="Alternative Date" className="font-semibold" fullWidth>
          <Input type="date" name="alternativeDate" onChange={onInputChange} />
        </Label>
      </div>
    </section>
  )
}
