import type { DropdownItem } from '$lib/types'

export const navItems = [
	{
		title: 'Home',
		path: '/',
		data: 'home',
		drop: false,
	},
	{
		title: 'About',
		path: '/about',
		data: 'about',
		drop: false,
	},
	{
		title: 'Academics',
		path: '/academics',
		data: 'academics',
		drop: false,
	},
	{
		title: 'Admissions',
		path: '/admissions',
		data: 'admissions',
		drop: false,
	},
	{
		title: 'Fees',
		path: '/fees',
		data: 'fees',
		drop: false,
	},
	{
		title: 'News',
		path: '/news',
		data: 'news',
		drop: false,
	},
	{
		title: 'Contact',
		path: '/contact',
		data: 'contact',
		drop: false,
	}
]

export const dropdownItems: { [key: string]: DropdownItem[] } = {
	academics: [
		{
			title: 'Academics Overview',
			path: '/academics'
		},
		{
			title: 'Foundation Phase',
			path: '/foundation-phase'
		},
		{
			title: 'Intermediate Phase',
			path: '/intermediate-phase'
		},
		{
			title: 'Senior Phase',
			path: '/senior-phase'
		},
		{
			title: 'Calendar',
			path: '/calendar'
		}
	],
	about: [
		{
			title: 'About Harding Christian Academy',
			path: '/about'
		},
		{
			title: 'Policies',
			path: '/policies'
		},
		{
			title: 'Code of Conduct',
			path: '/policies/code-of-conduct'
		},
		{
			title: 'Gallery',
			path: '/gallery'
		},
		{
			title: 'Privacy',
			path: '/privacy'
		}
	]
}

export const philosophy = [
	{
		title: 'Philosophy',
		text: 'Harding Christian Academy exists to provide Christ-centered education that shapes character, strengthens academics, and prepares learners to serve their community with integrity and compassion.'
	},
	{
		title: 'Vision',
		text: 'To be a trusted Christian school in Harding known for academic excellence, spiritual formation, and graduates who lead with wisdom and humility.'
	},
	{
		title: 'Mission',
		text: 'We partner with families to provide rigorous learning, a nurturing environment, and purposeful discipleship from Grades 1 to 7.'
	}
]

export const goals = [
	{
		text: 'Develop graduates who are grounded in faith, strong in character, and prepared for lifelong learning.'
	},
	{
		text: 'Build a learning community that values service, responsibility, and respect for others.'
	},
	{
		text: "Provide a safe and caring environment that supports every learner's growth and well-being."
	},
	{
		text: 'Encourage excellence in academics, athletics, and the arts through disciplined practice and mentorship.'
	}
]

export const coreValues = [
	{
		title: 'Faith',
		text: [
			'Rooted in Scripture and prayer',
			'Hope and trust in God',
			'Respect for the dignity of every person'
		],
		values: [
			'Reverence',
			'Gratitude',
			'Humility',
			'Truthfulness',
			'Steadfastness'
		]
	},
	{
		title: 'Integrity',
		text: ['Honesty in word and deed', 'Responsible choices', 'Respect for others'],
		values: [
			'Accountability',
			'Courage',
			'Self-control',
			'Discipline',
			'Reliability'
		]
	},
	{
		title: 'Service',
		text: ['Compassion for others', 'Community involvement', 'Stewardship of resources'],
		values: [
			'Kindness',
			'Generosity',
			'Justice',
			'Perseverance',
			'Teamwork'
		]
	}
]

