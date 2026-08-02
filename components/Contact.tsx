"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageCircle,
  Paperclip,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const Contact = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-12 md:py-24 text-white"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-blue-400 text-sm font-semibold uppercase tracking-wider">
              <Sparkles size={16} />
              Let&apos;s Work Together
            </div>

            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Connect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                with us!
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-lg">
              Have a question, idea, or project in mind? We&apos;d love to hear
              from you and help bring your digital vision to life.
            </p>

            <div className="mt-10 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-5 rounded-2xl bg-slate-800/60 p-4 border border-slate-700/60 backdrop-blur">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">
                    Email Us
                  </h4>
                  <a
                    href="mailto:info@eccyber.systems"
                    className="text-lg font-bold text-white hover:text-blue-400 transition"
                  >
                    info@eccyber.systems
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-5 rounded-2xl bg-slate-800/60 p-4 border border-slate-700/60 backdrop-blur">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/30">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">
                    Call Us
                  </h4>
                  <a
                    href="tel:+13020652966"
                    className="text-lg font-bold text-white hover:text-orange-400 transition"
                  >
                    +1 (302) 065-2966
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-5 rounded-2xl bg-slate-800/60 p-4 border border-slate-700/60 backdrop-blur">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg shadow-green-600/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">
                    Location
                  </h4>
                  <p className="text-lg font-bold text-white">Delaware, USA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Modern Glassmorphic Form */}
          <div className="rounded-[32px] bg-slate-800/40 p-8 shadow-2xl backdrop-blur-xl border border-slate-700/80 lg:p-10">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="h-14 w-full rounded-2xl bg-slate-900/60 border border-slate-700 pl-14 pr-5 text-white placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="h-14 w-full rounded-2xl bg-slate-900/60 border border-slate-700 pl-14 pr-5 text-white placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageCircle
                  className="absolute left-5 top-5 text-slate-400"
                  size={20}
                />
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full rounded-2xl bg-slate-900/60 border border-slate-700 pl-14 pt-4 pr-5 text-white placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Upload Box */}
              <label className="flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-slate-700 bg-slate-900/30 p-4 transition hover:bg-slate-900/60 hover:border-blue-500">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-blue-400">
                    <Paperclip size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 text-sm">
                      {fileName ? "File Attached" : "Attach Files"}
                    </h4>
                    <p className="text-xs text-slate-400 truncate max-w-[180px]">
                      {fileName ? fileName : "Click to upload document"}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-medium text-slate-400 bg-slate-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  {fileName ? (
                    <>
                      <CheckCircle2 size={14} className="text-green-400" />
                      <span className="text-green-400">Attached</span>
                    </>
                  ) : (
                    <span>Browse</span>
                  )}
                </div>

                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-600/30 transition hover:from-blue-500 hover:to-blue-400 active:scale-95"
              >
                <Send size={18} />
                Send Message
              </button>

              <p className="text-center text-xs text-slate-500">
                Protected by reCAPTCHA. Privacy and Terms apply.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
