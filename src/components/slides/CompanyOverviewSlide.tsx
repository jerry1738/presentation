import React from 'react';

export const CompanyOverviewSlide: React.FC = () => {
  return (
    <div className="py-2 space-y-5 sm:space-y-6">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          03. Company Overview & Vision
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Engineering Mission-Critical Enterprise Systems for Ethiopian Industry
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-2 max-w-3xl leading-relaxed">
          Nexloop Software Solution is a founder-led systems engineering firm specializing in bespoke enterprise platforms, industrial automation bridges, and transactional integrity.
        </p>
      </div>

      {/* Mission & Vision + 4 Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Left: Mission / Vision / Ownership */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5 sm:space-y-4">
          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase">Mission</span>
            <p className="text-xs sm:text-sm text-neutral-800 italic leading-relaxed">
              &ldquo;To transform fragmented, paper-reliant factory operations into unified, real-time, data-driven manufacturing enterprises through world-class, locally grounded software engineering.&rdquo;
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded p-4 space-y-1.5">
            <span className="text-xs font-mono font-bold text-neutral-500 uppercase">Vision</span>
            <p className="text-xs sm:text-sm text-neutral-800 italic leading-relaxed">
              &ldquo;To establish Ethiopia&apos;s foremost industrial ERP ecosystem, superseding rigid foreign platforms with solutions customized to local tax statutes, languages, and plant environments.&rdquo;
            </p>
          </div>

          <div className="bg-neutral-100 border border-neutral-200 rounded p-3.5 space-y-1">
            <div className="text-xs font-bold text-neutral-900 font-mono uppercase">
              Ownership Structure & Direct Engineering Governance
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Co-founded and held in equal parts by <strong>Yared Kahsay Girmay, Hermela Teklit, and Zelalem Yeheyes Belay</strong>. Direct founder involvement eliminates bureaucratic layers, guaranteeing fast iterations and uncompromised quality.
            </p>
          </div>
        </div>

        {/* Right: 4 Strategic Goals */}
        <div className="lg:col-span-6 bg-white border border-neutral-200 rounded p-4 flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-2">
            <span className="text-xs font-mono font-bold text-neutral-900 uppercase">
              3–5 Year Strategic Milestones
            </span>
            <span className="text-xs font-mono text-neutral-500">2026–2031 Roadmap</span>
          </div>

          <div className="space-y-2 sm:space-y-2.5">
            <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded">
              <span className="text-xs font-bold text-neutral-900 font-mono block">1. Corporate Scale & ISO Certification</span>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Expanding corporate engineering operations and obtaining formal ISO 27001 / ISO 9001 software quality certifications.
              </p>
            </div>

            <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded">
              <span className="text-xs font-bold text-neutral-900 font-mono block">2. Sovereign Manufacturing ERP Ecosystem</span>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Pioneering tailored industrial ERP suites built for Ethiopian manufacturing, packaging, and commercial trade.
              </p>
            </div>

            <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded">
              <span className="text-xs font-bold text-neutral-900 font-mono block">3. Domestic Enterprise Digital Capacity</span>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Empowering domestic manufacturers with modern digital infrastructure without costly foreign currency licenses.
              </p>
            </div>

            <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded">
              <span className="text-xs font-bold text-neutral-900 font-mono block">4. Multi-Sector Expansion</span>
              <p className="text-xs text-neutral-600 mt-0.5 leading-relaxed">
                Scaling core ERP architecture into pharmaceuticals, food processing, logistics, and supply-chain hubs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-neutral-200 pt-3 flex flex-wrap items-center justify-between text-xs text-neutral-500 font-mono">
        <div>Proven Track Record: 3 Production ERP Platforms & Commercial Trade Systems</div>
        <div>Dedicated Software Engineering Studio</div>
      </div>
    </div>
  );
};
