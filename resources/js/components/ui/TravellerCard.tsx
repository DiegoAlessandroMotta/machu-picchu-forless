import { Input } from '@/components/atoms/Input'
import { InputRadioCheckbox } from '@/components/atoms/InputRadioCheckbox'
import { SelectInput } from '@/components/atoms/SelectInput'
import { Label } from '@/components/atoms/Label'
import { XCircleIcon } from '@/components/icons/XCircleIcon'

interface PropsTravellerCard {
	traveler: Traveler
	onRemove: () => void
	onUpdate: (field: TravelerKey, value: any) => void
	hideDeleteButton: boolean
	documentTypeOptions: InputSelectOption[]
	genderOptions: InputSelectOption[]
}

export const TravellerCard = ({
	traveler,
	onRemove,
	onUpdate,
	hideDeleteButton,
	documentTypeOptions,
	genderOptions
}: PropsTravellerCard) => {
	return (
		<section className="overflow-hidden rounded-lg bg-white shadow-md">
			<header className="flex items-center justify-between bg-primary px-4 py-2 font-semibold text-white">
				<h3 className="flex h-8 items-center">Personal Information</h3>
				{!hideDeleteButton && (
					<button
						className="exit-button"
						onClick={() => {
							onRemove()
						}}
					>
						<XCircleIcon className="h-8 w-8 flex-shrink-0 text-white transition-colors hover:text-red-500" />
					</button>
				)}
			</header>

			<div className="flex flex-col gap-4 px-6 py-8 md:px-12">
				<div className="grid gap-4 md:grid-cols-2">
					<Label text="First Name" className="font-semibold" fullWidth>
						<Input
							value={traveler.first_name}
							onChange={(e) => {
								onUpdate('first_name', e.target.value)
							}}
							placeholder="Bill"
							required
						/>
					</Label>
					<Label text="Last Name" className="font-semibold" fullWidth>
						<Input
							value={traveler.last_name}
							onChange={(e) => {
								onUpdate('last_name', e.target.value)
							}}
							placeholder="Gates"
							required
						/>
					</Label>
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					<div className="flex flex-col">
						<Label text="Gender" className="font-semibold" />

						<div className="mt-auto flex gap-8 py-2">
							{genderOptions.map((gender) => (
								<Label
									text={gender.label}
									textEnd
									row
									verticalCentered
									key={gender.value}
								>
									<InputRadioCheckbox
										type="radio"
										value={gender.value}
										checked={traveler.gender_id === gender.value}
										onChange={(e) => {
											onUpdate('gender_id', e.target.value)
										}}
										name={`traveler_${traveler.id}_gender`}
										required
									/>
								</Label>
							))}
						</div>
					</div>

					<div>
						<Label text="Birth Date" className="font-semibold" fullWidth>
							<Input
								value={traveler.birth_date}
								onChange={(e) => {
									onUpdate('birth_date', e.target.value)
								}}
								type="date"
								required
							/>
						</Label>
					</div>
				</div>

				<div className="grid gap-4 md:grid-cols-2">
					<Label text="Doc. Type" className="font-semibold" fullWidth>
						<SelectInput
							value={traveler.document_type_id}
							onChange={(e) => {
								onUpdate('document_type_id', e.target.value)
							}}
							options={documentTypeOptions}
							isControlled
							required
						/>
					</Label>

					<Label text="Document Number" className="font-semibold" fullWidth>
						<Input
							value={traveler.document_number}
							onChange={(e) => {
								onUpdate('document_number', e.target.value)
							}}
							placeholder="E00007730"
							required
						/>
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
								name={`traveler_${traveler.id}_allergic`}
								checked={traveler.allergic === 'yes'}
								onChange={(e) => {
									onUpdate('allergic', e.target.value)
								}}
								required
							/>
						</Label>
						<Label text="No" textEnd row verticalCentered>
							<InputRadioCheckbox
								type="radio"
								value="no"
								name={`traveler_${traveler.id}_allergic`}
								checked={traveler.allergic === 'no'}
								onChange={(e) => {
									onUpdate('allergic', e.target.value)
								}}
								required
							/>
						</Label>
					</div>
				</div>
			</div>
		</section>
	)
}
