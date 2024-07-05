//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "dextermd556@gmail.com";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";  
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUs5RkUyVC91aEFwWXhVbDVtQVQrNFZiUDBNczFJVHZNZEpkRDdmK3Jsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDkzY09TQmQ2VnUrREZMUVBST0lNNUZjNmdmcytXMytsMHViLzJQZU1WTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTE1IcFJNdlZzU1RtNW5JbU9OVzd2YWthaWkyTGxyTnVnTVVoOWVJaEU0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxczkzSWZrT0VoMDd2V29uZXA0Q3ZncTRFOVQ1YU83ZXl0cFV1RXloR0RVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNL0Z0YjhIanFWa0pxZHVIN1Z0MCtRL3UwRit3T3RNcnJvQXcrTTJHWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjllQVB4aHZLUHZyeUpzTlM3a0FleDgvbDRyTEtDeGtUWnlTRE1jbTN4WFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0k2VVBXOTM4YmFvQ05oVWNVeDJWWndBOWNnK3dGS2lRRVdTQi9oVWFYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVlqUGJ6YnpBdEhYK0I1QU0vMzNqdGlkTkdYWUZxaDVUMi9NUzdldWdEUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks5aFlNd1hqRHRVbTlmcjM4VW5VSkY1bFdQVUluSDFUUlU3K0VNSlg2dTU2bEdicGs4VXU1WHc2bDZxQTFVcE9nUi94SFozVWNaamR1WlBjVzhvampRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg3LCJhZHZTZWNyZXRLZXkiOiJqNG5FMTUzSjJFSlp1M2ZkZWlFT1U3d0J1WmVDNEZRcDdhbVRaL1ZBVUhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfTWpHSVVudlFEeVpQcElScWZQRGF3IiwicGhvbmVJZCI6IjZiOTQ5YjkxLTJlOWMtNGI4Zi05M2Y0LTAyM2ZiYzc4OWQzMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkWE14Z2svd096ZzgxczdvUDdqODhVcGk4bmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXlTWDlIVktFQmJQaEpnb01xYzJaaXBXbUM4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllBWDNKRDRNIiwibWUiOnsiaWQiOiI5NDc1NDg5ODM5OTo1NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJAX8yCzILMguKBseG1kOG1ic2cy6LKsOGthF/MgsyCzIJAIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLSDV0N1VIRUlDaW5yUUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJZdzVZR3R6RlV5eGJBVlhodElSUzUyYk5jOTJlTUcvd2lUek53UnNlYVY0PSIsImFjY291bnRTaWduYXR1cmUiOiJGVlo0bmlieDA0MDdDbzhQT2U4VlJzbGEzUTBwVVFtbHJUUWE2L2ZrWUxJUXlzYzdVRjU2ZEtzclJVaitOQmR1RFRtOFBSRHVUUTV5aWFwZjlkc2lBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibXdZYmI4ZC9iT3Y5akxEQTRoc2lYWEh2VHZZV2VCZ0xZZlNad2xsL21UYUg2Smx2cC9TalN4Rkhhcng0bnEyNEZjK3o5VEY3bVpEZFlSSE0xdEVLaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1NDg5ODM5OTo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXTU9XQnJjeFZNc1d3RlY0YlNFVXVkbXpYUGRuakJ2OElrOHpjRWJIbWxlIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMTYwNTI1fQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🇱🇰 P͢O͢W͢E͢R͢ B͢Y͢ R͢C͢D͢ M͢D͢",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐈𝐌𝐄𝐒𝐇 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝐃𝐄𝐗𝐓𝐄𝐑,𝐕𝐈𝐏𝐄𝐑",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RCD").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
