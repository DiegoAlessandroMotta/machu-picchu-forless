import React from 'react'
import { Button } from '@/dashboard/components/Button'

interface ConfirmDeleteModalProps {
	isOpen: boolean
	onConfirm: () => void
	onCancel: () => void
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
	isOpen,
	onConfirm,
	onCancel
}) => {
	if (!isOpen) return null

	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center">
				<div
					onClick={onCancel}
					className="fixed z-40 h-full w-full bg-black bg-opacity-50"
				></div>
				<div className="z-50 rounded-lg bg-white p-6">
					<h2 className="mb-4 text-lg font-bold">Confirm Delete</h2>
					<p>Are you sure you want to delete this tour?</p>
					<div className="mt-4 flex justify-end gap-2">
						<Button.Simple text="Cancel" onClick={onCancel} />
						<Button.Danger text="Delete" onClick={onConfirm} />
					</div>
				</div>
			</div>
		</>
	)
}

export default ConfirmDeleteModal
