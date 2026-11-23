import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Linkedin, 
  Github, 
  Mail, 
  Database, 
  TrendingUp, 
  Zap,
  BarChart3,
  Layers,
  Sparkles,
  CheckCircle2,
  LineChart,
  FileSpreadsheet,
  ArrowUpRight
} from 'lucide-react';
import { personalInfo, heroHighlights } from '../data/portfolioData';

export default function Hero({ onOpenResume, onDownloadResume }) {
  // Typing effect state
  const roles = personalInfo.typingRoles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullRole.length) {
          // Pause before deleting
          setTypingSpeed(2200);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(350);
        } else {
          setTypingSpeed(45);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      {/* Background Ambient Gradients & Subtle Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Soft Pastel Radial Glows for Light Theme */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-purple-400/10 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-1/4 right-10 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[130px] pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheading, Typing, CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Status Pill: Available for Opportunities */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide">
                Available for Opportunities • <span className="text-emerald-700 font-bold">Immediate Joiner</span>
              </span>
            </div>

            {/* Main Headline (Exact requirement: Turning Data Into Meaningful Insights) */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-display leading-[1.12]">
                Turning Data Into <span className="gradient-text-hero">Meaningful Insights.</span>
              </h1>

              {/* Animated Text Typing Effect */}
              <div className="flex items-center gap-2 text-base sm:text-xl font-mono text-slate-600 min-h-[34px] pt-1">
                <span className="text-slate-400 font-sans">&gt; Specializing in</span>
                <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/70 shadow-xs">
                  {displayedText}
                </span>
                <span className="inline-block w-2 h-5 bg-blue-600 animate-pulse" />
              </div>
            </div>

            {/* Subheading (Exact requirement from prompt) */}
            <div className="relative pl-4 border-l-2 border-blue-600/70 bg-gradient-to-r from-blue-50/50 to-transparent p-2 rounded-r-xl">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {personalInfo.heroSubheading}
              </p>
            </div>

            {/* Technical Highlights Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['SQL (CTEs & Window Functions)', 'Python (Pandas, NumPy)', 'Power BI (DAX)', 'Tableau', 'Kafka Streams'].map((pill) => (
                <span 
                  key={pill} 
                  className="px-3 py-1 rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-200 shadow-2xs hover:border-blue-300 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Call To Action Buttons & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Resume Download CTA */}
              <button
                onClick={onDownloadResume}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-300 flex items-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              {/* Let's Connect CTA */}
              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs hover:border-slate-400 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Social Media Link Buttons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white text-slate-600 hover:text-blue-600 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-sm transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-sm transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-3 rounded-xl bg-white text-slate-600 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 shadow-xs hover:shadow-sm transition-all"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Photo Card with Floating Data Illustrations */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              
              {/* Outer Decorative Gradient Glow Ring */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-cyan-500/20 blur-xl opacity-70" />

              {/* Main Photo Card Container */}
              <div className="relative rounded-3xl p-2.5 bg-white border border-slate-200/90 shadow-xl overflow-hidden group">
                
                {/* Photo Aspect Ratio Container */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img
                    src={personalInfo.profileImage}
                    alt="Md Ayub Sheikh - Data Analyst"
                    className="w-full h-full object-cover object-center filter group-hover:scale-103 transition-transform duration-700 ease-out"
                  />

                  {/* Soft bottom gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-85" />

                  {/* Overlay Badge at Bottom of Photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <p className="text-xs font-bold text-slate-900 font-display">Md Ayub Sheikh</p>
                      </div>
                      <p className="text-[11px] font-mono text-blue-700 font-semibold">Ex-Paytm Payments Bank Ops</p>
                    </div>
                    <div className="text-right font-mono text-[10px] text-slate-500">
                      <div className="text-slate-800 font-semibold">SQL • Python</div>
                      <div className="text-indigo-600 font-bold">Power BI • Tableau</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Dashboard Card 1: 85% Turnaround Reduction */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="absolute -top-5 -left-4 sm:-left-8 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-3 animate-float-slow"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 font-mono">85% Faster</div>
                  <div className="text-[11px] text-slate-500 font-medium">Reporting Turnaround</div>
                </div>
              </motion.div>

              {/* Floating Dashboard Card 2: 5M+ Records */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-lg flex items-center gap-3 animate-float-reverse"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 font-mono">5M+ Records</div>
                  <div className="text-[11px] text-slate-500 font-medium">Queried & Optimized</div>
                </div>
              </motion.div>

              {/* Floating Dashboard Card 3: 10+ Dashboards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="absolute top-1/2 -right-10 transform -translate-y-1/2 hidden sm:flex p-3 rounded-2xl bg-white border border-slate-200 shadow-lg items-center gap-3 animate-float-slow"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 font-mono">10+ BI Dashboards</div>
                  <div className="text-[10px] text-slate-500">Power BI & Tableau</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
