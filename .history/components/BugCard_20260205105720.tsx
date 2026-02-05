
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
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
        <div className="absolute top-4 left-4 z-10">
          <SeverityBadge severity={bug.severity} />
        </div>
 
        {bug.mediaType === 'video' && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
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
    </motion.div>
  );
};

export default BugCard;
