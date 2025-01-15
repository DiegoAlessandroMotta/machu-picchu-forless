import { BorderButton } from '@/components/ui/BorderButton'
import { PackageCard } from '@/components/ui/PackageCard'

export const Promotions = () => {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto grid max-w-layout grid-cols-1 gap-4 pt-16 lg:grid-cols-2">
        <div className="grid gap-4 md:grid-cols-2">
          <PackageCard
            title="HEART OF THE INCA"
            days={6}
            price={500}
            description="Cusco, Sacred Valley and Machu Picchu"
            bgImgUrl="/img/heart-of-the-inca.webp"
            className="md:col-span-2"
          />
          <PackageCard
            title="AMAZON RIVER CRUISE AND MACHU PICCHU"
            days={9}
            price={500}
            description="Galapagos, Cusco, Sacred Valley and Machu Picchu"
            bgImgUrl="/img/cruise.webp"
          />
          <PackageCard
            title="DISCOVER MACHU PICCHU"
            days={7}
            price={500}
            description="Cusco, Rainbow Mountain, Machu Picchu & 2-day Inca Trail"
            bgImgUrl="/img/discover-machu-picchu.webp"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <PackageCard
            title="MACHU PICCHU & GALAPAGOS"
            days={11}
            price={500}
            description="Galapagos, Cusco, Sacred Valley and Machu Picchu"
            bgImgUrl="/img/galapagos.webp"
          />
          <PackageCard
            title="RAINBOW MOUNTAIN"
            days={6}
            price={500}
            description="Cusco, Rainbow Mountain, Machu Picchu & 2-Day Inca Trail"
            bgImgUrl="/img/rainbow.webp"
          />
          <PackageCard
            title="DISCOVER PERU"
            days={6}
            price={500}
            description="Cusco, Scared Valley and Machu Picchu"
            bgImgUrl="/img/discover-peru.webp"
            className="md:col-span-2"
          />
        </div>
      </div>
      <div className='flex justify-center mt-16'>
        <BorderButton color='var(--primary-color)'>
          Explore all Packages
        </BorderButton>
      </div>
    </section>
  )
}
