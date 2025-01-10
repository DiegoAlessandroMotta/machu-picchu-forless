interface Props {
  title: string
  price: number
  days: number
  description: string
  bgImgUrl: string
  className?: string
}

export const PackageCard = ({
  title,
  price,
  days,
  description,
  bgImgUrl,
  className = '',
}: Props) => {
  return (
    <article
      className={`relative flex h-80 items-stretch overflow-hidden rounded-md shadow-md lg:h-96 ${className}`}
    >
      <div
        className="w-full overflow-x-hidden"
        style={{
          background: `linear-gradient(180deg, #027A7C 0%, rgba(0, 0, 0, 0.00) 80%), url(${bgImgUrl}) lightgray 50% / cover no-repeat`,
        }}
      ></div>

      <div className="ml-[-100%] flex w-full flex-col items-center gap-4 px-3 py-6 text-center text-white">
        <h3 className="text-3xl font-bold">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="bg-primary rounded-full px-4 py-2 font-semibold">
            {days} Days
          </span>
          <span>From ${price}</span>
        </div>
        <p className="text-lg">{description}</p>
      </div>
    </article>
  )
}
