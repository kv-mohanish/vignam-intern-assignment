// File: components/PopularDetails.tsx
import React from "react";

const Card: React.FC<React.PropsWithChildren<{ title: string, meta: string[] }>> = ({ title, meta, children }) => (
  <div className="rounded-2xl border border-black/10 bg-white/80 backdrop-blur shadow-sm p-4 md:p-6 flex flex-col">
    <div className="flex items-start justify-between mb-4">
      <h3 className="font-medium text-lg md:text-xl">{title}</h3>
      <span className="opacity-60">→</span>
    </div>
    <ul className="text-sm text-neutral-600 grid gap-1 mb-6">
      {meta.map((m) => <li key={m}>{m}</li>)}
    </ul>
    <div className="flex-1 rounded-xl overflow-hidden border border-black/5 bg-neutral-100 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const PopularDetails: React.FC = () => (
  <section id="manufacture" className="bg-white">
    <div className="mx-auto max-w-7xl px-4 md:px-6 py-16">
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-medium bg-blue-600 text-white rounded-full px-2.5 py-1 mb-3">Manufacture</span>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">The Most Popular <span className="italic font-serif font-normal">Details</span> We Produce</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <Card title="Spherical Joint" meta={["Material: Steel, Stainless Steel", "Load Capacity: Up to 10,000 N", "Thread: M8 to M30", "Bearing Type: Ball or Plain"]}>
          <img src="https://picsum.photos/seed/joint/600/400" alt="Spherical Joint" className="w-full h-full object-contain" />
        </Card>
        <Card title="Mounting Plate" meta={["Material: Steel, Aluminium", "Hole Diameter: 6 mm to 12 mm", "Vibration Damping: Rubber Inserts", "Mounting Style: Horizontal, Vertical"]}>
          <img src="https://picsum.photos/seed/plate/600/400" alt="Mounting Plate" className="w-full h-full object-contain" />
        </Card>
        <Card title="Multi‑Pin Enclosure" meta={["Material: Plastic, Metal", "Pin Count: 2 to 50+ Pins", "Waterproof Rating: IP65/IP67", "Locking: Screw or Clip"]}>
          <img src="https://picsum.photos/seed/enclosure/600/400" alt="Enclosure" className="w-full h-full object-contain" />
        </Card>
      </div>
    </div>
  </section>
);

export default PopularDetails;