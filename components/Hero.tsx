"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Mascot = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 flex items-center justify-center">
        <div className="relative group cursor-pointer" onClick={toggleSound}>
          <video
            ref={videoRef}
            src="/images/eccyber.systems/muscot.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-[full] h-[auto] object-contain drop-shadow-2xl"
          />

          {/* Sound Toggle Button Indicator */}
          <button
            className="absolute bottom-4 right-4 bg-slate-900/80 text-white p-3 rounded-full backdrop-blur-md transition hover:bg-slate-900"
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? (
              <VolumeX size={20} />
            ) : (
              <Volume2 size={20} className="text-orange-400" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mascot;
