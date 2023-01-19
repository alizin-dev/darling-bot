const {
	default: makeWASocket,
		DisconnectReason,
		useSingleFileAuthState,
		downloadContentFromMessage,
		makeInMemoryStore,
		prepareWAMessageMedia,
		generateWAMessageFromContent,
		proto
	} = require('@adiwajshing/baileys');

const fetch = require('node-fetch')
	const axios = require('axios')
	const fs = require('fs')


const sleep = async (ms) => {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	const valueJSON = url => {
		return fetch(url)
		.then(response => 
		 response.json()
)
.catch(err => {
	console.log(err)
});
};

module.exports = {
		valueJSON,
		sleep,
	}