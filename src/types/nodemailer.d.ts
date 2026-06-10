declare module 'nodemailer' {
	export type SendMailOptions = {
		from: string
		to: string
		subject: string
		text: string
		replyTo?: string
		attachments?: {
			filename: string
			content: Buffer
			contentType?: string
		}[]
	}

	export type TransportOptions = {
		host: string
		port: number
		secure: boolean
		auth?: {
			user: string
			pass: string
		}
	}

	export type Transporter = {
		sendMail: (options: SendMailOptions) => Promise<unknown>
	}

	export function createTransport(options: TransportOptions): Transporter

	const nodemailer: {
		createTransport: typeof createTransport
	}

	export default nodemailer
}
