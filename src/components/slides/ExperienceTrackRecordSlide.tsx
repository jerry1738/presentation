import React, { useState } from 'react';
import { CLIENT_REFERENCES, GENERAL_PORTFOLIO, ClientReference } from '../../data/presentationData';

export const ExperienceTrackRecordSlide: React.FC = () => {
  const [activeClient, setActiveClient] = useState<ClientReference>(CLIENT_REFERENCES[0]);
  const [activeTab, setActiveTab] = useState<'major' | 'portfolio'>('major');

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
        <div>
          <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
            12. Experience & Track Record
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
            Proven Enterprise Deployments & Official Reference Letters
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
            Demonstrated engineering excellence with Grade-1 & Grade-3 contractors and commercial enterprises with verified completion certificates and official recommendation letters.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-0.5 bg-neutral-100 border border-neutral-200 rounded shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('major')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              activeTab === 'major' ? 'bg-white text-neutral-950 shadow-xs font-bold' : 'text-neutral-600'
            }`}
          >
            Major Deployments (3)
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              activeTab === 'portfolio' ? 'bg-white text-neutral-950 shadow-xs font-bold' : 'text-neutral-600'
            }`}
          >
            Broader Portfolio (6)
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'major' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-start">
          {/* Left: 3 Case Studies */}
          <div className="lg:col-span-5 space-y-2">
            {CLIENT_REFERENCES.map((client, idx) => {
              const isSelected = activeClient.name === client.name;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveClient(client)}
                  className={`w-full text-left p-3 sm:p-3.5 rounded border transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-neutral-900 border-neutral-900 text-white'
                      : 'bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold font-display">{client.name}</span>
                      {client.value && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                          isSelected ? 'border-neutral-700 bg-neutral-800 text-neutral-200' : 'border-neutral-200 bg-neutral-100 text-neutral-700'
                        }`}>
                          {client.value}
                        </span>
                      )}
                    </div>
                    <div className={`text-[11px] font-mono mt-0.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {client.category}
                    </div>
                  </div>
                  <span className={`text-xs font-mono ${isSelected ? 'text-neutral-400' : 'text-neutral-400'}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Dossier */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded p-4 sm:p-5 space-y-3.5 sm:space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-100 pb-3">
              <div>
                <span className="text-[11px] font-mono text-neutral-500 uppercase font-semibold">
                  Official Letter of Endorsement (Proposal Pages 44–49)
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-950 font-display mt-0.5">
                  {activeClient.name}
                </h3>
              </div>
              <span className="text-xs font-mono text-neutral-500">
                {activeClient.date}
              </span>
            </div>

            <div className="space-y-1 text-xs text-neutral-700 leading-relaxed">
              <span className="font-mono font-bold text-neutral-900 uppercase block text-[11px]">
                Scope of Work & Implementation Summary
              </span>
              <p>{activeClient.summary}</p>
            </div>

            <div className="space-y-2 pt-1 border-t border-neutral-100 text-xs">
              <span className="font-mono font-bold text-neutral-900 uppercase block text-[11px]">
                Key Deliverables & Verified Outcomes
              </span>
              <ul className="space-y-1.5 text-neutral-600">
                {activeClient.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-neutral-900 font-bold shrink-0">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div>
                Signatory: <strong>{activeClient.signatory}</strong> ({activeClient.role})
              </div>
              <span className="text-neutral-900 font-bold">Official Seal & Signature Verified</span>
            </div>
          </div>
        </div>
      ) : (
        /* Portfolio Grid */
        <div className="bg-white border border-neutral-200 rounded p-4 overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[500px]">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-500 font-mono text-[11px]">
                <th className="py-2 px-3">No.</th>
                <th className="py-2 px-3">Client / Project Name</th>
                <th className="py-2 px-3">System Scope</th>
                <th className="py-2 px-3">Sector / Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {GENERAL_PORTFOLIO.map((item) => (
                <tr key={item.no} className="hover:bg-neutral-50">
                  <td className="py-2.5 px-3 font-mono text-neutral-500">{item.no}</td>
                  <td className="py-2.5 px-3 font-bold text-neutral-900">{item.name}</td>
                  <td className="py-2.5 px-3 font-medium text-neutral-700">{item.type}</td>
                  <td className="py-2.5 px-3 font-mono text-neutral-500">{item.url}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
