import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bug, AIInsight } from "../types";
import SeverityBadge from "./SeverityBadge";
import { X } from "lucide-react";
import { Maximize2 } from "lucide-react";

interface BugCardProps {
  bug: Bug;
}

const BugCard: React.FC<BugCardProps> = ({ bug }) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  // ESC bilan yopish
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isImageOpen) setIsImageOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isImageOpen]);

  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 flex flex-col h-full">
      {/* Media Section */}
      <div className="relative h-64 sm:h-80 bg-slate-900 group overflow-hidden rounded-t-3xl">
        {bug.mediaType === "video" ? (
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
            className="w-full h-full object-cover transition-transform duration-500 ease-out cursor-zoom-in group-hover:scale-110"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="absolute top-4 left-4 z-10">
          <SeverityBadge severity={bug.severity} />
        </div>

        {bug.mediaType !== "video" && (
          <button
            onClick={() => setIsImageOpen(true)}
            className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight leading-tight">
          {bug.title}
        </h2>
        <p className="text-slate-500 mb-8 leading-relaxed text-lg">{bug.description}</p>
      </div>

      {/* IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {isImageOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageOpen(false)} // background click bilan yopish
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsImageOpen(false)}
              className="absolute top-6 right-6 z-[1000] bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* IMAGE */}
            <motion.img
              src={bug.mediaUrl}
              alt={bug.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="max-w-[90vw] max-h-[85vh] rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // rasm ustiga bosish modalni yopmaydi
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BugCard;
