import React from 'react';
import { CORE_MODULES } from '../../data/presentationData';
import { IMAGES } from '../../assets/images';

export const ProductionModuleSlide: React.FC = () => {
  const moduleData = CORE_MODULES[1];

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          06. ERP Scope · Module 2
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Production Operations: Film Extrusion, Flexographic Printing & Prepress
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          Stops untracked scrap leaks and unplanned downtime through automated flexographic plate scheduling, dynamic resin Bill of Materials (BOM) formulation, and digital shop-floor dispatch.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* Left: 6 features */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {moduleData.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200 rounded p-3.5 space-y-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-neutral-500">0{idx + 1}</span>
                <h3 className="text-xs font-bold text-neutral-900 font-display">
                  {feature.name}
                </h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed pl-5">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Right Photo & Workflow */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
          <div className="bg-white border border-neutral-200 rounded p-2">
            <img
              src={IMAGES.printing}
              alt="Precision Flexographic Printing Machinery"
              className="w-full h-32 sm:h-36 object-cover rounded"
              referrerPolicy="no-referrer"
            />
            <div className="text-[11px] font-mono text-neutral-600 font-medium pt-2 px-1">
              Flexographic Prepress & Photopolymer Plate Logic
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded p-3 space-y-1.5 text-xs">
            <div className="font-mono text-neutral-900 font-bold uppercase text-[11px]">
              2-Tier Raw Material Requisition Hierarchy
            </div>
            <div className="p-2 bg-neutral-50 rounded border border-neutral-200 text-neutral-700 font-mono text-[11px] flex justify-between items-center text-center">
              <span>Production Lead</span>
              <span>→</span>
              <span>Technical Mgr</span>
              <span>→</span>
              <span>Commercial Mgr</span>
            </div>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Resins, masterbatch pigments, and solvent inks require dual technical & commercial validation prior to warehouse dispatch.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Subtotal */}
      <div className="bg-white border border-neutral-200 rounded p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-700">
        <div>
          <strong className="text-neutral-900 font-bold">Packaging Materials:</strong> LDPE, HDPE, BOPP, flexo inks, solvent adhesives, and SCR-01 floor scrap reconciliation.
        </div>
        <div className="font-mono text-neutral-900 font-bold bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
          Module Budget: 150,000.00 ETB
        </div>
      </div>
    </div>
  );
};
