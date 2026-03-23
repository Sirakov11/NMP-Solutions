import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm font-display">N</span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              NMP <span className="text-primary">Solutions</span>
            </span>
          </div>

          <div className="text-sm text-muted-foreground flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <a href="tel:+359886767119" className="hover:text-primary transition-colors">+359 88 676 7119</a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:nmpsolutions@yahoo.com" className="hover:text-primary transition-colors">nmpsolutions@yahoo.com</a>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-border/50 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} NMP Solutions. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground">
            Building digital excellence.
          </div>
        </div>
      </div>
    </footer>
  );
}
