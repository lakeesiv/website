"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "components/ui/toaster";
import "katex/dist/katex.min.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" themes={["light", "dark"]}>
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
