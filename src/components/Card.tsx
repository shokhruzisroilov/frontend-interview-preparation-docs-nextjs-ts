export default function Card({
	title,
	children,
}: {
	title: string
	children: React.ReactNode
}) {
	return (
		<div className='border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white'>
			<h2 className='text-xl font-semibold mb-3 text-gray-800'>{title}</h2>
			<div className='text-gray-600'>{children}</div>
		</div>
	)
}
