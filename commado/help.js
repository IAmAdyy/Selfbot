const help = (f, pushname, time, kentodd, sender) => {
	return `_Hello ${pushname} 👋_

⎙ _Info Bot_
🔖 _Base : https://github.com/adulalhy/SZ-SELF_
🔖 _Recode : Adii_
🔖 _Script : https://github.com/IAmAdyy/Selfbot_
🔖 _Bot Name : AdyyBot_
🔖 _Prefix : Multi Prefix_
🔖 _Runtime : ${kentodd}_

🌹 _Other Information_
🔖 _Username : ${pushname}_
🔖 _Number : wa.me/${sender.split('@')[0]}_
🔖 _Time : ${time}_

🌹 _Info_
\`\`\`
${f}sc
${f}owner
${f}ping
${f}status
${f}runtime
${f}tes
\`\`\`

🌹 _Other Menu_
\`\`\`
${f}japanesemenu
${f}russianmenu
${f}menufvn
${f}menuftoko
\`\`\`

🌹 _Multi Session_
\`\`\`
${f}jadibot
${f}scan
${f}stopjadibot
${f}byebot
${f}listjadibot
\`\`\`

🌹 _Owner Bot_
\`\`\`
🔖 > [eval]
🔖 => [eval async]
🔖 $ [code]
${f}term [code]
${f}upswteks [teks]
${f}upswvideo [send video]
${f}upswimage [send image]
${f}mode [button]
${f}setprefix [buttton]
${f}SETPREFIX2
${f}antiviewonce [button]
${f}setfakeimg [reply]
${f}setthumb [reply]
${f}bc [teks]
${f}setimagereply
${f}clearall [all chat]
${f}setpp [reply picture]
${f}setpp2full [error]
${f}leave [group]
${f}q [reply]
${f}get [link]
${f}sider [reply]
${f}take [author|packname]
${f}virtex [virus]
${f}setnama [name]
${f}sherelock [text|text]
\`\`\`

🌹 _Video/Vn_
\`\`\`
${f}tomp4 [reply sticker]
${f}detikvideo [sec]
${f}detikvn [sec]
${f}tts [lang] [text]
\`\`\`

🌹 _Anime_
\`\`\`
${f}waifu
${f}loli
${f}husbu
\`\`\`

🌹 _Pictures_
\`\`\`
${f}cogan
${f}cecan
${f}darkjokes
\`\`\`

🌹 _Group_
\`\`\`
${f}kick [reply]
${f}add [reply]
${f}group [button]
${f}listadmin [admin group]
${f}tagall [teks]
${f}hidetag [teks]
${f}rulesgroup [desc gc]
${f}getpic [@tag]
\`\`\`

🌹 _Other_
\`\`\`
${f}inspect [link grup]
${f}readmore [text|text]
${f}linkwa [query]
${f}translate [lang] [text]
\`\`\`

🌹 _Sticker_
\`\`\`
${f}sticker [image]
${f}toimg [sticker]
\`\`\`

🌹 _Downloader_
\`\`\`
${f}play [query]
${f}video [query]
${f}pinterest [query]
${f}playstore [query]
${f}igstory [username]
${f}lirik [query]
\`\`\`

🌹 _Sticker Command_
\`\`\`
${f}addcmd
${f}delcmd
${f}listcmd
\`\`\`

🌹 _Fun_
\`\`\`
${f}jadian
${f}ganteng
${f}beban
${f}cantik
${f}jelek
${f}nganggur
${f}hebat
${f}wibu
${f}pakboy
${f}pakgirl
${f}sange
${f}nolep
${f}jahat
${f}baik
\`\`\`

_FITURNYA DIKIT AJA. JANGAN BULLY SAIA_
`
}

exports.help = help
