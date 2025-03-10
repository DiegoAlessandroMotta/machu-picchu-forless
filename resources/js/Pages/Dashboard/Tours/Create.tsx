import { Input } from '@/components/atoms/Input'
import { InputCounter } from '@/components/atoms/InputCounter'
import {
	InputSelector,
	useInputSelector
} from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon'
import { Button } from '@/dashboard/components/Button'
import { Card } from '@/dashboard/components/card'
import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import { useCounter } from '@/hooks/useCounter'
import DashboardLayout from '@/layouts/DashboardLayout'
import { formatUrlCode } from '@/utils/format-values'
import { Link, useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'

interface Option {
	id: number
	code: string
	name: string
}

interface ToursPageProps extends PageProps {
	serviceTypeOptions: Option[]
	categoryOptions: Option[]
	activityLevelOptions: Option[]
}

const FormRow = React.memo(({ children }: React.PropsWithChildren) => {
	return <div className="grid gap-4 md:grid-cols-2">{children}</div>
})

export default function CreateTour({
	serviceTypeOptions,
	categoryOptions,
	activityLevelOptions
}: ToursPageProps) {
	const { data, setData, post, processing, errors, reset, clearErrors } =
		useForm({
			name: '',
			code: '',
			price: '',
			days: 1,
			nights: 1,
			description: '',
			main_banner: '',
			max_altitude: '',
			service_type_id: '',
			category_id: '',
			activity_level_id: ''
		})

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		post(route('dashboard.tours.create'), {
			preserveScroll: true,
			onSuccess: () => {
				reset()
			},
			onError: () => {
				console.log('Something went wrong')
			}
		})
	}

	const daysCounter = useCounter({ min: 0, max: 30, defaultValue: 1 })

	useEffect(() => {
		setData('days', daysCounter.counter)
	}, [daysCounter.counter])

	const nightsCounter = useCounter({ min: 0, max: 30, defaultValue: 1 })

	useEffect(() => {
		setData('nights', nightsCounter.counter)
	}, [nightsCounter.counter])

	const serviceTypeSelector = useInputSelector({
		options: serviceTypeOptions.map((option) => ({
			label: option.name,
			value: option.id
		}))
	})

	useEffect(() => {
		setData('service_type_id', serviceTypeSelector.selectedValue)
	}, [serviceTypeSelector.selectedValue])

	const categorySelector = useInputSelector({
		options: categoryOptions.map((option) => ({
			label: option.name,
			value: option.id
		}))
	})

	useEffect(() => {
		setData('category_id', categorySelector.selectedValue)
	}, [categorySelector.selectedValue])

	const activityLevelSelector = useInputSelector({
		options: activityLevelOptions.map((option) => ({
			label: option.name,
			value: option.id
		}))
	})

	useEffect(() => {
		setData('activity_level_id', activityLevelSelector.selectedValue)
	}, [activityLevelSelector.selectedValue])

	return (
		<DashboardLayout title="Create Tours">
			<Container>
				<Header title="Create Tour">
					<Link href={route('dashboard.tours.list')} prefetch>
						<Button.Simple
							text="Tours"
							icon={<ArrowLeftIcon className="h-5 w-5" />}
						/>
					</Link>
				</Header>

				<Card className="space-y-6 p-4">
					<h2 className="text-lg font-medium">Basic information</h2>
					<form onSubmit={submitForm} className="flex flex-col gap-4">
						<FormRow>
							<Label
								text="Tour name *"
								className="text-sm font-semibold"
								error={errors.name}
								fullWidth
							>
								<Input
									value={data.name}
									onChange={(e) => {
										setData('name', e.target.value)
										clearErrors('name')
										setData('code', formatUrlCode(e.target.value))
									}}
									required
								/>
							</Label>
							<Label
								text="Url code (automatically generated) *"
								className="text-sm font-semibold"
								error={errors.code}
								fullWidth
							>
								<Input
									value={data.code}
									onChange={(e) => {
										setData(
											'code',
											e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-')
										)
										clearErrors('code')
									}}
									required
								/>
							</Label>
						</FormRow>

						<FormRow>
							<Label
								text="Price *"
								className="text-sm font-semibold"
								error={errors.price}
								fullWidth
							>
								<Input
									value={data.price}
									onChange={(e) => setData('price', e.target.value)}
									required
								/>
							</Label>
							<Label
								text="Max altitude (m.a.s.l) *"
								className="text-sm font-semibold"
								error={errors.max_altitude}
								fullWidth
							>
								<Input
									value={data.max_altitude}
									onChange={(e) => setData('max_altitude', e.target.value)}
									required
								/>
							</Label>
						</FormRow>

						<FormRow>
							<div className="grid gap-4 2xl:grid-cols-2">
								<Label
									text="Service type *"
									className="text-sm font-semibold"
									error={errors.service_type_id}
									fullWidth
								>
									<InputSelector
										selectedValue={serviceTypeSelector.selectedValue}
										sortedOptions={serviceTypeSelector.sortedOptions}
										setSelectedValue={serviceTypeSelector.setSelectedValue}
										defaultOption={serviceTypeSelector.defaultOption}
										showDefaultDisabledOption
										required
									/>
								</Label>
								<Label
									text="Category *"
									className="text-sm font-semibold"
									error={errors.category_id}
									fullWidth
								>
									<InputSelector
										selectedValue={categorySelector.selectedValue}
										sortedOptions={categorySelector.sortedOptions}
										setSelectedValue={categorySelector.setSelectedValue}
										defaultOption={categorySelector.defaultOption}
										showDefaultDisabledOption
										required
									/>
								</Label>
							</div>
							<div className="grid gap-4 2xl:grid-cols-2">
								<Label
									text="Activity level *"
									className="text-sm font-semibold"
									error={errors.activity_level_id}
									fullWidth
								>
									<InputSelector
										selectedValue={activityLevelSelector.selectedValue}
										sortedOptions={activityLevelSelector.sortedOptions}
										setSelectedValue={activityLevelSelector.setSelectedValue}
										defaultOption={activityLevelSelector.defaultOption}
										showDefaultDisabledOption
										required
									/>
								</Label>
								<div className="flex flex-wrap gap-4">
									<Label
										text="Days *"
										className="text-sm font-semibold"
										error={errors.days}
									>
										<InputCounter
											counter={daysCounter.counter}
											decrementCounter={daysCounter.decrementCounter}
											incrementCounter={daysCounter.incrementCounter}
											handleChange={daysCounter.handleChange}
										/>
									</Label>
									<Label
										text="Nights *"
										className="text-sm font-semibold"
										error={errors.nights}
									>
										<InputCounter
											counter={nightsCounter.counter}
											decrementCounter={nightsCounter.decrementCounter}
											incrementCounter={nightsCounter.incrementCounter}
											handleChange={nightsCounter.handleChange}
										/>
									</Label>
								</div>
							</div>
						</FormRow>

						<div>
							<Label
								text="Description"
								className="text-sm font-semibold"
								error={errors.description}
								fullWidth
							>
								<textarea
									value={data.description}
									onChange={(e) => setData('description', e.target.value)}
									className="field-sizing-content block min-h-16 w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
									rows={15}
								></textarea>
							</Label>
						</div>

						<div className="mt-4 flex flex-wrap justify-end gap-4">
							<Button.Simple
								type="reset"
								onClick={() => {
									reset()
									daysCounter.resetCounter()
									nightsCounter.resetCounter()
									clearErrors()
								}}
								text="Cancel"
							/>
							<Button.Base
								type="submit"
								disabled={processing}
								text="Create tour"
							/>
						</div>
					</form>
				</Card>
			</Container>
		</DashboardLayout>
	)
}
