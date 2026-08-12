"use client";

import Image from "next/image";
import { BookOpen, Globe, ShieldCheck, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Cyber Safety Education",
    description:
      "Teaching essential cyber safety skills in a simple and engaging way.",
    color: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100",
  },
  {
    icon: BookOpen,
    title: "Interactive Books & Activities",
    description: "Fun books, games and activities that make learning exciting.",
    color:
      "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100",
  },
  {
    icon: Users,
    title: "For Kids, Parents & Schools",
    description:
      "Resources designed for children, parents, teachers and schools.",
    color: "bg-purple-50 text-purple-600 border-purple-200 hover:bg-purple-100",
  },
  {
    icon: Globe,
    title: "Building Safe Digital Habits",
    description:
      "Helping children develop responsible internet habits every day.",
    color: "bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100",
  },
];

const About = () => {
  return (
    <section
      id="charlie"
      className="relative bg-slate-50/50 py-12 md:py-24 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-orange-100/50 blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Badge Header */}
        <div className="mb-16 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-slate-200 pb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-200 text-white">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Our Core Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                EMPOWERING CYBER SAFETY
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Trusted by 10,000+ Families</span>
          </div>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Image Section */}
          <div className="relative">
            {/* Image Wrapper */}
            <div className="relative z-10 overflow-hidden rounded-3xl bg-white p-3 shadow-2xl border border-slate-100 group">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/eccyber.systems/about.png"
                  alt="About EC Cyber Systems"
                  width={900}
                  height={900}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Floating Decorative Card */}
            <div className="absolute -bottom-6 -right-6 z-20 hidden md:flex items-center gap-4 rounded-2xl bg-white p-5 shadow-xl border border-slate-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white font-bold text-xl">
                ECC
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Educate. Equip. Empower.
                </h4>
                <p className="text-xs text-slate-500">
                  For a safer internet world.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-orange-500">
              About EC Cyber Systems
            </span>
            <h3 className="mt-2 text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Who We Are
            </h3>

            <div className="mt-4 h-1.5 w-24 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              <strong className="text-slate-900 font-semibold">
                ECC Systems
              </strong>{" "}
              is here to help children, older adults, and families feel safe and
              more confident online. We make cybersecurity and digital literacy
              easier to understand by sharing practical guidance, simple tools,
              and everyday tips that help people of all ages recognize online
              risks, build safe habits, and navigate the digital world with
              greater confidence.
            </p>

            {/* Features Grid List */}
            <div className="mt-10 space-y-4">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-100"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${item.color}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
