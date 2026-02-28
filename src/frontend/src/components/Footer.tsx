import { GraduationCap, MapPin, MessageCircle, Phone } from "lucide-react";
import { WHATSAPP_URL } from "../App";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Facilities", href: "#facilities" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const COURSE_INFO = [
  "⚡ Electrician Trade",
  "Duration: 2 Years",
  "Seats: 21 per Batch",
  "Eligibility: 10th Pass",
  "Certificate: NCVT / NTC",
  "Affiliation: DGT, Govt. of India",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      {/* India flag stripe */}
      <div className="h-1 india-stripe" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-saffron flex items-center justify-center shrink-0">
                <GraduationCap
                  className="w-5 h-5 text-navy-dark"
                  strokeWidth={2.5}
                />
              </div>
              <div>
                <p className="font-display font-bold text-sm leading-tight">
                  Ch. Parma Ram Godara ITI
                </p>
                <p className="text-white/50 text-xs">Nohar, Rajasthan</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Specializing in NCVT Electrician trade training — empowering the
              youth of Rajasthan with certified electrical skills.
            </p>

            {/* Affiliations */}
            <div className="space-y-1">
              <p className="text-saffron text-xs font-semibold tracking-wide uppercase">
                Affiliated With
              </p>
              <p className="text-white/55 text-xs">
                NCVT — National Council of Vocational Training
              </p>
              <p className="text-white/55 text-xs">
                DGT — Directorate General of Training
              </p>
              <p className="text-white/55 text-xs">Govt. of India</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-saffron text-sm tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Info */}
          <div>
            <h4 className="font-display font-bold text-saffron text-sm tracking-wide uppercase mb-4">
              Our Course
            </h4>
            <ul className="space-y-2">
              {COURSE_INFO.map((item) => (
                <li key={item}>
                  <span className="text-white/60 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-saffron text-sm tracking-wide uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-saffron mt-1 shrink-0" />
                <p className="text-white/60 text-sm leading-relaxed">
                  Ch. Parma Ram Godara ITI,
                  <br />
                  Nohar, Hanumangarh District,
                  <br />
                  Rajasthan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-saffron shrink-0" />
                <a
                  href="tel:9460320717"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  9460320717
                </a>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 bg-whatsapp/20 hover:bg-whatsapp/30 border border-whatsapp/30 text-white px-4 py-3 rounded-xl text-sm font-medium transition-all"
            >
              <MessageCircle className="w-4 h-4 text-whatsapp" />
              Quick Enquiry on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {currentYear} Ch. Parma Ram Godara ITI, Nohar, Rajasthan. All
            rights reserved.
          </p>
          <p className="text-white/35 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
