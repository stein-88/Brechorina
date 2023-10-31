export const { API_URL } = process.env
export const PENTA_ASSETS = `https://storage.googleapis.com/${process.env.PENTA_BUCKET}/`
export const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])((?=.*[!@#$%^&*])|(?=.*?[0-9])).{8,}$/
export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
