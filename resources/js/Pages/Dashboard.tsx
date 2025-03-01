import AuthenticatedLayout from '@/layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { Button, Checkbox } from '@mui/material'

export default function Dashboard() {
  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />

      <div className="py-6">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <header className="">
            <h1 className="text-3xl font-semibold">Overview</h1>
          </header>
          <div>
            <Button variant="contained">This is a button</Button>
          </div>
        </div>
      </div>
      <Checkbox defaultChecked />
    </AuthenticatedLayout>
  )
}
