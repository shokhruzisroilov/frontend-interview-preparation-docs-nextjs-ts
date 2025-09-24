export interface Topic {
	id: string
	title: string
	description: string
	href: string
	difficulty: 'beginner' | 'intermediate' | 'advanced'
	duration: string
	topics: string[]
}

export interface CodeExample {
	title: string
	content: string
	language: string
	exercise?: string
}

export interface NavItem {
	href: string
	label: string
	icon: React.ComponentType<any>
}

export interface TopicDetail {
	title: string
	description: string
	sections: {
		title: string
		content: string
		codeExamples: CodeExample[]
	}[]
}
