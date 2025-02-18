import 'lightgallery/css/lg-thumbnail.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lightgallery.css'
import { BeforeSlideDetail } from 'lightgallery/lg-events'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import LightGallery from 'lightgallery/react'

interface Props {
  className?: string
  elements: {
    id: string
    thumbnail: string
    fullImage: string
    description: string
  }[]
}

export const Gallery = ({ className, elements }: Props) => {
  const onInit = () => {
    console.log('lightGallery has been initialized')
  }

  const onBeforeSlide = (detail: BeforeSlideDetail) => {
    const { index, prevIndex } = detail
    console.log(index, prevIndex)
  }

  return (
    <LightGallery
      onInit={onInit}
      onBeforeSlide={onBeforeSlide}
      speed={500}
      download={false}
      plugins={[lgThumbnail, lgZoom]}
      selector='[data-image-selector="gallery-item"]'
    >
      <div className={className}>
        {elements.map((item) => {
          return (
            <a
              href={item.fullImage}
              key={item.id}
              className="relative block h-64 w-96 overflow-hidden"
              data-image-selector="gallery-item"
            >
              <img
                alt={item.description}
                src={item.thumbnail}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </a>
          )
        })}
      </div>
    </LightGallery>
  )
}
