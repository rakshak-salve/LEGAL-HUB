// src/components/site-header.tsx
import Link from "next/link";
import { LawIcon } from "lucide-react";

import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <LawIcon className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block text-lg font-headline">
              Legal Hub
            </span>
          </Link>
          <MainNav />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* Dark mode toggle will go here */}
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
