import { SearchIcon } from '@/components/icons/SearchIcon'
import { cn } from '@/utils/utils'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	fullWidth?: boolean
}

export const SearchInput = ({ fullWidth, ...props }: Props) => {
	return (
		<div
			className={cn(
				'flex items-center rounded-lg border border-gray-200 px-3 shadow-sm',
				'focus-within:border-blue-200 focus-within:ring-2',
				fullWidth ? 'w-full' : 'w-fit'
			)}
		>
			<SearchIcon className="mr-2 h-5 w-5 text-gray-400" />
			<input
				className="w-full border-none bg-transparent px-0 text-gray-700 outline-none placeholder:text-gray-400 focus:ring-transparent"
				type="search"
				{...props}
			/>
		</div>
	)
}
