import React, { useState } from 'react';
import { TEAM_MEMBERS, TeamMember } from '../../data/presentationData';

export const TeamPersonnelSlide: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(TEAM_MEMBERS[0]);
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'core' | 'contracted'>('all');

  const filteredMembers = categoryFilter === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.category === categoryFilter);

  return (
    <div className="py-2 space-y-4 sm:space-y-5">
      {/* Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
        <div>
          <div className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
            04. Engineering Team Personnel
          </div>
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-neutral-950 font-display mt-1">
            Multidisciplinary Software, Database & Financial Compliance Engineers
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-3xl leading-relaxed">
            Founding lead software architects combined with top-tier academic graduates, certified printing technology specialists, and tax compliance experts.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-1 p-0.5 bg-neutral-100 border border-neutral-200 rounded shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setCategoryFilter('all')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              categoryFilter === 'all' ? 'bg-white text-neutral-950 shadow-xs font-bold' : 'text-neutral-600'
            }`}
          >
            All (8)
          </button>
          <button
            onClick={() => setCategoryFilter('core')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              categoryFilter === 'core' ? 'bg-white text-neutral-950 shadow-xs font-bold' : 'text-neutral-600'
            }`}
          >
            Founders (3)
          </button>
          <button
            onClick={() => setCategoryFilter('contracted')}
            className={`px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              categoryFilter === 'contracted' ? 'bg-white text-neutral-950 shadow-xs font-bold' : 'text-neutral-600'
            }`}
          >
            Contract Team (5)
          </button>
        </div>
      </div>

      {/* Main Grid: Personnel Selector List (Left) & Dossier (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-start">
        {/* Left List */}
        <div className="lg:col-span-5 space-y-1.5 max-h-[300px] lg:max-h-[440px] overflow-y-auto pr-1">
          {filteredMembers.map((member) => {
            const isSelected = selectedMember.id === member.id;
            return (
              <button
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className={`w-full text-left p-2.5 sm:p-3 rounded border transition-colors cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-neutral-900 border-neutral-900 text-white'
                    : 'bg-white border-neutral-200 text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-display">{member.name}</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded border ${
                      isSelected
                        ? 'border-neutral-700 bg-neutral-800 text-neutral-200'
                        : 'border-neutral-200 bg-neutral-100 text-neutral-600'
                    }`}>
                      {member.category === 'core' ? 'Founder' : 'Specialist'}
                    </span>
                  </div>
                  <div className={`text-[11px] truncate max-w-[240px] mt-0.5 ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {member.role}
                  </div>
                </div>
                <span className={`text-xs font-mono ${isSelected ? 'text-neutral-400' : 'text-neutral-400'}`}>
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Selected Member Dossier */}
        <div className="lg:col-span-7 bg-white border border-neutral-200 rounded p-4 sm:p-5 space-y-3.5 sm:space-y-4">
          <div className="flex flex-wrap items-start justify-between gap-2 border-b border-neutral-100 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-neutral-950 font-display">
                  {selectedMember.name}
                </h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded border border-neutral-200 font-semibold">
                  {selectedMember.category === 'core' ? 'Founding Partner' : 'Specialist Consultant'}
                </span>
              </div>
              <p className="text-xs text-neutral-600 font-medium mt-0.5">
                {selectedMember.role}
              </p>
            </div>

            {selectedMember.contact && (
              <div className="text-xs font-mono text-neutral-600 bg-neutral-50 px-2.5 py-1 rounded border border-neutral-200">
                Direct Phone: <strong>{selectedMember.contact}</strong>
              </div>
            )}
          </div>

          {/* Education & Academic Honors */}
          <div className="p-3 bg-neutral-50 border border-neutral-200 rounded space-y-1 text-xs">
            <span className="font-mono font-bold text-neutral-900 block uppercase text-[11px]">
              Academic Degree & Institution
            </span>
            <div className="text-neutral-800 font-medium">{selectedMember.education}</div>
            <div className="text-neutral-500 text-[11px]">
              Institution: <strong>{selectedMember.institution}</strong> ({selectedMember.gradYear})
              {selectedMember.honors && <> · Distinction: <strong>{selectedMember.honors}</strong></>}
            </div>
            {selectedMember.gpa && (
              <div className="text-[11px] font-mono text-neutral-600 pt-0.5">
                {selectedMember.gpa}
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="space-y-1 text-xs text-neutral-600 leading-relaxed">
            <span className="font-mono font-bold text-neutral-900 uppercase block text-[11px]">
              Professional Experience & Profile
            </span>
            <p>{selectedMember.bio}</p>
          </div>

          {/* Key Skills */}
          <div className="space-y-1.5 pt-1">
            <span className="font-mono font-bold text-neutral-900 uppercase block text-[11px]">
              Core Competencies & Stack
            </span>
            <div className="flex flex-wrap gap-1.5">
              {selectedMember.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-mono px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded border border-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          {selectedMember.certifications.length > 0 && (
            <div className="space-y-1 pt-1 border-t border-neutral-100 text-xs">
              <span className="font-mono font-bold text-neutral-900 uppercase block text-[11px]">
                Verified Certifications & Credentials
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-neutral-600 text-[11px]">
                {selectedMember.certifications.map((cert, idx) => (
                  <li key={idx} className="leading-snug">{cert}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
