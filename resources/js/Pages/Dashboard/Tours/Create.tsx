import { Input } from '@/components/atoms/Input'
import { InputCounter } from '@/components/atoms/InputCounter'
import { InputSelector } from '@/components/atoms/InputSelector'
import { Label } from '@/components/atoms/Label'
import { useCounter } from '@/hooks/useCounter'
import DashboardLayout from '@/layouts/DashboardLayout'
import { PageProps } from '@/types'
import { Head, useForm } from '@inertiajs/react'
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
      code: '',
      name: '',
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

    console.log(data)
    // post(route('dashboard.tours.create'), {
    //   preserveScroll: true,
    //   onSuccess: () => {
    //     console.log('Tour creado exitosamente')

    //     reset()
    //   }
    // })
  }

  const daysCounter = useCounter({ min: 0, max: 30, defaultValue: 1 })

  useEffect(() => {
    setData('days', daysCounter.counter)
  }, [daysCounter.counter])

  const nightsCounter = useCounter({ min: 0, max: 30, defaultValue: 1 })

  useEffect(() => {
    setData('nights', nightsCounter.counter)
  }, [nightsCounter.counter])

  return (
    <DashboardLayout>
      <Head title="Dashboard | Tours" />

      <div className="py-6">
        <div className="mx-auto max-w-screen-2xl space-y-6 sm:px-6 lg:px-8">
          <header className="">
            <h1 className="text-3xl font-medium">Create tour</h1>
          </header>

          <div className="flex flex-col gap-6 overflow-auto rounded-2xl border border-gray-100 p-4 shadow-sm">
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
                      const code = e.target.value
                        .toLocaleLowerCase()
                        .replaceAll(' ', '-')

                      setData('code', code)
                      setData('name', e.target.value)
                    }}
                  />
                </Label>
                <Label
                  text="Url code (automatically generated)"
                  className="text-sm font-semibold"
                  error={errors.code}
                  fullWidth
                >
                  <Input
                    value={data.code}
                    onChange={(e) => setData('code', e.target.value)}
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
                  />
                </Label>
                <Label
                  text="Max altitude *"
                  className="text-sm font-semibold"
                  error={errors.max_altitude}
                  fullWidth
                >
                  <Input
                    value={data.max_altitude}
                    onChange={(e) => setData('max_altitude', e.target.value)}
                  />
                </Label>
              </FormRow>

              <FormRow>
                <div className="grid gap-4 2xl:grid-cols-2">
                  <Label
                    text="Service type"
                    className="text-sm font-semibold"
                    error={errors.service_type_id}
                    fullWidth
                  >
                    <InputSelector
                      options={serviceTypeOptions.map((option) => ({
                        label: option.name,
                        value: option.id
                      }))}
                      defaultOptionText="Select a service type"
                      showDefaultDisabledOption
                    />
                  </Label>
                  <Label
                    text="Category"
                    className="text-sm font-semibold"
                    error={errors.category_id}
                    fullWidth
                  >
                    <InputSelector
                      options={categoryOptions.map((option) => ({
                        label: option.name,
                        value: option.id
                      }))}
                      defaultOptionText="Select a category"
                      showDefaultDisabledOption
                    />
                  </Label>
                </div>
                <div className="grid gap-4 2xl:grid-cols-2">
                  <Label
                    text="Activity level"
                    className="text-sm font-semibold"
                    error={errors.activity_level_id}
                    fullWidth
                  >
                    <InputSelector
                      options={activityLevelOptions.map((option) => ({
                        label: option.name,
                        value: option.id
                      }))}
                      defaultOptionText="Select the activity level"
                      showDefaultDisabledOption
                    />
                  </Label>
                  <div className="flex gap-4">
                    <Label
                      text="Days"
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
                      text="Nights"
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

              <div className="grid grid-cols-2">
                <Label
                  text="Description"
                  className="text-sm font-semibold"
                  error={errors.description}
                  fullWidth
                >
                  <textarea
                    className="field-sizing-content block min-h-16 w-full rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-current outline-none placeholder:text-zinc-400 focus:border-blue-200 focus:ring-2 focus:ring-blue-200"
                    rows={15}
                  ></textarea>
                </Label>

                <div className="flex w-full items-center justify-center">
                  <Label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pb-6 pt-5">
                      <svg
                        className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{' '}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    {/* <FileInput id="dropzone-file" className="hidden" /> */}
                    <input type="file" className="hidden" />
                  </Label>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap justify-end gap-4">
                <button
                  type="reset"
                  className="rounded px-4 py-2 font-medium transition hover:bg-gray-100"
                  onClick={() => {
                    reset()
                    daysCounter.resetCounter()
                    nightsCounter.resetCounter()
                    clearErrors()
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={processing}
                  className="rounded bg-gray-900 px-4 py-2 font-medium text-white transition hover:bg-gray-800"
                >
                  Create tour
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
