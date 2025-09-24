import { Topic, TopicDetail } from '@/components/types'

export const topics: Topic[] = [
	{
		id: 'html-css',
		title: 'HTML & CSS',
		description:
			'Semantik HTML, CSS3, Flexbox, Grid, Responsive Design va boshqa asosiy tushunchalar',
		href: '/topics/html-css',
		difficulty: 'beginner',
		duration: '2-3 hafta',
		topics: [
			'Semantik HTML',
			'CSS Selectorlar',
			'Flexbox',
			'CSS Grid',
			'Media Query',
			'CSS Variables',
		],
	},
	{
		id: 'javascript',
		title: 'JavaScript',
		description:
			'JavaScript asoslari, DOM manipulyatsiya, Asinxron dasturlash, ES6+ xususiyatlari',
		href: '/topics/javascript',
		difficulty: 'intermediate',
		duration: '3-4 hafta',
		topics: [
			'Closure',
			'Promise',
			'Async/Await',
			'Event Loop',
			'ES6+',
			'DOM API',
		],
	},
	{
		id: 'react',
		title: 'React',
		description:
			'React asoslari, Hooks, State Management, Performance optimization va best practices',
		href: '/topics/react',
		difficulty: 'intermediate',
		duration: '3-5 hafta',
		topics: [
			'Components',
			'Hooks',
			'Context API',
			'Redux',
			'Performance',
			'Testing',
		],
	},
	{
		id: 'algorithms',
		title: 'Algoritmlar',
		description:
			'Data Structures, Time Complexity, Keng tarqalgan algoritmlar va ularning yechimlari',
		href: '/topics/algorithms',
		difficulty: 'advanced',
		duration: '4-6 hafta',
		topics: [
			'Big O',
			'Arrays',
			'Strings',
			'Trees',
			'Graphs',
			'Dynamic Programming',
		],
	},
]

export const topicDetails: Record<string, TopicDetail> = {
	'html-css': {
		title: 'HTML & CSS',
		description:
			"Web development ning asosiy qismlari - HTML va CSS ni chuqur o'rganing",
		sections: [
			{
				title: 'Semantik HTML',
				content:
					"Semantik HTML - bu veb-sahifaning tarkibiy qismlarini ma'noli va tushunarli qilish. Bu SEO va accessibility uchun muhim.",
				codeExamples: [
					{
						title: 'Semantik HTML misoli',
						content: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Mening Saytim</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Bosh Sahifa</a></li>
                <li><a href="/about">Haqida</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <h1>Maqola Sarlavhasi</h1>
            <p>Maqola matni...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2024 Mening Saytim</p>
    </footer>
</body>
</html>`,
						language: 'html',
						exercise: 'Semantik HTML yordamida blog post strukturasi yarating',
					},
				],
			},
		],
	},
	javascript: {
		title: 'JavaScript',
		description: 'Modern JavaScript ning barcha muhim tushunchalari',
		sections: [
			{
				title: 'Variable Declaration: var, let, const',
				content:
					'ES6 dan oldin faqat var mavjud edi. let va const block scope va boshqa afzalliklar bilan keldi.',
				codeExamples: [
					{
						title: 'var, let, const farqlari',
						content: `// Hoisting misoli
console.log(x); // undefined (var hoisting qilinadi)
var x = 10;

console.log(y); // Error: Cannot access 'y' before initialization
let y = 20;

// Scope misoli
function test() {
    if (true) {
        var a = 1;  // Function scope
        let b = 2;  // Block scope
        const c = 3; // Block scope
    }
    console.log(a); // 1
    console.log(b); // Error: b is not defined
}`,
						language: 'javascript',
						exercise: 'Quyidagi kod nimani chiqaradi va nima uchun?',
					},
				],
			},
		],
	},
}
