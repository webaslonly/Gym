import { useState } from 'react'
import { FaSun } from 'react-icons/fa'
import { MdDarkMode } from 'react-icons/md'

function ThemeMode() {
	const [mode, setMode] = useState(false)

	return (
		<div className='text-lg font-medium text-white'>
			{mode ? (
				<MdDarkMode className='text-[30px]' />
			) : (
				<FaSun className='text-[30px]' />
			)}
		</div>
	)
}

export default ThemeMode