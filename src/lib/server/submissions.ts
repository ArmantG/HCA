import { env } from '$env/dynamic/private';

export type SubmissionType = 'general' | 'admissions';

export type Submission = {
	id: string;
	type: SubmissionType;
	name: string;
	email?: string;
	phone: string;
	message: string;
	createdAt: string;
	metadata?: Record<string, string>;
};

const submissions: Submission[] = [];

export function recordSubmission(submission: Submission) {
	submissions.unshift(submission);

	if (submissions.length > 200) {
		submissions.pop();
	}

	return submission;
}

export function getSubmissions() {
	return submissions;
}

export function isXataEnabled() {
	return Boolean(env.XATA_API_KEY && env.XATA_DATABASE_URL);
}
