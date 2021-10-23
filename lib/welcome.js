const
	{
		WAConnection,
		ReconnectMode,
		MessageType,
		ProxyAgent,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const { simih, getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./myfunctions')
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = conn = async (conn, anu) => {
if (!welkom.includes(anu.jid)) return
try {
		mem = anu.participants[0]
		console.log(anu)
if (anu.action == 'add' && !mem.includes(conn.user.jid)) {
const num = anu.participants[0]
const mdata = await conn.groupMetadata(anu.jid)
const pushnem = conn.contacts[num] != undefined ? conn.contacts[num].notify = undefined ? PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international') : conn.contacts[num].notify || conn.contacts[num].vname : PhoneNumber('+' + num.replace('@s.whatsapp.net', '')).getNumber('international')
const thu = await conn.getStatus(anu.participants[0], MessageType.text)
try {
var pp_user = await conn.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
teks = ` KEDATANGAN BEBAN KELUARGA BARUU NIH ${mdata.subject}
INI BEBANNYA AOWOKAOWL : @${num.split('@')[0]}
`

let bufff = await getBuffer(pp_user)
const buttonss = [
  {buttonId: '.', buttonText: {displayText: 'Welcome 👋'}, type: 1}
]
    const buttonMessage = {
    "imageMessage": {
	"url": "https://mmg.whatsapp.net/d/f/Ap_AmKkeN1oh582nukDy9wbPVwGDT9UdkjgCbANz8Kuv.enc",
	"mimetype": "image/jpeg",
	"fileSha256": "Nz2L1hvJiRonf5WkCkwTnZFp6EgDMweirXjlMh8SNDI=",
	"fileLength": "17707",
	"height": 720,
	"width": 720,
	"mediaKey": "PWpkLdxkzYWbQH8q2e6n8O+wvZ/8vgnGWX7xuj90M9E=",
	"fileEncSha256": "bTDFPW6+yeybyScSWewwm2epsY/ejDZdgRqZzWNTXQg=",
	"directPath": "/v/t62.7118-24/19975962_1069751140523360_8431046148724983468_n.enc?ccb=11-4&oh=ee5bc4ba06e11e29d66cb00532731610&oe=61752110",
	"mediaKeyTimestamp": "1632566111",
	"jpegThumbnail": bufff
},  contentText: teks ,
    footerText: 'WELCOME MESSAGE',
    buttons: buttonss,
    headerType: 4
}
conn.sendMessage(mdata.id, buttonMessage,MessageType.buttonsMessage,{contextInfo: {"mentionedJid": [num]}})
} else if (anu.action == 'remove' && !mem.includes(conn.user.jid)) {
const num = anu.participants[0]
const mdata = await conn.groupMetadata(anu.jid)
try {
var pp_user = await conn.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
let buff = await getBuffer(pp_user)
teks2 = `WTF. KOK @${num.split('@')[0]} LEFT?`
const buttonsss = [
  {buttonId: '.', buttonText: {displayText: 'Byeee '}, type: 1}
]
    const buttonMessagee = {
    "imageMessage": {
	"url": "https://mmg.whatsapp.net/d/f/Ap_AmKkeN1oh582nukDy9wbPVwGDT9UdkjgCbANz8Kuv.enc",
	"mimetype": "image/jpeg",
	"fileSha256": "Nz2L1hvJiRonf5WkCkwTnZFp6EgDMweirXjlMh8SNDI=",
	"fileLength": "17707",
	"height": 720,
	"width": 720,
	"mediaKey": "PWpkLdxkzYWbQH8q2e6n8O+wvZ/8vgnGWX7xuj90M9E=",
	"fileEncSha256": "bTDFPW6+yeybyScSWewwm2epsY/ejDZdgRqZzWNTXQg=",
	"directPath": "/v/t62.7118-24/19975962_1069751140523360_8431046148724983468_n.enc?ccb=11-4&oh=ee5bc4ba06e11e29d66cb00532731610&oe=61752110",
	"mediaKeyTimestamp": "1632566111",
	"jpegThumbnail": buff
},  contentText: teks2 ,
    footerText: 'LEAVE ASUUU',
    buttons: buttonsss,
    headerType: 4
}
conn.sendMessage(mdata.id, buttonMessagee,MessageType.buttonsMessage,{contextInfo: {"mentionedJid": [num]}})
}
} catch (e) {
console.log(e)
}
}
