import { PackageInformation } from '@/components/sections/booking/PackageInformation'
import { ReservationSummary } from '@/components/sections/booking/ReservationSummary'
import { TravellerInformation } from '@/components/sections/booking/TravellerInformation'
import { ExtraInformation } from '@/components/sections/tour/ExtraInformation'
import MainLayout from '@/layouts/MainLayout'
import { ReservationSummaryType } from '@/types'
import { Head } from '@inertiajs/react'
import { useRef, useState } from 'react'

const validStringDate = (value: string) => {
  return /^(\d{4}[- /.]((0[13578]|1[02])[- /.](0[1-9]|[12][0-9]|3[01])|(0[469]|11)[- /.](0[1-9]|[12][0-9]|30)|02[- /.](0[1-9]|1\d|2[0-8]))|(\d{2}(0[48]|[2468][048]|[13579][26])|([02468][048]|[1359][26])00)[- /.]02[- /.]29)$/g.test(
    value
  )
}

const formatInputDateValue = (dateString: string) => {
  if (!validStringDate(dateString)) {
    return
  }

  const [year, month, day] = dateString.split('-').map((num) => parseInt(num))

  const dateUTC = new Date(Date.UTC(year, month - 1, day + 1))

  const utcDateString = dateUTC.toISOString()

  console.log('utcDateString:', utcDateString)

  const storedDateUTC = new Date(utcDateString)

  console.log('storedDateUTC:', storedDateUTC.toISOString())

  const localDateString = storedDateUTC.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  return localDateString
}

const Booking = () => {
  const [summaryInformation, setSummaryInformation] =
    useState<ReservationSummaryType>({
      pricePerPerson: 0,
      tour: 'Not selected',
      typeService: '',
      travelDate: '',
      alternativeDate: '',
      numberOfTravellers: 1,
      total: 0
    })

  const formRef = useRef<HTMLFormElement>(null)

  const onInputChange = () => {
    if (formRef.current === null) {
      return
    }

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())

    console.log(data)

    const selectedPackage = String(data?.selectedPackage ?? '')
    const startDate = formatInputDateValue(String(data?.startDate)) ?? ''
    const alternativeDate =
      formatInputDateValue(String(data?.alternativeDate)) ?? ''
    const serviceType = String(data?.serviceType ?? '')

    setSummaryInformation((prev) => {
      return {
        ...prev,
        tour: selectedPackage,
        travelDate: startDate,
        alternativeDate: alternativeDate,
        typeService: serviceType
      }
    })
  }

  const setNumberOfTravellers = (travellers: number) => {
    setSummaryInformation((prev) => {
      return {
        ...prev,
        numberOfTravellers: travellers
      }
    })
  }

  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        <div className="px-4 md:px-8">
          <div className="mx-auto grid max-w-layout gap-16 py-8 lg:grid-cols-[60fr,_40fr]">
            <form
              className="flex flex-col gap-8"
              ref={formRef}
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <PackageInformation onInputChange={onInputChange} />
              <TravellerInformation
                setNumberOfTravellers={setNumberOfTravellers}
              />
              <ExtraInformation />
            </form>
            <ReservationSummary data={summaryInformation} />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Booking
