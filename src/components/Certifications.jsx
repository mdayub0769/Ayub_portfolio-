import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  ExternalLink, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  BookOpen,
  X,
  FileCheck,
  Building2
} from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education" className="relative py-24 bg-[#F8FAFC] border-t border-slate-200 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
            <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
            <span>CREDENTIALS & ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Education & <span className="gradient-text-hero">Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Formal analytical foundation in Political Science paired with rigorous professional diplomas and enterprise technical accreditations.
          </p>
        </div>

        {/* 2-Column Layout: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Academic Education (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <GraduationCap className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Academic Degrees & Diplomas
              </h3>
            </div>

            <div className="space-y-4">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/70">
                      {edu.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                    {edu.degree}
                  </h4>

                  <div className="text-xs font-bold text-slate-600 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-500" />
                    <span>{edu.institution}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-mono font-semibold">
                      {edu.grade}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Analytical Takeaway Callout */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 leading-relaxed">
              💡 <strong className="text-slate-900">Research & Qualitative Foundations:</strong> My graduation in Political Science cultivated critical inquiry, empirical policy evaluation, and structured qualitative reasoning—invaluable strengths for identifying the narrative behind the numbers.
            </div>
          </div>

          {/* Column 2: Professional Certifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
              <Award className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900 font-display">
                Professional Certifications & Accreditations
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 group-hover:scale-105 transition-transform">
                        <Award className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                        {cert.period}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 font-display leading-snug group-hover:text-purple-700 transition-colors">
                      {cert.title}
                    </h4>

                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      {cert.issuer}
                    </p>

                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {cert.skills.slice(0, 3).map((s) => (
                        <span key={s} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified Credential
                    </span>

                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* Certificate Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10 space-y-5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-purple-700">{selectedCert.badge}</span>
                    <h3 className="text-lg font-bold text-slate-900 font-display">{selectedCert.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <p><strong>Issuing Body:</strong> {selectedCert.issuer}</p>
                <p><strong>Status / Validity:</strong> {selectedCert.period}</p>
                <p className="bg-slate-50 p-3 rounded-xl border border-slate-200 leading-relaxed">
                  {selectedCert.description}
                </p>
                <div>
                  <strong className="block mb-1.5 text-slate-900">Accredited Competencies:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-mono text-xs border border-blue-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Digital Credential Placeholder</span>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
