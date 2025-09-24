import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Frontend Interview Tayyorlanish - TypeScript',
	description: 'Frontend intervyulariga tayyorlanish uchun to‘liq qo‘llanma',
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='uz'>
			<body className={inter.className}>
				<div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'>
					{children}
				</div>
			</body>
		</html>
	)
}
