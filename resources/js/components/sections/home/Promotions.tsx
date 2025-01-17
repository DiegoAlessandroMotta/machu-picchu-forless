import { BorderButton } from '@/components/atoms/BorderButton'
import { PackageCard } from '@/components/ui/PackageCard'
import { Link } from '@inertiajs/react'

const data = [
  {
    id: 'hear-of-the-inca',
    title: 'HEART OF THE INCA',
    days: 6,
    price: 500,
    description: 'Cusco, Sacred Valley and Machu Picchu',
    bgImgUrl: '/img/heart-of-the-inca.webp'
  },
  {
    id: 'amazon-river-cruise-and-machu-picchu',
    title: 'AMAZON RIVER CRUISE AND MACHU PICCHU',
    days: 9,
    price: 500,
    description: 'Galapagos, Cusco, Sacred Valley and Machu Picchu',
    bgImgUrl: '/img/cruise.webp'
  },
  {
    id: 'discover-machu-picchu',
    title: 'DISCOVER MACHU PICCHU',
    days: 7,
    price: 500,
    description: 'Cusco, Rainbow Mountain, Machu Picchu & 2-day Inca Trail',
    bgImgUrl: '/img/discover-machu-picchu.webp'
  },
  {
    id: 'machu-picchu-galapagos',
    title: 'MACHU PICCHU & GALAPAGOS',
    days: 11,
    price: 500,
    description: 'Galapagos, Cusco, Sacred Valley and Machu Picchu',
    bgImgUrl: '/img/galapagos.webp'
  },
  {
    id: 'rainbow-mountain',
    title: 'RAINBOW MOUNTAIN',
    days: 6,
    price: 500,
    description: 'Cusco, Rainbow Mountain, Machu Picchu & 2-Day Inca Trail',
    bgImgUrl: '/img/rainbow.webp'
  },
  {
    id: 'discover-peru',
    title: 'DISCOVER PERU',
    days: 6,
    price: 500,
    description: 'Cusco, Scared Valley and Machu Picchu',
    bgImgUrl: '/img/discover-peru.webp'
  }
]

function chunks<T>(arr: T[], chunkSize: number) {
  const chunksArray = []

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunksArray.push(arr.slice(i, i + chunkSize))
  }

  return chunksArray
}

export const Promotions = () => {
  const chunkedData = chunks(data, 3)

  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto grid max-w-layout grid-cols-1 gap-4 pt-16 lg:grid-cols-2">
        {chunkedData.map((promotions, index) => {
          const colSpan2Start = index % 2 == 0

          return (
            <div className="grid gap-4 md:grid-cols-2">
              {promotions.map((promotion, index) => {
                const style = 'md:col-span-2'
                const className =
                  (colSpan2Start && index == 0) ||
                  (!colSpan2Start && index == promotions.length - 1)
                    ? style
                    : ''

                return (
                  <Link
                    href={`/tour/${promotion.id}`}
                    className="contents"
                    prefetch
                  >
                    <PackageCard
                      title={promotion.title}
                      days={promotion.days}
                      price={promotion.price}
                      description={promotion.description}
                      bgImgUrl={promotion.bgImgUrl}
                      className={className}
                    />
                  </Link>
                )
              })}
            </div>
          )
        })}
      </div>

      <div className="mt-16 flex justify-center">
        <Link href="#" className="contents">
          <BorderButton className="border-primary text-primary hover:bg-primary hover:text-white">
            Explore all Packages
          </BorderButton>
        </Link>
      </div>
    </section>
  )
}
