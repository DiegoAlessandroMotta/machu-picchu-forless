import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon'
import { Button } from '@/dashboard/components/Button'
import { Card } from '@/dashboard/components/card'
import { Container } from '@/dashboard/components/Container'
import { Header } from '@/dashboard/components/Header'
import { DashboardLayout } from '@/layouts/DashboardLayout'
import { CustomHead } from '@/layouts/CustomHead'
import { Link, useForm } from '@inertiajs/react'
import { useState, memo } from 'react'
import { Label } from '@/components/atoms/Label'
import { Input } from '@/components/atoms/Input'
import { formatUrlCode } from '@/utils/format-values'
import { CloudArrowUpIcon } from '@/components/icons/CloudArrowUp'
import { FileInput } from 'flowbite-react'

const FormRow = memo(({ children }: React.PropsWithChildren) => {
	return <div className="grid gap-4 md:grid-cols-2">{children}</div>
})
FormRow.displayName = 'FormRow'

const CreateCategory = () => {
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
		description: '',
		main_banner: null as File | null
	})

	const [imagePreview, setImagePreview] = useState<{
		dimensions: string
		size: string
		url: string
	} | null>(null)

	const resetAll = () => {
		setImagePreview(null)
		clearErrors()
		reset()
	}

	const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		post(route('dashboard.categories.create'), {
			preserveScroll: true,
			onSuccess: () => {
				resetAll()
			}
		})
	}

	const handleFileInputChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		requestIdleCallback(() => {
			if (event.target.files === null || event.target.files[0] === undefined) {
				return
			}

			const [file] = event.target.files

			if (file.size > 5120 * 1024) {
				setError('main_banner', 'File size should not exceed 5MB.')
				return
			}

			if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.type)) {
				setError('main_banner', 'Only PNG, JPG, and JPEG formats are allowed.')
				return
			}

			setData('main_banner', file)
			clearErrors('main_banner')

			const reader = new FileReader()

			reader.onload = (e) => {
				const img = new Image()

				img.onload = () => {
					setImagePreview({
						dimensions: `${img.width}x${img.height}px`,
						size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
						url: e.target?.result as string
					})
				}

				img.src = e.target?.result as string
			}

			reader.readAsDataURL(file)
		})
	}

	return (
		<>
			<CustomHead title="Create Category" noIndex />
			<Container>
				<Header title="Create Category">
					<Link href={route('dashboard.categories.list')} prefetch>
						<Button.Simple
							text="Categories"
							icon={<ArrowLeftIcon className="h-5 w-5" />}
						/>
					</Link>
				</Header>

				<Card className="space-y-6 p-4">
					<h2 className="text-lg font-medium">Basic information</h2>
					<form onSubmit={submitForm} className="flex flex-col gap-4">
						<FormRow>
							<Label
								text="Category name *"
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
								text="Slug (automatically generated) *"
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
								text="Create Category"
							/>
						</div>
					</form>
				</Card>
			</Container>
		</>
	)
}

const layout: LayoutType = (page) => <DashboardLayout children={page} />
CreateCategory.layout = layout

export default CreateCategory
