const syntaxerror = require("syntax-error");
const util = require("util");

module.exports = {
  command: [">", "=>"],
  tags: ["owner"],
  help: [">"],
  run: async (bot, { msg, args, command }) => {
    let txt = command == "=>" ? "return " + args.join(" ") : args.join(" ");
    try {
      let text = util.format(await eval(`(async()=>{ ${txt} })()`));
      if (text.length <= 4096) await msg.sendReply(text);
      else
        for (const teks of text.match(/(.|[\r\n]){1,4096}/g))
          await msg.sendReply(teks);
    } catch (e) {
      let _syntax = "";
      let _err = util.format(e);
      let err = syntaxerror(args.join(" "), "EvalError", {
        allowReturnOutsideFunction: true,
        allowAwaitOutsideFunction: true,
        sourceType: "module",
      });
      if (err) _syntax = err + "\n\n";
      msg.sendReply(util.format(_syntax + _err));
    }
  },
  owner: true,
  noPrefix: true,
};
