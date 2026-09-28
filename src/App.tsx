/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { SlideViewer, SLIDE_METADATA_LIST } from './components/SlideViewer';
import { DocumentView } from './components/DocumentView';
import { SlideDrawer } from './components/SlideDrawer';

export default function App() {
  const [viewMode, setViewMode] = useState<'slides' | 'document'>('slides');
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  const handleNavigateToSlide = (index: number) => {
    setCurrentSlideIndex(index);
    if (viewMode !== 'slides') {
      setViewMode('slides');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Clean Minimal Top Navigation Bar */}
      <TopBar
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentSlideIndex={currentSlideIndex}
        totalSlides={SLIDE_METADATA_LIST.length}
        onNavigateToSlide={handleNavigateToSlide}
        onToggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Main View Area */}
      <main className="flex-1 flex flex-col">
        {viewMode === 'slides' ? (
          <SlideViewer
            currentSlideIndex={currentSlideIndex}
            onSlideChange={setCurrentSlideIndex}
            onOpenDrawer={() => setIsDrawerOpen(true)}
            onSwitchToDocument={() => {
              setViewMode('document');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <DocumentView
            onSwitchToSlides={(index) => {
              if (typeof index === 'number') {
                setCurrentSlideIndex(index);
              }
              setViewMode('slides');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Quick Visual Slide Drawer Navigator Modal */}
      <SlideDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        slides={SLIDE_METADATA_LIST}
        currentIndex={currentSlideIndex}
        onSelectSlide={handleNavigateToSlide}
      />
    </div>
  );
}
