import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import CodeBlock from '@/components/CodeBlock'
import { topicDetails } from '@/lib/data'

export default function JavascriptPage() {
	const javascriptTopic = topicDetails['javascript']

	if (!javascriptTopic) {
		return <div>Mavzu topilmadi</div>
	}

	return (
		<div>
			<Header />
			<Navigation />

			<main className='container mx-auto px-4 py-8'>
				<div className='max-w-4xl mx-auto'>
					<h1 className='text-4xl font-bold text-gray-900 mb-2'>JavaScript</h1>
					<p className='text-xl text-gray-600 mb-8'>
						{javascriptTopic.description}
					</p>

					<div className='space-y-8'>
						{javascriptTopic.sections.map((section, index) => (
							<section
								key={index}
								className='bg-white rounded-xl shadow-md p-6'
							>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									{section.title}
								</h2>
								<p className='text-gray-700 mb-4'>{section.content}</p>

								{section.codeExamples.map((example, exampleIndex) => (
									<div key={exampleIndex}>
										<h3 className='text-lg font-semibold text-gray-800 mb-2'>
											{example.title}
										</h3>
										<CodeBlock
											code={example.content}
											language={example.language}
										/>

										{example.exercise && (
											<div className='mt-4 p-4 bg-blue-50 rounded-lg'>
												<h4 className='font-semibold text-blue-900 mb-2'>
													✏️ Mashq uchun savol:
												</h4>
												<p className='text-blue-800'>{example.exercise}</p>
											</div>
										)}
									</div>
								))}
							</section>
						))}
					</div>

					{/* Qo'shimcha mashqlar */}
					<section className='bg-white rounded-xl shadow-md p-6 mt-8'>
						<h2 className='text-2xl font-bold text-gray-900 mb-4'>
							Amaliy Mashqlar
						</h2>

						<div className='space-y-4'>
							<div className='p-4 border-l-4 border-green-500 bg-green-50'>
								<h3 className='font-semibold text-green-800'>
									Mashq 1: Closure
								</h3>
								<p className='text-green-700'>
									Funktsiya yarating u har chaqirilganda sonni 1 ga oshirib
									qaytarsin.
								</p>
							</div>

							<div className='p-4 border-l-4 border-blue-500 bg-blue-50'>
								<h3 className='font-semibold text-blue-800'>
									Mashq 2: Promise
								</h3>
								<p className='text-blue-700'>
									Bir nechta asinxron operatsiyalarni ketma-ket bajaradigan
									funktsiya yozing.
								</p>
							</div>

							<div className='p-4 border-l-4 border-purple-500 bg-purple-50'>
								<h3 className='font-semibold text-purple-800'>
									Mashq 3: Array Methods
								</h3>
								<p className='text-purple-700'>
									Ma'lumotlar massivi ustida map, filter, reduce methodlarini
									qo'llang.
								</p>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	)
}
