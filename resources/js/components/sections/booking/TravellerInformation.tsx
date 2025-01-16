import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { Input } from '@/components/atoms/Input'
import { InputRadioCheckbox } from '@/components/atoms/InputRadioCheckbox'
import { InputSelector } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'
import { PlusCircleIcon } from '@/components/icons/PlusCircleIcon'
import { XCircleIcon } from '@/components/icons/XCircleIcon'
import { useEffect, useState } from 'react'

interface PropsTravellerCard {
  id: number
  onRemove: (id: number) => void
  hideDeleteButton: boolean
}

const TravellerCard = ({
  id,
  onRemove,
  hideDeleteButton
}: PropsTravellerCard) => {
  return (
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
          <Label text="First Name" className="font-semibold" fullWidth>
            <Input placeholder="Bill" />
          </Label>
          <Label text="Last Name" className="font-semibold" fullWidth>
            <Input placeholder="Gates" />
          </Label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col">
            <Label text="Gender" className="font-semibold" />

            <div className="mt-auto flex gap-8 py-2">
              <Label text="Female" textEnd row verticalCentered>
                <InputRadioCheckbox
                  type="radio"
                  value="female"
                  name="serviceType"
                />
              </Label>

              <Label text="Male" textEnd row verticalCentered>
                <InputRadioCheckbox
                  type="radio"
                  value="male"
                  name="serviceType"
                />
              </Label>
            </div>
          </div>

          <div>
            <Label text="Birth Date" className="font-semibold" fullWidth>
              <Input type="date" />
            </Label>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Label text="Doc. Type" className="font-semibold" fullWidth>
            <InputSelector options={[]} showDefaultDisabledOption />
          </Label>

          <Label text="Document Number" className="font-semibold" fullWidth>
            <Input placeholder="E00007730" />
          </Label>
        </div>

        <div className="flex flex-col">
          <Label
            text="Food Restriction / Allergies ?"
            className="font-semibold"
          />

          <div className="mt-auto flex gap-8 py-2">
            <Label text="Yes" textEnd row verticalCentered>
              <InputRadioCheckbox
                type="radio"
                value="yes"
                name="foodRestrictions"
              />
            </Label>
            <Label text="No" textEnd row verticalCentered>
              <InputRadioCheckbox
                type="radio"
                value="no"
                name="foodRestrictions"
              />
            </Label>
          </div>
        </div>
      </div>
    </section>
  )
}

interface Props {
  setNumberOfTravellers: (travellers: number) => void
}

export const TravellerInformation = ({ setNumberOfTravellers }: Props) => {
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
      prevTravellers.filter((travellerId) => travellerId !== id)
    )
  }

  useEffect(() => {
    setNumberOfTravellers(travellers.length)
  }, [travellers])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold text-secondary">Traveller List</h2>

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
