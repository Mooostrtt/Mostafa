
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['201121968769'] //ur owner number
global.ownername = "khufu" //ur owner name
global.ytname = "YT: khufu" //ur yt chanel name
global.socialm = "GitHub: khufu737" //ur github or insta name
global.location = "eg, g,y" //ur location

//bot bomdy 
global.ownernomer = "201121968769" //ur number
global.premium = ['201121968769'] //ur premium number
global.botname = 'ᴹᴿ᭄ Bot Whatsapp ×፝֟͜×️' //ur bot name
global.linkz = "https://chat.whatsapp.com/Ivno4IbIyxMKSgyg6f1dKw" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtube.com/@khufualmoz3g974" //ur website to be displayed
global.botscript = 'https://youtube.com/@khufualmoz3g974' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "خوفو ص المزعجين ☺️" //ur sticker watermark packname
global.author = "201121968769" //ur sticker watermark author
global.wm = "khufu." //ur watermark

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'ضن☺️',
    admin: 'الادمن فقط ',
    botAdmin: 'لازم اكون ادمن',
    premime: 'اعضاء المميزين فقط',
    owner: 'الامر ده ل مالك بوت',
    group: 'رومات فقط!',
    private: 'برايفت بس',
    bot: 'امر ده ل بوت',
    wait: 'استني...',
    linkm: 'فين لينك',
    endLimit: 'تعالي بكره بق ☺️',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
