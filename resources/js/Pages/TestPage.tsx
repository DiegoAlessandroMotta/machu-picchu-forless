import { useForm } from '@inertiajs/react'
import { Input } from '@/components/atoms/Input'
import { Label } from '@/components/atoms/Label'
import MainLayout from '@/layouts/MainLayout'
import { Button } from '@/dashboard/components/Button'

interface Person {
	name: string
	age: string
}

const TestPage = () => {
	const { data, setData, post, processing, errors, reset, clearErrors } =
		useForm({
			username: '',
			people: [{ name: '', age: '' }] as Person[]
		})

	const handleAddPerson = () => {
		setData('people', [...data.people, { name: '', age: '' }])
	}

	const handleRemovePerson = (index: number) => {
		const newPeople = data.people.filter((_, i) => i !== index)
		setData('people', newPeople)
	}

	const handleChange = (index: number, field: string, value: string) => {
		const newPeople = data.people.map((person, i) =>
			i === index ? { ...person, [field]: value } : person
		)
		setData('people', newPeople)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// eslint-disable-next-line no-console
		console.log(data)

		post('test-page', {
			onSuccess: () => {
				// eslint-disable-next-line no-console
				console.log('Valid input???')
			},
			onError: () => {
				// eslint-disable-next-line no-console
				console.log(errors)
			}
		})
	}

	return (
		<MainLayout title="Test page">
			<div className="flex justify-center">
				<form
					className="flex w-fit flex-col space-y-4 rounded-xl bg-white p-4 shadow"
					onSubmit={handleSubmit}
				>
					<h2 className="text-lg font-medium text-gray-800">
						Basic information
					</h2>
					<Label
						text="Username"
						className="text-sm font-medium"
						fullWidth
						error={errors.username}
					>
						<Input
							value={data.username}
							onChange={(e) => {
								setData('username', e.target.value)
								clearErrors('username')
							}}
							placeholder="Username"
						/>
					</Label>

					<div className="space-y-2">
						<h3 className="text-sm font-medium text-gray-700">People</h3>
						{data.people.map((person, index) => (
							<div key={index} className="flex space-x-2">
								{index}
								<Label error={(errors as any)[`people.${index}.name`]}>
									<Input
										placeholder="Name"
										value={person.name}
										onChange={(e) => {
											handleChange(index, 'name', e.target.value)
											clearErrors(`people.${index}.name` as any)
										}}
									/>
								</Label>
								<Label error={(errors as any)[`people.${index}.age`]}>
									<Input
										placeholder="Age"
										value={person.age}
										onChange={(e) => {
											handleChange(index, 'age', e.target.value)
											clearErrors(`people.${index}.age` as any)
										}}
									/>
								</Label>
								<div>
									<Button.Simple
										text="Remove"
										type="button"
										onClick={() => handleRemovePerson(index)}
									/>
								</div>
							</div>
						))}
						<Button.Simple
							text="Add person"
							type="button"
							onClick={handleAddPerson}
						/>
					</div>
					<div className="flex w-full justify-end gap-2">
						<Button.Simple
							text={'Clear'}
							type="reset"
							disabled={processing}
							onClick={() => {
								reset()
							}}
						/>
						<Button.Base
							text={processing ? 'Submitting...' : 'Submit'}
							type="submit"
							disabled={processing}
						/>
					</div>
				</form>
			</div>
		</MainLayout>
	)
}

export default TestPage
