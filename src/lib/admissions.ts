export const gradeOptions = [
	'Grade 1',
	'Grade 2',
	'Grade 3',
	'Grade 4',
	'Grade 5',
	'Grade 6',
	'Grade 7',
	'Grade 8',
	'Grade 9'
] as const

export const startTermOptions = [
	'2026 Term 1',
	'2026 Term 2',
	'2026 Term 3',
	'2026 Term 4',
	'2027 Term 1'
] as const

export const genderOptions = ['Boy', 'Girl'] as const

export const transportOptions = ['Walking', 'Car', 'Transport'] as const

export const paymentOptions = [
	{ value: 'monthly', label: 'Fees paid over 11 months' },
	{ value: 'annual', label: 'Fees paid once a year' },
	{ value: 'quarterly', label: 'Fees paid every quarter (each term)' }
] as const

export const siblingStatusOptions = [
	{ value: 'eldest', label: 'My eldest child at this school' },
	{ value: 'sibling', label: 'Not my eldest child at this school' }
] as const

export const medicalConditionOptions = [
	{ name: 'medicalAsthma', label: 'Asthma' },
	{ name: 'medicalHeartCondition', label: 'Heart condition' },
	{ name: 'medicalEpilepsy', label: 'Epilepsy' }
] as const

export const requiredDocumentFields = [
	{
		name: 'parentGuardianIdFile',
		label: 'Parent or guardian ID copy'
	},
	{
		name: 'birthCertificateFile',
		label: "Learner's birth certificate"
	},
	{
		name: 'immunisationFile',
		label: "Learner's immunisation / clinic card"
	},
	{
		name: 'previousReports',
		label: 'Previous school report, transfer letter, or assessment'
	}
] as const

export const optionalDocumentFields = [
	{
		name: 'assessmentFiles',
		label: "Doctor's assessments or other support documents"
	}
] as const

export const uploadAccept = '.pdf,.jpg,.jpeg,.png,.webp'
export const maxUploadSizeLabel = '3.8 MB total'
