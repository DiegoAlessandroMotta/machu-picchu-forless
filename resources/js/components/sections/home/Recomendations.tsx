import { BorderButton } from '@/components/atoms/BorderButton'
import { Link } from '@inertiajs/react'

export const Recomendations = () => {
  return (
    <section className="mt-16 flex h-[520px] items-stretch 2xl:h-[620px]">
      <div className="grid w-full md:grid-cols-2">
        <picture className="flex w-full items-center justify-center overflow-hidden">
          <img
            src="/img/hotel-recomendation.webp"
            alt="Foto destacada del hotel recomendado"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="flex items-center justify-center bg-primary-light px-4 py-7 md:px-8">
          <div className="flex max-w-md flex-col gap-6">
            <header>
              <h3 className="mb-2 text-4xl font-extrabold">Dream Hotels</h3>
              <div className="h-1 w-24 bg-primary"></div>
            </header>

            <p className="text-pretty">
              Your travel advisor will recommend the best hotels for a good
              night's sleep.{' '}
              <span className="font-semibold">
                Comfort and character guaranteed.
              </span>
            </p>
            <div className="mt-auto">
              <Link href="#" className="contents">
                <BorderButton className="border-black text-black hover:bg-black hover:text-white">
                  Read More
                </BorderButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
