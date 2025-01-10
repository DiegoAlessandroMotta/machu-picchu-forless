import { Button } from '@headlessui/react'

export const Hero = () => {
  const bgImgUrl = '/img/hero-bg.jpg'

  return (
    <section className="relative flex h-[520px] items-stretch 2xl:h-[620px]">
      <div className="w-full overflow-x-hidden">
        <div
          className="h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${bgImgUrl}")` }}
        ></div>
      </div>
      <div className="ml-[-100%] w-full bg-[#1a1a1a70]"></div>

      <div className="ml-[-100%] flex w-full items-center justify-center text-white">
        <div className="w-full px-4 md:px-8">
          <div className="mx-auto max-w-layout">
            <div className="mr-auto flex max-w-[520px] flex-col md:ml-32">
              <h2 className="text-balance text-5xl font-bold">
                Let us desing your trip of a lifetime
              </h2>

              <p className="mt-5 text-pretty">
                Descripción sobre lo que se dedica tu empresa y cómo ofreces
                resultados a tus clientes.
              </p>

              <Button className="mt-16 w-fit bg-primary px-4 py-2">
                More information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
