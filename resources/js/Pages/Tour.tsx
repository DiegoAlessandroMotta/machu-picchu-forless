import { Banner } from '@/components/sections/tour/Banner'
import { ReservationCard } from '@/components/sections/tour/ReservationCard'
import { TourInformation } from '@/components/sections/tour/TourInformation'
import MainLayout from '@/layouts/MainLayout'
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

const data = [
  {
    id: 'hear-of-the-inca',
    title: 'HEART OF THE INCA',
    days: 6,
    price: 500,
    description: 'Cusco, Sacred Valley and Machu Picchu',
    bgImgUrl: '/img/heart-of-the-inca.webp',
    duration: 1,
    typeOfService: 'Private Service',
    maxAltitude: 'Ananiso Canyon Tour',
    activityLevel: 'Moderate'
  },
  {
    id: 'amazon-river-cruise-and-machu-picchu',
    title: 'AMAZON RIVER CRUISE AND MACHU PICCHU',
    days: 9,
    price: 500,
    description: 'Galapagos, Cusco, Sacred Valley and Machu Picchu',
    bgImgUrl: '/img/cruise.webp',
    duration: 1,
    typeOfService: 'Private Service',
    maxAltitude: 'Ananiso Canyon Tour',
    activityLevel: 'Moderate'
  },
  {
    id: 'discover-machu-picchu',
    title: 'DISCOVER MACHU PICCHU',
    days: 7,
    price: 500,
    description: 'Cusco, Rainbow Mountain, Machu Picchu & 2-day Inca Trail',
    bgImgUrl: '/img/discover-machu-picchu.webp',
    duration: 1,
    typeOfService: 'Private Service',
    maxAltitude: 'Ananiso Canyon Tour',
    activityLevel: 'Moderate'
  },
  {
    id: 'machu-picchu-galapagos',
    title: 'MACHU PICCHU & GALAPAGOS',
    days: 11,
    price: 500,
    description: 'Galapagos, Cusco, Sacred Valley and Machu Picchu',
    bgImgUrl: '/img/galapagos.webp',
    duration: 1,
    typeOfService: 'Private Service',
    maxAltitude: 'Ananiso Canyon Tour',
    activityLevel: 'Moderate'
  },
  {
    id: 'rainbow-mountain',
    title: 'RAINBOW MOUNTAIN',
    days: 6,
    price: 500,
    description: 'Cusco, Rainbow Mountain, Machu Picchu & 2-Day Inca Trail',
    bgImgUrl: '/img/rainbow.webp',
    duration: 1,
    typeOfService: 'Private Service',
    maxAltitude: 'Ananiso Canyon Tour',
    activityLevel: 'Moderate'
  },
  {
    id: 'discover-peru',
    title: 'DISCOVER PERU',
    days: 6,
    price: 500,
    description: 'Cusco, Scared Valley and Machu Picchu',
    bgImgUrl: '/img/discover-peru.webp',
    duration: 1,
    typeOfService: 'Private Service',
    maxAltitude: 'Ananiso Canyon Tour',
    activityLevel: 'Moderate'
  }
]

const Tour = ({ id }: PageProps) => {
  const [tourData, setTourData] = useState<TourType>()

  useEffect(() => {
    const currentTour = data.find((tour) => {
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
              <ReservationCard />
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
