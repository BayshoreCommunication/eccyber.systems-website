"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import Container from "components/layout/Container";
import { motion } from "framer-motion";

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 py-16 md:py-24 overflow-hidden border-t border-slate-800/60">
      {/* Glow Effects */}
      <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        {/* Main Footer Rounded Card Wrapper with Modern Dark Glassmorphism */}
        <div className="bg-slate-900/80 border border-slate-800/80 rounded-[36px] p-8 sm:p-14 shadow-2xl backdrop-blur-xl w-full">
          {/* Main Footer Links (4 Columns Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 mb-16">
            {/* Column 1: Logo & Brand Description */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <div className="relative w-[150px] sm:w-[170px] lg:w-[190px] mb-6">
                <Image
                  src="/images/logo.png"
                  alt="TAC Solutions Logo"
                  width={500}
                  height={400}
                  className="w-full h-auto object-contain brightness-0 invert"
                  priority
                />
              </div>

              <p className="text-[15px] font-normal leading-[1.8] text-slate-400 mb-6 max-w-[340px]">
                Empowering learners with in-demand tech skills, real-world
                projects, and career support to build a better future.
              </p>

              {/* Accent Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 text-blue-400 text-xs font-semibold tracking-wide">
                <Sparkles size={14} />
                Certified Cybersecurity & Tech
              </div>
            </div>

            {/* Column 2: Company */}
            <div className="lg:col-span-2 flex flex-col items-start text-left">
              <h4 className="text-[12px] font-extrabold tracking-widest text-blue-400 uppercase mb-3">
                Company
              </h4>
              <div className="w-8 h-[2px] bg-blue-500 mb-6 rounded-full" />
              <nav className="flex flex-col space-y-3.5 text-[14px] font-medium text-slate-400">
                <Link
                  href="/about"
                  className="hover:text-white transition-colors duration-200 flex items-center gap-1 group"
                >
                  About us
                </Link>
                <Link
                  href="/fractional-cro"
                  className="hover:text-white transition-colors duration-200"
                >
                  Fractional CRO
                </Link>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </Link>
                <Link
                  href="/learning-hub"
                  className="hover:text-white transition-colors duration-200"
                >
                  Learning Hub
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Column 3: Courses */}
            <div className="lg:col-span-3 flex flex-col items-start text-left">
              <h4 className="text-[12px] font-extrabold tracking-widest text-blue-400 uppercase mb-3">
                Courses
              </h4>
              <div className="w-8 h-[2px] bg-blue-500 mb-6 rounded-full" />
              <nav className="flex flex-col space-y-3.5 text-[14px] font-medium text-slate-400">
                <Link
                  href="/courses/cybersecurity"
                  className="hover:text-white transition-colors duration-200"
                >
                  Cybersecurity
                </Link>
                <Link
                  href="/courses/grc-foundations"
                  className="hover:text-white transition-colors duration-200"
                >
                  GRC Foundations
                </Link>
                <Link
                  href="/courses/children-series"
                  className="hover:text-white transition-colors duration-200"
                >
                  Children&apos;s Cybersecurity Series
                </Link>
                <Link
                  href="/courses/teen-safety"
                  className="hover:text-white transition-colors duration-200"
                >
                  Teen Cyber Safety
                </Link>
                <Link
                  href="/courses/digital-safety"
                  className="hover:text-white transition-colors duration-200"
                >
                  Digital Safety Basics
                </Link>
                <Link
                  href="/courses/identity-protection"
                  className="hover:text-white transition-colors duration-200"
                >
                  Password &amp; Identity Protection
                </Link>
              </nav>
            </div>

            {/* Column 4: Contact */}
            <div className="lg:col-span-3 flex flex-col items-start text-left">
              <h4 className="text-[12px] font-extrabold tracking-widest text-blue-400 uppercase mb-3">
                Contact
              </h4>
              <div className="w-8 h-[2px] bg-blue-500 mb-6 rounded-full" />
              <div className="flex flex-col space-y-4 w-full">
                {/* Email */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:info@tacsolutions.biz"
                    className="text-[14px] font-medium text-slate-300 hover:text-blue-400 transition-colors truncate"
                  >
                    info@tacsolutions.biz
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-orange-400 flex-shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:+17036883038"
                    className="text-[14px] font-medium text-slate-300 hover:text-orange-400 transition-colors"
                  >
                    +1 (703) 688-3038
                  </a>
                </div>

                {/* Location 1 */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-green-400 flex-shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[14px] font-medium text-slate-300">
                    Washington, DC, USA
                  </span>
                </div>

                {/* Location 2 */}
                <div className="flex items-center gap-3.5 group">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-purple-400 flex-shrink-0 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[14px] font-medium text-slate-300">
                    Greensboro, NC, USA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription Bar Container (Modern Dark Gradient Card) */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/20 rounded-[24px] p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 shadow-xl">
            {/* Left Block (Mail icon + text info) */}
            <div className="flex items-center gap-5 text-left w-full lg:w-auto">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-[17px] font-bold text-white leading-snug">
                  Stay Updated with TAC SOLUTIONS
                </h4>
                <p className="text-[13.5px] font-normal text-slate-400 mt-1 leading-relaxed">
                  Get the latest updates, courses, events, and resources
                  delivered to your inbox.
                </p>
              </div>
            </div>

            {/* Right Block (Input + Submit Button) */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email..."
                required
                className="w-full lg:w-80 h-13 px-5 rounded-2xl bg-slate-950/80 border border-slate-700 text-[14px] text-white placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap h-13 px-8 text-[14.5px] font-bold rounded-2xl flex-shrink-0 gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-600/30 hover:from-blue-500 hover:to-blue-400 transition-all group"
              >
                <span>Subscribe</span>
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </form>
          </div>

          {/* Bottom Copyright Row */}
          <div className="w-full h-[1px] bg-slate-800/80 mb-6" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] font-medium text-slate-400 text-center sm:text-left">
            <span>
              <span className="text-white font-bold">TAC Solutions, LLC</span>{" "}
              &copy; 2026. All rights reserved.
            </span>
            <span className="flex items-center gap-1.5">
              Design &amp; Developed by{" "}
              <a
                href="https://bayshorecommunication.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-0.5 transition-colors"
              >
                Bayshore Communication
                <ArrowUpRight size={14} />
              </a>
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
