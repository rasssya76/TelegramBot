//require("dotenv").config();
const { fileURLToPath } = require("url");
const fs = require("fs");

  //Settt
  global.owner = "itsme_ram7pntx",
  global.token = "6911148528:AAE8X_s4WBw3B0XL8gDI6usnqPlBejGta4o",
  //WM
  global.wm = "Made With R-BOT",
  //Link
  global.sgc = "https://t.me/chatpubb",
  //API
  global.APIs = {
    arifzyn: "https://api.arifzyn.biz.id"
  },
  global.APIKeys = {
    "https://api.arifzyn.biz.id": ""
  },
  //MSG
  global.msg = {
    error: "Internal Server Eror.",
    owner: "Sorry, this command can only be accessed by the owner!",
    group: "Sorry, this command can only be used within a group!",
    wait: "Your request is being processed...",
  }

let fileP = require.resolve(__filename);
fs.watchFile(fileP, () => {
  fs.unwatchFile(fileP);
  console.log(`[ UPDATE ] file => "${fileP}"`);
  delete require.cache[fileP];
  require(`${fileP}?update=${Date.now()}`);
});

