export const siteMeta = {
	title: 'Justin Grant // Software Engineer',
	description:
		'London-based software engineer building production-grade full-stack systems, financial data workflows, and AI-assisted tooling.',
	kicker: 'Justin Grant // Software Engineer',
	subtitle: 'Backend-first delivery, clean product thinking, and AI/LLM integration that ships.',
	heroBody:
		'I build production-grade features across Python/Django, Node.js, React, automation pipelines, and LLM-powered internal tooling. The focus is always the same: real workflows, clear product decisions, and systems that stay maintainable after launch.',
	availability: 'Open to new opportunities and high-trust product teams.',
	location: 'London, UK',
	focusAreas: [
		'Python / Django systems',
		'AI-assisted internal tooling',
		'External API and data workflow delivery',
	],
	navLinks: [
		{ href: '#about', label: 'About' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#experience', label: 'Experience' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#achievements', label: 'Achievements' },
		{ href: '#contact', label: 'Contact' },
	],
};

export const heroStats = [
	{ label: 'Current base', value: 'London, UK' },
	{ label: 'Primary lens', value: 'Backend + product' },
	{ label: 'Modes', value: 'Light / Dark / Retro' },
	{ label: 'Status', value: 'Available now' },
];

export const impactStats = [
	{ label: 'Records processed monthly', count: 50, suffix: 'K+' },
	{ label: 'Reduction in manual forecasting', count: 40, suffix: '%' },
	{ label: 'Third-party API integrations', count: 6, suffix: '+' },
	{ label: 'Analyst hours saved weekly', count: 3, suffix: ' hrs' },
];

export const aboutParagraphs = [
	'Full-stack engineer with a strong backend specialism in Python/Django and Node.js, plus a growing delivery track record across AI and LLM integration.',
	'Currently building production-grade features on a financial data platform, owning data modelling, API integration, automation workflows, and OpenAI-powered tooling end to end.',
	'Strong technical delivery is paired with stakeholder communication shaped by earlier operational leadership roles, which now helps when translating requirements into shipped product work.',
];

export const aboutCards = [
	{ label: 'Years in technical roles', value: '4+' },
	{ label: 'AI / LLM delivery', value: 'OpenAI' },
	{ label: 'Working style', value: 'End to end' },
	{ label: 'Location', value: 'London' },
];

export const skillGroups = [
	{
		title: 'Languages and frameworks',
		items: [
			{ name: 'Python / Django', level: 90 },
			{ name: 'JavaScript', level: 85 },
			{ name: 'TypeScript', level: 76 },
			{ name: 'React / Next.js', level: 78 },
			{ name: 'Node.js', level: 82 },
			{ name: 'HTML / CSS', level: 88 },
		],
	},
	{
		title: 'Data, tooling, and infrastructure',
		items: [
			{ name: 'OpenAI API', level: 88 },
			{ name: 'MongoDB', level: 85 },
			{ name: 'PostgreSQL', level: 80 },
			{ name: 'REST APIs', level: 90 },
			{ name: 'ETL pipelines', level: 83 },
			{ name: 'CI / CD', level: 70 },
		],
	},
];

export const experiences = [
	{
		status: 'Current',
		company: 'HZA Data Systems',
		role: 'Software Engineer',
		dates: 'Nov 2024 – May 2026',
		bullets: [
			'Designed and owned end-to-end features on a bespoke financial data platform, from MongoDB schema design and Python/Django backend work to REST APIs and React UI delivery.',
			'Engineered predictive workflows processing 50,000+ records monthly, reducing manual forecasting effort by roughly 40 percent.',
			'Architected and shipped an OpenAI-powered summarisation workflow that cut analyst report preparation by around three hours each week.',
			'Integrated six-plus third-party APIs, including property data sources, and normalised them into a unified, queryable layer.',
			'Built automation pipelines that improved throughput, reduced operational error, and made live financial data more usable for non-technical stakeholders.',
		],
	},
	{
		status: 'Previous',
		company: 'The Stay Club',
		role: 'Sales Operations Associate',
		dates: 'Jan 2022 – Oct 2024',
		bullets: [
			'Managed CRM and booking workflows for a high-volume accommodation provider across thousands of live bookings.',
			'Worked as a cross-functional liaison, sharpening the communication and stakeholder instincts now used daily in engineering roles.',
			'Trained and onboarded new team members while standardising processes through documentation and repeatable playbooks.',
		],
	},
	{
		status: 'Previous',
		company: 'OpenView Security Solutions Ltd',
		role: 'Service Coordinator',
		dates: 'May 2020 – Dec 2021',
		bullets: [
			'Coordinated scheduling for 30-plus field engineers using data-led prioritisation to maintain SLA performance.',
			'Managed reporting and digital records, which laid the groundwork for the data-oriented working style that carried into software engineering.',
		],
	},
];

export const featuredProject = {
	label: 'Featured project',
	title: 'JobFlow // Job tracker and career workflow platform',
	summary:
		'JobFlow started from a simple frustration: most job trackers either feel noisy or too thin to be useful once a search gets serious. I wanted one place to manage the pipeline clearly, keep reminders close to the work, and stay current on software-engineering shifts without bouncing between disconnected tools.',
	highlights: [
		'Combines a four-stage tracking workflow with reminders, notes, and follow-through cues so the search feels structured instead of reactive.',
		'Extends beyond a simple board with a software-engineering guide, dated trend feed, and a cleaner reading flow around the wider market.',
		'Keeps the product shell responsive and theme-consistent across the main app surfaces, including dashboard, blog, career guide, and about pages.',
	],
	tags: ['Workflow UX', 'Responsive shell', 'Theme system', 'Career guide', 'Trend feed'],
	links: [
		{
			label: 'Live product',
			href: 'https://job-tracker-seven-pearl.vercel.app/dashboard',
			external: true,
		},
		{
			label: 'GitHub profile',
			href: 'https://github.com/justingrant94',
			external: true,
			icon: 'github',
		},
	],
	status: 'Live build deployed on Vercel',
	placeholder: 'More projects are in the pipeline and can slot straight into this layout once the next case studies are ready.',
};

export const achievements = [
	{ issuer: 'Anthropic Academy', name: 'Building with the Claude API', year: '2025' },
	{ issuer: 'Anthropic Academy', name: 'Intro to Model Context Protocol', year: '2025' },
	{ issuer: 'Anthropic Academy', name: 'MCP: Advanced Topics', year: '2025' },
	{ issuer: 'Anthropic Academy', name: 'Claude Code 101', year: '2025' },
	{ issuer: 'Anthropic Academy', name: 'Claude Code in Action', year: '2025' },
	{ issuer: 'General Assembly', name: 'Software Engineering Immersive', year: '2022' },
	{ issuer: 'Edge Hill University', name: 'BA Hons (2:1)', year: '2015 – 2018' },
];

export const contactLinks = [
	{
		label: 'Gmail',
		value: 'justingrant373@gmail.com',
		href: 'mailto:justingrant373@gmail.com',
		external: false,
		icon: 'mail',
	},
	{
		label: 'LinkedIn',
		value: 'linkedin.com/in/justin-grant94',
		href: 'https://www.linkedin.com/in/justin-grant94/',
		external: true,
		icon: 'linkedin',
	},
	{
		label: 'GitHub',
		value: 'github.com/justingrant94',
		href: 'https://github.com/justingrant94',
		external: true,
		icon: 'github',
	},
];