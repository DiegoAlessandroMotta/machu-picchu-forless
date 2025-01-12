import { Banner } from '@/components/sections/tour/Banner'
import { ReservationCard } from '@/components/sections/tour/ReservationCard'
import { TourInformation } from '@/components/sections/tour/TourInformation'
import MainLayout from '@/layouts/MainLayout'
import { Head } from '@inertiajs/react'

interface PageProps {
  id: string
}

const tourData = {
  id: 'huh?',
  title: 'Cusco, Sacred Valley and Machu Picchu',
  price: 1249,
  pricePerPerson: 2190,
  days: 6,
  duration: 1,
  typeOfService: 'Private Service',
  maxAltitude: 'Ananiso Canyon Tour',
  activityLevel: 'Moderate',
  description:
    'Embark on a journey through the heart of the Inca Empire. Delight in the exploration of Spanish colonial architecture, ancient ruins, local markets, and winding cobblestone streets. Be greeted by picturesque Andean landscapes, and exhilarate your senses with the tastes and smells of regional cuisine. This unforgettable experience concludes with the wind blowing through your hair at the legendary citadel of Machu Picchu.',
  referencialImgUrl: '/img/heart-of-the-inca.jpg',
}

const Tour = ({ id }: PageProps) => {
  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        <Banner
          title={tourData.title}
          bgImgUrl={tourData.referencialImgUrl}
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

        <div className="text-center text-lg font-semibold">
          This is the id: <span className="font-bold">{id}</span>
        </div>
      </MainLayout>
    </>
  )
}

export default Tour
