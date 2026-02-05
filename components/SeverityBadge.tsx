
import React from 'react';
import { Severity } from '../types';

interface SeverityBadgeProps {
  severity: Severity;
}

const SeverityBadge: React.FC<SeverityBadgeProps> = ({ severity }) => {
  const getStyles = () => {
    switch (severity) {
      case Severity.LOW:
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case Severity.MEDIUM:
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case Severity.HIGH:
        return 'bg-orange-50 text-orange-700 border-orange-200';
      case Severity.CRITICAL:
        return 'bg-red-50 text-red-700 border-red-200 animate-pulse';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStyles()} uppercase tracking-wider`}>
      {severity}
    </span>
  );
};

export default SeverityBadge;
