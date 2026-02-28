import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Facilities", href: "#facilities" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

interface HeaderProps {
  whatsappUrl: string;
}

export default function Header({ whatsappUrl }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-dark shadow-lg py-2"
          : "bg-navy-dark/95 backdrop-blur-sm py-3"
      }`}
    >
      {/* Top stripe — Indian flag colors */}
      <div className="h-1 india-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          {/* Logo + Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-saffron flex items-center justify-center shadow-saffron group-hover:scale-105 transition-transform">
              <GraduationCap
                className="w-5 h-5 text-navy-dark"
                strokeWidth={2.5}
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-white text-sm leading-tight">
                Ch. Parma Ram Godara ITI
              </p>
              <p className="text-white/60 text-xs">Nohar, Rajasthan</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-white/80 hover:text-white text-sm font-medium transition-colors rounded-md hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Enquiry Button */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Enquiry
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-navy-dark border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-3 text-white/80 hover:text-white text-sm font-medium transition-colors rounded-md hover:bg-white/10"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold px-4 py-3 rounded-lg text-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
