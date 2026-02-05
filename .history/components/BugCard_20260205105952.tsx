
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, AIInsight } from '../types';
import SeverityBadge from './SeverityBadge';
import { Maximize2 } from 'lucide-react';

import { getBugInsight } from '../services/geminiService';
import { Loader2, Sparkles, AlertCircle, CheckCircle2, ShieldCheck, Play } from 'lucide-react';

interface BugCardProps {
  bug: Bug;
}

const BugCard: React.FC<BugCardProps> = ({ bug }) => {
  const [insight, setInsight] = useState<AIInsight | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
const [isImageOpen, setIsImageOpen] = useState(false);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col h-full"
    >
      {/* Media Section */}
      <motion.div 
        variants={itemVariants}
        className="relative h-64 sm:h-80 bg-slate-900 group overflow-hidden"
      >
        {bug.mediaType === 'video' ? (
          <video
            src={bug.mediaUrl}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        ) : (
          <img
            src={bug.mediaUrl}
            alt={bug.title}
           className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"

          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute top-4 left-4 z-10">
          <SeverityBadge severity={bug.severity} />
        </div>
 
      {bug.mediaType !== 'video' && (
  <button
    onClick={() => setIsImageOpen(true)}
    className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm"
  >
    <Maximize2 className="w-5 h-5" />
  </button>
)}

      </motion.div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight"
        >
          {bug.title}
        </motion.h2>
        <motion.p 
          variants={itemVariants}
          className="text-slate-500 mb-8 leading-relaxed text-lg"
        >
          {bug.description}
        </motion.p>

        {/* AI Insight Section */}
        <motion.div 
          variants={itemVariants}
          className="mt-auto pt-8 border-t border-slate-50"
        >
        
          {error && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 text-red-500 text-xs text-center font-medium"
            >
              {error}
            </motion.p>
          )}
        </motion.div>
      </div>
      <AnimatePresence>
  {isImageOpen && (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setIsImageOpen(false)}
    >
      <motion.img
        src={bug.mediaUrl}
        alt={bug.title}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )}
</AnimatePresence>

    </motion.div>
  );
};

export default BugCard;
