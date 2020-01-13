if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config()
}

let response = ''

if (process.env.NODE_ENV === 'development') {
	response = 'Hello this is the development database!'
	console.log(response, process.env.MAIN)
} else {
	response = 'Hello from the test environment!!'
}

module.exports = response
