import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  Globe2, 
  BookOpen, 
  Award,
  Database,
  LineChart,
  Layers,
  Zap,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      {/* Background ambient lighting in light theme */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-300/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-300/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>ABOUT ME & PROFESSIONAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Bridging Infrastructure Rigor with <span className="gradient-text-hero">Data Intelligence</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Translating complex transactional data streams into clear, decision-ready visualizations and automated reporting architectures.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Story Card */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2 font-display">
                <Terminal className="w-5 h-5 text-blue-600" />
                <span>Professional Background</span>
              </h3>

              {/* Exact content required by prompt */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="font-normal bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                  "{personalInfo.aboutMeText}"
                </p>
                <p>
                  My hands-on experience at <strong className="text-slate-900 font-semibold">Paytm Payments Bank</strong> involved analyzing high-volume digital transaction logs, investigating operational bottlenecks, and optimizing critical SQL queries across 5M+ records. This environment instilled in me the discipline of uncompromising data accuracy and actionable reporting.
                </p>
                <p>
                  Today, I pair advanced SQL and Python data wrangling with modern Business Intelligence tools like <strong className="text-blue-700 font-semibold">Power BI</strong> and <strong className="text-purple-700 font-semibold">Tableau</strong> to bridge the gap between complex engineering metrics and executive decision-making.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6 mt-6 border-t border-slate-100">
                {[
                  { title: "Query Optimization", desc: "80% faster execution across 5M+ records" },
                  { title: "Pipeline Automation", desc: "30+ hrs/mo saved, 88% turnaround cut" },
                  { title: "Cross-Functional BI", desc: "10+ production Power BI dashboards" },
                  { title: "Data Integrity & Verification", desc: "90% accuracy on Kafka data streams" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-50/70 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{item.title}</div>
                      <div className="text-[11px] text-slate-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Interests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Globe2 className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['English (Fluent)', 'Hindi (Native)', 'Arabic (Proficient)', 'Urdu (Proficient)'].map((lang) => (
                    <span key={lang} className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium border border-slate-200">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Analytical Interests</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Data Storytelling', 'ETL Pipeline Automation', 'Technical Blogging', 'Open Source'].map((item) => (
                    <span key={item} className="text-xs px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 font-medium border border-purple-200/60">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Analytical Highlights & Workflow Approach */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* The 4-Step Analytical Lifecycle */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 font-display mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>My Analytical Problem-Solving Workflow</span>
              </h3>

              <div className="space-y-4">
                {[
                  {
                    step: "01",
                    title: "Requirements Gathering & KPI Scoping",
                    desc: "Collaborating with stakeholders to translate ambiguous business challenges into quantifiable target metrics.",
                    icon: Building2,
                    color: "text-blue-600 bg-blue-50"
                  },
                  {
                    step: "02",
                    title: "Data Extraction & Cleansing",
                    desc: "Querying relational databases with SQL, filtering anomalies, handling missing values, and validating data pipelines.",
                    icon: Database,
                    color: "text-purple-600 bg-purple-50"
                  },
                  {
                    step: "03",
                    title: "Exploratory Analysis & Modeling",
                    desc: "Detecting seasonal trends, customer behavioral cohorts, and statistical correlations in Python and Excel.",
                    icon: LineChart,
                    color: "text-cyan-600 bg-cyan-50"
                  },
                  {
                    step: "04",
                    title: "Dashboard Storytelling & Action",
                    desc: "Delivering intuitive Power BI cockpits with actionable executive summaries that directly drive decision-making.",
                    icon: Zap,
                    color: "text-emerald-600 bg-emerald-50"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3.5 p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:bg-slate-100/60 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-mono font-bold text-xs text-blue-600 shrink-0 shadow-2xs">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Status Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md relative overflow-hidden">
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-semibold backdrop-blur-sm">
                  <span>Current Availability</span>
                </div>
                <h4 className="text-lg font-bold font-display">Ready for Immediate Onboarding</h4>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Actively interviewing for full-time Data Analyst, Business Analyst, and BI Specialist positions across India and remote opportunities.
                </p>
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-blue-900 bg-white hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    <span>Connect with Ayub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
