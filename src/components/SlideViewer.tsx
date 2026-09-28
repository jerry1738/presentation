import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Grid,
  FileText
} from 'lucide-react';
import { SlideMeta } from './SlideDrawer';
import { CoverSlide } from './slides/CoverSlide';
import { ExecutiveSummarySlide } from './slides/ExecutiveSummarySlide';
import { SolutionArchitectureSlide } from './slides/SolutionArchitectureSlide';
import { CompanyOverviewSlide } from './slides/CompanyOverviewSlide';
import { TeamPersonnelSlide } from './slides/TeamPersonnelSlide';
import { GeneralManagerModuleSlide } from './slides/GeneralManagerModuleSlide';
import { ProductionModuleSlide } from './slides/ProductionModuleSlide';
import { FinanceModuleSlide } from './slides/FinanceModuleSlide';
import { CommercialModuleSlide } from './slides/CommercialModuleSlide';
import { QualityControlModuleSlide } from './slides/QualityControlModuleSlide';
import { HumanResourcesModuleSlide } from './slides/HumanResourcesModuleSlide';
import { WhyChooseUsSlide } from './slides/WhyChooseUsSlide';
import { ExperienceTrackRecordSlide } from './slides/ExperienceTrackRecordSlide';
import { ProjectBudgetSlide } from './slides/ProjectBudgetSlide';
import { AdvanceGuaranteeSlide } from './slides/AdvanceGuaranteeSlide';
import { TimelineScheduleSlide } from './slides/TimelineScheduleSlide';
import { ConclusionContactSlide } from './slides/ConclusionContactSlide';

interface SlideViewerProps {
  currentSlideIndex: number;
  onSlideChange: (index: number) => void;
  onOpenDrawer: () => void;
  onSwitchToDocument: () => void;
}

export const SLIDE_METADATA_LIST: SlideMeta[] = [
  { index: 0, slideNumber: "01", title: "Project Cover & Business Proposal", category: "Introduction" },
  { index: 1, slideNumber: "02", title: "Executive Summary & 3 Core Manufacturing Bottlenecks", category: "Analysis" },
  { index: 2, slideNumber: "03", title: "Custom Software Architecture & Database Engine", category: "Technology" },
  { index: 3, slideNumber: "04", title: "Nexloop Overview, Mission & 5-Year Strategic Goals", category: "Company" },
  { index: 4, slideNumber: "05", title: "Engineering Team Personnel & Verified Credentials", category: "Team" },
  { index: 5, slideNumber: "06", title: "Module 1: General Manager Executive Oversight", category: "ERP Module" },
  { index: 6, slideNumber: "07", title: "Module 2: Production, Extrusion & Flexo Prepress", category: "ERP Module" },
  { index: 7, slideNumber: "08", title: "Module 3: Finance, Real-Time GL & Ethiopian Tax Engine", category: "ERP Module" },
  { index: 8, slideNumber: "09", title: "Module 4: Commercial, Sales & 4-Tier Storage Topology", category: "ERP Module" },
  { index: 9, slideNumber: "10", title: "Module 5: Quality Control, Batch Traceability & ISO", category: "ERP Module" },
  { index: 10, slideNumber: "11", title: "Module 6: Human Resources & Biometric Hardware Sync", category: "ERP Module" },
  { index: 11, slideNumber: "12", title: "Strategic Advantages: Why Choose Nexloop?", category: "Value" },
  { index: 12, slideNumber: "13", title: "Verified Enterprise Track Record & Client References", category: "Credibility" },
  { index: 13, slideNumber: "14", title: "Project Budget, Investment Summary & 38 Line Items", category: "Budget & Finance" },
  { index: 14, slideNumber: "15", title: "Zero-Risk Advance & Secured Asset Ownership Model", category: "Risk Mitigation" },
  { index: 15, slideNumber: "16", title: "6–7 Months Phased Implementation Roadmap", category: "Timeline" },
  { index: 16, slideNumber: "17", title: "Next Steps, Project Kickoff & Direct Contacts", category: "Next Steps" }
];

