// File: components/Navbar.tsx
"use client";

import React from "react";

const COPY = {
  brand: "Forge",
  location: "Canada, Montreal",
  nav: [
    { label: "Manufacture", href: "#manufacture" },
    { label: "Tool library", href: "#tools" },
    { label: "Get in touch", href: "#contact" },
  ],
};

const Navbar: React.FC = () => (
  <header className="sticky top-0 z-40 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
    <div className="mx-auto max-w-7xl px-4 md:px-6 h-12 flex items-center justify-between text-sm">
      <div className="flex items-center gap-2 font-medium">
        <span className="text-lg">✳</span>
        {COPY.brand}
      </div>
      <div className="hidden md:flex items-center gap-2 text-neutral-500">
        <span>📍</span>
        {COPY.location}
      </div>
      <nav className="hidden md:flex items-center gap-6">
        {COPY.nav.map((n) => (
          <a key={n.label} href={n.href} className="text-neutral-700 hover:text-black">
            {n.label}
          </a>
        ))}
      </nav>
      <div className="ml-4 flex items-center gap-2 text-neutral-500">
        <a href="#" className="hover:text-black">Eng</a>
        <span>/</span>
        <a href="#" className="hover:text-black">Fra</a>
      </div>
    </div>
  </header>
);

export default Navbar;