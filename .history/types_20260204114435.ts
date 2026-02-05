
export enum Severity {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  CRITICAL = 'Critical'
}

export interface Bug {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  dateReported: string;
}

export interface AIInsight {
  rootCause: string;
  fixSuggestion: string;
  preventativeMeasures: string;
}
