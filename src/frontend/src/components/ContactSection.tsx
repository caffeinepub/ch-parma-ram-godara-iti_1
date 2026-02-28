import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitEnquiry } from "../hooks/useQueries";

const COURSES = [
  "Electrician",
  "Fitter",
  "Welder",
  "COPA (Computer Operator & Programming Assistant)",
  "Mechanic Motor Vehicle",
  "Plumber",
  "Wireman",
  "Stenography",
  "Other / General Enquiry",
];

interface ContactProps {
  whatsappUrl: string;
}

export default function ContactSection({ whatsappUrl }: ContactProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const submitMutation = useSubmitEnquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !course || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await submitMutation.mutateAsync({ name, phone, course, message });
      toast.success(
        "Enquiry submitted successfully! We will contact you shortly.",
      );
      setName("");
      setPhone("");
      setCourse("");
      setMessage("");
    } catch {
      toast.error("Failed to submit enquiry. Please try WhatsApp instead.");
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-saffron font-semibold text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </span>
          <h2 className="font-display font-bold text-navy-dark text-3xl sm:text-4xl lg:text-5xl mb-4">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="font-display font-bold text-navy-dark text-xl">
              Reach Out to Us
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are here to answer your questions about admissions, courses,
              and facilities. Contact us through any of the channels below.
            </p>

            {/* Address */}
            <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="font-semibold text-navy-dark text-sm mb-1">
                  Address
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Ch. Parma Ram Godara ITI
                  <br />
                  Nohar, Hanumangarh District
                  <br />
                  Rajasthan
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
              <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-saffron" />
              </div>
              <div>
                <p className="font-semibold text-navy-dark text-sm mb-1">
                  Phone
                </p>
                <a
                  href="tel:9460320717"
                  className="text-navy hover:text-saffron transition-colors font-semibold"
                >
                  9460320717
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-whatsapp/10 border border-whatsapp/30 rounded-xl hover:bg-whatsapp/15 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-whatsapp/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-whatsapp" />
              </div>
              <div>
                <p className="font-semibold text-navy-dark text-sm">
                  WhatsApp Enquiry
                </p>
                <p className="text-muted-foreground text-xs">
                  Click to chat instantly
                </p>
              </div>
            </a>

            {/* Affiliation */}
            <div className="bg-navy-dark rounded-xl p-4 text-white">
              <p className="font-display font-bold text-sm mb-2 text-saffron">
                Affiliations
              </p>
              <div className="space-y-1 text-sm text-white/70">
                <p>• NCVT — National Council of Vocational Training</p>
                <p>• DGT — Directorate General of Training</p>
                <p>• Ministry of Skill Development & Entrepreneurship</p>
                <p>• Government of India</p>
              </div>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-background rounded-2xl border border-border p-6 sm:p-8">
              <h3 className="font-display font-bold text-navy-dark text-xl mb-6">
                Send an Enquiry
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-navy-dark font-medium"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-border focus:border-navy"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="text-navy-dark font-medium"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Your mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      required
                      className="border-border focus:border-navy"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-navy-dark font-medium">
                    Course Interested In <span className="text-red-500">*</span>
                  </Label>
                  <Select value={course} onValueChange={setCourse} required>
                    <SelectTrigger className="border-border">
                      <SelectValue placeholder="Select a trade / course" />
                    </SelectTrigger>
                    <SelectContent>
                      {COURSES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-navy-dark font-medium"
                  >
                    Message <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Any questions or specific information you need..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                    className="border-border focus:border-navy resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="flex-1 bg-navy-dark hover:bg-navy text-white font-bold py-3 rounded-xl"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold py-3 px-4 rounded-xl text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Instead
                  </a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
