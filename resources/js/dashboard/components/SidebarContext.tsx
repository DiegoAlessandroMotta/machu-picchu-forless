import {
	createContext,
	useContext,
	useState,
	PropsWithChildren,
	Dispatch,
	SetStateAction
} from 'react'

interface SidebarContextProps {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
	toggleOpen: () => void
}

const SidebarContext = createContext<SidebarContextProps>({
	open: false,
	setOpen: () => {},
	toggleOpen: () => {}
})

export const SidebarProvider = ({ children }: PropsWithChildren) => {
	const [open, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen((prev) => !prev)
	}

	return (
		<SidebarContext.Provider value={{ open, setOpen, toggleOpen }}>
			{children}
		</SidebarContext.Provider>
	)
}

export const useSidebar = () => {
	const context = useContext(SidebarContext)
	if (!context) {
		throw new Error('useSidebar must be used within a SidebarProvider')
	}
	return context
}

export const SidebarTrigger = ({ children }: PropsWithChildren) => {
	const { open, setOpen, toggleOpen } = useContext(SidebarContext)

	return (
		<>
			<div onClick={toggleOpen}>{children}</div>

			{open && (
				<div
					className="fixed inset-0 z-40 bg-black/50"
					onClick={() => setOpen(false)}
				></div>
			)}
		</>
	)
}
