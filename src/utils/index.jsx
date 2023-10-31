import ReactGA from 'react-ga4'
import $ from 'jquery'

export const isLogin = () => false

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const handleAll = (ev, callback) => {
	if (!ev || !ev.target || !callback) return null
	const {
		type, value, id, name, checked,
	} = ev.target
	const key = type === 'radio' ? name : id
	let finalValue = value
	if (type === 'checkbox') finalValue = checked
	if (type === 'radio') finalValue = id
	return callback({
		[key]: finalValue,
	}, ev.target)
}

export const validChar = (wordName) => {
	if (typeof wordName !== 'string') return false
	return !!(wordName && wordName !== '' && wordName.trim() !== '')
}

export const validArrayChar = (wordArrays) => {
	if (!wordArrays || !wordArrays.length) return false
	return !(wordArrays.filter((cv) => validChar(cv) === false).length > 0)
}

export const validEmail = (finalValue) => {
	if (!finalValue) return null
	return EMAIL_REGEX.test(finalValue.toLowerCase())
}

export const eventsGoogleAnalytics = (events) => {
	if (process.env.ENVIRONMENT === 'production') {
		ReactGA.event(events)
	} else {
		console.log(events)
	}
}

export const helperCloser = () => $('#modalCenter').modal('hide')

export const scrollSome = (top, left, behavior) => window.scrollTo({
	top: top || 0,
	left: left || 0,
	behavior: behavior || 'smooth',
})

export const scrollBind = (referenceId) => {
	try {
		const scrollDiv = document.querySelector(`#${referenceId}`)
		if (!scrollDiv) return null
		return scrollDiv.scrollIntoView({ behavior: 'smooth' })
	} catch (err) {
		console.log(err)
		return null
	}
}

export const stringRefDrop = (addre) => {
	if (!addre?.length) return null
	return addre?.map((cv) => {
		if (!cv) return null
		return {
			value: cv,
			label: cv,
		}
	}).filter((obj) => obj)
}

export const UpperFirst = (sentence) => {
	if (!sentence || (typeof sentence !== 'string')) return null
	/* eslint-disable */
	const finalSentece = sentence.toLowerCase()
	/* eslint-enable */
	return `${finalSentece.charAt(0).toUpperCase()}${finalSentece.slice(1)}`
}

export const handleHashUrl = (props) => {
	const { hash, base, redirect } = props || {}
	if (!hash || !redirect) return null
	const mainDoc = document.querySelector(`#${hash}`)
	if (mainDoc && (!base || (base && window.location.pathname === base))) return scrollBind(hash)
	window.location.href = redirect
	return null
}
