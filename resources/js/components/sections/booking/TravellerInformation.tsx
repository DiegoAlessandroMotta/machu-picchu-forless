import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { InputDate } from '@/components/atoms/InputDate'
import { InputSelector } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'
import { PlusCircleIcon } from '@/components/icons/PlusCircleIcon'
import { XCircleIcon } from '@/components/icons/XCircleIcon'
import { useState } from 'react'

interface PropsTravellerCard {
  id: number
  onRemove: (id: number) => void
  hideDeleteButton: boolean
}

const TravellerCard = ({
  id,
  onRemove,
  hideDeleteButton,
}: PropsTravellerCard) => {
  return (
    // <section className="overflow-hidden rounded-lg bg-white shadow-md [&_.exit-button]:first:hidden">
    <section className="overflow-hidden rounded-lg bg-white shadow-md">
      <header className="flex items-center justify-between bg-primary px-4 py-2 font-semibold text-white">
        <h3 className="flex h-8 items-center">Personal Information</h3>
        {!hideDeleteButton && (
          <button
            className="exit-button"
            onClick={() => {
              onRemove(id)
            }}
          >
            <XCircleIcon className="h-8 w-8 flex-shrink-0 text-white transition-colors hover:text-red-500" />
          </button>
        )}
      </header>

      <div className="flex flex-col gap-4 px-6 py-8 md:px-12">
        <div className="grid gap-4 md:grid-cols-2">
          <Label text="First Name" textStyles="font-semibold">
            <input
              className={`block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200`}
              type="text"
              placeholder="Bill"
            />
          </Label>
          <Label text="Last Name" textStyles="font-semibold">
            <input
              className={`block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200`}
              type="text"
              placeholder="Gates"
            />
          </Label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <Label text="Gender" textStyles="font-semibold" />

            <div className="mt-auto flex gap-8 py-2">
              <Label
                text="Female"
                textAfterChildren
                row
                fitWidth
                verticalCentered
              >
                <input type="radio" value="female" name="serviceType" />
              </Label>

              <Label
                text="Male"
                textAfterChildren
                row
                fitWidth
                verticalCentered
              >
                <input type="radio" value="male" name="serviceType" />
              </Label>
            </div>
          </div>
          <div>
            <Label text="Birth Date" textStyles="font-semibold">
              <InputDate />
            </Label>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Label text="Doc. Type" textStyles="font-semibold">
            <InputSelector options={[]} showDefaultDisabledOption />
          </Label>
          <Label text="Document Number" textStyles="font-semibold">
            <input
              className={`block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200`}
              type="text"
              placeholder="E00007730"
            />
          </Label>
        </div>

        <div className="flex flex-col">
          <Label
            text="Food Restriction / Allergies ?"
            textStyles="font-semibold"
          />

          <div className="mt-auto flex gap-8 py-2">
            <Label text="Yes" textAfterChildren row fitWidth verticalCentered>
              <input type="radio" value="yes" name="serviceType" />
            </Label>
            <Label text="No" textAfterChildren row fitWidth verticalCentered>
              <input type="radio" value="no" name="serviceType" />
            </Label>
          </div>
        </div>
      </div>
    </section>
  )
}

export const TravellerInformation = () => {
  const initialId = 1
  const [travellers, setTravellers] = useState<number[]>([initialId])
  const [nextId, setNextId] = useState(initialId + 1)

  const handleAddTraveller = () => {
    const newId = nextId
    setTravellers((prevTravellers) => [...prevTravellers, newId])
    setNextId((prevId) => prevId + 1)
  }

  const handleRemoveTraveller = (id: number) => {
    setTravellers((prevTravellers) =>
      prevTravellers.filter((travellerId) => travellerId !== id),
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-secondary text-xl font-bold">Traveller List</h2>

      <div className="flex flex-col gap-4">
        {travellers.map((id) => (
          <TravellerCard
            key={id}
            id={id}
            onRemove={() => handleRemoveTraveller(id)}
            hideDeleteButton={travellers.length === 1}
          />
        ))}
      </div>

      <div className="flex justify-end">
        <ButtonPrimary type="button" onClick={handleAddTraveller}>
          <PlusCircleIcon className="h-8 w-8 flex-shrink-0 text-white" />
          <span className="font-semibold">Add traveller</span>
        </ButtonPrimary>
      </div>
    </div>
  )
}
