import React from 'react';
import { PRESENTATION_METADATA } from '../../data/presentationData';
import { Phone, Mail, MapPin, RefreshCw, CheckCircle2 } from 'lucide-react';

interface ConclusionContactSlideProps {
  onRestart: () => void;
}

export const ConclusionContactSlide: React.FC<ConclusionContactSlideProps> = ({ onRestart }) => {
  const steps = [
    {
      num: "01",
      title: "Contract & NDA Execution",
      desc: "Formal signing of the custom software engineering agreement and Non-Disclosure Agreement (NDA)."
    },
    {
      num: "02",
      title: "Advance & Asset Titled Purchase",
      desc: "Disbursement of 30% advance with workstation hardware titled directly in Flexible Packaging's corporate name."
    },
    {
      num: "03",
      title: "Akaki Kality On-Site Study",
      desc: "In-depth shop-floor process walkthrough with Extrusion, Printing, Stores, Quality, and Finance heads."
    },
    {
      num: "04",
      title: "Infrastructure & Biometric Sync",
      desc: "Domestic cloud server provisioning and biometric turnstile ADMS communication channel initialization."
    }
  ];

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header */}
      <div>
        <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
          16. Next Steps & Project Initiation
        </div>
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
          Ready to Build Ethiopia&apos;s Benchmark Packaging ERP System
        </h2>
        <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
          Nexloop Software Solution brings proven enterprise engineering, deep understanding of industrial manufacturing, and a fully asset-backed zero-risk commercial structure.
        </p>
      </div>

      {/* 4 Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-neutral-200 rounded p-4 flex flex-col justify-between"
          >
            <div className="space-y-1.5">
              <span className="text-lg sm:text-xl font-bold font-mono text-neutral-400 block">
                {step.num}
              </span>
              <h3 className="text-xs sm:text-sm font-bold text-neutral-900 font-display">
                {step.title}
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
            <div className="mt-3.5 pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-500 uppercase">
              Action Item
            </div>
          </div>
        ))}
      </div>

      {/* Contact & Safeguards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">
        {/* Left: Contact */}
        <div className="lg:col-span-6 bg-white border border-neutral-200 rounded p-4 sm:p-5 space-y-3">
          <span className="text-xs font-mono font-bold text-neutral-900 uppercase block">
            Engineering Leadership & Direct Contact
          </span>
          <div className="space-y-2 text-xs text-neutral-700">
            <a
              href={`tel:${PRESENTATION_METADATA.contact.phone.replace(/\s+/g, '')}`}
              className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded border border-neutral-200 flex justify-between items-center transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-neutral-700 group-hover:text-neutral-950" />
                <div>
                  <span className="font-bold text-neutral-950 block">{PRESENTATION_METADATA.contact.lead}</span>
                  <span className="text-neutral-500 text-[11px]">Co-Founder & Lead Systems Engineer</span>
                </div>
              </div>
              <span className="font-mono text-neutral-900 font-bold underline sm:no-underline">{PRESENTATION_METADATA.contact.phone}</span>
            </a>

            <div className="p-3 bg-neutral-50 rounded border border-neutral-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-neutral-950 block">Technical Co-Founders</span>
                <span className="text-neutral-500 text-[11px]">Hermela Teklit · Zelalem Yeheyes</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">Addis Ababa</span>
            </div>

            <div className="text-[11px] text-neutral-600 font-mono pt-1 flex items-center justify-between flex-wrap gap-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                Addis Ababa, Ethiopia
              </span>
              <a href="mailto:yaredkahase18@gmail.com" className="flex items-center gap-1 hover:underline">
                <Mail className="w-3.5 h-3.5 text-neutral-500" />
                {PRESENTATION_METADATA.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Right: Closing Guarantee & Restart */}
        <div className="lg:col-span-6 bg-white border border-neutral-200 rounded p-4 sm:p-5 flex flex-col justify-between space-y-3.5">
          <div className="space-y-2 text-xs">
            <span className="text-xs font-mono font-bold text-neutral-900 uppercase block">
              Institutional Partnership Guarantees
            </span>
            <div className="space-y-1.5 text-neutral-600 leading-relaxed">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                <span><strong>Secured Asset Guarantee:</strong> 30% advance is secured by hardware titled in the client&apos;s corporate name.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                <span><strong>Perpetual Ownership:</strong> The ERP is a 100% owned corporate asset with 0 ETB recurring annual license fees.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                <span><strong>Dedicated SLA:</strong> 1 full year complimentary maintenance + 2 years software upgrades directly in Addis Ababa.</span>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
            <button
              onClick={onRestart}
              className="inline-flex items-center gap-2 px-4 py-2 rounded bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restart Slides from Beginning</span>
            </button>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
              17/17 Complete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
