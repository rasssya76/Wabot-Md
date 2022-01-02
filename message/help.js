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
 _• ${prefix}menu_
 _• ${prefix}owner_
 _• ${prefix}donasi_
 _• ${prefix}speed_
 _• ${prefix}runtime_
 _• ${prefix}cekprem_
 _• ${prefix}listprem_

 _*Feature Converter/Tools*_
 _• ${prefix}sticker_
 _• ${prefix}toimg_
 _• ${prefix}tovid_

 _*Feature Downloader*_
 _• ${prefix}play_
 _• ${prefix}tiktok_
 _• ${prefix}ytmp4_
 _• ${prefix}ytmp3_
 _• ${prefix}getvideo_
 _• ${prefix}getmusic_
 _• ${prefix}instagram_
 _• ${prefix}facebook_
 
 _*Feature Random*_
 _• ${prefix}quote_
 _• ${prefix}cecan_
 _• ${prefix}cogan_
 _• ${prefix}naruto_
 _• ${prefix}loli_
 _• ${prefix}waifu_
 _• ${prefix}husbu_
 
 _*Feature Search*_
 _• ${prefix}lirik_
 _• ${prefix}grupwa_
 _• ${prefix}ytsearch_
 _• ${prefix}pinterest_ Query
 
 _*Feature Game*_
 _• ${prefix}tictactoe_
 _• ${prefix}delttc_
 _• ${prefix}tebakgambar_
 
 _*Payment & Bank*_
 _• ${prefix}buylimit_
 _• ${prefix}buyglimit_
 _• ${prefix}transfer_
 _• ${prefix}limit_
 _• ${prefix}balance_
 _• ${prefix}topbalance_
 
 _*Feature Only Group*_
 _• ${prefix}linkgrup_
 _• ${prefix}setppgrup_
 _• ${prefix}setnamegc_
 _• ${prefix}setdesc_
 _• ${prefix}group_
 _• ${prefix}revoke_
 _• ${prefix}hidetag_
 
 _*Feature Only Owner*_
 *> evalcode*
 *x evalcode-2*
 *$ executor*
 _• ${prefix}setppbot_
 _• ${prefix}exif_
 _• ${prefix}leave_
 _• ${prefix}addprem_
 _• ${prefix}delprem_

*THANKS TO*
- Riyan
- Arasya
- RamaGans
- Xyann

`+'\`\`\`Powered by Nodejs\`\`\`'
}
