import React from 'react';
import { X } from 'lucide-react';

export interface SlideMeta {
  index: number;
  title: string;
  category: string;
  slideNumber: string;
}

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideMeta[];
  currentIndex: number;
  onSelectSlide: (index: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  slides,
  currentIndex,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-neutral-950/70 backdrop-blur-xs">
      <div className="bg-white border border-neutral-300 rounded-lg w-full max-w-4xl max-h-[90vh] sm:max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-neutral-200">
          <div>
            <h3 className="text-sm font-bold text-neutral-900 font-display">
              Slide Navigation Index
            </h3>
            <p className="text-xs text-neutral-500">
              Select any slide below to jump directly
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid */}
        <div className="p-3 sm:p-4 overflow-y-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-2.5">
          {slides.map((slide) => {
            const isCurrent = slide.index === currentIndex;
            return (
              <button
                key={slide.index}
                onClick={() => {
                  onSelectSlide(slide.index);
                  onClose();
                }}
                className={`text-left p-3 rounded border transition-colors cursor-pointer flex flex-col justify-between min-h-[90px] sm:h-24 ${
                  isCurrent
                    ? 'bg-neutral-900 border-neutral-900 text-white'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className={isCurrent ? 'text-neutral-300 font-bold' : 'text-neutral-500 font-bold'}>
                      {slide.slideNumber}
                    </span>
                    <span className={`truncate max-w-[100px] ${isCurrent ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {slide.category}
                    </span>
                  </div>
                  <div className="text-xs font-semibold line-clamp-2 leading-snug">
                    {slide.title}
                  </div>
                </div>

                <div className={`text-[10px] font-mono mt-1 ${isCurrent ? 'text-neutral-300 font-semibold' : 'text-neutral-500'}`}>
                  {isCurrent ? '● Active Slide' : 'Jump to slide →'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 sm:px-5 py-2.5 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between text-xs text-neutral-500 font-mono">
          <span>Total {slides.length} Slides</span>
          <span className="hidden sm:inline">Nexloop ERP Proposal</span>
        </div>
      </div>
    </div>
  );
};
