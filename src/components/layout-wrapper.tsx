import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";
import SiteFooter from "./site-footer";
import { SiteHeader } from "./site-header";

interface LayoutWrapperProps {
  children: ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
    </ThemeProvider>
  );
}