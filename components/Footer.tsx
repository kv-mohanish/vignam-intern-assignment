// File: components/Footer.tsx
import React from "react";

const Footer: React.FC = () => (
  <footer className="border-t border-black/5 py-8 text-center text-sm text-neutral-500">
    © {new Date().getFullYear()} Forge. All rights reserved.
  </footer>
);

export default Footer;