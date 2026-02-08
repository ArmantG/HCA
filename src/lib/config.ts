export const config = {
	title: '',
	subTitle: '',
	siteTitle: '',
	author: '',
	headerTitle: '',
	description: '',
	siteLanguage: 'en-ZA',
	language: 'en-ZA',
	theme: '', // system, dark or light
	domain: '',
	siteUrl: '',
	siteLogo: '',
	image: '',
	email: '',

	ogLanguage: 'en-ZA',
	primaryColor: '',
	locale: 'en-ZA',

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	newsletter: 'emailoctopus',


}




export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
}

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false // true or false
}
