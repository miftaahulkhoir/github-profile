// Connect to Github API

let https = require('https')

let get = (username) => {

const options = {
	hostname: 'api.github.com',
	port: 443,
	path: `/users/${username}`,
	method: 'GET',
	headers: {
		'user-agent': 'nodejs'
	}
}

// Read the data
let request = https.request(options, (response) => {
	let body = ''
	response.on('data', (data) => {
		body = body + data
	})
	response.on('end', () => {
		let profile = JSON.parse(body)
		if (response.statusCode === 200) {
			
		// Print the data out
		console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} follower(s).`)
		}
		else {
			console.log(`Profile with username '${username}' not found.`)
		}
		// Parse the data
		// Convert String to JSON (JavaScript object)
		
	})
	
	
})

request.end()

request.on('error', (e) => {
	console.error(e)
})
}

module.exports = {get}