import React from 'react';
import { Presentation, FileText, Maximize2, Minimize2, Grid } from 'lucide-react';

interface TopBarProps {
  viewMode: 'slides' | 'document';
  setViewMode: (mode: 'slides' | 'document') => void;
  currentSlideIndex: number;
  totalSlides: number;
  onNavigateToSlide: (index: number) => void;
  onToggleDrawer: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  viewMode,
  setViewMode,
  currentSlideIndex,
  totalSlides,
  onNavigateToSlide,
  onToggleDrawer,
  isFullscreen,
  onToggleFullscreen
}) => {
  return (
    <header className="relative z-30 h-14 w-full bg-white border-b border-neutral-200 px-3 sm:px-6 flex items-center justify-between">
      {/* Brand & Client */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          onClick={() => {
            setViewMode('slides');
            onNavigateToSlide(0);
          }}
          className="flex items-center gap-2 text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <span className="w-6 h-6 rounded bg-neutral-900 text-white flex items-center justify-center font-bold text-xs">
            ∞
          </span>
          <span className="text-sm font-bold tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors font-display">
            Nexloop
          </span>
        </button>
        <span className="text-neutral-300 hidden xs:inline">/</span>
        <span className="text-xs text-neutral-500 font-medium truncate max-w-[140px] sm:max-w-xs hidden xs:inline">
          Flexible Packaging PLC
        </span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-neutral-600">
        <button
          onClick={() => {
            if (viewMode !== 'slides') setViewMode('slides');
            onNavigateToSlide(1);
          }}
          className="hover:text-neutral-950 transition-colors cursor-pointer"
        >
          Summary
        </button>
        <button
          onClick={() => {
            if (viewMode !== 'slides') setViewMode('slides');
            onNavigateToSlide(4);
          }}
          className="hover:text-neutral-950 transition-colors cursor-pointer"
        >
          Team
        </button>
        <button
          onClick={() => {
            if (viewMode !== 'slides') setViewMode('slides');
            onNavigateToSlide(5);
          }}
          className="hover:text-neutral-950 transition-colors cursor-pointer"
        >
          6 Modules
        </button>
        <button
          onClick={() => {
            if (viewMode !== 'slides') setViewMode('slides');
            onNavigateToSlide(12);
          }}
          className="hover:text-neutral-950 transition-colors cursor-pointer"
        >
          Track Record
        </button>
        <button
          onClick={() => {
            if (viewMode !== 'slides') setViewMode('slides');
            onNavigateToSlide(13);
          }}
          className="hover:text-neutral-950 transition-colors cursor-pointer"
        >
          Budget
        </button>
        <button
          onClick={() => {
            if (viewMode !== 'slides') setViewMode('slides');
            onNavigateToSlide(15);
          }}
          className="hover:text-neutral-950 transition-colors cursor-pointer"
        >
          Timeline
        </button>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        {/* Slide Counter Drawer Button */}
        {viewMode === 'slides' && (
          <button
            onClick={onToggleDrawer}
            title="Slide Index"
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-neutral-800 hover:text-neutral-950 bg-neutral-100 hover:bg-neutral-200/80 rounded border border-neutral-200 transition-colors cursor-pointer"
          >
            <Grid className="w-3.5 h-3.5 text-neutral-600" />
            <span className="font-bold">
              {String(currentSlideIndex + 1).padStart(2, '0')}/{totalSlides}
            </span>
          </button>
        )}

        {/* View Mode Toggle */}
        <div className="flex items-center p-0.5 bg-neutral-100 border border-neutral-200 rounded">
          <button
            onClick={() => setViewMode('slides')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              viewMode === 'slides'
                ? 'bg-white text-neutral-900 shadow-xs font-bold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <Presentation className="w-3.5 h-3.5" />
            <span className="text-[11px] sm:text-xs">Slides</span>
          </button>
          <button
            onClick={() => setViewMode('document')}
            className={`flex items-center gap-1 sm:gap-1.5 px-2 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
              viewMode === 'document'
                ? 'bg-white text-neutral-900 shadow-xs font-bold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[11px] sm:text-xs">Document</span>
          </button>
        </div>

        {/* Fullscreen Button */}
        <button
          onClick={onToggleFullscreen}
          className="hidden sm:flex p-1.5 text-neutral-600 hover:text-neutral-950 bg-white border border-neutral-200 hover:border-neutral-300 rounded transition-colors cursor-pointer"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    </header>
  );
};
