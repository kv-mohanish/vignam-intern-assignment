// File: components/VideoSection.tsx
import React from "react";

const COPY = {
  hero: {
    sub: "Upload your CAD file, and we'll take care of machining, finishing, and shipping—accurate parts delivered fast, no stress.",
    cta: "Upload your design",
  },
  leftStat: "12+ YEARS OF DELIVERING\nPERFECT DETAILS",
  rightStat: "OVER 100,000 PARTS\nMANUFACTURED ANNUALLY",
};

const VideoSection: React.FC = () => (
  <section id="video" className="bg-white border-t border-black/5">
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between text-xs md:text-sm text-neutral-600">
      <div className="hidden md:block whitespace-pre-wrap">{COPY.leftStat}</div>
      <div className="flex-1 text-center">
        <span className="hidden md:inline">{COPY.hero.sub}</span>
        <a
          href="#upload"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition ml-3"
        >
          → {COPY.hero.cta}
        </a>
      </div>
      <div className="hidden md:block text-right whitespace-pre-wrap">{COPY.rightStat}</div>
    </div>
    <div className="mx-auto max-w-7xl px-4 md:px-6 pb-12">
      <div className="relative rounded-2xl overflow-hidden border border-black/5 shadow-sm">
        <button className="absolute left-3 top-3 z-10 text-xs bg-white/90 border border-black/10 rounded-md px-2 py-1">🔊 SOUND ON</button>
        <a
          href="https://www.youtube.com/watch?v=E1czmX6bjFA&t=10s"
          target="_blank"
          className="absolute right-3 top-3 z-10 text-xs bg-white/90 border border-black/10 rounded-md px-2.5 py-1.5 hover:bg-white"
        >
          CHECK ON YOUTUBE ↗
        </a>
        <div className="aspect-video w-full">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/E1czmX6bjFA?start=10&rel=0&modestbranding=1"
            title="Vignam Text to Simulations"
            frameBorder={0}
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-white/80 backdrop-blur border border-black/10 flex items-center justify-center">▶</div>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;