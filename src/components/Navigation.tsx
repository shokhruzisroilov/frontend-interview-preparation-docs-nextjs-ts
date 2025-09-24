'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Code, Cpu, Database, Home } from 'lucide-react'
import { NavItem } from './types'
import { FaHtml5, FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'

const navItems: NavItem[] = [
	{ href: '/', label: 'Bosh Sahifa', icon: Home },
	{ href: '/topics/html-css', label: 'HTML & CSS', icon: FaHtml5 },
	{ href: '/topics/javascript', label: 'JavaScript', icon: IoLogoJavascript },
	{ href: '/topics/react', label: 'React', icon: FaReact },
	{ href: '/topics/algorithms', label: 'Algoritmlar', icon: Cpu },
	{ href: '/topics/system-design', label: 'Tizim Dizayni', icon: Database },
]

export default function Navigation() {
	const pathname = usePathname()

	return (
		<nav className='bg-white shadow-sm border-b'>
			<div className='container mx-auto px-4'>
				<div className='flex space-x-1 overflow-x-auto'>
					{navItems.map(item => {
						const Icon = item.icon
						const isActive = pathname === item.href

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`flex items-center space-x-2 px-4 py-3 whitespace-nowrap transition-colors ${
									isActive
										? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
										: 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
								}`}
							>
								<Icon className='h-4 w-4' />
								<span className='font-medium'>{item.label}</span>
							</Link>
						)
					})}
				</div>
			</div>
		</nav>
	)
}
