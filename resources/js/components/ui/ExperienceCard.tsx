import { Link } from '@inertiajs/react'
import { BorderButton } from '../atoms/BorderButton'

interface Props {
  title: string
  description: string
  imgUrl: string
  altImg: string
  href: string
}

export const ExperienceCard = ({
  title,
  description,
  imgUrl,
  altImg,
  href,
}: Props) => {
  return (
    <article className="flex w-full max-w-sm flex-col overflow-hidden rounded-lg shadow-xl xl:max-w-md">
      <picture className="flex aspect-square w-full items-center justify-center overflow-hidden">
        <img
          src={imgUrl}
          alt={altImg}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div className="flex flex-grow flex-col gap-4 px-6 py-8">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p>{description}</p>
        <div className="mt-auto">
          <Link href={href}>
            <BorderButton className="border-black text-black hover:bg-black hover:text-white">
              Read More
            </BorderButton>
          </Link>
        </div>
      </div>
    </article>
  )
}
