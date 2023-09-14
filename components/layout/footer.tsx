"use client";

import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import SocialIcons from "./social-icons";

const ThemeToggle = dynamic(() => import("./theme-toggle"), {
  ssr: false,
});

const Footer = () => {
  return (
    <footer className="w-full p-2 px-4 bg-muted border-t border-muted shadow flex items-center justify-between   ">
      <SocialIcons />
      <ThemeToggle />
    </footer>
  );
};

export default Footer;
