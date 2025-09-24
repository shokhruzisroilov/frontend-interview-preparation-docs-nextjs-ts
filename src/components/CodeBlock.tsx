'use client'

import { useState } from 'react'

interface CodeBlockProps {
	code: string
	language?: string
}

export default function CodeBlock({
	code,
	language = 'javascript',
}: CodeBlockProps) {
	const [copied, setCopied] = useState(false)

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code)
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className='relative'>
			<pre className='bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm'>
				<code>{code}</code>
			</pre>
			<button
				onClick={copyToClipboard}
				className='absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs hover:bg-gray-600 transition-colors'
			>
				{copied ? 'Nusxalandi!' : 'Nusxalash'}
			</button>
		</div>
	)
}
