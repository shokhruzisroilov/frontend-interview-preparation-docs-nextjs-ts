import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import TopicCard from '@/components/TopicCard'
import { topics } from '@/lib/data'

export default function Home() {
	return (
		<div>
			<Header />
			<Navigation />

			<main className='container mx-auto px-4 py-8'>
				{/* Kirish qismi */}
				<section className='text-center mb-12'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Frontend Intervyulariga Tayyorlaning
					</h1>
					<p className='text-xl text-gray-600 max-w-3xl mx-auto'>
						Bizning qo'llanma orqali frontend intervyularida so'raladigan barcha
						mavzularni o'rganing. Har bir mavzu uchun tushuntirishlar, misollar
						va amaliy topshiriqlar.
					</p>
				</section>

				{/* Mavzular ro'yxati */}
				<section className='mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-6'>
						Mavzular Bo'yicha Qo'llanma
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						{topics.map(topic => (
							<TopicCard key={topic.id} topic={topic} />
						))}
					</div>
				</section>

				{/* Tayyorlanish bo'yicha maslahatlar */}
				<section className='bg-white rounded-xl shadow-md p-6 mb-8'>
					<h2 className='text-2xl font-bold text-gray-900 mb-4'>
						Tayyorlanish Maslahatlari
					</h2>
					<div className='grid md:grid-cols-2 gap-6'>
						<div>
							<h3 className='text-lg font-semibold text-gray-800 mb-2'>
								✅ Qanday Tayyorlanish Kerak?
							</h3>
							<ul className='space-y-2 text-gray-600'>
								<li>• Har kuni kamida 1-2 soat mashq qiling</li>
								<li>• Nazariyani amaliyot bilan birlashtiring</li>
								<li>• Intervyu savollarini o'qib chiqing</li>
								<li>• Kod yozish mashqlarini bajarining</li>
							</ul>
						</div>
						<div>
							<h3 className='text-lg font-semibold text-gray-800 mb-2'>
								🎯 Intervyuda E'tibor Qaratish Kerak
							</h3>
							<ul className='space-y-2 text-gray-600'>
								<li>• Savollarni diqqat bilan tinglang</li>
								<li>• Kod yozishda clean code prinsiplariga amal qiling</li>
								<li>• O'z yechimlaringizni tushuntira oling</li>
								<li>• Savol bersangiz, intervyerlarga qiziqish bildiring</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Statistika */}
				<section className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8'>
					<h2 className='text-2xl font-bold mb-6 text-center'>
						Nimalarni O'rganasiz?
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-center'>
						<div>
							<div className='text-3xl font-bold'>50+</div>
							<div className='text-blue-100'>Mavzu</div>
						</div>
						<div>
							<div className='text-3xl font-bold'>100+</div>
							<div className='text-blue-100'>Kod Misoli</div>
						</div>
						<div>
							<div className='text-3xl font-bold'>200+</div>
							<div className='text-blue-100'>Savol</div>
						</div>
						<div>
							<div className='text-3xl font-bold'>∞</div>
							<div className='text-blue-100'>Amaliyot</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}
