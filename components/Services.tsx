// File: components/Services.tsx
import React from "react";

const Services: React.FC = () => (
  <section id="learn" className="bg-white">
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24 grid lg:grid-cols-[1.2fr_0.8fr] gap-10">
      <div>
        <div className="mb-6">
          <span className="inline-block text-xs font-medium bg-blue-600 text-white rounded-full px-2.5 py-1">About</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
          Revolutionizing Manufacturing with Speed and <span className="italic font-serif font-normal">Precision</span>
        </h2>
        <ol className="mt-8 divide-y divide-black/5 border-y border-black/5">
          {["Custom Brackets", "Steel Adapters", "Motor Mounts", "Enclosures"].map((item, i) => (
            <li key={item} className="flex items-center justify-between py-4 text-neutral-800">
              <div className="flex items-center gap-4">
                <span className="text-neutral-400 w-6">{String(i + 1).padStart(2, '0')}.</span>
                <span>{item}</span>
              </div>
              <span className="opacity-60">⚙️</span>
            </li>
          ))}
        </ol>
      </div>
      <aside className="self-start">
        <div className="rounded-2xl border border-black/5 shadow-sm p-5 bg-neutral-50">
          <div className="flex items-center gap-3 mb-3">
            <img src="https://i.pravatar.cc/64?img=12" alt="avatar" className="h-10 w-10 rounded-full" />
            <div>
              <div className="font-medium">Ayrton Senna</div>
              <div className="text-xs text-neutral-500">CEO & Senior Partner at Forge</div>
            </div>
          </div>
          <p className="text-sm text-neutral-700 leading-6">
            At Forge, we believe that getting custom CNC parts should be fast, reliable, and effortless. Our platform turns your CAD files into production‑ready parts—often in as fast as one day. Whether you’re prototyping or scaling, we remove friction so you can focus on building what matters.
          </p>
        </div>
      </aside>
    </div>
  </section>
);

export default Services;