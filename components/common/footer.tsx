import React from "react";

const Footer = () => {
  return (
    <footer className="relative mt-12 border-t overflow-hidden">
      
      {/* Softer gradient (less heavy) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 blur-xl opacity-50" />

      <div className="wrapper relative py-8 flex flex-col gap-6">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-base font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              iBuiltThis
            </h2>
            <p className="text-xs text-muted-foreground mt-1 max-w-xs">
              Discover, build, and share amazing projects.
            </p>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a href="#" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Explore
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Submit
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom */}
        <div className="flex items-center justify-between">
          
          <p className="text-xs text-muted-foreground">
            ©  iBuiltThis
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a className="p-1.5 rounded-md bg-primary/10 hover:bg-primary/20 transition">
              🌐
            </a>
            <a className="p-1.5 rounded-md bg-accent/10 hover:bg-accent/20 transition">
              🐦
            </a>
            <a className="p-1.5 rounded-md bg-secondary/10 hover:bg-secondary/20 transition">
              💻
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;