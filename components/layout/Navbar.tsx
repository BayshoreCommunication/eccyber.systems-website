"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";

/* ─── Nav Data ─────────────────────────────────────────── */

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Meet Charlie", href: "#charlie" },
  { label: "Books & Products", href: "#products" },
  { label: "Free Resources", href: "#resources" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ─── Mobile Menu ───────────────────────────────────────── */

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-white z-50 shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="#home" onClick={onClose} className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="EcCyberSystems Logo"
              width={140}
              height={40}
              className="h-9 w-auto object-contain"
              priority
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-4 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex items-center px-3 py-3 rounded-lg text-[15px] font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-150 mb-1"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="px-4 py-5 border-t border-gray-100">
          <Link
            href="#products"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full rounded-full bg-blue-600 px-6 py-3.5 font-bold text-white transition-all hover:bg-blue-700 active:scale-[0.98]"
          >
            <ShoppingBag size={18} />
            <span>Shop Books</span>
          </Link>
        </div>
      </div>
    </>
  );
}

/* ─── Main Navbar ───────────────────────────────────────── */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Scroll Shadow effect */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-100 transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)]" : "shadow-sm"
        }`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-8">
          <div className="flex items-center justify-between h-[76px]">
            {/* ── Logo ── */}
            <Link
              href="#home"
              className="flex-shrink-0 flex items-center gap-2.5 group"
            >
              <div className="relative flex-shrink-0 w-[140px] sm:w-[165px] lg:w-[185px]">
                <Image
                  src="/images/logo.png"
                  alt="EcCyberSystems Logo"
                  width={1000}
                  height={800}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3.5 py-2 text-[15px] font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-200 group"
                >
                  {item.label}
                  {/* Active / Hover Underline */}
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-blue-600 rounded-full transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100" />
                </Link>
              ))}
            </nav>

            {/* ── Desktop CTA Button ── */}
            <div className="hidden lg:flex items-center">
              <Link
                href="#products"
                className="group inline-flex items-center gap-2 text-[14.5px] font-bold px-6 py-3 rounded-full bg-blue-600 text-white shadow-md shadow-blue-100 hover:bg-blue-700 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200"
              >
                <ShoppingBag size={17} />
                <span>Shop Books</span>
              </Link>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={24} className="text-slate-800" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer so page content doesn't get hidden behind fixed navbar */}
      <div className="h-[76px]" />

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
