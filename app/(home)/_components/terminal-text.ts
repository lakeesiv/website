import siteConfig from "site.config";

const coloredText = (text: string, color: string) =>
  `<span style='color:${color}'>${text}</span>`;

const stats = "`" + JSON.stringify(siteConfig.stats, null, 4);
+"`";

const kewordColor = "#dcce81";
const stringColor = "#9a3b2f";
const blueColor = "#7399e6";

const terminalStart =
  "`<span style='color:#c3e87b'>@lakeesiv</span><span style='color:#7399e6'>/website</span> <span style='color:#b01a1a'>(master)</span> $ `";

const fetchText = coloredText("fetch", kewordColor);
const thenText = coloredText("then", kewordColor);
const jsonText = coloredText("json", kewordColor);
const consoleText = coloredText("console.log", kewordColor);

const fetchReqUrl = coloredText(
  '`"https://lakeesiv.com/about/me/"`',
  stringColor
);
const resText = coloredText("res", blueColor);

const terminalText = '<termialStart>^1000 node ^1000\n\
`Welcome to Node.js v20.6.0.\n\
Type ".help" for more information.`\n\
`>`^1000 <fetchText>(<fetchReqUrl>).<thenText>(<resText> => <resText2>.<jsonText>()).<thenText>(<consoleText>) ^1000\n'
  .concat(`${stats}`)
  .replace("<termialStart>", terminalStart)
  .replace("<fetchText>", fetchText)
  .replace("<thenText>", thenText)
  .replace("<fetchReqUrl>", fetchReqUrl)
  .replace("<resText>", resText)
  .replace("<resText2>", resText)
  .replace("<jsonText>", jsonText)
  .replace("<consoleText>", consoleText);

export default terminalText;
