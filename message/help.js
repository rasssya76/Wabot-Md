const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x))
	 x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*「 ${setting.botName} 」*
	
 _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_
  
  *INFO BOT*
 _Library : *Baileys-MD*._
 _Prefix : ( ${prefix} )_
 _Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
 _Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_

  *INFO USER*
 _Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}_
 _Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}_
 _Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}_
 _Balance : $${toCommas(getBalance(sender, balance))}_

 _*My Feature*_
 ≻ ${prefix}menu
 ≻ ${prefix}owner
 ≻ ${prefix}donasi
 ≻ ${prefix}speed
 ≻ ${prefix}runtime
 ≻ ${prefix}cekprem
 ≻ ${prefix}listprem

 _*Feature Converter/Tools*_
 ≻ ${prefix}sticker
 ≻ ${prefix}toimg
 ≻ ${prefix}tovid

 _*Feature Downloader*_
 ≻ ${prefix}play
 ≻ ${prefix}tiktok
 ≻ ${prefix}ytmp4
 ≻ ${prefix}ytmp3
 ≻ ${prefix}getvideo
 ≻ ${prefix}getmusic
 ≻ ${prefix}instagram
 ≻ ${prefix}facebook
 
 _*Feature Random*_
 ≻ ${prefix}quote
 ≻ ${prefix}cecan
 ≻ ${prefix}cogan
 ≻ ${prefix}naruto
 ≻ ${prefix}loli
 ≻ ${prefix}waifu
 ≻ ${prefix}husbu
 
 _*Feature Search*_
 ≻ ${prefix}lirik
 ≻ ${prefix}grupwa
 ≻ ${prefix}ytsearch
 ≻ ${prefix}pinterest Query
 
 _*Feature Game*_
 ≻ ${prefix}tictactoe
 ≻ ${prefix}delttc
 ≻ ${prefix}tebakgambar
 
 _*Payment & Bank*_
 ≻ ${prefix}buylimit
 ≻ ${prefix}buyglimit
 ≻ ${prefix}transfer
 ≻ ${prefix}limit
 ≻ ${prefix}balance
 ≻ ${prefix}topbalance
 
 _*Feature Only Group*_
 ≻ ${prefix}linkgrup
 ≻ ${prefix}setppgrup
 ≻ ${prefix}setnamegc
 ≻ ${prefix}setdesc
 ≻ ${prefix}group
 ≻ ${prefix}revoke
 ≻ ${prefix}hidetag
 
 _*Feature Only Owner*_
 > evalcode
 x evalcode-2
 $ executor
 ≻ ${prefix}setppbot
 ≻ ${prefix}exif
 ≻ ${prefix}leave
 ≻ ${prefix}addprem
 ≻ ${prefix}delprem

*THANKS TO*
- Riyan
- Arasya
- RamaGans
- Xyann

`+'\`\`\`Powered by Nodejs\`\`\`'
}
