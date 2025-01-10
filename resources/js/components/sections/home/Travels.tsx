import { ExperienceCard } from '@/components/ui/ExperienceCard'

export const Travels = () => {
  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto flex max-w-layout flex-col pt-16">
        <header className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-extrabold">Travel Experiences</h2>
          <div className="h-1 w-24 bg-primary"></div>
          <p>Enjoy the most exuberant and awe-inspiring nature diversity</p>
        </header>
        <div className="mt-12 flex flex-wrap justify-center gap-x-24 gap-y-8">
          <ExperienceCard
            title="Honeymoon Tours"
            description="Culinary enthusiasts will enjoy the rich flavors and diverse gastronomic experiences offered by renowned restaurants in the heart of Peru's stunning landscapes."
            imgUrl="/img/experience1.jpg"
            altImg="test"
          />
          <ExperienceCard
            title="Honeymoon Tours"
            description="Whether you are an active traveler, explorer, nature goer, or a relaxation lover.Peru is the perfect destination for any honeymoon or anniversary."
            imgUrl="/img/experience2.png"
            altImg="test"
          />
        </div>
      </div>
    </section>
  )
}
