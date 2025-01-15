import { InputDate } from '@/components/atoms/InputDate'
import { InputSelector } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'

const options = [
  {
    label: 'Heart of the Inca',
    value: 'Huh?',
  },
  {
    label: 'idk, YOU tell me where you want to go',
    value: 'idk',
  },
]

export const PackageInformation = () => {
  return (
    <section className="flex flex-col gap-4 rounded-lg bg-white px-6 md:px-12 py-8 shadow-md">
      <Label text="Packages" textStyles="font-semibold">
        <InputSelector options={options} showDefaultDisabledOption />
      </Label>

      <div className="grid gap-4 md:grid-cols-2">
        <Label text="Name" textStyles="font-semibold">
          <input
            className={`block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200`}
            type="text"
            placeholder="Bill Gates"
          />
        </Label>
        <Label text="Email" textStyles="font-semibold">
          <input
            className={`block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200`}
            type="email"
            placeholder="billgs@domain.com"
          />
        </Label>
      </div>

      <div className="flex flex-col">
        <Label text="Group or private Service" textStyles="font-semibold" />

        <div className="mt-auto flex gap-8 py-2">
          <Label text="Group" textAfterChildren row fitWidth verticalCentered>
            <input type="radio" value="group" name="serviceType" />
          </Label>

          <Label text="Private" textAfterChildren row fitWidth verticalCentered>
            <input type="radio" value="private" name="serviceType" />
          </Label>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Label text="Start Date" textStyles="font-semibold">
          <InputDate />
        </Label>
        <Label text="Alternative Date" textStyles="font-semibold">
          <InputDate />
        </Label>
      </div>
    </section>
  )
}
