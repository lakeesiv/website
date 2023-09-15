"use client";

import React, { FC, HTMLAttributes, useEffect, useRef } from "react";
import Typed from "typed.js";
import siteConfig from "site.config";

interface TerminalProps extends HTMLAttributes<HTMLDivElement> {}

const Terminal: FC<TerminalProps> = ({}) => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const stats = "`" + JSON.stringify(siteConfig.stats, null, 4);
    +"`";

    const terminalStart =
      "`<span style='color:#c3e87b'>@lakeesiv</span> 🠖 <span style='color:#7399e6'>/website</span> <span style='color:#b01a1a'>(master)</span> $ `";

    const text = [
      '<termialStart>^1000 node ^1000 \n `Welcome to Node.js v20.6.0.\n Type .help for more information.`\n `>`^1000 fetch("https://lakeesiv.com/about/me/").then(res => res.json()).then(console.log) ^1000\n'
        .concat(`${stats}`)
        .replace("<termialStart>", terminalStart),
    ];

    const options = {
      strings: text,
      typeSpeed: 40,
      backSpeed: 0,
      loop: false,
      cursorChar: "_",
    };
    typed.current = new Typed(el.current, options);

    return () => {
      typed?.current?.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-[80%]  bg-black rounded-t-xl z-10 items-center flex flex-col">
        <p className="text-white font-mono text-sm pt-2 pb-2">
          lakeesiv/website
        </p>
      </div>
      <div className="w-[80%]  bg-muted rounded-b-xl z-10">
        <div className="p-4">
          <span
            className="font-mono w-[80%] whitespace-pre-wrap text-sm md:text-md"
            ref={el}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
