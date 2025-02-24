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
