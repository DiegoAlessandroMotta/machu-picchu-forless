import { PackageInformation } from '@/components/sections/booking/PackageInformation'
import { ReservationSummary } from '@/components/sections/booking/ReservationSummary'
import { TravellersInformation } from '@/components/sections/booking/TravellersInformation'
import { ExtraInformation } from '@/components/sections/tour/ExtraInformation'
import { BookingContext } from '@/context/BookingContext'
import MainLayout from '@/layouts/MainLayout'
import { formatInputDateValue } from '@/utils/format-values'
import { Head } from '@inertiajs/react'
import { useRef, useState } from 'react'

const Booking = () => {
  const [summaryInformation, setSummaryInformation] =
    useState<ReservationSummaryType>({})

  const formRef = useRef<HTMLFormElement>(null)

  const refreshSummary = () => {
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

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (formRef.current === null) {
      return
    }

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())

    console.log(data)
  }

  const [bookingInformation] = useState<BookingInformationForm | undefined>()

  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        <div className="px-4 md:px-8">
          <BookingContext.Provider value={bookingInformation}>
            <div className="mx-auto grid max-w-layout gap-x-8 gap-y-16 py-8 lg:grid-cols-[60fr,_40fr]">
              <form
                className="flex flex-col gap-8"
                ref={formRef}
                onSubmit={handleSubmitForm}
              >
                <PackageInformation refreshSummary={refreshSummary} />
                <TravellersInformation
                  setNumberOfTravellers={setNumberOfTravellers}
                />
                <ExtraInformation />
              </form>
              <ReservationSummary data={summaryInformation} />
            </div>
          </BookingContext.Provider>
        </div>
      </MainLayout>
    </>
  )
}

export default Booking
