// src/components/site-footer.tsx
import React from "react";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-6 text-center text-sm text-muted-foreground">
      <span>
        © 2025 Legal Hub. Developed by{' '}
        <a
          href="https://www.linkedin.com/in/rakshaksalve/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Rakshak Salve
        </a>.
        <br />
        A personal showcase project.
      </span>
    </footer>
  );
}
