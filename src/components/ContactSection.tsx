import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react';

interface InquiryFormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormState>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [preparedInquiry, setPreparedInquiry] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMessage('Please enter your name and inquiry message.');
      return;
    }
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    const formatted = [
      `ROSA Peanut Butter — Inquiry`,
      `Name: ${formData.name.trim()}`,
      formData.company.trim() ? `Business / Company: ${formData.company.trim()}` : null,
      formData.phone.trim() ? `Phone: ${formData.phone.trim()}` : null,
      formData.email.trim() ? `Email: ${formData.email.trim()}` : null,
      ``,
      `Message:`,
      formData.message.trim(),
    ]
      .filter((line) => line !== null)
      .join('\n');

    setPreparedInquiry(formatted);
  };

  const handleCopySummary = async () => {
    if (!preparedInquiry) return;
    try {
      await navigator.clipboard.writeText(preparedInquiry);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleReset = () => {
    setPreparedInquiry(null);
    setCopied(false);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-[#FFF8E7] border-t border-[#4A2C1A]/10"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wider text-[#8B5A2B]">
                Contact
              </p>
              <h2 className="font-serif-display text-3xl md:text-5xl font-semibold tracking-tight text-[#4A2C1A] text-balance">
                Let&apos;s Talk
              </h2>
              <p className="text-base md:text-lg text-[#4A2C1A]/80 leading-relaxed">
                Whether you have a question about ROSA Peanut Butter or wish to discuss a retail or wholesale partnership, we would love to hear from you.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#4A2C1A]/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#4A2C1A]/5 border border-[#8B5A2B]/15 flex items-center justify-center shrink-0 text-[#8B5A2B]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8B5A2B]">Phone</p>
                  <p className="text-base font-medium text-[#4A2C1A] mt-0.5 tabular-nums">
                    [PHONE NUMBER]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#4A2C1A]/5 border border-[#8B5A2B]/15 flex items-center justify-center shrink-0 text-[#8B5A2B]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8B5A2B]">Email</p>
                  <p className="text-base font-medium text-[#4A2C1A] mt-0.5">
                    [EMAIL ADDRESS]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#4A2C1A]/5 border border-[#8B5A2B]/15 flex items-center justify-center shrink-0 text-[#8B5A2B]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#8B5A2B]">
                    Location
                  </p>
                  <p className="text-base font-medium text-[#4A2C1A] mt-0.5">
                    [BUSINESS ADDRESS]
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl bg-[#FFFFFF] border border-[#8B5A2B]/20 p-8 md:p-12 shadow-[0_16px_40px_rgba(74,44,26,0.05)]">
              {!preparedInquiry ? (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="space-y-1">
                    <h3 className="font-serif-display text-2xl font-semibold text-[#4A2C1A]">
                      Prepare an Inquiry
                    </h3>
                    <p className="text-sm text-[#4A2C1A]/70">
                      Fill in your details below to format a direct inquiry message.
                    </p>
                  </div>

                  {errorMessage && (
                    <div
                      role="alert"
                      className="p-4 rounded-xl bg-[#4A2C1A]/5 border border-[#4A2C1A]/20 text-sm font-medium text-[#4A2C1A]"
                    >
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="inquiry-name"
                        className="block text-xs font-semibold text-[#4A2C1A] mb-2"
                      >
                        Name *
                      </label>
                      <input
                        id="inquiry-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7]/60 border border-[#8B5A2B]/25 text-[#4A2C1A] placeholder:text-[#4A2C1A]/40 text-sm focus:outline-none focus:border-[#4A2C1A] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-company"
                        className="block text-xs font-semibold text-[#4A2C1A] mb-2"
                      >
                        Business / Company
                      </label>
                      <input
                        id="inquiry-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or shop name"
                        className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7]/60 border border-[#8B5A2B]/25 text-[#4A2C1A] placeholder:text-[#4A2C1A]/40 text-sm focus:outline-none focus:border-[#4A2C1A] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="inquiry-phone"
                        className="block text-xs font-semibold text-[#4A2C1A] mb-2"
                      >
                        Phone
                      </label>
                      <input
                        id="inquiry-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7]/60 border border-[#8B5A2B]/25 text-[#4A2C1A] placeholder:text-[#4A2C1A]/40 text-sm focus:outline-none focus:border-[#4A2C1A] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="inquiry-email"
                        className="block text-xs font-semibold text-[#4A2C1A] mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="inquiry-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7]/60 border border-[#8B5A2B]/25 text-[#4A2C1A] placeholder:text-[#4A2C1A]/40 text-sm focus:outline-none focus:border-[#4A2C1A] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-message"
                      className="block text-xs font-semibold text-[#4A2C1A] mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 rounded-xl bg-[#FFF8E7]/60 border border-[#8B5A2B]/25 text-[#4A2C1A] placeholder:text-[#4A2C1A]/40 text-sm focus:outline-none focus:border-[#4A2C1A] transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-[#FFFFFF] bg-[#4A2C1A] hover:bg-[#8B5A2B] rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A2C1A]"
                  >
                    Prepare Inquiry Summary
                  </button>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif-display text-2xl font-semibold text-[#4A2C1A]">
                      Inquiry Summary Ready
                    </h3>
                    <p className="text-sm text-[#4A2C1A]/75 leading-relaxed">
                      Because this website is hosted as a static showcase without an automated mail server, please copy your formatted inquiry below to share directly with ROSA via email or phone.
                    </p>
                  </div>

                  <pre className="p-5 rounded-2xl bg-[#FFF8E7] border border-[#8B5A2B]/20 text-xs sm:text-sm text-[#4A2C1A] whitespace-pre-wrap font-sans leading-relaxed">
                    {preparedInquiry}
                  </pre>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FFFFFF] bg-[#4A2C1A] hover:bg-[#8B5A2B] rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Inquiry Text</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-semibold text-[#4A2C1A] border border-[#4A2C1A]/20 hover:border-[#4A2C1A] rounded-xl transition-colors duration-200 whitespace-nowrap shrink-0"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
