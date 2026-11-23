import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Database, 
  BarChart3, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Check,
  Terminal,
  FileSpreadsheet,
  Activity
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  const iconComponents = {
    Code2: Code2,
    Database: Database,
    BarChart3: BarChart3,
    Cpu: Cpu
  };

  return (
    <section id="skills" className="relative py-24 bg-white border-t border-slate-200">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            The Data & Analytics <span className="gradient-text-hero">Toolkit</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Battle-tested technical skills deployed across real-time transaction streams, enterprise BI reporting, and automated SQL pipelines.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200'
              }`}
            >
              All Toolkits ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => {
              const Icon = iconComponents[category.iconName] || Code2;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Decorative top accent line */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-1.5" 
                    style={{ backgroundColor: category.color }} 
                  />

                  <div>
                    {/* Category Title & Icon */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs"
                          style={{ backgroundColor: category.color }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 font-display">
                            {category.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                        {category.skills.length} skills
                      </span>
                    </div>

                    {/* Skill Items List */}
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div 
                          key={skill.name}
                          className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 hover:shadow-xs transition-all"
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900 text-sm">
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                                {skill.tag}
                              </span>
                            </div>
                            <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                              skill.level === 'Expert' 
                                ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                : skill.level === 'Advanced'
                                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                                : skill.level === 'Certified'
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                            }`}>
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 leading-snug">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer Note */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Applied in Real-World Projects
                    </span>
                    <span className="font-mono text-[11px] text-blue-600 font-semibold">
                      Production Tested
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
