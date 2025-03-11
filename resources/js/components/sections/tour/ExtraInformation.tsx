import { InputRadioCheckbox } from '@/components/atoms/InputRadioCheckbox'
import { Label } from '@/components/atoms/Label'
import { PropsWithChildren } from 'react'

interface PropsInputTextarea
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const InputTextarea = ({ className, ...props }: PropsInputTextarea) => {
	return (
		<textarea
			className={`block rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none focus:border-blue-200 focus:ring-2 focus:ring-blue-200 ${className}`}
			{...props}
		/>
	)
}

interface Props extends PropsWithChildren {
	setAditionalInfo: (data: string) => void
	setHeardAboutUs: (data: string) => void
	setReservationPolicies: (value: boolean) => void
	data: ReservationForm
}

export const ExtraInformation = ({
	setAditionalInfo,
	setHeardAboutUs,
	setReservationPolicies,
	data,
	children
}: Props) => {
	return (
		<section className="flex flex-col gap-4 rounded-lg bg-white px-6 py-8 shadow-md md:px-12">
			<Label text="Aditional Description" className="font-semibold" fullWidth>
				<InputTextarea
					className="h-24 resize-none"
					value={data.additional_info}
					onChange={(e) => {
						setAditionalInfo(e.target.value)
					}}
				/>
			</Label>

			<Label
				text="How did you hear Machu Picchu Forless?"
				className="font-semibold"
				fullWidth
			>
				<InputTextarea
					className="h-24 resize-none"
					value={data.heard_about_us}
					onChange={(e) => {
						setHeardAboutUs(e.target.value)
					}}
				/>
			</Label>

			<div>
				<Label
					text="Terms and conditions"
					className="font-semibold"
					textEnd
					row
					verticalCentered
				>
					<InputRadioCheckbox
						type="checkbox"
						checked={data.reservation_policies}
						onChange={(e) => {
							setReservationPolicies(e.target.checked)
						}}
						required
					/>
				</Label>
				<p className="ml-6 text-neutral-700">
					I accept{' '}
					<a href="#" className="text-blue-500 underline">
						reservation policies
					</a>
				</p>
				<div className="mt-6 flex justify-center">{children}</div>
			</div>
		</section>
	)
}
