
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUGS } from './constants';
import BugCard from './components/BugCard';
import { ChevronLeft, ChevronRight, Bug as BugIcon, LayoutGrid, Info } from 'lucide-react';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<number>(0);

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = BUGS.length - 1;
      if (nextIndex >= BUGS.length) nextIndex = 0;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') paginate(1);
      if (e.key === 'ArrowLeft') paginate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 800 : -800,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
      z: -200
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      z: -200
    })
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-indigo-100">
      {/* Background Decorative Blobs */}
      <div className="fixed top-[-10%] left-[-5%] w-[60%] h-[60%] bg-indigo-200/30 blur-[120px] -z-10 rounded-full animate-blob" />
      <div className="fixed bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-blue-200/30 blur-[120px] -z-10 rounded-full animate-blob animation-delay-2000" />
      <div className="fixed top-[40%] right-[10%] w-[30%] h-[30%] bg-rose-100/20 blur-[100px] -z-10 rounded-full animate-blob animation-delay-4000" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-8 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto group cursor-default">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-slate-900/20"
          >
            <BugIcon className="w-6 h-6" />
          </motion.div>
          <div>
            <h1 className="text-xl font-black text-slate-900 leading-none tracking-tight">BugTrack</h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-1.5 opacity-60">Insight Gallery</p>
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-4 pointer-events-auto">
          <motion.div 
            layout
            className="bg-white/70 backdrop-blur-2xl px-5 py-2.5 rounded-2xl border border-white shadow-lg shadow-slate-200/50 flex items-center gap-3"
          >
            <LayoutGrid className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-slate-900 tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} <span className="text-slate-300 font-medium">/</span> {String(BUGS.length).padStart(2, '0')}
            </span>
          </motion.div>
        </div>
      </header>

      {/* Info Badge */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40">
         <motion.div 
           initial={{ y: -20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           className="bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-100 flex items-center gap-2 shadow-sm"
         >
           <Info className="w-3.5 h-3.5 text-indigo-500" />
           <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Use arrows to browse bugs</span>
         </motion.div>
      </div>

      {/* Carousel Section */}
      <main className="relative w-full max-w-5xl flex items-center justify-center gap-4 sm:gap-12 mt-16 px-4 [perspective:1200px]">
        {/* Nav Left */}
        <motion.button
          whileHover={{ scale: 1.1, x: -8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="group hidden lg:flex shrink-0 w-16 h-16 items-center justify-center bg-white rounded-[24px] shadow-2xl shadow-slate-200/50 border border-slate-100 hover:bg-slate-950 hover:text-white transition-colors duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Previous bug"
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>

        {/* Card Content Area */}
        <div className="relative flex-1 w-full flex items-center justify-center min-h-[620px] overflow-visible">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 26 },
                opacity: { duration: 0.25 },
                scale: { type: "spring", stiffness: 200, damping: 25 },
                rotateY: { duration: 0.4 }
              }}
              className="absolute w-full"
            >
              <BugCard bug={BUGS[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Nav Right */}
        <motion.button
          whileHover={{ scale: 1.1, x: 8 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="group hidden lg:flex shrink-0 w-16 h-16 items-center justify-center bg-white rounded-[24px] shadow-2xl shadow-slate-200/50 border border-slate-100 hover:bg-slate-950 hover:text-white transition-colors duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Next bug"
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>
      </main>

      {/* Mobile Interaction Bar */}
      <div className="flex lg:hidden items-center gap-8 mt-12 z-50 relative">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => paginate(-1)}
          className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-xl text-slate-900 active:bg-slate-100 border border-slate-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <div className="flex flex-col items-center">
          <motion.span 
            key={currentIndex}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xl font-black text-slate-900 tabular-nums"
          >
            {currentIndex + 1}
          </motion.span>
          <motion.div 
            layoutId="mobile-indicator"
            className="h-1.5 w-8 bg-indigo-500 rounded-full mt-1" 
          />
        </div>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => paginate(1)}
          className="w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-xl text-slate-900 active:bg-slate-100 border border-slate-100"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Enhanced Progress Navigation */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-end gap-2 px-8 py-5 bg-white/60 backdrop-blur-2xl rounded-[32px] border border-white/50 shadow-2xl shadow-slate-200/50 z-50 max-w-[90vw] overflow-x-auto hide-scrollbar">
        {BUGS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className="group relative flex flex-col items-center p-1"
          >
            <motion.div
              animate={{
                height: idx === currentIndex ? 24 : 8,
                width: idx === currentIndex ? 12 : 8,
                backgroundColor: idx === currentIndex ? '#0f172a' : '#cbd5e1'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-full transition-colors duration-300 group-hover:bg-slate-400"
            />
            {idx === currentIndex && (
               <motion.div 
                 layoutId="active-dot-label"
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="absolute -top-6 text-[10px] font-black text-slate-900"
               >
                 {String(idx + 1).padStart(2, '0')}
               </motion.div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
