import React, { useState } from 'react';
import { TIMELINE_MILESTONES } from '../../data/presentationData';

export const TimelineScheduleSlide: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<string>('all');

  const filteredMilestones = selectedPhase === 'all'
    ? TIMELINE_MILESTONES
    : TIMELINE_MILESTONES.filter(m => m.phase === selectedPhase);

  const phases = [
    { id: 'all', name: 'All Milestones (15)' },
    { id: 'Phase 1: Planning & System Design', name: 'Phase 1: Planning & Design' },
    { id: 'Phase 2: Core Engineering & Integration', name: 'Phase 2: Core Engineering' },
    { id: 'Phase 3: Testing & Deployment', name: 'Phase 3: Testing & Go-Live' },
  ];

  return (
    <div className="py-2 space-y-4">
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
        <div>
          <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
            15. Implementation Roadmap
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
            Phased Engineering, User Acceptance & Seamless Operational Cutover
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
            Structured into 3 progressive phases to ensure continuous plant production without interruption, culminating in rigorous User Acceptance Testing (UAT) and staff certification.
          </p>
        </div>

        {/* Phase Filter */}
        <div className="flex flex-wrap items-center gap-1 p-0.5 bg-neutral-100 border border-neutral-200 rounded shrink-0 self-start sm:self-auto">
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedPhase(p.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                selectedPhase === p.id ? 'bg-white text-neutral-950 shadow-xs font-bold' : 'text-neutral-600'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Schedule Container */}
      <div className="bg-white border border-neutral-200 rounded p-3 sm:p-4 space-y-3">
        {/* Phase progress banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pb-3 border-b border-neutral-100">
          <div className="p-2 sm:p-2.5 bg-neutral-50 border border-neutral-200 rounded">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Phase 1 · Months 1–2</span>
            <div className="font-bold text-neutral-900 mt-0.5">Planning & Architecture</div>
            <div className="text-[11px] text-neutral-500">Plant study, Figma prototypes & schema design</div>
          </div>

          <div className="p-2 sm:p-2.5 bg-neutral-50 border border-neutral-200 rounded">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Phase 2 · Months 2–6</span>
            <div className="font-bold text-neutral-900 mt-0.5">Core Software Engineering</div>
            <div className="text-[11px] text-neutral-500">6 core modules & biometric hardware API sync</div>
          </div>

          <div className="p-2 sm:p-2.5 bg-neutral-50 border border-neutral-200 rounded">
            <span className="font-mono text-neutral-500 font-bold block text-[11px]">Phase 3 · Months 6–7</span>
            <div className="font-bold text-neutral-900 mt-0.5">Testing, Training & Cutover</div>
            <div className="text-[11px] text-neutral-500">Security audit, UAT, data migration & go-live</div>
          </div>
        </div>

        {/* Milestone List */}
        <div className="max-h-[340px] overflow-y-auto space-y-2 pr-1">
          {filteredMilestones.map((m) => (
            <div
              key={m.code}
              className="p-3 bg-neutral-50 border border-neutral-200 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-100/70 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-3">
                <span className="w-8 h-8 rounded bg-white border border-neutral-200 flex items-center justify-center font-mono font-bold text-xs text-neutral-900 shrink-0">
                  {m.code}
                </span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-neutral-900 font-display">
                      {m.title}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-600 bg-white px-1.5 py-0.5 rounded border border-neutral-200">
                      {m.department}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-500 mt-0.5 leading-snug">
                    Deliverable: {m.deliverable}
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-neutral-700 shrink-0 sm:text-right pl-11 sm:pl-0">
                <span className="font-bold text-neutral-900 block">{m.durationWeeks} Weeks</span>
                <span className="text-neutral-500">{m.startMonth} – {m.endMonth}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