export const institutionDirection = [
	{
		title: 'Academic Excellence',
		text: 'Creating a dynamic instructional climate: The foundation for effective instruction and positive student outcomes.'
	},
	{
		title: 'Student Services',
		text: "Enhancing personal quest in advancing and upgrading students' skills and talents through creative, interactive and technologically-based exposures."
	},
	{
		title: 'Sustained Evangelical Mission by the Center for Christian Formation',
		text: 'Strengthening Christian formation as part of the curriculum through chapel, service, and community outreach.'
	},
	{
		title: 'Human Resource Development',
		text: 'Development of a culture of strong service orientation among school personnel.'
	},
	{
		title: 'Effective Financial Management',
		text: 'Optimization of financial resources through effective planning, administration and control of the school assets, revenues and expenditures.'
	},
	{
		title: 'Research and Development',
		text: 'Utilization of data-based and action research information in support of institutional concerns of the school.'
	}
]

export const services = [
	{
		id: 1,
		title: 'Faith Formation and Chapel Services',
		text: 'Spiritual growth through chapel, Scripture engagement, and service opportunities that shape Christ-centered character.'
	},
	{
		id: 2,
		title: 'Guidance and Counseling Services',
		text: 'Academic, social, and emotional support for learners, with family partnerships and referrals as needed.'
	},
	{
		id: 3,
		title: 'Student Life and Discipline Services',
		text: 'Positive behavior support, restorative discipline, and oversight of attendance and conduct expectations.'
	},
	{
		id: 4,
		title: 'Library and Instructional Media Services',
		text: 'A curated collection of print and digital resources that supports reading, research, and media literacy.'
	},
	{
		id: 5,
		title: 'Health Services',
		text: 'Basic first aid, health monitoring, and coordination with families for learner wellbeing.'
	},
	{
		id: 6,
		title: 'Wellness and Safety Services',
		text: 'Health education, safety protocols, and support for a safe and caring campus environment.'
	},
	{
		id: 7,
		title: "Registrar and Students' Records Services",
		text: 'Secure management of learner records, enrolment documentation, and academic history.'
	},
	{
		id: 8,
		title: 'Information Technology Services',
		text: 'Technology support for learning platforms, devices, and campus systems.'
	},
	{
		id: 9,
		title: 'Communications and Publications',
		text: 'School communications, publications, website updates, and official announcements.'
	},
	{
		id: 10,
		title: 'Physical Plant and Maintenance Services',
		text: 'Facilities upkeep, safety checks, and maintenance of buildings and grounds.'
	},
	{
		id: 11,
		title: 'Custodial Services',
		text: 'Daily cleaning, sanitation, and preparation of classrooms and shared spaces.'
	},
	{
		id: 12,
		title: 'Security Services',
		text: 'Campus access control, visitor procedures, and monitoring for safety and security.'
	},
	{
		id: 13,
		title: 'Dining and Food Services',
		text: 'Healthy, affordable meals and snacks aligned with nutrition expectations.'
	},
	{
		id: 14,
		title: 'Public Address System',
		text: 'School-wide announcements and emergency alerts for timely communication.'
	},
	{
		id: 15,
		title: 'Computer Laboratories',
		text: 'Hands-on computing experiences that build digital literacy, research skills, and creativity.'
	},
	{
		id: 16,
		title: 'Science Laboratories',
		text: 'Inquiry-based experiments and investigations that connect science concepts to real-world learning.'
	},
	{
		id: 17,
		title: 'Technology and Skills Laboratories',
		text: 'Practical skills training, design thinking, and project-based learning for real-world readiness.'
	},
	{
		id: 18,
		title: 'Audio Visual Room (Multi-purpose Hall)',
		text: 'Presentations, assemblies, and events supported by audio-visual equipment.'
	},
	{
		id: 19,
		title: 'Gymnasium',
		text: 'Indoor sports, fitness activities, and school events.'
	},
	{
		id: 20,
		title: 'Outdoor Terrace',
		text: 'A welcoming outdoor space for gatherings, student activities, and community events.'
	},
	{
		id: 21,
		title: 'Quadrangle',
		text: 'A central gathering space for assemblies, sports, and community activities.'
	},
	{
		id: 22,
		title: 'Comfort Rooms',
		text: 'Clean, accessible restrooms for learners, staff, and visitors.'
	}
]
