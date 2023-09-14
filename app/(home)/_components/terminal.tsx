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
    const text = [
      "`~\\Desktop\\stats>`^1000 ls^1000\n `lakee.py`\n`~\\Desktop\\stats>`^1000 python ^1000 \n `Python 3.8.3`\n `>>>`^1000 <span style='color:#FF1493'>import</span> lakee ^1000 \n `>>>`^1000 <span style='color:#0080FF'>print(</span>lakee<span style='color:#0080FF'>.get_stats()</span><span style='color:#0080FF'>)</span>^1000\n".concat(
        `${stats}`
      ),
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
      <div className="w-[80%]  bg-slate-800 rounded-b-xl z-10">
        <div className="p-4">
          <span className="font-mono whitespace-pre" ref={el} />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
