import nodemailer, { type Transporter } from 'nodemailer';
import { env } from '$env/dynamic/private';

export type EmailPayload = {
	to: string;
	subject: string;
	text: string;
	replyTo?: string;
};

let cachedTransport: Transporter | null = null;

function getTransport() {
	if (cachedTransport) return cachedTransport;

	const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = env;

	if (!SMTP_HOST || !SMTP_PORT) {
		throw new Error('SMTP is not configured. Missing SMTP_HOST or SMTP_PORT.');
	}

	const port = Number(SMTP_PORT);
	cachedTransport = nodemailer.createTransport({
		host: SMTP_HOST,
		port,
		secure: port === 465,
		auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined
	});

	return cachedTransport;
}

export function isEmailConfigured() {
	return Boolean(env.SMTP_HOST && env.SMTP_PORT && env.SMTP_FROM);
}

export async function sendEmail(payload: EmailPayload) {
	const { SMTP_FROM } = env;

	if (!SMTP_FROM) {
		throw new Error('SMTP_FROM is not configured.');
	}

	const transport = getTransport();

	await transport.sendMail({
		from: SMTP_FROM,
		to: payload.to,
		subject: payload.subject,
		text: payload.text,
		replyTo: payload.replyTo
	});
}
