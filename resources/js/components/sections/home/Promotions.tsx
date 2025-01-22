import { BorderButton } from '@/components/atoms/BorderButton'
import { PackageCard } from '@/components/ui/PackageCard'
import toursData from '@/mocks/tours.json'
import { Link } from '@inertiajs/react'

function chunks<T>(arr: T[], chunkSize: number) {
  const chunksArray = []

  for (let i = 0; i < arr.length; i += chunkSize) {
    chunksArray.push(arr.slice(i, i + chunkSize))
  }

  return chunksArray
}

export const Promotions = () => {
  const chunkedData = chunks(toursData, 3)

  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto grid max-w-layout grid-cols-1 gap-4 pt-16 lg:grid-cols-2">
        {chunkedData.map((promotions, index) => {
          const colSpan2Start = index % 2 == 0

          return (
            <div className="grid gap-4 md:grid-cols-2" key={promotions[0].id}>
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
                    key={promotion.id}
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
