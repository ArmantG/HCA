import {
	genderOptions,
	gradeOptions,
	optionalDocumentFields,
	requiredDocumentFields,
	startTermOptions,
	transportOptions
} from '$lib/admissions'
import type { EmailAttachment } from '$lib/server/email'
import { z } from 'zod'

export type ApplicationValues = Record<string, string>
export type FormErrors = Record<string, string[] | undefined>

type UploadedFile = {
	fieldName: string
	label: string
	file: File
}

type ValidApplication = {
	values: ApplicationValues
	attachments: EmailAttachment[]
	fileSummary: string[]
}

const MAX_TOTAL_UPLOAD_BYTES = 3_800_000
const ALLOWED_EXTENSIONS = new Set(['.pdf', '.jpg', '.jpeg', '.png', '.webp'])
const ALLOWED_MIME_TYPES = new Set(['application/pdf', 'image/jpeg', 'image/png', 'image/webp'])

const textFieldNames = [
	'learnerSurname',
	'learnerFirstNames',
	'learnerKnownAs',
	'learnerDob',
	'learnerGender',
	'grade',
	'startTerm',
	'currentSchool',
	'fatherFullNames',
	'fatherIdNumber',
	'fatherPhysicalAddress',
	'fatherPostalAddress',
	'fatherEmployer',
	'fatherOccupation',
	'fatherWorkPhone',
	'fatherHomePhone',
	'fatherCellPhone',
	'fatherEmail',
	'motherFullNames',
	'motherIdNumber',
	'motherPhysicalAddress',
	'motherPostalAddress',
	'motherEmployer',
	'motherOccupation',
	'motherWorkPhone',
	'motherHomePhone',
	'motherCellPhone',
	'motherEmail',
	'guardianFullNames',
	'guardianIdNumber',
	'guardianPhysicalAddress',
	'guardianEmployer',
	'guardianOccupation',
	'guardianWorkPhone',
	'guardianHomePhone',
	'guardianCellPhone',
	'guardianRelationship',
	'transportMode',
	'transportContactNo',
	'allergies',
	'foodAllergies',
	'otherMedicalConditions',
	'doctorName',
	'doctorTelephone',
	'medicalAidName',
	'medicalAidNumber',
	'medicalParentName',
	'medicalWitness',
	'medicalDate',
	'medicalPlace',
	'indemnityFullNames',
	'indemnityIdNumber',
	'indemnityAddress',
	'indemnityLearnerName',
	'indemnityPlace',
	'indemnityDate',
	'indemnityParentGuardian',
	'indemnityWitness',
	'paymentPayeeName',
	'paymentPayeeId',
	'paymentOption',
	'siblingStatus',
	'typedSignature',
	'signatureDate',
	'churchName',
	'pastorName',
	'pastorTelephone',
	'pastorEmail',
	'additionalNotes',
	'website'
] as const

const checkboxFieldNames = [
	'medicalAsthma',
	'medicalHeartCondition',
	'medicalEpilepsy',
	'medicalAuthorisation',
	'indemnityAccepted',
	'paymentAccepted',
	'popiaConsent',
	'admissionsPolicyAccepted',
	'feesPolicyAccepted',
	'codeOfConductAccepted',
	'informationTruthful',
	'previousReportUnavailable',
	'birthCertificateUnavailable',
	'birthCertificateImpactAcknowledged'
] as const

const requiredText = (message: string) => z.string().min(1, message)

