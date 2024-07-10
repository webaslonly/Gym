import { navLinks } from '@/constants'
// import UserBox from './user-box'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { ModeToggle } from './mode-toggle'
import { useUserState } from '@/stores/user.store'
import UserBox from './user-box'

function Navbar() {

	const { user } = useUserState()
	return (
		<div className='flex items-center fixed inset-0 w-full h-20 justify-between px-24  bg-background'>
			<div className='container max-w-6xl mx-auto h-full flex justify-between items-center'>
				<Link to={'/'}>
					<span className='text-2xl font-bold '>WORKOUT</span>
				</Link>
			</div>

			<div className='flex gap-4 items-center'>
				{navLinks.map(item => (
					<div key={item.label}>
						<h3 className='text-lg font-medium'>{item.label}</h3>
					</div>
				))}
				
				<ModeToggle />

				{user ? (
						<UserBox />
					) : (
						<Link to={'/auth'}>
							<Button variant={'secondary'}>Join Free</Button>
						</Link>
					)}
			</div>
		</div>
	)
}

export default Navbar