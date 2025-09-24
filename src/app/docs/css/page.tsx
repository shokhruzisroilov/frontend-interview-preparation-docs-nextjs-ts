'use client'

import { useEffect } from 'react'
import { cssContent } from '@/lib/content'

export default function CSSDocs() {
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.slice(1)
			if (hash) {
				const element = document.getElementById(hash)
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' })
				}
			}
		}

		handleHashChange()
		window.addEventListener('hashchange', handleHashChange)

		return () => window.removeEventListener('hashchange', handleHashChange)
	}, [])

	return (
		<div className='max-w-4xl'>
			<div className='mb-8'>
				<h1 className='text-3xl font-bold text-gray-900 mb-4'>
					CSS Dokumentatsiyasi
				</h1>
				<p className='text-lg text-gray-600'>
					CSS bo'yicha to'liq qo'llanma. Selektorlar, Flexbox, Grid,
					animatsiyalar va responsive design.
				</p>
			</div>

			<div className='space-y-12'>
				{Object.entries(cssContent).map(([key, section]) => (
					<section
						key={key}
						id={key}
						className='scroll-mt-20 bg-white p-6 rounded-lg shadow-sm border'
					>
						<h2 className='text-2xl font-bold mb-4 text-gray-800'>
							{section.title}
						</h2>
						<div
							className='prose prose-gray max-w-none'
							dangerouslySetInnerHTML={{ __html: section.content }}
						/>
					</section>
				))}
			</div>
		</div>
	)
}
