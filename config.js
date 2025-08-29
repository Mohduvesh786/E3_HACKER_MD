const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERseGxiTGs4bXQ5U2ZpMXZFMTVTS25vZ2tCVWZTWGhzenE3ZUVwaU1VMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVGRmNE9rTW0xdjlFT2tBdjJkQTFMWXh0VUl1Y3hudjFoNVFlYUNKNCtqVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDUFFlWXdkVDQrTE5lQmxlcU9OMm4vdkpsSWRDdnZYREVtVWNCVzJ2NTFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUb1ZoSHZ1dzdrem12dTZkT04rVWhMZ1dHWVoxcWwyRTJLWnZxam5GZ2djPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNLMWRjWUpWTmgrRjk0bkJ5MUlRS3NkcTE0WjlST3Bjc1hlUFdTcitLMlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdRVEJDNDBaWlU2eloyYVhCK0JtTkZuOFNYNlYzdHlJZjNVcWtxMlVtV1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0t0YW5SQ2JHeTNNNVB3b2dDNHRKcjNUVm0zZEFqdUp3MGlYb2Npd2dYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTkvU0Q5T2grRDB1dUJVeDBkZGhyT0FtdWlvdlVQaVNxVWczZXBzdkttcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE1ZFJtUW41R2trQmlSZUM5cUNjNkg5ZTJjN2lyT3E5dDVTamxic3RSRXQ4UlVXM3JoS3BhaXRoOHpwemVpZjJvMXVqZzZBWER1ME5JZjhRR2Z2aUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6Ik5KbUtDcXhPZzdLcmhYem1tSjFTL3VFVzRoNjhTQkdFanBUcGtXallJTFk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE4NzUwOTM2MjMwQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjVCMzU1M0NDMDFDQkU5NjQxNkU1MzRGNTA0NkZEMjlFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTY0NDEwMzB9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxODc1MDkzNjIzMEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI2MEQyQTJBRUE1MTRBRUMwMEQ4Rjk3QjM0N0EyNTFEQSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2NDQxMDMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTg3NTA5MzYyMzBAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDY3MEZFOEFFRkRCNEExNjZCOTYzMzQzRDA1Q0JFMTUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NjQ0MTAzM31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiQjVHWTVGOTYiLCJtZSI6eyJpZCI6IjkxODc1MDkzNjIzMDoxQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjg5NjQ5Mjc0NTEyMjA6MUBsaWQiLCJuYW1lIjoidXJ2cyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGZodTRFRkVNTFR4TVVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiM2tYOFFreFJaQjlFeGFnazFpRmFyQldkOW5Sc2hMdjllRWkwa0JQRVVGOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUzBWMHMwYitzOWJRL0I0MURHc1NvSkYvN1RxU0FIQ2FIMGZTK2Q1TFNESlFyOE5UNjVXV3JKaE5GSm5KaVdHTzNTaWRGZGhuRWlpNnl6T0lwK3V0REE9PSIsImRldmljZVNpZ25hdHVyZSI6IjhCbjBxTUpEcHd2cUFxam41MHA4eENOVXRwZ0RncWQ1Q1A4UThLTUxIVmlKWnNvd0VBd0pEQk1Ja01NNzZucWtCQU1XaFNieUFDZGsrU1JXbFpxRUFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4NzUwOTM2MjMwOjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDVGL0VKTVVXUWZSTVdvSk5ZaFdxd1ZuZlowYklTNy9YaEl0SkFUeEZCZiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU2NDQxMDI4LCJsYXN0UHJvcEhhc2giOiIyTUZLUFEiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU94MCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍-𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/iyudhj.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3-𝙃𝘼𝘾𝙆𝙀𝙍,-𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3-HACKER-MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3-HACKER-MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/iyudhj.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
