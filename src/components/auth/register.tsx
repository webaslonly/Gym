import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/lib/validation'
import Social from './social'
import { Separator } from '../ui/separator'
import { auth } from '@/firebase/index'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useUserState } from '@/stores/user.store'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import FillMode from '@/pages/fill-mode'
import { useAuthState } from '@/stores/auth.store'

function Register() {
	const [isLoading, setIsLoading] = useState(false)
	const { setUser } = useUserState()
	const [error, setEror] = useState('')

	const navigate = useNavigate()

	const { setAuth } = useAuthState()

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onSubmit(values: z.infer<typeof registerSchema>) {
		const { email, password } = values
		setIsLoading(true)

		try {
			const res = createUserWithEmailAndPassword(auth, email, password)
			setUser(res.user)
			navigate('/')
		} catch (error) {
			const resulte = error as Error
			setEror(resulte.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='flex flex-col'>
			{isLoading && <FillMode />}
			<h2 className='text-xl font-bold'>Register</h2>
			<p className='text-muted-foreground'>
				Already have an account?{' '}
				<span
					className='text-blue-500 cursor-pointer hover:underline'
					onClick={() => setAuth('login')}
				>
					Sign in
				</span>
			</p>

			<div className='my-3'>
				<Separator className='my-3' />
				{error && (
					<Alert variant='destructive'>
						<ExclamationTriangleIcon className='h-4 w-4' />
						<AlertTitle>Error</AlertTitle>
						<AlertDescription>{error}</AlertDescription>
					</Alert>
				)}
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder='example@gmail.com' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className='grid grid-cols-2 gap-2'>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder='*****' type='password' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='confirmPassword'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<Input placeholder='*****' type='password' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<Button className='w-full h-12' type='submit'>
						Register
					</Button>
				</form>
				<Social />
			</Form>
		</div>
	)
}

export default Register