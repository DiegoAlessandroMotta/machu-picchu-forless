import { BorderButton } from './BorderButton'

interface Props {
  title: string
  description: string
  imgUrl: string
  altImg: string
}

export const ExperienceCard = ({
  title,
  description,
  imgUrl,
  altImg,
}: Props) => {
  return (
    <article className="max-w-sm xl:max-w-md w-full overflow-hidden rounded-lg shadow-xl flex flex-col">
      <picture className="flex aspect-square w-full items-center justify-center overflow-hidden">
        <img
          src={imgUrl}
          alt={altImg}
          loading="lazy"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div className="flex flex-col px-6 py-8 gap-4 flex-grow">
        <h3 className='mb-2 text-2xl font-bold'>{title}</h3>
        <p>{description}</p>
        <div className="mt-auto">
          <BorderButton>Read More</BorderButton>
        </div>
      </div>
    </article>
  )
}
