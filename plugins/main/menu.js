const tags = {
  ai: "AI CMD",
  download: "DOWNLOAD CMD",
  owner: "OWNER CMD",
  info: "INFO CMD",
  game: "GAME CMD",
};

module.exports = {
  command: ["menu"],
  help: ["menu"],
  tags: ["info"],
  run: async (bot, { msg }) => {
    const Start = new Date();

    const now = new Date();
    const uptimeMilliseconds = now - Start;
    const uptimeSeconds = Math.floor(uptimeMilliseconds / 1000);
    const uptimeMinutes = Math.floor(uptimeSeconds / 60);
    const uptimeHours = Math.floor(uptimeMinutes / 60);

    let menuText = ``

    const help = Array.from(plugins.values()).map((plugin) => {
      return {
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
      };
    });

    for (let plugin of help)
      if (plugin && "tags" in plugin)
        for (let tag of plugin.tags) if (!(tag in tags) && tag) tags[tag] = tag;
    Object.keys(tags).map((tag) => {
      menuText += ` | ${tags[tag]} | \n`;
      help
        .filter((menu) => menu.tags && menu.tags.includes(tag) && menu.help)
        .map((menu) => {
          menu.help.map((help) => {
            menuText += `• ${help ? help : ""}\n`;
          });
        });
      menuText += "\n";
    });

    //menuText += `Powered By © <a href="https://api.arifzyn.biz.id">Arifzyn API</a>`;
    const replyMarkup = {
        reply_markup: {
          inline_keyboard: [
            [{ text: "How to use", callback_data: "tiktok_audio" }],
          ],
        },
      };
    await msg.sendReply(menuText, replyMarkup)
    //await msg.sendReply(
    // menuText
     //   )
    bot.on("callback_query", async (ctx) => {
        const action = ctx.callbackQuery.data;
        switch (action) {
          case "tiktok_audio":
            msg.sendReply(` | How to use |
                
• OPENAI
Menjawab pertanyaan dengan command!
${prefix}ai pertanyaan
example; ${prefix}ai apa itu ai?

Membuat image sesuai perintah
${prefix}dalle prompt
example; ${prefix}dalle anime girl

• BING
Menjawab pertanyaan dengan command!
${prefix}bing pertanyaan
example; ${prefix}bing apa itu manusia?

Membuat image sesuai perintah
${prefix}bingimg prompt
example; ${prefix}bingimg orang hitam berkacamata

• SEARCH
Mencari foto sesuai dengan yang kamu inginkan
${prefix}pinterest nama foto
example; ${prefix}pinterest anime

`)
            break;
          default:
        }
      });   
  },
};                
function getDayName(dayIndex) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayIndex];
}
