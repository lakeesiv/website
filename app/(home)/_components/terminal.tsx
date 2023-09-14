import React from "react";

interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {}

const Terminal: React.FC<TerminalProps> = ({}) => {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="w-[80%]  bg-black rounded-t-xl z-10 items-center flex flex-col">
        <p className="text-white font-mono text-sm pt-2 pb-2">
          lakeesiv/website
        </p>
      </div>
      <div className="w-[80%] h-96 bg-slate-800 rounded-b-xl z-10"></div>
    </div>
  );
};

export default Terminal;
