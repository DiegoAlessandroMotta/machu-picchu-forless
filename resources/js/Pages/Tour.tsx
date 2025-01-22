import { Banner } from '@/components/sections/tour/Banner'
import { ReservationCard } from '@/components/sections/tour/ReservationCard'
import { TourInformation } from '@/components/sections/tour/TourInformation'
import MainLayout from '@/layouts/MainLayout'
import toursData from '@/mocks/tours.json'
import { Head } from '@inertiajs/react'
import { useEffect, useState } from 'react'

interface PageProps {
  id: string
}

interface TourType {
  id: string
  title: string
  days: number
  price: number
  description: string
  bgImgUrl: string
  duration: number
  typeOfService: string
  maxAltitude: string
  activityLevel: string
}

const Tour = ({ id }: PageProps) => {
  const [tourData, setTourData] = useState<TourType>()

  useEffect(() => {
    const currentTour = toursData.find((tour) => {
      return tour.id === id
    })

    if (currentTour !== undefined) {
      setTourData(currentTour)
    }
  }, [])

  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        {tourData !== undefined && (
          <>
            <Banner
              title={tourData.title}
              bgImgUrl={tourData.bgImgUrl}
              price={tourData.price}
              days={tourData.days}
            />
            <TourInformation
              typeOfService={tourData.typeOfService}
              duration={tourData.duration}
              maxAltitude={tourData.maxAltitude}
              activityLevel={tourData.activityLevel}
              title={tourData.title}
              price={tourData.price}
              days={tourData.days}
              description={tourData.description}
            >
              <ReservationCard packageId={id} />
            </TourInformation>
          </>
        )}

        {tourData === undefined && <p>Tour no encontrado :P</p>}

        {/* <div className="text-center text-lg font-semibold">
          This is the id: <span className="font-bold">{id}</span>
        </div> */}
      </MainLayout>
    </>
  )
}

export default Tour
