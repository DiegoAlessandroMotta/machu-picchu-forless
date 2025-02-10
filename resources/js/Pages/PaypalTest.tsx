import { PaymentOptions } from '@/components/ui/PaymentOptions'
import MainLayout from '@/layouts/MainLayout'
import { Head } from '@inertiajs/react'

export default function PaypalTest() {
  return (
    <>
      <Head title="Machu Picchu Forless" />
      <MainLayout>
        <div>So this is regular page huh?</div>
        <PaymentOptions />
      </MainLayout>
    </>
  )
}
