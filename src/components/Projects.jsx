import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Code2, 
  CheckCircle2, 
  X, 
  Database, 
  BarChart2, 
  ArrowUpRight,
  Sparkles,
  Layers,
  FileCode,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'SQL & Analytics', 'Power BI & Visualization', 'Automation & Python'];

  const filteredProjects = selectedCategory === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 bg-[#F8FAFC] border-t border-slate-200 overflow-hidden">
      {/* Background Soft Pastel Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-purple-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
            <span>FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Data Analytics & <span className="gradient-text-hero">BI Portfolio</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real-world transactional analyses, automated reporting engines, customer segmentation, and executive Power BI dashboards.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    
                    {/* Badge Pill */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-white/95 text-blue-700 border border-slate-200 shadow-sm backdrop-blur-md">
                        {project.badge}
                      </span>
                    </div>

                    {/* Category Overlay Tag */}
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-slate-900/80 text-white backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Title Overlay on Image Bottom */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-extrabold text-white font-display drop-shadow-sm">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {/* Summary Description */}
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      {project.summary}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tech.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Quick Metric Pills */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                      {project.keyMetrics.map((km, i) => (
                        <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-100 text-center">
                          <div className="text-[10px] text-slate-500 font-medium truncate">{km.label}</div>
                          <div className="text-xs font-bold text-slate-900 font-mono">{km.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex-1 py-2 px-3 text-xs font-bold text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-transparent rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>View Project Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-all flex items-center gap-1.5 shadow-2xs"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Deep-Dive Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Content Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 bg-slate-50/80">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                      {activeModalProject.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      Portfolio Deep-Dive
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-display">
                    {activeModalProject.title}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-white border border-slate-200 shadow-2xs transition-colors shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                {/* Description Narrative */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Key Deliverables & Outcomes */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Key Outcomes & Analytical Deliverables
                  </h4>
                  <div className="space-y-2.5">
                    {activeModalProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-800 leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div>
                  <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Technologies & Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tech.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* SQL / Python Code Snippet Preview */}
                {activeModalProject.sqlSnippet && (
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <FileCode className="w-3.5 h-3.5 text-blue-600" />
                        Query / Logic Implementation Snippet
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">Sample Code</span>
                    </h4>
                    <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto shadow-inner leading-relaxed">
                      <pre>{activeModalProject.sqlSnippet}</pre>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer Actions */}
              <div className="p-5 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
                <a
                  href="#data-in-action"
                  onClick={() => setActiveModalProject(null)}
                  className="px-4 py-2 text-xs font-bold text-blue-700 bg-white hover:bg-blue-50 border border-blue-200 rounded-xl transition-all flex items-center gap-1.5"
                >
                  <BarChart2 className="w-4 h-4" />
                  <span>See Interactive Showcase ("Data in Action")</span>
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors flex items-center gap-1.5"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repo</span>
                  </a>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
