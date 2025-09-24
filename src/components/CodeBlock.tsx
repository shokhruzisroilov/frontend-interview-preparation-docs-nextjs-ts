'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
	code: string
	language?: string
}

export default function CodeBlock({
	code,
	language = 'javascript',
}: CodeBlockProps) {
	const [copied, setCopied] = useState<boolean>(false)

	const copyToClipboard = async (): Promise<void> => {
		try {
			await navigator.clipboard.writeText(code)
			setCopied(true)
			setTimeout(() => setCopied(false), 2000)
		} catch (error) {
			console.error('Nusxalashda xatolik:', error)
		}
	}

	return (
		<div className='relative bg-gray-900 rounded-lg overflow-hidden my-4'>
			<div className='flex justify-between items-center bg-gray-800 px-4 py-2'>
				<span className='text-gray-300 text-sm'>{language}</span>
				<button
					onClick={copyToClipboard}
					className='flex items-center space-x-2 text-gray-300 hover:text-white transition-colors'
					aria-label='Kodni nusxalash'
				>
					{copied ? (
						<>
							<Check className='h-4 w-4' />
							<span className='text-sm'>Nusxalandi!</span>
						</>
					) : (
						<>
							<Copy className='h-4 w-4' />
							<span className='text-sm'>Nusxalash</span>
						</>
					)}
				</button>
			</div>
			<pre className='p-4 overflow-x-auto'>
				<code className={`language-${language} text-gray-100`}>{code}</code>
			</pre>
		</div>
	)
}
