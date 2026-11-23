import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Github, 
  Mail, 
  Terminal, 
  Database, 
  Heart,
  ShieldCheck,
  BarChart2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-100">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-sm">
                <BarChart2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base">
                  {personalInfo.name}
                </h3>
                <p className="text-xs font-mono text-blue-700 font-semibold">
                  {personalInfo.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Transforming complex transactional and operational datasets into decision-ready business intelligence, automated ETL pipelines, and executive dashboards.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-2xs transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400 shadow-2xs transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 shadow-2xs transition-all"
                aria-label="Email Md Ayub"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 font-medium">
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About & Background</a></li>
              <li><a href="#skills" className="hover:text-blue-600 transition-colors">Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors">Featured Projects</a></li>
              <li><a href="#experience" className="hover:text-blue-600 transition-colors">Experience at Paytm</a></li>
              <li><a href="#education" className="hover:text-blue-600 transition-colors">Education & Credentials</a></li>
              <li><a href="#data-in-action" className="hover:text-blue-600 transition-colors">Data in Action (Live BI)</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact & Inquiries</a></li>
            </ul>
          </div>

          {/* Core Analytics Tech Stack */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Core Technical Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                'SQL (CTEs & Window Functions)',
                'Python (Pandas, NumPy)',
                'Power BI (DAX, Modeling)',
                'Tableau',
                'Apache Kafka',
                'Zabbix & BMC Tools',
                'Advanced Excel',
                'Data Cleaning & EDA',
                'Streamlit & Databricks'
              ].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-50 text-slate-700 border border-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-2 text-xs text-slate-600 flex items-center gap-1.5 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Resume-Verified Career & Project Credentials</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Md Ayub Sheikh • All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Crafted with React, TypeScript, Tailwind CSS & Recharts</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
