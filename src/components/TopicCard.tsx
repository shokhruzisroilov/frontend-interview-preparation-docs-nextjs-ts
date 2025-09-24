import Link from 'next/link'
import { ArrowRight, Clock, Star } from 'lucide-react'
import { Topic } from './types'

interface TopicCardProps {
	topic: Topic
}

export default function TopicCard({ topic }: TopicCardProps) {
	const difficultyColors: Record<string, string> = {
		beginner: 'bg-green-100 text-green-800',
		intermediate: 'bg-yellow-100 text-yellow-800',
		advanced: 'bg-red-100 text-red-800',
	}

	const difficultyLabels: Record<string, string> = {
		beginner: "Boshlang'ich",
		intermediate: "O'rta",
		advanced: 'Murakkab',
	}

	return (
		<div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6'>
			<div className='flex justify-between items-start mb-4'>
				<h3 className='text-xl font-bold text-gray-900'>{topic.title}</h3>
				<span
					className={`px-3 py-1 rounded-full text-sm font-medium ${
						difficultyColors[topic.difficulty]
					}`}
				>
					{difficultyLabels[topic.difficulty]}
				</span>
			</div>

			<p className='text-gray-600 mb-4'>{topic.description}</p>

			<div className='flex items-center space-x-4 text-sm text-gray-500 mb-4'>
				<div className='flex items-center space-x-1'>
					<Clock className='h-4 w-4' />
					<span>{topic.duration}</span>
				</div>
				<div className='flex items-center space-x-1'>
					<Star className='h-4 w-4' />
					<span>{topic.topics.length} ta mavzu</span>
				</div>
			</div>

			<div className='flex flex-wrap gap-2 mb-4'>
				{topic.topics.map((topicItem, index) => (
					<span
						key={index}
						className='bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs'
					>
						{topicItem}
					</span>
				))}
			</div>

			<Link
				href={topic.href}
				className='inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium'
			>
				<span>O'rganishni boshlash</span>
				<ArrowRight className='h-4 w-4' />
			</Link>
		</div>
	)
}
