
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bug, AIInsight } from '../types';
import SeverityBadge from './SeverityBadge';
import { getBugInsight } from '../services/geminiService';
import { Loader2, Sparkles, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

interface BugCardProps {
  bug: Bug;
}

const BugCard: React.FC<BugCardProps> = ({ bug }) => {
  const [insight, setInsight] = useState<AIInsight | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);



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
        <img
          src={bug.mediaUrl}
          alt={bug.title}
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        <div className="absolute top-4 left-4">
          <SeverityBadge severity={bug.severity} />
        </div>
        <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-xl text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
          REP-{bug.id.padStart(4, '0')}
        </div>
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
          <AnimatePresence mode="wait">
            {!insight ? (
              <motion.button
                key="analyze-btn"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={fetchInsight}
                disabled={loading}
                className="w-full group relative flex items-center justify-center gap-3 py-5 px-8 bg-slate-950 text-white rounded-[24px] transition-all duration-500 font-semibold shadow-xl shadow-slate-200 hover:shadow-indigo-200 hover:bg-indigo-600 disabled:opacity-70 overflow-hidden"
              >
                {/* Animated Background Pulse */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {loading ? (
                  <Loader2 className="w-6 h-6 animate-spin text-indigo-400" />
                ) : (
                  <Sparkles className="w-6 h-6 group-hover:rotate-[30deg] transition-transform text-indigo-400" />
                )}
                <span className="relative">
                  {loading ? 'AI deep analysis in progress...' : 'Analyze Root Cause with Gemini'}
                </span>
              </motion.button>
            ) : (
              <motion.div 
                key="insight-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { label: 'Root Cause', text: insight.rootCause, icon: AlertCircle, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100' },
                    { label: 'Fix', text: insight.fixSuggestion, icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
                    { label: 'Prevention', text: insight.preventativeMeasures, icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' }
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`p-5 ${item.bg} rounded-[20px] border ${item.border}`}
                    >
                      <div className={`flex items-center gap-2 ${item.color} font-bold mb-2 text-xs uppercase tracking-widest`}>
                        <item.icon className="w-4 h-4" /> {item.label}
                      </div>
                      <p className="text-sm text-slate-800 leading-snug font-medium opacity-90">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
        
              </motion.div>
            )}
          </AnimatePresence>
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
