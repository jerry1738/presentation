import React from 'react';
import {
  PRESENTATION_METADATA,
  CORE_BOTTLENECKS,
  CORE_MODULES,
  TEAM_MEMBERS,
  BUDGET_SUMMARY
} from '../data/presentationData';

interface DocumentViewProps {
  onSwitchToSlides: (slideIndex?: number) => void;
}

export const DocumentView: React.FC<DocumentViewProps> = ({ onSwitchToSlides }) => {
  return (
    <div className="max-w-4xl mx-auto py-6 sm:py-10 px-3.5 sm:px-6 space-y-10 sm:space-y-12 bg-white border-x border-neutral-200 min-h-screen my-2 sm:my-4 rounded shadow-xs">
      {/* Document Header */}
      <div className="border-b border-neutral-200 pb-6 sm:pb-8 space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded bg-neutral-900 text-white flex items-center justify-center font-bold text-sm">
              ∞
            </span>
            <span className="text-sm font-bold tracking-tight text-neutral-900 font-display">
              Nexloop Software Solution
            </span>
          </div>
          <button
            onClick={() => onSwitchToSlides(0)}
            className="text-xs font-medium text-neutral-900 border border-neutral-300 px-3 py-1.5 rounded hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            ← Return to Slides
          </button>
        </div>

        <div className="space-y-2 pt-2">
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            Official Technical Proposal & System Architecture
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-neutral-950 font-display leading-snug">
            Custom Enterprise Resource Planning (ERP) System Engineering, Deployment & Staff Capacity Building
          </h1>
          <div className="text-xs text-neutral-600 flex flex-wrap gap-x-4 gap-y-1 pt-1 font-mono">
            <span>Client: <strong>Flexible Packaging Manufacturing P.L.C.</strong></span>
            <span>Location: <strong>Akaki Kality, Addis Ababa</strong></span>
            <span>Facility Size: <strong>4,000 m²</strong></span>
          </div>
        </div>
      </div>

      {/* 01. Executive Summary */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5">
          <h2 className="text-base sm:text-lg font-bold text-neutral-950 font-display">
            1. Executive Summary
          </h2>
          <button
            onClick={() => onSwitchToSlides(1)}
            className="text-xs text-neutral-500 hover:text-neutral-900 font-mono"
          >
            View Slide 02 →
          </button>
        </div>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
          Flexible Packaging Manufacturing P.L.C., operating from its 4,000 m² industrial manufacturing facility in Akaki Kality, Addis Ababa since 2003, is a pioneer in flexographic printing, film extrusion, and multi-layer flexible packaging in Ethiopia. Managing complex industrial machinery and dispersed inventory nodes using disconnected manual and paper records has created three core operational bottlenecks: unrecorded scrap leaks, multi-day inventory latency, and untracked machine downtime.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {CORE_BOTTLENECKS.map((b, i) => (
            <div key={b.id} className="p-3.5 bg-neutral-50 border border-neutral-200 rounded space-y-1.5">
              <span className="text-[10px] font-mono text-neutral-500 font-bold block">0{i + 1} · {b.metric}</span>
              <h3 className="text-xs font-bold text-neutral-900">{b.title}</h3>
              <p className="text-[11px] text-neutral-600 leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 02. Company & Leadership */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5">
          <h2 className="text-base sm:text-lg font-bold text-neutral-950 font-display">
            2. Company Overview & Engineering Leadership
          </h2>
          <button
            onClick={() => onSwitchToSlides(4)}
            className="text-xs text-neutral-500 hover:text-neutral-900 font-mono"
          >
            View Slide 05 →
          </button>
        </div>
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
          Nexloop Software Solution is a founder-led systems engineering firm co-owned and directed equally by <strong>Yared Kahsay Girmay, Hermela Teklit, and Zelalem Yeheyes Belay</strong>. Our core engineering team is augmented by top-tier certified contract specialists in database tuning, printing technology operations, and Ethiopian statutory tax compliance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {TEAM_MEMBERS.map((m) => (
            <div key={m.id} className="p-3 bg-neutral-50 border border-neutral-200 rounded space-y-0.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-neutral-900">{m.name}</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-white border border-neutral-200 rounded text-neutral-600">
                  {m.category === 'core' ? 'Founding Partner' : 'Specialist Consultant'}
                </span>
              </div>
              <div className="text-[11px] text-neutral-700 font-medium">{m.role}</div>
              <div className="text-[10px] text-neutral-500">{m.education}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 03. 6 Core Modules */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5">
          <h2 className="text-base sm:text-lg font-bold text-neutral-950 font-display">
            3. Scope of the 6 Core ERP Modules
          </h2>
          <button
            onClick={() => onSwitchToSlides(5)}
            className="text-xs text-neutral-500 hover:text-neutral-900 font-mono"
          >
            View Slide 06 →
          </button>
        </div>
        <div className="space-y-3.5">
          {CORE_MODULES.map((m) => (
            <div key={m.id} className="border border-neutral-200 rounded p-3.5 sm:p-4 space-y-2.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-100 pb-2 gap-1">
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 font-display">
                  Module {m.num}: {m.title}
                </h3>
                <span className="text-[11px] text-neutral-500">{m.tagline}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                {m.features.map((f, i) => (
                  <div key={i} className="bg-neutral-50 p-2.5 rounded border border-neutral-100">
                    <span className="font-bold block text-[11px] text-neutral-900">{f.name}</span>
                    <span className="text-[11px] text-neutral-600 leading-relaxed mt-0.5 block">{f.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 04. Budget Breakdown */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5">
          <h2 className="text-base sm:text-lg font-bold text-neutral-950 font-display">
            4. Project Budget & Asset Ownership Guarantee Model
          </h2>
          <button
            onClick={() => onSwitchToSlides(13)}
            className="text-xs text-neutral-500 hover:text-neutral-900 font-mono"
          >
            View Slide 14 →
          </button>
        </div>

        <div className="border border-neutral-200 rounded p-3 sm:p-4 space-y-3 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[500px]">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500 font-mono text-[11px]">
                  <th className="py-2 px-1">Code</th>
                  <th className="py-2 px-1">Scope / Module Category</th>
                  <th className="py-2 px-1 text-right">Subtotal (ETB)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {BUDGET_SUMMARY.map((row) => (
                  <tr key={row.code}>
                    <td className="py-2 px-1 font-mono text-neutral-500 font-semibold">{row.code}</td>
                    <td className="py-2 px-1 text-neutral-800 font-medium">{row.title}</td>
                    <td className="py-2 px-1 text-right font-mono font-bold text-neutral-900">
                      {row.costETB.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-3 border-t border-neutral-200 text-xs space-y-1.5 font-mono">
            <div className="flex justify-between text-neutral-600">
              <span>Net Software Development Cost:</span>
              <span>{PRESENTATION_METADATA.netCostETB.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Value Added Tax (15% VAT):</span>
              <span>{PRESENTATION_METADATA.vatETB.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB</span>
            </div>
            <div className="flex justify-between text-neutral-950 font-bold text-sm pt-1.5 border-t border-neutral-200">
              <span>Grand Total Project Investment (incl. 15% VAT):</span>
              <span>{PRESENTATION_METADATA.grandTotalETB.toLocaleString('en-US', { minimumFractionDigits: 2 })} ETB</span>
            </div>
          </div>
        </div>

        {/* Asset Guarantee Box */}
        <div className="p-3.5 bg-neutral-50 border border-neutral-200 rounded space-y-1 text-xs text-neutral-700 leading-relaxed">
          <strong className="text-neutral-900 font-bold block">Zero-Risk Asset Ownership Guarantee Model:</strong>
          All computer hardware (ETB 150,000) and office equipment (ETB 60,000) procured under the 30% advance disbursement (ETB 474,006.90) will be legally registered and titled directly in the corporate name of Flexible Packaging Manufacturing P.L.C. Upon successful system commissioning and deployment, their total audited value will be fully deducted from Nexloop's final project invoice.
        </div>
      </section>

      {/* 05. Timeline */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5">
          <h2 className="text-base sm:text-lg font-bold text-neutral-950 font-display">
            5. Phased Implementation Roadmap (6 to 7 Months)
          </h2>
          <button
            onClick={() => onSwitchToSlides(15)}
            className="text-xs text-neutral-500 hover:text-neutral-900 font-mono"
          >
            View Slide 16 →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Phase 1: Months 1–2</span>
            <div className="font-bold text-neutral-900 mt-0.5">Planning & Architecture</div>
            <p className="text-[11px] text-neutral-600 mt-1">On-site plant workflow study, interactive Figma prototypes, and relational database schema design.</p>
          </div>
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Phase 2: Months 2–6</span>
            <div className="font-bold text-neutral-900 mt-0.5">Core Software Engineering</div>
            <p className="text-[11px] text-neutral-600 mt-1">Full development of all 6 core modules, GL bridge, and biometric hardware API integration.</p>
          </div>
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Phase 3: Months 6–7</span>
            <div className="font-bold text-neutral-900 mt-0.5">Testing, Training & Cutover</div>
            <p className="text-[11px] text-neutral-600 mt-1">Rigorous security audit, User Acceptance Testing (UAT), legacy data migration, staff training, and live go-live.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
        <div>Nexloop Software Solution · Lead Systems Engineer: +251 942 78 75 68</div>
        <button
          onClick={() => onSwitchToSlides(0)}
          className="text-neutral-900 hover:underline cursor-pointer font-bold"
        >
          Return to Slides ↑
        </button>
      </div>
    </div>
  );
};
