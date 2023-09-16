"use client";

import React, { FC, HTMLAttributes, useEffect, useRef } from "react";
import Typed from "typed.js";
import siteConfig from "site.config";
import terminalText from "./terminal-text";

interface TerminalProps extends HTMLAttributes<HTMLDivElement> {}

const Terminal: FC<TerminalProps> = ({}) => {
  const el = useRef(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [terminalText],
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
            className="font-mono w-[80%] whitespace-pre-wrap text-sm  break-all"
            ref={el}
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