export const SlideViewer: React.FC<SlideViewerProps> = ({
  currentSlideIndex,
  onSlideChange,
  onOpenDrawer,
  onSwitchToDocument
}) => {
  const [direction, setDirection] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const totalSlides = SLIDE_METADATA_LIST.length;

  // Touch swipe handling for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      setDirection(1);
      onSlideChange(currentSlideIndex + 1);
    } else {
      setIsPlaying(false);
    }
  }, [currentSlideIndex, totalSlides, onSlideChange]);

  const goToPrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      onSlideChange(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, onSlideChange]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setDirection(-1);
        onSlideChange(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setDirection(1);
        onSlideChange(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, totalSlides, onSlideChange]);

  // Autoplay timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        if (currentSlideIndex < totalSlides - 1) {
          goToNext();
        } else {
          setIsPlaying(false);
        }
      }, 10000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentSlideIndex, totalSlides, goToNext]);

  // Render current slide component
  const renderCurrentSlide = () => {
    switch (currentSlideIndex) {
      case 0:
        return <CoverSlide onStart={() => { setDirection(1); onSlideChange(1); }} />;
      case 1:
        return <ExecutiveSummarySlide />;
      case 2:
        return <SolutionArchitectureSlide />;
      case 3:
        return <CompanyOverviewSlide />;
      case 4:
        return <TeamPersonnelSlide />;
      case 5:
        return <GeneralManagerModuleSlide />;
      case 6:
        return <ProductionModuleSlide />;
      case 7:
        return <FinanceModuleSlide />;
      case 8:
        return <CommercialModuleSlide />;
      case 9:
        return <QualityControlModuleSlide />;
      case 10:
        return <HumanResourcesModuleSlide />;
      case 11:
        return <WhyChooseUsSlide />;
      case 12:
        return <ExperienceTrackRecordSlide />;
      case 13:
        return <ProjectBudgetSlide />;
      case 14:
        return <AdvanceGuaranteeSlide />;
      case 15:
        return <TimelineScheduleSlide />;
      case 16:
        return <ConclusionContactSlide onRestart={() => { setDirection(-1); onSlideChange(0); }} />;
      default:
        return <CoverSlide onStart={() => onSlideChange(1)} />;
    }
  };

  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  return (
    <div
      className="relative min-h-[calc(100vh-3.5rem)] flex flex-col justify-between bg-[#FAFAFA] text-neutral-900"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slide Progress Line */}
      <div className="w-full bg-neutral-200 h-1">
        <motion.div
          className="h-full bg-neutral-900"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </div>

      {/* Main Slide Content Area */}
      <div className="flex-1 flex flex-col justify-center w-full px-3.5 sm:px-6 py-4 sm:py-6 max-w-7xl mx-auto overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlideIndex}
            initial={{ opacity: 0, y: direction >= 0 ? 8 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction >= 0 ? -8 : 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="w-full"
          >
            {renderCurrentSlide()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Persistent Bottom Controls */}
      <div className="sticky bottom-0 z-20 w-full bg-white/95 backdrop-blur-xs border-t border-neutral-200 px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 shadow-xs">
        {/* Left: Slide Meta */}
        <div className="hidden md:flex items-center gap-2.5 text-xs text-neutral-500 min-w-0">
          <button
            onClick={onOpenDrawer}
            className="font-mono text-neutral-900 hover:underline font-bold cursor-pointer shrink-0"
          >
            Slide {String(currentSlideIndex + 1).padStart(2, '0')} / {totalSlides}
          </button>
          <span>·</span>
          <span className="font-medium text-neutral-800 truncate max-w-xs lg:max-w-md">
            {SLIDE_METADATA_LIST[currentSlideIndex].title}
          </span>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 mx-auto md:mx-0">
          <button
            onClick={goToPrev}
            disabled={currentSlideIndex === 0}
            className={`p-2 sm:px-3 sm:py-1.5 rounded border text-xs transition-colors cursor-pointer flex items-center gap-1 ${
              currentSlideIndex === 0
                ? 'opacity-30 border-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800'
            }`}
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">Prev</span>
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded border text-xs font-mono transition-colors cursor-pointer ${
              isPlaying
                ? 'bg-neutral-900 text-white border-neutral-900 font-bold'
                : 'bg-white border-neutral-300 text-neutral-700 hover:bg-neutral-100'
            }`}
            title={isPlaying ? "Pause Autoplay" : "Autoplay (10s per slide)"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="text-[11px]">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            onClick={goToNext}
            disabled={currentSlideIndex === totalSlides - 1}
            className={`p-2 sm:px-3 sm:py-1.5 rounded border text-xs transition-colors cursor-pointer flex items-center gap-1 ${
              currentSlideIndex === totalSlides - 1
                ? 'opacity-30 border-neutral-200 text-neutral-400 cursor-not-allowed'
                : 'border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800'
            }`}
            title="Next (Right Arrow)"
          >
            <span className="hidden sm:inline font-medium">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Quick Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={onOpenDrawer}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded border border-neutral-300 text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
            title="Slide Index"
          >
            <Grid className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-[11px] sm:text-xs">Index</span>
          </button>
          <button
            onClick={onSwitchToDocument}
            className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded border border-neutral-300 text-xs font-medium text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
            title="Document View"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-600" />
            <span className="text-[11px] sm:text-xs">Document</span>
          </button>
        </div>
      </div>
    </div>
  );
};
