import { ClockIcon } from '@/components/icons/ClockIcon'
import { HikingIcon } from '@/components/icons/HikingIcon'
import { MountainIcon } from '@/components/icons/MountainIcon'
import { NotebookIcon } from '@/components/icons/NotebookIcon'
import { PropsWithChildren } from 'react'

interface Props {
  duration: number
  typeOfService: string
  maxAltitude: string
  activityLevel: string
  title: string
  price: number
  days: number
  description: string
}

interface PropsTheRevenge {
  label: string
  value: any
}

const InformationCard = ({
  children,
  label,
  value,
}: PropsWithChildren<PropsTheRevenge>) => {
  return (
    <div className="flex items-center gap-3">
      {children}
      <div className="flex flex-col">
        <span className="font-bold">{label}:</span>
        <span className="text-[#838080]">{value}</span>
      </div>
    </div>
  )
}

export const TourInformation = ({
  children,
  typeOfService,
  duration,
  maxAltitude,
  activityLevel,
  title,
  price,
  days,
  description,
}: PropsWithChildren<Props>) => {
  const durationText = duration > 1 ? `${duration} Days` : `${duration} Day`

  return (
    <section className="px-4 md:px-8">
      <div className="mx-auto max-w-layout py-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
          <InformationCard label="Duration" value={durationText}>
            <ClockIcon className="h-8 w-8 flex-shrink-0 text-primary" />
          </InformationCard>

          <InformationCard label="Type Service" value={typeOfService}>
            <NotebookIcon className="h-8 w-8 flex-shrink-0 text-primary" />
          </InformationCard>

          <InformationCard label="Max Altitude" value={maxAltitude}>
            <MountainIcon className="h-8 w-8 flex-shrink-0 text-primary" />
          </InformationCard>

          <InformationCard label="Activity Level" value={activityLevel}>
            <HikingIcon className="h-8 w-8 flex-shrink-0 text-primary" />
          </InformationCard>
        </div>
      </div>
      <div className="h-0.5 w-full bg-[#dee2e6]"></div>

      <div className="mt-12 flex flex-wrap md:flex-nowrap gap-16">
        <article className="flex flex-col gap-2">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p className="text-lg font-semibold">
            From <span className="text-primary">{price}</span> / {days} Days
          </p>
          <p className="mt-2 font-light text-pretty">{description}</p>
        </article>
        {children && <aside>{children}</aside>}
      </div>
    </section>
  )
}
