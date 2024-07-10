import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import '@/styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/providers/theme-provider'
import AuthProvider from '@/components/providers/auth-provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme='dark'>
					<AuthProvider>
						<App />
					</AuthProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</BrowserRouter>
	</React.StrictMode>
)