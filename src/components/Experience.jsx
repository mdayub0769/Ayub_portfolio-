import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Layers,
  Sparkles,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const [activeCompanyIdx, setActiveCompanyIdx] = useState(0);
  const activeExp = experienceData[activeCompanyIdx];

  return (
    <section id="experience" className="relative py-24 bg-white border-t border-slate-200 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>PROFESSIONAL TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Experience & <span className="gradient-text-hero">Operational Rigor</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Proven track record transforming operational payment streams, system monitoring alerts, and incident data into decision-ready business insights.
          </p>
        </div>

        {/* Company Selector Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {experienceData.map((exp, idx) => (
            <button
              key={exp.company}
              onClick={() => setActiveCompanyIdx(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                activeCompanyIdx === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{exp.company}</span>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                activeCompanyIdx === idx ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
              }`}>
                {exp.period.split('(')[0].trim()}
              </span>
            </button>
          ))}
        </div>

        {/* Active Company Highlight Details Card */}
        <motion.div
          key={activeExp.company}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm"
        >
          {/* Card Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-100 text-blue-700">
                  {activeExp.statusBadge}
                </span>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {activeExp.location}
                </span>
                <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-purple-600" />
                  {activeExp.period}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                {activeExp.role}
              </h3>
              <p className="text-base font-bold text-blue-600 mt-1">
                {activeExp.company}
              </p>
            </div>

            {/* Quick Impact Highlight Pill */}
            <div className="lg:text-right shrink-0">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>90%+ System Uptime & 85% Turnaround Cut</span>
              </span>
            </div>
          </div>

          {/* Analytical Transition Bridge Callout */}
          <div className="my-6 p-4 sm:p-5 rounded-2xl bg-white border border-blue-200 shadow-2xs flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-mono font-bold text-blue-800 uppercase tracking-wide">
                Transferable Analytics Bridge
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                {activeExp.analyticalBridge}
              </p>
            </div>
          </div>

          {/* Transferable Skills Grid */}
          <div className="space-y-4 mb-8">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              Core Transferable Skills & Responsibilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {activeExp.transferableSkills.map((skill, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 transition-colors flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{skill.title}</h5>
                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Used */}
          <div className="pt-6 border-t border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider">
                Tools & Platforms Utilized:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeExp.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