const applicationSchema = z
	.object({
		learnerSurname: requiredText('Learner surname is required'),
		learnerFirstNames: requiredText('Learner first names are required'),
		learnerKnownAs: z.string(),
		learnerDob: requiredText('Date of birth is required'),
		learnerGender: z.enum(genderOptions, 'Gender is required'),
		grade: z.enum(gradeOptions, 'Grade is required'),
		startTerm: z.enum(startTermOptions, 'Start term is required'),
		currentSchool: requiredText(
			"Current school is required. Use N/A if the learner hasn't attended school."
		),
		fatherFullNames: z.string(),
		fatherIdNumber: z.string(),
		fatherPhysicalAddress: z.string(),
		fatherPostalAddress: z.string(),
		fatherEmployer: z.string(),
		fatherOccupation: z.string(),
		fatherWorkPhone: z.string(),
		fatherHomePhone: z.string(),
		fatherCellPhone: z.string(),
		fatherEmail: z.string(),
		motherFullNames: z.string(),
		motherIdNumber: z.string(),
		motherPhysicalAddress: z.string(),
		motherPostalAddress: z.string(),
		motherEmployer: z.string(),
		motherOccupation: z.string(),
		motherWorkPhone: z.string(),
		motherHomePhone: z.string(),
		motherCellPhone: z.string(),
		motherEmail: z.string(),
		guardianFullNames: z.string(),
		guardianIdNumber: z.string(),
		guardianPhysicalAddress: z.string(),
		guardianEmployer: z.string(),
		guardianOccupation: z.string(),
		guardianWorkPhone: z.string(),
		guardianHomePhone: z.string(),
		guardianCellPhone: z.string(),
		guardianRelationship: z.string(),
		transportMode: z.enum(transportOptions, 'Transport method is required'),
		transportContactNo: z.string(),
		medicalAsthma: z.string(),
		medicalHeartCondition: z.string(),
		medicalEpilepsy: z.string(),
		allergies: z.string(),
		foodAllergies: z.string(),
		otherMedicalConditions: z.string(),
		doctorName: z.string(),
		doctorTelephone: z.string(),
		medicalAidName: z.string(),
		medicalAidNumber: z.string(),
		medicalParentName: requiredText('Medical authorising parent name is required'),
		medicalWitness: z.string(),
		medicalDate: requiredText('Medical authorisation date is required'),
		medicalPlace: requiredText('Medical authorisation place is required'),
		medicalAuthorisation: z.literal('on', 'Medical authorisation is required'),
		indemnityFullNames: requiredText('Indemnity parent/guardian name is required'),
		indemnityIdNumber: requiredText('Indemnity ID number is required'),
		indemnityAddress: requiredText('Indemnity address is required'),
		indemnityLearnerName: requiredText('Indemnity learner name is required'),
		indemnityPlace: requiredText('Indemnity signing place is required'),
		indemnityDate: requiredText('Indemnity signing date is required'),
		indemnityParentGuardian: requiredText('Indemnity parent/guardian signature name is required'),
		indemnityWitness: z.string(),
		indemnityAccepted: z.literal('on', 'Indemnity acceptance is required'),
		paymentPayeeName: requiredText('Responsible payee name is required'),
		paymentPayeeId: requiredText('Responsible payee ID number is required'),
		paymentOption: z.enum(['monthly', 'annual', 'quarterly'], 'Payment option is required'),
		siblingStatus: z.enum(['eldest', 'sibling'], 'Sibling status is required'),
		paymentAccepted: z.literal('on', 'Payment agreement is required'),
		popiaConsent: z.literal('on', 'POPIA consent is required'),
		admissionsPolicyAccepted: z.literal('on', 'Admissions policy acknowledgement is required'),
		feesPolicyAccepted: z.literal('on', 'Fees policy acknowledgement is required'),
		codeOfConductAccepted: z.literal('on', 'Code of conduct acknowledgement is required'),
		informationTruthful: z.literal('on', 'Information declaration is required'),
		typedSignature: requiredText('Typed parent/guardian signature is required'),
		signatureDate: requiredText('Signature date is required'),
		previousReportUnavailable: z.string(),
		birthCertificateUnavailable: z.string(),
		birthCertificateImpactAcknowledged: z.string(),
		churchName: z.string(),
		pastorName: z.string(),
		pastorTelephone: z.string(),
		pastorEmail: z.string(),
		additionalNotes: z.string(),
		website: z.string().max(0).optional()
	})
	.superRefine((values, ctx) => {
		if (
			![
				hasContact(values, 'father'),
				hasContact(values, 'mother'),
				hasContact(values, 'guardian')
			].some(Boolean)
		) {
			ctx.addIssue({
				code: 'custom',
				message: 'Add full names and a cellphone number for at least one parent or guardian.',
				path: ['guardianFullNames']
			})
		}
	})

export function getApplicationValues(formData: FormData): ApplicationValues {
	const values: ApplicationValues = {}

	for (const field of textFieldNames) {
		values[field] = String(formData.get(field) ?? '').trim()
	}

	for (const field of checkboxFieldNames) {
		values[field] = String(formData.get(field) ?? '').trim()
	}

	return values
}

export async function validateApplicationForm(formData: FormData): Promise<
	| {
			ok: true
			data: ValidApplication
	  }
	| {
			ok: false
			values: ApplicationValues
			errors: FormErrors
			status: 400 | 413
	  }
> {
	const values = getApplicationValues(formData)

	if (values.website) {
		return {
			ok: false,
			values,
			errors: { website: ['Spam detected'] },
			status: 400
		}
	}

	const errors: FormErrors = {}
	const parsed = applicationSchema.safeParse(values)

	if (!parsed.success) {
		Object.assign(errors, parsed.error.flatten().fieldErrors)
	}

	const uploadResult = validateUploads(formData, values)
	Object.assign(errors, uploadResult.errors)

	if (hasErrors(errors)) {
		return {
			ok: false,
			values,
			errors,
			status: uploadResult.tooLarge ? 413 : 400
		}
	}

	const attachments = await Promise.all(
		uploadResult.files.map((upload) => fileToAttachment(upload, values.learnerSurname))
	)

	return {
		ok: true,
		data: {
			values,
			attachments,
			fileSummary: uploadResult.files.map((upload) => `${upload.label}: ${upload.file.name}`)
		}
	}
}

