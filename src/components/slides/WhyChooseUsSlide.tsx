import React from 'react';

export const WhyChooseUsSlide: React.FC = () => {
  const advantages = [
    {
      num: "01",
      title: "100% Tailored for Packaging",
      subtitle: "Zero operational misalignment or bloat",
      desc: "Rather than forcing your factory to bend around generic foreign templates, this ERP is engineered from the ground up for plastic film extrusion and flexographic printing."
    },
    {
      num: "02",
      title: "Full Ownership & 0 Annual Licenses",
      subtitle: "Perpetual corporate asset for your company",
      desc: "No annual per-user seat subscription fees or foreign exchange payments. The software becomes a perpetual, capitalized corporate asset of Flexible Packaging Manufacturing PLC."
    },
    {
      num: "03",
      title: "Unlimited User Seats & Roles",
      subtitle: "Scale operations without financial penalties",
      desc: "Zero seat licensing penalties. Whether 5 executive managers or 50 shop-floor operators and warehouse clerks use the system, there are zero incremental licensing costs."
    },
    {
      num: "04",
      title: "Domestic Cloud Infrastructure",
      subtitle: "Hosted in Tier-III Ethio Telecom / HahuCloud",
      desc: "Free from foreign exchange bottlenecks, hosted in high-speed domestic cloud facilities, ensuring blazing fast local connectivity and strict Ethiopian data sovereignty."
    },
    {
      num: "05",
      title: "Direct On-Site Technical Partnership",
      subtitle: "1-Yr free maintenance + 2-Yr upgrades",
      desc: "Following commissioning, receive 1 full year of complimentary dedicated maintenance and 2 full years of software upgrades directly from our Addis Ababa engineering team."
    }
  ];

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          11. Strategic Comparison
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Strategic & Financial Advantages vs. Generic Off-The-Shelf Software
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          Selecting an ERP system is as consequential as investing in capital machinery. We eliminate foreign currency liabilities, vendor lock-in, and operational mismatches.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
        {advantages.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 rounded p-4 flex flex-col justify-between space-y-2.5"
          >
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold text-neutral-400 block">{item.num}</span>
              <h3 className="text-sm font-bold text-neutral-900 font-display">
                {item.title}
              </h3>
              <div className="text-[11px] font-mono text-neutral-500 font-medium">
                {item.subtitle}
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed pt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}

        {/* Financial Summary Card */}
        <div className="bg-neutral-50 border border-neutral-200 rounded p-4 flex flex-col justify-between space-y-2 text-xs">
          <div className="font-mono font-bold text-neutral-900 uppercase text-xs">
            Commercial Model at a Glance
          </div>
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between border-b border-neutral-200 pb-1 text-neutral-700">
              <span>Software Ownership</span>
              <span className="font-mono font-bold text-neutral-950">100% Client Owned</span>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-1 text-neutral-700">
              <span>Annual Seat Subscriptions</span>
              <span className="font-mono font-bold text-neutral-950">0 ETB (No recurring fees)</span>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-1 text-neutral-700">
              <span>User Scalability</span>
              <span className="font-mono font-bold text-neutral-950">Unlimited Users</span>
            </div>
            <div className="flex justify-between border-b border-neutral-200 pb-1 text-neutral-700">
              <span>Advance Risk Mitigation</span>
              <span className="font-mono font-bold text-neutral-950">Asset Ownership Model</span>
            </div>
            <div className="flex justify-between text-neutral-700 pt-0.5">
              <span>Warranty & Upgrades</span>
              <span className="font-mono font-bold text-neutral-950">1-Yr Free + 2-Yr Upgrades</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
