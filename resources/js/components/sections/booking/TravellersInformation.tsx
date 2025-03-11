import { ButtonPrimary } from '@/components/atoms/ButtonPrimary'
import { PlusCircleIcon } from '@/components/icons/PlusCircleIcon'
import { TravellerCard } from '@/components/ui/TravellerCard'
import { defaultTraveler } from '@/consts'
import { useMemo, useState } from 'react'

interface Props {
	documentTypes: DocType[]
	genders: Gender[]
	setTravelers: (travelers: Traveler[]) => void
	travelers: Traveler[]
}

export const TravellersInformation = ({
	documentTypes,
	genders,
	setTravelers,
	travelers
}: Props) => {
	const initialId = 1
	const [nextId, setNextId] = useState(initialId + 1)

	const handleAddTraveler = () => {
		const newId = nextId
		const newTraveler = {
			...defaultTraveler,
			id: newId
		}

		setTravelers([...travelers, newTraveler])
		setNextId((prevId) => prevId + 1)
	}

	const handleRemoveTraveler = (id: number) => () => {
		const newTravelers = travelers.filter((traveller) => traveller.id !== id)
		setTravelers(newTravelers)
	}

	const setTravelerData = (id: number) => (field: TravelerKey, value: any) => {
		const newTravelers = travelers.map((traveler) => {
			if (traveler.id !== id) {
				return traveler
			}

			const newTraveler = {
				...traveler,
				[field]: value
			}

			return newTraveler
		})

		setTravelers(newTravelers)
	}

	const documentTypeOptions = useMemo(() => {
		return documentTypes.map((documentType) => ({
			value: String(documentType.id),
			label: documentType.name
		}))
	}, [documentTypes])

	const genderOptions = useMemo(() => {
		return genders.map((gender) => ({
			value: String(gender.id),
			label: gender.name
		}))
	}, [genders])

	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-xl font-bold text-secondary">Travelers</h2>

			<div className="flex flex-col gap-4">
				{travelers.map((traveler) => (
					<TravellerCard
						key={traveler.id}
						traveler={traveler}
						onRemove={handleRemoveTraveler(traveler.id)}
						onUpdate={setTravelerData(traveler.id)}
						hideDeleteButton={travelers.length === 1}
						documentTypeOptions={documentTypeOptions}
						genderOptions={genderOptions}
					/>
				))}
			</div>

			<div className="flex justify-end">
				<ButtonPrimary type="button" onClick={handleAddTraveler}>
					<PlusCircleIcon className="h-8 w-8 flex-shrink-0 text-white" />
					<span className="font-semibold">Add traveller</span>
				</ButtonPrimary>
			</div>
		</div>
	)
}