export function formatApplicationEmail(
	referenceId: string,
	values: ApplicationValues,
	files: string[]
) {
	const learnerName = `${values.learnerFirstNames} ${values.learnerSurname}`.trim()

	return [
		`Reference: ${referenceId}`,
		`Submitted: ${new Date().toISOString()}`,
		'',
		section('Learner details', [
			['Surname', values.learnerSurname],
			['First name(s)', values.learnerFirstNames],
			['Known as', values.learnerKnownAs],
			['Date of birth', values.learnerDob],
			['Boy/Girl', values.learnerGender],
			['Grade applying for', values.grade],
			['Intended start term', values.startTerm],
			['Current school', values.currentSchool]
		]),
		section('Father details', parentRows(values, 'father')),
		section('Mother details', parentRows(values, 'mother')),
		section('Guardian / emergency contact', [
			['Full names', values.guardianFullNames],
			['ID number', values.guardianIdNumber],
			['Physical address', values.guardianPhysicalAddress],
			['Employer', values.guardianEmployer],
			['Occupation', values.guardianOccupation],
			['Work phone', values.guardianWorkPhone],
			['Home phone', values.guardianHomePhone],
			['Cellphone', values.guardianCellPhone],
			['Relationship to child', values.guardianRelationship]
		]),
		section('Transport', [
			['How the learner will arrive', values.transportMode],
			['Transport contact number', values.transportContactNo]
		]),
		section('Medical details', [
			['Asthma', yesNo(values.medicalAsthma)],
			['Heart condition', yesNo(values.medicalHeartCondition)],
			['Epilepsy', yesNo(values.medicalEpilepsy)],
			['Allergies', values.allergies],
			['Food allergies', values.foodAllergies],
			['Other medical conditions', values.otherMedicalConditions],
			['Doctor name', values.doctorName],
			['Doctor telephone', values.doctorTelephone],
			['Medical aid name', values.medicalAidName],
			['Medical aid number', values.medicalAidNumber],
			['Authorising parent', values.medicalParentName],
			['Witness', values.medicalWitness],
			['Date', values.medicalDate],
			['Place', values.medicalPlace]
		]),
		section('Indemnity', [
			['Full names', values.indemnityFullNames],
			['ID number', values.indemnityIdNumber],
			['Address', values.indemnityAddress],
			['Parent/guardian of', values.indemnityLearnerName],
			['Signed at', values.indemnityPlace],
			['Date', values.indemnityDate],
			['Parent/guardian typed signature', values.indemnityParentGuardian],
			['Witness', values.indemnityWitness],
			['Accepted indemnity', yesNo(values.indemnityAccepted)]
		]),
		section('Payment agreement', [
			['Payee', values.paymentPayeeName],
			['Payee ID number', values.paymentPayeeId],
			['Payment option', values.paymentOption],
			['Sibling status', values.siblingStatus],
			['Accepted payment agreement', yesNo(values.paymentAccepted)]
		]),
		section('Church contact', [
			['Church name', values.churchName],
			['Pastor / leader name', values.pastorName],
			['Telephone', values.pastorTelephone],
			['Email', values.pastorEmail]
		]),
		section('Declarations', [
			['POPIA consent', yesNo(values.popiaConsent)],
			['Admissions policy accepted', yesNo(values.admissionsPolicyAccepted)],
			['Fees policy accepted', yesNo(values.feesPolicyAccepted)],
			['Code of conduct accepted', yesNo(values.codeOfConductAccepted)],
			['Information declared truthful', yesNo(values.informationTruthful)],
			['Birth certificate unavailable', yesNo(values.birthCertificateUnavailable)],
			['Birth certificate impact acknowledged', yesNo(values.birthCertificateImpactAcknowledged)],
			['Previous report unavailable', yesNo(values.previousReportUnavailable)],
			['Typed signature', values.typedSignature],
			['Signature date', values.signatureDate],
			['Additional notes', values.additionalNotes]
		]),
		section(
			'Attached documents',
			files.map((file) => [file, 'Attached'])
		),
		'',
		`Learner: ${learnerName}`
	].join('\n')
}

