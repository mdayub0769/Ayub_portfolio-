import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Briefcase, 
  LayoutDashboard, 
  Wrench, 
  Clock, 
  TrendingUp, 
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { animatedStats } from '../data/portfolioData';

// Animated Counter Component
function Counter({ targetValue, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1500; // ms
    const stepTime = 30; // ms
    const totalSteps = duration / stepTime;
    const increment = targetValue / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetValue]);

  return (
    <span ref={ref} className="font-mono font-extrabold tracking-tight">
      {count}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  const iconMap = {
    Briefcase: Briefcase,
    LayoutDashboard: LayoutDashboard,
    Wrench: Wrench,
    Clock: Clock
  };

  return (
    <section className="relative py-12 bg-white border-y border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {animatedStats.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || TrendingUp;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/60 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 font-display flex items-center">
                    <Counter targetValue={stat.numericValue} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-snug">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
