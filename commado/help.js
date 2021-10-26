const help = (f, pushname, time, kentodd, sender) => {
	return `
🌹 _Info Bot_
🔖 _Script : https://github.com/IAmAdyy/Selfbot_
🔖 _Prefix : Multi Prefix_
🔖 _Runtime : ${kentodd}_
🔖 _Language : JavaScript_
🔖 _Framework : NodeJS_

🌹 _Info User_
🔖 _Username : ${pushname}_
🔖 _Number : wa.me/${sender.split('@s.whatsapp.net')[0]}_

🔖 _Time : ${time}_

🌹 _Info_
${f}sc_
${f}owner_
${f}ping_
${f}status_
${f}runtime_
${f}tes_

🌹 _Other Menu_
${f}japanesemenu_
${f}russianmenu_

🌹 _Multi Session_
${f}jadibot_
${f}scan_
${f}stopjadibot_
${f}byebot_
${f}listjadibot_

🌹 _Baileys_
${f}isbaileys_
${f}q [reply]_

🌹 _Virus & Bug (beta)_
${f}virtex

🌹 _Execution_
🔖 _> [eval]_
🔖 _=> [eval async]_
🔖 _$ [code]_
${f}term [code]_

🌹 _Owner Bot_
${f}upswteks [teks]_
${f}upswvideo [send video]_
${f}upswimage [send image]_
${f}mode [button]_
${f}setprefix [buttton]_
${f}antiviewonce [button]_
${f}setfakeimg [reply]_
${f}setthumb [reply]_
${f}bc [teks]_
${f}setimagereply_
${f}clearall [all chat]_
${f}setpp [reply picture]_
${f}leave [group]_
${f}get [link]_
${f}sider [reply]_
${f}take [author|packname]_
${f}setnama [name]_
${f}sherelock [text|text]_
${f}welcome [1/0]_

🌹 _Video/Vn_
${f}tomp4 [reply sticker]_
${f}detikvideo [sec]_
${f}detikvn [sec]_
${f}tts [lang] [text]_

🌹 _Anime_
${f}waifu_
${f}loli_
${f}husbu_

🌹 _Pictures_
${f}cogan_
${f}cecan_
${f}darkjokes_

🌹 _Group_
${f}kick [reply]_
${f}add [reply]_
${f}group [button]_
${f}listadmin [admin group]_
${f}tagall [teks]_
${f}hidetag [teks]_
${f}rulesgroup [desc gc]_
${f}getpic [@tag]_

🌹 _Other_
${f}inspect [link grup]_
${f}readmore [text|text]_
${f}linkwa [query]_
${f}translate [lang] [text]_

🌹 _Sticker_
${f}sticker [image]_
${f}toimg [sticker]_

🌹 _Downloader_
${f}play [query]_
${f}video [query]_
${f}pinterest [query]_
${f}playstore [query]_
${f}igstory [username]_
${f}lirik [query]_

🌹 _Sticker Command_
${f}addcmd_
${f}delcmd_
${f}listcmd_

🌹 _Fun_
${f}jadian_
${f}ganteng_
${f}beban_
${f}cantik_
${f}jelek_
${f}nganggur_
${f}hebat_
${f}wibu_
${f}pakboy_
${f}pakgirl_
${f}sange_
${f}nolep_
${f}jahat_
${f}baik_`
}

exports.help = help
