import { Code2, BookOpen } from 'lucide-react'

export default function Header() {
	return (
		<header className='bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'>
			<div className='container mx-auto px-4 py-6'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-3'>
						<Code2 className='h-8 w-8' />
						<div>
							<h1 className='text-2xl font-bold'>
								Frontend Interview Tayyorlanish
							</h1>
							<p className='text-blue-100'>
								Intervyularga tayyorlanish uchun to'liq qo'llanma
							</p>
						</div>
					</div>
					<div className='flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-lg'>
						<BookOpen className='h-5 w-5' />
						<span className='font-medium'>O'zbek tilida</span>
					</div>
				</div>
			</div>
		</header>
	)
}
