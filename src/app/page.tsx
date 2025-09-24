import Card from '@/components/Card'

export default function Home() {
	return (
		<div className='max-w-4xl'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold text-gray-900 mb-4'>
					Frontend Interview Documentation
				</h1>
				<p className='text-lg text-gray-600'>
					Frontend intervyulariga tayyorlanish uchun to'liq qo'llanma. HTML,
					CSS, JavaScript va React bo'yicha batafsil ma'lumotlar.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<Card title='HTML'>
					<p className='text-gray-700 mb-4'>
						HTML (HyperText Markup Language) - veb-sahifalar tuzish uchun asosiy
						til. Semantik HTML, formlar, SEO optimizatsiyasi va boshqa muhim
						tushunchalar.
					</p>
					<a href='/docs/html' className='text-blue-600 hover:underline'>
						HTML dokumentatsiyasini ko'rish →
					</a>
				</Card>

				<Card title='CSS'>
					<p className='text-gray-700 mb-4'>
						CSS (Cascading Style Sheets) - veb-sahifalarning vizual ko'rinishini
						boshqarish. Flexbox, Grid, animatsiyalar va responsive design.
					</p>
					<a href='/docs/css' className='text-blue-600 hover:underline'>
						CSS dokumentatsiyasini ko'rish →
					</a>
				</Card>

				<Card title='JavaScript'>
					<p className='text-gray-700 mb-4'>
						JavaScript - interaktiv veb-sahifalar yaratish uchun dasturlash
						tili. DOM manipulyatsiyasi, eventlar, ES6+ xususiyatlari.
					</p>
					<a href='/docs/javascript' className='text-blue-600 hover:underline'>
						JavaScript dokumentatsiyasini ko'rish →
					</a>
				</Card>

				<Card title='React'>
					<p className='text-gray-700 mb-4'>
						React - foydalanuvchi interfeyslari yaratish uchun kutubxona.
						Komponentlar, hook'lar, state boshqaruvi va lifecycle.
					</p>
					<a href='/docs/react' className='text-blue-600 hover:underline'>
						React dokumentatsiyasini ko'rish →
					</a>
				</Card>
			</div>
		</div>
	)
}
