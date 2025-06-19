// src/components/theme-provider.tsx
"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }: { children: React.ReactNode } & Record<string, unknown>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
