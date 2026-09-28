import React from 'react';
import { IMAGES } from '../../assets/images';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface CoverSlideProps {
  onStart: () => void;
}

export const CoverSlide: React.FC<CoverSlideProps> = ({ onStart }) => {
  return (
    <div className="py-2 sm:py-4 space-y-6 sm:space-y-8">
      {/* Top Header Label */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-wider">
          <span>Enterprise ERP Architecture</span>
          <span>·</span>
          <span>Flexible Packaging Manufacturing P.L.C.</span>
        </div>
        <div className="text-xs text-neutral-500 font-mono">
          Akaki Kality, Addis Ababa
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-1">
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          <div className="inline-block text-xs font-mono font-bold uppercase px-2.5 py-1 bg-neutral-100 text-neutral-900 border border-neutral-200 rounded">
            Technical Proposal & System Architecture
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-950 font-display leading-[1.2]">
            Custom Industrial Enterprise Resource Planning (ERP) System
          </h1>

          <p className="text-xs sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            Tailored software architecture for Flexible Packaging Manufacturing P.L.C. engineered to eradicate unrecorded scrap, synchronize multi-tier warehouses, and maximize overall equipment effectiveness (OEE).
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div className="bg-white border border-neutral-200 p-3 rounded">
              <div className="text-xs text-neutral-500">Plant Facility</div>
              <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">4,000 m²</div>
              <div className="text-[11px] text-neutral-400 font-mono">Akaki Kality</div>
            </div>

            <div className="bg-white border border-neutral-200 p-3 rounded">
              <div className="text-xs text-neutral-500">Delivery Roadmap</div>
              <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">6–7 Months</div>
              <div className="text-[11px] text-neutral-400 font-mono">Phased Rollout</div>
            </div>

            <div className="bg-white border border-neutral-200 p-3 rounded">
              <div className="text-xs text-neutral-500">Support Warranty</div>
              <div className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">1-Yr Free Support</div>
              <div className="text-[11px] text-neutral-400 font-mono">+ 2-Yr Free Upgrades</div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs transition-colors cursor-pointer w-full sm:w-auto"
            >
              <span>Explore Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs text-neutral-600 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-4 h-4 text-neutral-900" />
              Secured Asset Ownership Model
            </span>
          </div>
        </div>

        {/* Right Photo */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-neutral-200 rounded p-2 shadow-xs">
            <img
              src={IMAGES.hero}
              alt="Flexible Packaging Industrial Plant"
              className="w-full h-56 sm:h-72 lg:h-80 object-cover rounded"
              referrerPolicy="no-referrer"
            />
            <div className="pt-2.5 px-1 flex items-center justify-between text-xs text-neutral-500 font-mono">
              <span>Established: 2003 G.C.</span>
              <span>Film Extrusion & Flexo Printing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
