import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Building2, 
  GraduationCap 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#2563EB', '#7C3AED', '#06B6D4']
    });

    const link = document.createElement('a');
    link.href = personalInfo.resumePdf;
    link.download = 'Md_Ayub_Sheikh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl h-[92vh] flex flex-col rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
        >
          {/* Modal Header */}
          <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                  Md Ayub Sheikh – Official Resume
                </h3>
                <p className="text-xs font-mono text-blue-700">
                  Data Analyst & Business Intelligence Specialist • Verified PDF Document
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-sm hover:shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 w-full bg-slate-100 relative">
            <iframe
              src={`${personalInfo.resumePdf}#toolbar=0&navpanes=0&scrollbar=1`}
              title="Md Ayub Sheikh Resume"
              className="w-full h-full border-0"
            />
          </div>

          {/* Quick Summary Footer */}
          <div className="p-3 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
            <div className="flex items-center gap-3">
              <span>Paytm Payments Bank Ops</span>
              <span>•</span>
              <span>5M+ Transaction SQL</span>
              <span>•</span>
              <span>10+ Production BI Dashboards</span>
            </div>
            <a
              href={personalInfo.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
