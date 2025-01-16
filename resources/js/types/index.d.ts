export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
  auth: {
    user: User;
  };
};

export interface ReservationSummaryType {
  pricePerPerson?: number
  tour?: string
  typeService?: string
  travelDate?: string
  alternativeDate?: string
  numberOfTravellers?: number
  total?: number
}
