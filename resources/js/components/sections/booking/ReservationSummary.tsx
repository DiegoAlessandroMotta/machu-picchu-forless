interface PropsShowValue {
  label: string
  value: any
}

const ShowValue = ({ label, value }: PropsShowValue) => {
  return (
    <div className="flex gap-2">
      <span className="font-bold">{label}</span>
      <span>{value}</span>
    </div>
  )
}

export const ReservationSummary = () => {
  return (
    <section className="flex h-fit flex-col gap-4 rounded-lg bg-white shadow-md lg:w-96">
      <div className="flex flex-col px-6 pt-8">
        <header className="mb-4 text-center">
          <p>
            From <span className="text-xl font-bold">$1990.00</span> per person
          </p>
          <h3 className="text-2xl font-bold text-secondary">
            Reservation Summary
          </h3>
        </header>
        <div className="flex flex-col gap-2">
          <ShowValue
            label="Tour:"
            value="Cusco Sacrey valle and Machu
          Picchu 3 days"
          />
          <ShowValue label="Type Service:" value="Group" />
          <ShowValue label="Travel Date:" value="11/12/24" />
          <ShowValue label="Alternative Date:" value="11/20/24" />
          <ShowValue label="Number of Travellers:" value="2" />
        </div>
      </div>

      <div className="flex justify-between border-t border-[#dee2e6] px-6 py-4 font-semibold">
        <span>Total:</span>
        <span>$3980.00 USD</span>
      </div>
    </section>
  )
}
