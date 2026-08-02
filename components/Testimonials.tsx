"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  MessageSquareQuote,
  ShieldCheck,
  School,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    image: "/images/eccyber.systems/community.png",
    title: "Community",
    name: "Michael Park",
    role: "Community Leader",
    color: "blue",
    quote:
      "The resources are amazing and easy for everyone to use. It's making a real difference across schools and homes, empowering children to stay safe online every single day.",
  },
  {
    image: "/images/eccyber.systems/family.png",
    title: "Family",
    name: "Sarah Lewis",
    role: "Parent",
    color: "orange",
    quote:
      "ECC helped me understand online safety and keep my kids safe and confident. Charlie the Cyber Dog is an absolute game-changer for parent-child conversations about digital boundaries.",
  },
  {
    image: "/images/eccyber.systems/educator.png",
    title: "Educators",
    name: "Daniela Rodriguez",
    role: "Teacher",
    color: "green",
    quote:
      "The curriculum fits K-12 perfectly and is so valuable for our students. The interactive format keeps kids fully engaged while learning critical cyber hygiene concepts.",
  },
  {
    image: "/images/eccyber.systems/family.png",
    title: "Parents",
    name: "David & Rachel",
    role: "Parents",
    color: "blue",
    quote:
      "Charlie the Cyber Dog has become a household favorite. Learning cyber safety is now a fun game for our kids, and we feel much more at ease letting them explore the internet.",
  },
];

const colors: Record<
  string,
  {
    primary: string;
    border: string;
    border_bottom: string;
    shadow: string;
    icon: string;
  }
> = {
  blue: {
    primary: "text-blue-700",
    border: "border-blue-600",
    border_bottom: "border-b-8 border-b-blue-600",
    shadow: "hover:shadow-blue-200",
    icon: "bg-blue-600",
  },
  orange: {
    primary: "text-orange-600",
    border: "border-orange-500",
    border_bottom: "border-b-8 border-b-orange-500",
    shadow: "hover:shadow-orange-200",
    icon: "bg-orange-500",
  },
  green: {
    primary: "text-green-600",
    border: "border-green-600",
    border_bottom: "border-b-8 border-b-green-600",
    shadow: "hover:shadow-green-200",
    icon: "bg-green-600",
  },
};

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState<
    (typeof testimonials)[0] | null
  >(null);

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-12 md:py-24"
      style={{
        backgroundImage: "url('/images/eccyber.systems/eccs_hero_bg.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-300 bg-white/90 px-6 py-3 shadow-md backdrop-blur">
            <Users className="h-5 w-5 text-orange-500" />
            <span className="font-semibold uppercase tracking-widest text-orange-600">
              What People Say
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mx-auto mt-8 max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Trusted by Families,
            <br className="md:hidden" /> Educators & Communities
          </h2>

          <p className="mt-6 text-xl text-slate-600">
            Real stories from real people who trust{" "}
            <span className="font-semibold text-blue-700">ECC Systems.</span>
          </p>
        </div>

        {/* Testimonials Slider Container */}
        <div className="mt-16 relative px-2 md:px-10">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            className="pb-16"
          >
            {testimonials.map((item, index) => {
              const style = colors[item.color] || colors.blue;

              return (
                <SwiperSlide key={index} className="h-auto py-4">
                  {/* h-full এবং flex ব্যবহার করায় প্রতিটি কার্ডের সাইজ সমান থাকবে */}
                  <div
                    className={`h-full rounded-3xl border bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 ${style.shadow} ${style.border_bottom} flex flex-col justify-between`}
                  >
                    <div>
                      {/* Quote Icon Box */}
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.icon} text-white shadow-md`}
                      >
                        <MessageSquareQuote className="h-7 w-7" />
                      </div>

                      {/* Avatar Image */}
                      <div className="mt-6 flex justify-center">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={110}
                          height={110}
                          className={`rounded-full border-4 ${style.border} object-cover w-[110px] h-[110px] shadow-sm`}
                        />
                      </div>

                      {/* Rating & Title */}
                      <div className="mt-6 text-center">
                        <div className="text-2xl text-yellow-500 tracking-wider">
                          ★★★★★
                        </div>

                        <h3
                          className={`mt-3 text-3xl font-bold ${style.primary}`}
                        >
                          {item.title}
                        </h3>

                        {/* ডেসক্রিপশন শুধুমাত্র ২ লাইন দেখাবে (line-clamp-2) */}
                        <p className="mt-4 text-base leading-relaxed text-slate-700 line-clamp-2">
                          &ldquo;{item.quote}&rdquo;
                        </p>

                        {/* See More Button */}
                        <button
                          onClick={() => setSelectedReview(item)}
                          className="mt-2 text-sm font-bold text-blue-600 hover:text-blue-800 underline transition-colors"
                        >
                          See More
                        </button>
                      </div>
                    </div>

                    {/* Author Details */}
                    <div className="mt-8 border-t border-slate-100 pt-6 text-center">
                      <h4 className="text-xl font-bold text-slate-900">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            aria-label="Previous Slide"
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200 -ml-4"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            aria-label="Next Slide"
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-100 text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-200 -mr-4"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Highlights */}
        <div className="mt-12 grid gap-6 rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur md:grid-cols-4 border border-slate-100">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-10 w-10 text-blue-600 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900">Real People</h4>
              <p className="text-sm text-slate-500">Real Impact</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Users className="h-10 w-10 text-orange-500 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900">Trusted by Families</h4>
              <p className="text-sm text-slate-500">& Communities</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <School className="h-10 w-10 text-green-600 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900">Supporting Educators</h4>
              <p className="text-sm text-slate-500">Every Day</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Heart className="h-10 w-10 text-pink-500 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900">Building a Safer</h4>
              <p className="text-sm text-slate-500">Digital Future</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Detail Modal Pop-up ── */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header / Avatar */}
            <div className="flex flex-col items-center text-center">
              <Image
                src={selectedReview.image}
                alt={selectedReview.name}
                width={90}
                height={90}
                className="rounded-full border-4 border-blue-600 object-cover w-[90px] h-[90px] shadow-md mb-4"
              />
              <div className="text-yellow-500 text-lg">★★★★★</div>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                {selectedReview.title} Review
              </h3>
            </div>

            {/* Full Quote Content */}
            <div className="mt-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <p className="text-slate-700 text-base leading-relaxed italic">
                &ldquo;{selectedReview.quote}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="mt-6 text-center">
              <h4 className="text-lg font-bold text-slate-900">
                {selectedReview.name}
              </h4>
              <p className="text-sm font-medium text-slate-500">
                {selectedReview.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
