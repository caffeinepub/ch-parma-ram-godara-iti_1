import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import AdmissionsSection from "./components/AdmissionsSection";
import ContactSection from "./components/ContactSection";
import CoursesSection from "./components/CoursesSection";
import FacilitiesSection from "./components/FacilitiesSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const WHATSAPP_URL =
  "https://wa.me/919460320717?text=Hello%2C%20I%20am%20interested%20in%20getting%20more%20information%20about%20admission%20at%20Ch.%20Parma%20Ram%20Godara%20ITI%2C%20Nohar.%20Please%20guide%20me.";

export { WHATSAPP_URL };

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Toaster position="top-center" richColors />
      <Header whatsappUrl={WHATSAPP_URL} />
      <main>
        <HeroSection whatsappUrl={WHATSAPP_URL} />
        <AboutSection />
        <CoursesSection />
        <FacilitiesSection />
        <AdmissionsSection whatsappUrl={WHATSAPP_URL} />
        <GallerySection />
        <ContactSection whatsappUrl={WHATSAPP_URL} />
      </main>
      <Footer />
    </div>
  );
}
