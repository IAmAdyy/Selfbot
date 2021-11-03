const help = (f, pushname, time, kentodd, sender, prefix) => {
	return `
_こんにちは ${pushname} 👋_

「SELFBOT WEA」
_JAM : ${time}_
_Script : https://github.com/IAmAdyy/selfbot_
_Prefix : Multi Prefix_
_Runtime : ${kentodd}

[INGFO]
${f}sc_
${f}owner_
${f}ping_
${f}status_
${f}runtime_

[MULTI SESSION]
${f}jadibot_
${f}scan_
${f}stopjadibot_
${f}byebot_
${f}listjadibot_

[BAILEYS]
${f}isbaileys_
${f}q [reply]_

[EXECUTION]
_> [eval]_
_=> [eval async]_
_$ [code]_
${f}term [code]_

[OWNER]
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

[VIDEO DAN VIEN]
${f}tomp4 [reply sticker]_
${f}detikvideo [sec]_
${f}detikvn [sec]_
${f}tts [lang] [text]_

[ANIME]
${f}waifu_
${f}loli_
${f}husbu_

[PICTURE]
${f}cogan_
${f}cecan_
${f}darkjokes_

[GROUP]
${f}kick [reply]_
${f}add [reply]_
${f}group [button]_
${f}listadmin [admin group]_
${f}tagall [teks]_
${f}hidetag [teks]_
${f}rulesgroup [desc gc]_
${f}getpic [@tag]_

[YNTKTS]
${f}inspect [link grup]_
${f}readmore [text|text]_
${f}linkwa [query]_
${f}translate [lang] [text]_

[STICKER]
${f}sticker [image]_
${f}toimg [sticker]_

[DOWNLOADER]
${f}play [query]_
${f}video [query]_
${f}pinterest [query]_
${f}playstore [query]_
${f}igstory [username]_
${f}lirik [query]_

[SCOMMAND]
${f}addcmd_
${f}delcmd_
${f}listcmd_

[FUN]
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
