import { PackageInformation } from '@/components/sections/booking/PackageInformation'
import { ReservationSummary } from '@/components/sections/booking/ReservationSummary'
import { TravellerInformation } from '@/components/sections/booking/TravellerInformation'
import { ExtraInformation } from '@/components/sections/tour/ExtraInformation'
import MainLayout from '@/layouts/MainLayout'
import { Head } from '@inertiajs/react'

const Booking = () => {
  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        <div className="px-4 md:px-8">
          <div className="mx-auto grid max-w-layout gap-16 py-8 lg:grid-cols-[60fr,_40fr]">
            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => {
                e.preventDefault()
              }}
            >
              <PackageInformation />
              <TravellerInformation />
              <ExtraInformation />
            </form>
            <ReservationSummary />
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Booking
