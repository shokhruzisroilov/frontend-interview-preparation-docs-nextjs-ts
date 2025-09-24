'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
	const [activeSection, setActiveSection] = useState<
		'html' | 'css' | 'javascript' | 'react' | null
	>(null)
	const pathname = usePathname()

	const topics = {
		html: [
			{ id: 'introduction', title: 'Kirish' },
			{ id: 'elements', title: 'Elementlar' },
			{ id: 'forms', title: 'Formalar' },
			{ id: 'semantic-html', title: 'Semantik HTML' },
			{ id: 'seo', title: 'SEO' },
			{ id: 'accessibility', title: 'Accessibility' },
		],
		css: [
			{ id: 'introduction', title: 'Kirish' },
			{ id: 'selectors', title: 'Selektorlar' },
			{ id: 'flexbox', title: 'Flexbox' },
			{ id: 'grid', title: 'Grid' },
			{ id: 'animations', title: 'Animatsiyalar' },
			{ id: 'responsive', title: 'Responsive Design' },
		],
		javascript: [
			{ id: 'introduction', title: 'Kirish' },
			{ id: 'variables', title: "O'zgaruvchilar" },
			{ id: 'functions', title: 'Funksiyalar' },
			{ id: 'dom', title: 'DOM Manipulyatsiya' },
			{ id: 'events', title: 'Eventlar' },
			{ id: 'es6', title: 'ES6+ Xususiyatlari' },
		],
		react: [
			{ id: 'introduction', title: 'Kirish' },
			{ id: 'components', title: 'Komponentlar' },
			{ id: 'hooks', title: "Hook'lar" },
			{ id: 'state', title: 'State Boshqaruvi' },
			{ id: 'props', title: 'Props' },
			{ id: 'lifecycle', title: 'Lifecycle' },
		],
	}

	const isDocsPage = pathname.startsWith('/docs/')
	const currentSection = pathname.split('/')[2] as keyof typeof topics

	return (
		<aside className='w-64 bg-white border-r border-gray-200 p-6 sticky top-0 h-screen overflow-y-auto'>
			<div className='mb-6'>
				<h1 className='text-xl font-bold text-gray-900'>Frontend Docs</h1>
				<p className='text-sm text-gray-500 mt-1'>Interview tayyorlanish</p>
			</div>

			<nav className='flex flex-col gap-1'>
				<a
					href='/'
					className={`px-3 py-2 rounded-lg transition-colors ${
						pathname === '/'
							? 'bg-blue-100 text-blue-700 font-medium'
							: 'text-gray-700 hover:bg-gray-100'
					}`}
				>
					Bosh sahifa
				</a>

				{(['html', 'css', 'javascript', 'react'] as const).map(section => (
					<div key={section} className='mt-2'>
						<button
							className={`w-full px-3 py-2 rounded-lg text-left transition-colors font-medium flex justify-between items-center ${
								isDocsPage && currentSection === section
									? 'bg-blue-100 text-blue-700'
									: 'text-gray-700 hover:bg-gray-100'
							}`}
							onClick={() =>
								setActiveSection(activeSection === section ? null : section)
							}
						>
							<span>{section.toUpperCase()}</span>
							<span>{activeSection === section ? '−' : '+'}</span>
						</button>

						{(activeSection === section ||
							(isDocsPage && currentSection === section)) && (
							<div className='flex flex-col pl-4 mt-1 gap-1'>
								{topics[section].map(topic => (
									<a
										key={topic.id}
										href={`/docs/${section}#${topic.id}`}
										className='px-3 py-2 text-sm rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors'
									>
										{topic.title}
									</a>
								))}
							</div>
						)}
					</div>
				))}
			</nav>
		</aside>
	)
}
