import { Input } from '@/components/atoms/Input'
import { InputCounter } from '@/components/atoms/InputCounter'
import { SelectInput } from '@/components/atoms/SelectInput'
import { Label } from '@/components/atoms/Label'
import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon'
import { Button } from '@/dashboard/components/Button'
import { Card } from '@/dashboard/components/card'
import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import { useCounter } from '@/hooks/useCounter'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { CustomHead } from '@/layouts/CustomHead'
import { formatUrlCode } from '@/utils/format-values'
import { Link, useForm } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { FileInput } from 'flowbite-react'
import { CloudArrowUpIcon } from '@/components/icons/CloudArrowUp'

interface Option {
	id: string
	name: string
}

interface ToursPageProps extends PageProps {
	serviceTypes: Option[]
	categories: Option[]
	activityLevels: Option[]
}

const FormRow = React.memo(({ children }: React.PropsWithChildren) => {
	return <div className="grid gap-4 md:grid-cols-2">{children}</div>
})
FormRow.displayName = 'FormRow'

const CreateTour = ({
	serviceTypes,
	categories,
	activityLevels
}: ToursPageProps) => {
	const {
		data,
		setData,
		post,
		processing,
		errors,
		reset,
		clearErrors,
		setError
	} = useForm({
		name: '',
		code: '',
		price: '',
		days: 1,
		nights: 1,
		description: '',
		max_altitude: '',
		service_type_id: '',
		category_id: '',
		activity_level_id: '',
		main_banner: '' as any
	})

	const [imagePreview, setImagePreview] = useState<{
		dimensions: string
		size: string
		url: string
	} | null>(null)

	const resetAll = () => {
		daysCounter.resetCounter()
		nightsCounter.resetCounter()
		clearErrors()
		reset()
	}

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		post(route('dashboard.tours.create'), {
			preserveScroll: true,
			onSuccess: () => {
				resetAll()
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

	const serviceTypeOptions = serviceTypes.map((option) => ({
		label: option.name,
		value: option.id
	}))

	const categoryOptions = categories.map((option) => ({
		label: option.name,
		value: option.id
	}))

	const activityLevelOptions = activityLevels.map((option) => ({
		label: option.name,
		value: option.id
	}))

	const handleFileInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files !== null && event.target.files[0] !== undefined) {
			const file = event.target.files[0]

			if (file.size > 5120 * 1024) {
				setError('main_banner', 'File size should not exceed 5MB.')
				return
			}

			if (['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)) {
				setData('main_banner', file)
				clearErrors('main_banner')
				const previewUrl = URL.createObjectURL(file)

				const img = new Image()
				img.onload = () => {
					setImagePreview({
						dimensions: `${img.width}x${img.height}px`,
						size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
						url: previewUrl
					})
				}

				img.src = previewUrl
			} else {
				setError('main_banner', 'Only PNG, JPG, and JPEG formats are allowed.')
			}
		}
	}

	return (
		<>
			<CustomHead title="Create Tours" />
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
									<SelectInput
										value={data.service_type_id}
										options={serviceTypeOptions}
										onChange={(e) => {
											setData('service_type_id', e.target.value)
										}}
										isControlled
										required
									/>
								</Label>
								<Label
									text="Category *"
									className="text-sm font-semibold"
									error={errors.category_id}
									fullWidth
								>
									<SelectInput
										value={data.category_id}
										options={categoryOptions}
										onChange={(e) => {
											setData('category_id', e.target.value)
										}}
										isControlled
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
									<SelectInput
										value={data.activity_level_id}
										options={activityLevelOptions}
										onChange={(e) => {
											setData('activity_level_id', e.target.value)
										}}
										isControlled
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

						<div>
							<Label
								text="Main Banner"
								className="text-sm font-semibold"
								error={errors.main_banner}
								fullWidth
							>
								<div className="flex h-96 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
									{imagePreview !== null ? (
										<div className="relative isolate h-full w-full">
											<img
												src={imagePreview.url}
												alt="Preview"
												className="h-full w-full object-cover"
											/>
											<div className="pointer-events-none absolute right-2 top-2 z-10 select-none rounded-lg bg-white/70 px-4 py-2 text-sm text-gray-700">
												Click to change the banner
											</div>
											{imagePreview && (
												<div className="pointer-events-none absolute bottom-2 left-2 z-10 select-none rounded-lg bg-white/70 px-4 py-2 text-sm text-gray-700">
													Dimensions: {imagePreview.dimensions} | Size:{' '}
													{imagePreview.size}
												</div>
											)}
										</div>
									) : (
										<div className="flex flex-col items-center justify-center p-6">
											<CloudArrowUpIcon className="h-12 w-12 text-gray-500" />
											<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
												<span className="font-semibold">Click to upload</span>
												<span className="hidden">or drag and drop</span>
											</p>
											<p className="text-xs text-gray-500 dark:text-gray-400">
												{'PNG, JPG or JPEG (MAX. 2560x1440px and 5MB)'}
											</p>
										</div>
									)}
									<FileInput
										onChange={handleFileInputChange}
										className="hidden"
										accept="image/png, image/jpg, image/jpeg"
									/>
								</div>
							</Label>
						</div>

						<div className="mt-4 flex flex-wrap justify-end gap-4">
							<Button.Simple
								type="reset"
								onClick={() => {
									resetAll()
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
		</>
	)
}

const layout: LayoutType = (page) => <DashboardLayout children={page} />
CreateTour.layout = layout

export default CreateTour
