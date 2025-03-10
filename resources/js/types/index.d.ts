interface User {
  id: number
  name: string
  email: string
  email_verified_at?: string
}

type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User
  }
}

interface ReservationSummaryType {
  pricePerPerson?: number
  tour?: string
  typeService?: string
  travelDate?: string
  alternativeDate?: string
  numberOfTravellers?: number
  total?: number
}

interface BookingInformationForm {
  package: string
  fullName: string
  email: string
  serviceType: string
  country: string
  startDate: Date
  alternativeDate: Date
  Travellers: {
    firstName: string
    lastName: string
    gender: string
    birhtdayDate: Date
    docType: string
    docNumber: string
    foodRestrictions: string
  }[]
  aditionalDescription: string
  temporalName: string
}
