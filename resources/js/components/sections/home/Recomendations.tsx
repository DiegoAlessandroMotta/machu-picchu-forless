import { BorderButton } from '@/components/ui/BorderButton'

export const Recomendations = () => {
  return (
    <section className="flex h-[520px] items-stretch 2xl:h-[620px] mt-16">
      <div className='grid md:grid-cols-2 w-full'>
        <picture className="flex w-full items-center justify-center overflow-hidden">
          <img
            src="/img/hotel-recomendation.webp"
            alt="Foto destacada del hotel recomendado"
            loading="lazy"
            className="h-full w-full object-cover object-center"
          />
        </picture>
        <div className="flex items-center justify-center px-4 md:px-8 bg-primary-light py-7">
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
              <BorderButton>Read More</BorderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
