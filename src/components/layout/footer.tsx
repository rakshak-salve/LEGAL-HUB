import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">About Legal Hub</h3>
            <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Connect</h3>            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.name}. Developed by{" "}
              <a
                href="https://www.linkedin.com/in/rakshaksalve/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 hover:underline font-medium"
              >
                Rakshak Salve
              </a>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              A personal showcase project for the Indian legal community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}