"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  Languages,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["About", "#about"],
    ["Courses", "#courses"],
    ["Batches", "#batches"],
    ["Results", "#results"],
    ["Faculty", "#faculty"],
    ["Why Us", "#why-us"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">U</span>

          <span>
            <strong>Universal Academy</strong>
            <small>Learning • Excellence • Results</small>
          </span>
        </a>

        <nav className="desktop-nav">
          {links.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">

          <a href="#contact" className="nav-enquire">
            Enquire Now
            <ArrowUpRight size={16} />
          </a>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          {links.map(([label, href]) => (
            <a
              href={href}
              key={label}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}

          <a href="#contact" className="mobile-enquire">
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}