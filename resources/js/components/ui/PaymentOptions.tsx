/* eslint-disable no-console */
import {
	PayPalButtons,
	PayPalButtonsComponentProps,
	PayPalScriptProvider
} from '@paypal/react-paypal-js'
import { useCallback, useMemo } from 'react'

export const PaymentOptions = () => {
	const paypalInitialOptions = useMemo(() => {
		const clientId =
			import.meta.env.VITE_PAYPAL_MODE === 'live'
				? import.meta.env.VITE_PAYPAL_LIVE_CLIENT_ID
				: import.meta.env.VITE_PAYPAL_SANDBOX_CLIENT_ID

		const currency = 'USD'

		return {
			clientId,
			currency
		}
	}, [])

	const createOrder = useCallback<
		NonNullable<PayPalButtonsComponentProps['createOrder']>
	>(async () => {
		const orderId = await fetch('/api/paypal/create-order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				cart: [
					{
						sku: 'test-product',
						quantity: 1,
						description: 'producto de prueba'
					}
				]
			})
		})
			.then(async (res) => {
				if (!res.ok) {
					throw new Error('something went wrong')
				}

				return await res.json()
			})
			.then((data) => {
				if (data.id === undefined) {
					throw new Error('Order id not found')
				}

				return data.id
			})
			.catch((e) => {
				console.error('Error durante la solicitud o procesamiento:', e)

				throw e
			})

		return orderId
	}, [])

	const onApprove = useCallback<
		NonNullable<PayPalButtonsComponentProps['onApprove']>
	>(async (data) => {
		console.log('Order approved')

		const response = await fetch('/api/paypal/capture-order', {
			method: 'POST',
			body: JSON.stringify({
				orderID: data.orderID
			})
		})

		const res = await response.json()

		console.log(res)
	}, [])

	return (
		<div className="mx-auto w-fit">
			<PayPalScriptProvider options={paypalInitialOptions}>
				<PayPalButtons
					style={{ height: 40 }}
					createOrder={createOrder}
					onApprove={onApprove}
					onCancel={() => {
						console.log('Order cancelled')
					}}
					onError={() => {
						console.log('An unexpected error has ocurred')
					}}
				/>
			</PayPalScriptProvider>
		</div>
	)
}
