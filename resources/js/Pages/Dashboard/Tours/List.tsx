import AuthenticatedLayout from '@/layouts/DashboardLayout'
import { PageProps } from '@/types'
import { Head } from '@inertiajs/react'

interface Tour {
  id: number
  code: string
  name: string
  price: string
  days: number
  nights: number
  description: string | null
  main_banner: string
  max_altitude: string
  service_type_id: number
  category_id: number
  activity_level_id: number
  service_type: string
  category: string
  activity_level: string
}

interface ToursPageProps extends PageProps {
  tours: Tour[]
}

export default function ListTours({ tours }: ToursPageProps) {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard | Tours" />

      <div className="py-6">
        <div className="mx-auto max-w-screen-2xl space-y-6 sm:px-6 lg:px-8">
          <header className="">
            <h1 className="text-3xl font-semibold">Tours</h1>
          </header>

          <div className="overflow-auto rounded-2xl border border-gray-200 shadow">
            <table className="w-full min-w-[1280px] text-sm text-gray-700">
              <thead className="border-b border-gray-200 bg-gray-50 text-gray-500">
                <tr>
                  <th className="p-4 text-start">
                    <span className="font-semibold">Name</span>
                  </th>
                  <th className="p-4 text-start">
                    <span className="font-semibold">Price</span>
                  </th>
                  <th className="p-4 text-start">
                    <span className="font-semibold">Days</span>
                  </th>
                  <th className="p-4 text-start">
                    <span className="font-semibold">Nights</span>
                  </th>
                  <th className="p-4 text-start">
                    <span className="font-semibold">Description</span>
                  </th>
                  <th className="p-4 text-start">
                    <span className="font-semibold">
                      Max altitude {'(m.a.s.l)'}
                    </span>
                  </th>
                  <th className="p-4 text-start">
                    <span className="font-semibold">Service type</span>
                  </th>
                  <th className="p-4 text-start">
                    <span className="font-semibold">Category</span>
                  </th>
                  <th className="p-4 text-start">
                    <span className="font-semibold">Activity level</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tours &&
                  tours.length > 0 &&
                  tours.map((tour) => (
                    <tr key={tour.id}>
                      <td className="p-4 text-start font-semibold">
                        {tour.name}
                      </td>
                      <td className="p-4 text-start font-medium">
                        ${tour.price}
                      </td>
                      <td className="p-4 text-start font-medium">
                        {tour.days}
                      </td>
                      <td className="p-4 text-start font-medium">
                        {tour.nights}
                      </td>
                      <td className="p-4 text-start font-medium">
                        {tour.description}
                      </td>
                      <td className="p-4 text-start font-medium">
                        {tour.max_altitude} m
                      </td>
                      <td className="p-4 text-start font-medium">
                        {tour.service_type}
                      </td>
                      <td className="p-4 text-start font-medium">
                        {tour.category}
                      </td>
                      <td className="p-4 text-start font-medium">
                        {tour.activity_level}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
