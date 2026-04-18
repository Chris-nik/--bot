const TelegramBot = require('node-telegram-bot-api');

// မင်းရဲ့ Bot Token
const token = '8439630262:AAEdEcF9lbA1QpgtAsutm_X9pzOAH50NgQI';
const bot = new TelegramBot(token, {polling: true});

console.log("🤖 Bot is running independently...");

bot.on('message', (msg) => {
    // ဒီနေရာမှာ မင်းလိုချင်တဲ့ Auto-reply ရေးပါ
    bot.sendMessage(msg.chat.id, "ငွေထည့်ရန် အကောင့် Username (သို့မဟုတ်) Gmail ပို့ပေးပါ။");
}); 