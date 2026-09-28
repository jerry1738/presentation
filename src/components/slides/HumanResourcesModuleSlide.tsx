import React from 'react';

export const HumanResourcesModuleSlide: React.FC = () => {
  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          10. ERP Scope · Module 6
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Human Resources & General Services: Biometrics, 12 Actions & Fleet
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          Synchronizes factory turnstiles via hardware ADMS protocols, governs 12 employee lifecycle actions, computes 4-tier overtime, and manages factory vehicle fleets and safety apparel (PPE).
        </p>
      </div>

      {/* 6 Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
        <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
          <span className="text-xs font-mono text-neutral-500 font-bold">01 / Time & Attendance</span>
          <h3 className="text-sm font-bold text-neutral-900 font-display">Biometric Hardware Sync (ADMS)</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Direct TCP/IP API bridge with factory gate turnstiles; manages 3-shift rotational rosters, shift swaps, grace periods, and late penalty rules.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
          <span className="text-xs font-mono text-neutral-500 font-bold">02 / Employee Lifecycle</span>
          <h3 className="text-sm font-bold text-neutral-900 font-display">12 Standardized Actions</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Standard digital workflows for: Hire, Re-hire, Transfer, Promotion, Demotion, Salary Revision, Disciplinary Warning, Suspension, Leave, Renewal, and Exit.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
          <span className="text-xs font-mono text-neutral-500 font-bold">03 / Overtime Engine</span>
          <h3 className="text-sm font-bold text-neutral-900 font-display">4-Tier Overtime Engine</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Supervisor → Dept Head → HR → General Manager authorization chain. Automatically computes standard, night, weekend, and public holiday rates into payroll.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
          <span className="text-xs font-mono text-neutral-500 font-bold">04 / Transport Logistics</span>
          <h3 className="text-sm font-bold text-neutral-900 font-display">Fleet Logistics & Fuel Quotas</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Vehicle directory, driver trip missions, fuel coupon quota allocations, mileage logs, and scheduled preventative maintenance service reminders.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
          <span className="text-xs font-mono text-neutral-500 font-bold">05 / Security Controls</span>
          <h3 className="text-sm font-bold text-neutral-900 font-display">Gate Passes & Visitor Access</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Digital gate passes for incoming raw materials, outgoing finished pouches, contractor equipment, and electronic visitor access logging.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
          <span className="text-xs font-mono text-neutral-500 font-bold">06 / Services & Welfare</span>
          <h3 className="text-sm font-bold text-neutral-900 font-display">Maintenance, Canteen & PPE</h3>
          <p className="text-xs text-neutral-600 leading-relaxed">
            Internal facility maintenance work orders, Personal Protective Equipment (PPE) distribution tracking, uniform quotas, and canteen catering rosters.
          </p>
        </div>
      </div>

      {/* Footer Subtotal */}
      <div className="bg-white border border-neutral-200 rounded p-3.5 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-700">
        <div>
          <strong className="text-neutral-900 font-bold">Payroll Processing:</strong> Maker-checker verification, timecard lock, digital payslips, and direct double-entry GL journal bridge.
        </div>
        <div className="font-mono text-neutral-900 font-bold bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
          HR & Time Tracking Modules Total: 220,000.00 ETB
        </div>
      </div>
    </div>
  );
};