function validateUploads(formData: FormData, values: ApplicationValues) {
	const errors: FormErrors = {}
	const files: UploadedFile[] = []
	let totalBytes = 0

	for (const documentField of requiredDocumentFields) {
		const isPreviousReport = documentField.name === 'previousReports'
		const isBirthCertificate = documentField.name === 'birthCertificateFile'
		const birthCertificateUnavailable = values.birthCertificateUnavailable === 'on'
		const required = isPreviousReport
			? values.previousReportUnavailable !== 'on'
			: isBirthCertificate
				? !birthCertificateUnavailable
				: true
		const fieldFiles = getFiles(formData, documentField.name)

		if (required && fieldFiles.length === 0) {
			errors[documentField.name] = [`${documentField.label} is required`]
			continue
		}

		if (
			isBirthCertificate &&
			birthCertificateUnavailable &&
			values.birthCertificateImpactAcknowledged !== 'on'
		) {
			errors.birthCertificateImpactAcknowledged = [
				'You must acknowledge that applying without a birth certificate will severely impact the application.'
			]
		}

		for (const file of fieldFiles) {
			files.push({ fieldName: documentField.name, label: documentField.label, file })
		}
	}

	for (const documentField of optionalDocumentFields) {
		for (const file of getFiles(formData, documentField.name)) {
			files.push({ fieldName: documentField.name, label: documentField.label, file })
		}
	}

	for (const upload of files) {
		totalBytes += upload.file.size
		const extension = getExtension(upload.file.name)

		if (!ALLOWED_EXTENSIONS.has(extension)) {
			errors[upload.fieldName] = [`${upload.label} must be a PDF, JPG, PNG, or WebP file`]
		}

		if (!ALLOWED_MIME_TYPES.has(upload.file.type)) {
			errors[upload.fieldName] = [`${upload.label} has an unsupported file type`]
		}
	}

	const tooLarge = totalBytes > MAX_TOTAL_UPLOAD_BYTES
	if (tooLarge) {
		errors.documents = [
			'The combined uploads must be under 3.8 MB. Please compress or scan smaller files.'
		]
	}

	return { errors, files, tooLarge }
}

function getFiles(formData: FormData, fieldName: string) {
	return formData
		.getAll(fieldName)
		.filter((entry): entry is File => entry instanceof File && entry.size > 0)
}

async function fileToAttachment(
	upload: UploadedFile,
	learnerSurname: string
): Promise<EmailAttachment> {
	const buffer = Buffer.from(await upload.file.arrayBuffer())
	const filename = [learnerSurname || 'learner', upload.label, upload.file.name]
		.map(safeFilePart)
		.filter(Boolean)
		.join('-')

	return {
		filename,
		content: buffer,
		contentType: upload.file.type
	}
}

function hasContact(values: ApplicationValues, prefix: 'father' | 'mother' | 'guardian') {
	const name = values[`${prefix}FullNames`] ?? ''
	const cellphone = values[`${prefix}CellPhone`] ?? ''
	return !isBlankOrNa(name) && !isBlankOrNa(cellphone)
}

function parentRows(values: ApplicationValues, prefix: 'father' | 'mother') {
	return [
		['Full names', values[`${prefix}FullNames`] ?? ''],
		['ID number', values[`${prefix}IdNumber`] ?? ''],
		['Physical address', values[`${prefix}PhysicalAddress`] ?? ''],
		['Postal address', values[`${prefix}PostalAddress`] ?? ''],
		['Employer', values[`${prefix}Employer`] ?? ''],
		['Occupation', values[`${prefix}Occupation`] ?? ''],
		['Work phone', values[`${prefix}WorkPhone`] ?? ''],
		['Home phone', values[`${prefix}HomePhone`] ?? ''],
		['Cellphone', values[`${prefix}CellPhone`] ?? ''],
		['Email', values[`${prefix}Email`] ?? '']
	]
}

function section(title: string, rows: string[][]) {
	const body = rows.map(([label, value]) => `${label}: ${value || 'N/A'}`).join('\n')
	return `=== ${title.toUpperCase()} ===\n${body}\n`
}

function getExtension(filename: string) {
	const index = filename.lastIndexOf('.')
	return index === -1 ? '' : filename.slice(index).toLowerCase()
}

function safeFilePart(value: string) {
	return value
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9.]+/g, '-')
		.replace(/^-+|-+$/g, '')
}

function hasErrors(errors: FormErrors) {
	return Object.values(errors).some((messages) => messages && messages.length > 0)
}

function yesNo(value: string) {
	return value === 'on' ? 'Yes' : 'No'
}

function isBlankOrNa(value: string) {
	const normalized = value.trim().toLowerCase()
	return (
		!normalized || normalized === 'n/a' || normalized === 'na' || normalized === 'not applicable'
	)
}
