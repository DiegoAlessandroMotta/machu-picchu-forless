import toursData from '@/mocks/tours.json'
import LightGallery from 'lightgallery/react'

import MainLayout from '@/layouts/MainLayout'
import { Head } from '@inertiajs/react'
import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lightgallery.css'

import { BeforeSlideDetail } from 'lightgallery/lg-events'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

const TourImages = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized')
  }

  const onBeforeSlide = (detail: BeforeSlideDetail) => {
    const { index, prevIndex } = detail
    console.log(index, prevIndex)
  }

  return (
    <div>
      <LightGallery
        onInit={onInit}
        onBeforeSlide={onBeforeSlide}
        speed={500}
        download={false}
        plugins={[lgThumbnail, lgZoom]}
      >
        {toursData.map((tour) => {
          return (
            <a href={tour.bgImgUrl} className="contents" key={tour.id}>
              <img alt="image" src={tour.bgImgUrl} />
            </a>
          )
        })}
        {/* extra */}
        <a href="https://pbs.twimg.com/media/GjMRIryaQAAguqJ?format=jpg&name=4096x4096">
          <img
            alt="image"
            src="https://pbs.twimg.com/media/GjMRIryaQAAguqJ?format=jpg&name=4096x4096"
          />
        </a>
      </LightGallery>
    </div>
  )
}

const GalleryTest = () => {
  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        <div>So this is regular page huh?</div>
        <TourImages />
      </MainLayout>
    </>
  )
}

export default GalleryTest
