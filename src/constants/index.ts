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
		title: 'Contact',
		path: '/contact',
		data: 'contact',
		drop: false,
	},
	{
		title: 'News',
		path: '/news',
		data: 'news',
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

export const paascu = [
	{
		title: 'About PAASCU',
		text: [
			'PAASCU stands for Philippine Accrediting Association of Schools, Colleges, and Universities. It is a private, voluntary, non-profit and non- stock corporation which was registered with the Securities and Exchange Commission on November 5, 1957.',
			'PAASCU is a service organization that accredits academic programs which meet standards of quality education. In November 1967, the Bureau of Education and Culture (now the Department of Education) officially recognized PAASCU and endorsed its work as an accrediting agency. PAASCU is also one of the three founding members of the Federation of Accrediting Agencies of the Philippines (FAAP), which was established in 1977 and is authorized by the Commission on Higher Education (CHED) to certify the levels of accredited programs for the purpose of granting progressive deregulation and other benefits.',
			'PAASCU has been a full member of the International Network for Quality Assurance Agencies in Higher Education (INQAAHE). As of 2005, INQAAHE is composed of 150 accrediting agencies coming from over 60 different countries. These agencies have also created regional networks, one of which is the Asia-PAcific Quality Network (APQN), with PAASCU being one of its active members.',
			'PAASCU also has linkages with the Council for Higher Education Accreditation (CHEA), which is a private, nonprofit national organization that coordinates accreditation activity in the United States, as well as with the National Committee on Foreign Medical Education and Accreditation (NCFMEA), which is based in Washington, D.C.'
		]
	},
	{
		title: "What are PAASCU'S standards?",
		text: [
			"The Association does not impose arbitrary standards. The survey forms developed by PAASCU identify principles and practices which are found in excellent institutions. The statements in the survey forms are more qualitative rather than quantitative. The Association does not have specific formulas to apply or particular patterns of organization to follow. The criteria and survey instruments are merely tools to help the school measure educational quality. They are intended to serve as a guide for institutions as they strive for excellence and for accreditors as they assess institutional achievement.  The standards reflect a realistic appraisal of the school's resources and their efficient utilization to help the institution achieve its goals."
		]
	},
	{
		title: 'Benefits and Incentives',
		text: [
			'Full administrative deregulation, provided that reports of promotion of students and lists of graduates are available for review by CHED at all times.',
			'Financial deregulation in terms of setting tuition and other school fees and charges.',
			'Authority to revise the curriculum without CHED approval provided that CHED and Professional Regulation Commission minimum requirements and guidelines, where applicable, are complied with and the revised curriculum is submitted to CHED Regional Offices.',
			'Authority to graduate students from accredited courses or programs of study in the levels accredited without prior approval of the CHED and without need for Special Orders.',
			`Priority in the awards of grants/subsidies or funding assistance from CHED Higher Education Development Fund (HEDF) for scholarships and faculty development, facilities improvement and other development programs. Right to use on its publications or advertisements the word "ACCREDITED" pursuant to CHED policies and rules.`,
			'Limited visitation, inspection and/or supervision by CHED supervisory personnel or representatives.'
		]
	},
	{
		title: 'Other advantages',
		text: [
			'Gives the institution and its faculty a sense of direction based on a clearer self-image.',
			'Facilitates transfer of students.',
			'Provides guidance for parents and students in the choice of worthy schools.',
			'Gives prestige for member schools, justified by the possession of quality standards and the continuing effort to maintain them at a high level.'
		]
	}
]

export const gradeSchool = {
	title: 'The Grade School Department Objectives:',
	content: [
		{
			mainText: 'Build strong foundations in literacy, numeracy, and learning habits.',
			subText: [
				'Reading fluency, comprehension, and clear communication.',
				'Number sense and problem solving through practice and play.',
				'Curiosity and confidence in asking questions and exploring new ideas.'
			]
		},
		{
			mainText: 'Develop character and faith-filled habits.',
			subText: [
				'Respect, kindness, and responsibility in daily interactions.',
				'Participation in prayer, worship, and community service.',
				'Habits of honesty, gratitude, and self-control.'
			]
		},
		{
			mainText: 'Promote healthy growth and safe routines.',
			subText: [
				'Good hygiene, healthy food choices, and active play.',
				'Social-emotional skills for confidence and resilience.',
				'A safe, caring classroom culture.'
			]
		},
		{
			mainText: 'Encourage service and community involvement.',
			subText: [
				'Helping others through age-appropriate service projects.',
				'Care for school property and the environment.',
				'Appreciation for family, community, and country.'
			]
		}
	]
}

export const juniorHigh = {
	title: 'High School education aims to develop its students in the following aspects:',
	content: [
		{
			mainText: 'Strengthen character and values that guide daily life.',
			subText: [
				'Respectful communication and teamwork with peers and staff.',
				'Integrity, honesty, and responsibility in choices.',
				'Participation in chapel, service, and community life.'
			]
		},
		{
			mainText:
				'Promote lifelong learning through self-discovery, expression, and creativity.',
			subText: [
				'Effective study habits, research skills, and critical thinking.',
				'Clear communication in writing and speaking.',
				'Exploration of talents and emerging interests.'
			]
		},
		{
			mainText: 'Promote healthy growth and personal discipline.',
			subText: [
				'Healthy routines, active living, and responsible decision making.',
				'Resilience, self-awareness, and emotional balance.',
				'Self-discipline and perseverance in academics and activities.'
			]
		},
		{
			mainText: 'Deepen commitment to service and community responsibility.',
			subText: [
				'Participation in service projects and outreach opportunities.',
				'Respect for others and care for the environment.',
				'Positive leadership and contribution to school life.'
			]
		}
	]
}

export const seniorHigh = {
	title: 'High School education aims to develop its students in the following aspects:',
	content: [
		{
			mainText: 'Strengthen character and values that guide daily life.',
			subText: [
				'Respectful communication and teamwork with peers and staff.',
				'Integrity, honesty, and responsibility in choices.',
				'Participation in chapel, service, and community life.'
			]
		},
		{
			mainText:
				'Promote lifelong learning through self-discovery, expression, and creativity.',
			subText: [
				'Advanced study habits, research skills, and critical thinking.',
				'Clear communication for academic and career readiness.',
				'Exploration of talents and informed pathway choices.'
			]
		},
		{
			mainText: 'Promote healthy growth and personal discipline.',
			subText: [
				'Healthy routines, active living, and responsible decision making.',
				'Resilience, self-awareness, and emotional balance.',
				'Self-discipline and perseverance in academics and activities.'
			]
		},
		{
			mainText: 'Deepen commitment to service and community responsibility.',
			subText: [
				'Participation in service projects and outreach opportunities.',
				'Respect for others and care for the environment.',
				'Positive leadership and contribution to school life.'
			]
		}
	]
}
