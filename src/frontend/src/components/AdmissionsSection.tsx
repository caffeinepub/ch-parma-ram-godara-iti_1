import {
  AlertCircle,
  CheckCircle,
  ClipboardList,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";

const STEPS = [
  {
    number: "01",
    title: "Submit Enquiry",
    description:
      "Contact us via WhatsApp or visit the institute to get information about available trades and seat availability.",
  },
  {
    number: "02",
    title: "Fill Application Form",
    description:
      "Obtain and fill the admission form from the institute office or enquire for the online process.",
  },
  {
    number: "03",
    title: "Document Verification",
    description:
      "Submit required documents: 10th marksheet, Aadhar card, passport size photos, and category certificate (if applicable).",
  },
  {
    number: "04",
    title: "Fee Payment & Enrollment",
    description:
      "Pay the prescribed admission fee and complete the enrollment formalities to confirm your seat.",
  },
];

const ELIGIBILITY = [
  "Minimum 10th Pass (Matric) for most trades",
  "Age: 14 to 40 years (relaxation for reserved categories)",
  "Valid identity proof (Aadhar Card / Voter ID)",
  "Domicile of Rajasthan preferred (non-domicile may apply)",
  "No minimum marks required for most trades",
  "SC/ST/OBC reservations as per Government norms",
];

interface AdmissionsProps {
  whatsappUrl: string;
}

export default function AdmissionsSection({ whatsappUrl }: AdmissionsProps) {
  return (
    <section id="admissions" className="section-padding bg-white">
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
            Join Us
          </span>
          <h2 className="font-display font-bold text-navy-dark text-3xl sm:text-4xl lg:text-5xl mb-4">
            Admission Process
          </h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Eligibility */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-bold text-navy-dark text-2xl mb-6 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-navy" />
              </div>
              Eligibility Criteria
            </h3>

            <div className="space-y-3">
              {ELIGIBILITY.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-background transition-colors"
                >
                  <CheckCircle className="w-5 h-5 text-india-green mt-0.5 shrink-0" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-6 flex items-start gap-3 bg-saffron/10 border border-saffron/30 rounded-xl p-4">
              <AlertCircle className="w-5 h-5 text-saffron mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-navy-dark text-sm mb-1">
                  Important Notice
                </p>
                <p className="text-foreground/70 text-sm">
                  Admissions are subject to seat availability. Contact us early
                  to secure your seat. Admission process follows DGT / State
                  Government guidelines.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display font-bold text-navy-dark text-2xl mb-6">
              How to Apply
            </h3>

            <div className="space-y-4">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-navy-dark text-white font-display font-bold text-sm flex items-center justify-center group-hover:bg-saffron transition-colors duration-300">
                      {step.number}
                    </div>
                    {index < STEPS.length - 1 && (
                      <div className="w-px h-full min-h-8 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
                    <h4 className="font-display font-bold text-navy-dark mb-1">
                      {step.title}
                    </h4>
                    <p className="text-foreground/65 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 bg-navy-dark rounded-xl p-6 text-white">
              <p className="font-semibold text-lg mb-2">Ready to Apply?</p>
              <p className="text-white/65 text-sm mb-4">
                Get instant guidance and start your admission process today.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold px-6 py-3 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Apply Now / Enquire on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
