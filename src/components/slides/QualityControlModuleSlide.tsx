import React from 'react';
import { CORE_MODULES } from '../../data/presentationData';

export const QualityControlModuleSlide: React.FC = () => {
  const moduleData = CORE_MODULES[4];

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          09. ERP Scope · Module 5
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          5-Stage Quality Gates, Backward Batch Traceability & ISO Audit
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          Empowers QC inspectors with system authority to halt defective production lines, reconstruct batch histories in minutes, and manage ISO 9001/14001 audits.
        </p>
      </div>

      {/* 5 Quality Gates Ribbon */}
      <div className="bg-white border border-neutral-200 rounded p-3.5 sm:p-4 space-y-2">
        <div className="text-xs font-mono font-bold text-neutral-900 uppercase">
          5 Core Quality Inspection Gates Along Manufacturing Flow
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
          <div className="p-2 sm:p-2.5 bg-neutral-50 rounded border border-neutral-200">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Gate 1</span>
            <span className="font-bold text-neutral-900 block mt-0.5">Receiving Dock</span>
            <span className="text-[11px] text-neutral-500">Polymer MFI & pigment lab test</span>
          </div>

          <div className="p-2 sm:p-2.5 bg-neutral-50 rounded border border-neutral-200">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Gate 2</span>
            <span className="font-bold text-neutral-900 block mt-0.5">Pre-Extrusion</span>
            <span className="text-[11px] text-neutral-500">Resin batch & moisture sign-off</span>
          </div>

          <div className="p-2 sm:p-2.5 bg-neutral-50 rounded border border-neutral-200">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Gate 3</span>
            <span className="font-bold text-neutral-900 block mt-0.5">In-Process Testing</span>
            <span className="text-[11px] text-neutral-500">Digital authority to stop machine</span>
          </div>

          <div className="p-2 sm:p-2.5 bg-neutral-50 rounded border border-neutral-200">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Gate 4</span>
            <span className="font-bold text-neutral-900 block mt-0.5">Line Clearance</span>
            <span className="text-[11px] text-neutral-500">Plate & ink changeover sign-off</span>
          </div>

          <div className="p-2 sm:p-2.5 bg-neutral-50 rounded border border-neutral-200">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Gate 5</span>
            <span className="font-bold text-neutral-900 block mt-0.5">Pre-Dispatch COA</span>
            <span className="text-[11px] text-neutral-500">Final Certificate of Analysis</span>
          </div>
        </div>
      </div>

      {/* 4 Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        <div className="bg-white border border-neutral-200 rounded p-3.5 space-y-1">
          <span className="text-xs font-mono text-neutral-500 font-bold">Traceability</span>
          <h3 className="text-xs font-bold text-neutral-900 font-display">Backward Batch & Roll Trace</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Reconstructs customer claims back to exact shift timestamp, machine operator, slitter line, and raw resin lot in minutes.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded p-3.5 space-y-1">
          <span className="text-xs font-mono text-neutral-500 font-bold">Correction</span>
          <h3 className="text-xs font-bold text-neutral-900 font-display">NCR & CAPA Engine</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Standardized non-conformance ticketing with 5-Why root-cause analysis, delegated action items, and executive closure.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded p-3.5 space-y-1">
          <span className="text-xs font-mono text-neutral-500 font-bold">Compliance</span>
          <h3 className="text-xs font-bold text-neutral-900 font-display">ISO 9001/14001 Audits</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Internal audit calendar, environmental hygiene variance logs, and SOP document repository for the Management Representative.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded p-3.5 space-y-1">
          <span className="text-xs font-mono text-neutral-500 font-bold">Continuous Quality</span>
          <h3 className="text-xs font-bold text-neutral-900 font-display">Defect-Driven Training</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Identifies shifts with recurring printing or extrusion defects, automatically triggering targeted retraining requisitions to HR.
          </p>
        </div>
      </div>

      {/* Footer Subtotal */}
      <div className="bg-white border border-neutral-200 rounded p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-700">
        <div>
          <strong className="text-neutral-900 font-bold">Laboratory Testing:</strong> Film thickness gauges, tensile strength, dart impact, ink adhesion, and barcode scan verification.
        </div>
        <div className="font-mono text-neutral-900 font-bold bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
          Module Budget: 175,000.00 ETB
        </div>
      </div>
    </div>
  );
};
