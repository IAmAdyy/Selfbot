const { WAConnection:_WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
const simple = require('../lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)


const buttonmenu = async(reply, pushname, time, from) => {
	conn = new WAConnection();
	reply('[❗] Tunggu woy.')
        await conn.send2ButtonLoc(from, await (await fetch('https://telegra.ph/file/a9b9532c377dc2f152d1e.jpg')).buffer(), `Hello ${pushname} 👋

_Welcome to Simple Menu_

Bot Name : AdyyBot
Time : ${time} 
Your Name : ${pushname}`, 'Jika button tidak muncul\nsilahkan ketik .command', 'Command', '.command', 'Sc Bot', '.sc')
}

module.exports = buttonmenu
