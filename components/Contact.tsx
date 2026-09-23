"use client";

import emailjs from "@emailjs/browser";
import {
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
  XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EMAILJS_SERVICE_ID = "service_n9hogxm";
const EMAILJS_TEMPLATE_ID = "template_xl7e2af";
const EMAILJS_PUBLIC_KEY = "JY9DdzqCr98Kz-u6o";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
      });
  };

  useEffect(() => {
    if (status !== "success" && status !== "error") return;
    const timer = setTimeout(() => setStatus("idle"), 2000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-12 md:py-24 text-white"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px] pointer-events-none" />

      {/* Confirmation Popup */}
      {(status === "success" || status === "error") && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div
            className={`w-full max-w-sm rounded-3xl border bg-slate-900 p-8 text-center shadow-2xl ${
              status === "success"
                ? "border-green-500/30"
                : "border-red-500/30"
            }`}
          >
            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
                status === "success"
                  ? "bg-green-500/15 text-green-400"
                  : "bg-red-500/15 text-red-400"
              }`}
            >
              {status === "success" ? (
                <CheckCircle2 size={32} />
              ) : (
                <XCircle size={32} />
              )}
            </div>
            <h3 className="mt-5 text-xl font-bold text-white">
              {status === "success" ? "Message Sent!" : "Something Went Wrong"}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {status === "success"
                ? "We'll get back to you soon."
                : "Please try again in a moment."}
            </p>
          </div>
        </div>
      )}

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                  size={20}
                />
                <input
                  type="text"
                  name="user_name"
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
                  name="user_email"
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
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full rounded-2xl bg-slate-900/60 border border-slate-700 pl-14 pt-4 pr-5 text-white placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-600/30 transition hover:from-blue-500 hover:to-blue-400 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
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
