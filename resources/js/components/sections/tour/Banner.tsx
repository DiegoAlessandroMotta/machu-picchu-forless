import { PlayCircleIcon } from '@/components/icons/PlayCircleIcon'

interface Props {
  title: string
  bgImgUrl: string
  price: number
  days: number
}

export const Banner = ({ title, bgImgUrl, price, days }: Props) => {
  return (
    <section className="relative flex h-[520px] items-stretch 2xl:h-[620px]">
      <div className="w-full overflow-x-hidden">
        <div
          className="h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${bgImgUrl}")` }}
        ></div>
      </div>
      <div className="ml-[-100%] w-full bg-[#00000020]"></div>

      <div className="ml-[-100%] flex w-full items-center justify-center text-white">
        <div className="mt-auto w-full px-4 md:px-8">
          <div className="mx-auto flex max-w-layout items-end justify-between py-10">
            <div className="mr-auto flex max-w-[520px] flex-col flex-wrap gap-4 py-4">
              <h2 className="text-balance text-5xl font-bold">{title}</h2>

              <p className="text-sm">
                From <span className="text-xl font-bold">${price}</span> usd |{' '}
                <span className="text-xl font-bold">{days} Days</span>
              </p>
            </div>
            <div>
              <a
                href="https://www.youtube.com/@holoen_ceciliaimmergreen"
                rel="noreferrer"
                target="_blank"
              >
                <button className="flex items-center gap-4 py-2">
                  <PlayCircleIcon className="h-12 w-12 flex-shrink-0 text-primary" />
                  <p className="text-2xl font-bold">Watch our Vtuber!</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
