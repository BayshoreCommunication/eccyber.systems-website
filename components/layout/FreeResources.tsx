"use client";

import { useState } from "react";
import { Download, CheckCircle2, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FreeResources = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="free-resources"
      className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-950 py-24 text-white"
    >
      {/* Glow Backgrounds */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-4xl rounded-[40px] bg-slate-800/50 p-8 sm:p-12 md:p-16 shadow-2xl backdrop-blur-xl border border-slate-700/80 text-center relative overflow-hidden">
          {/* Top Floating Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-2 text-orange-400 text-sm font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={16} />
            Free Lead Magnet
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Download Free Cyber Safety{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Worksheets!
              </span>
            </h2>

            <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
              Want a sneak peek? Get our free printable activity sheet for your
              kids today and start teaching digital safety the fun way.
            </p>
          </motion.div>

          {/* Form Box / Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 max-w-xl mx-auto"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center rounded-2xl bg-green-500/10 border border-green-500/30 p-8 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white mb-4 shadow-lg shadow-green-500/30">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  You&apos;re All Set!
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  We&apos;ve sent your free activity sheet straight to{" "}
                  <span className="text-orange-400 font-medium">{email}</span>.
                  Check your inbox!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-3"
              >
                <div className="relative flex-grow">
                  <ShieldAlert
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                    size={20}
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="h-14 w-full rounded-2xl bg-slate-900/80 border border-slate-700 pl-14 pr-5 text-white placeholder-slate-400 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-lg font-bold text-white shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-amber-600 transition whitespace-nowrap"
                >
                  <Download size={20} />
                  Download Now
                </motion.button>
              </form>
            )}

            <p className="mt-4 text-xs text-slate-400">
              No spam ever. Unsubscribe at any time. Get instant PDF access.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
