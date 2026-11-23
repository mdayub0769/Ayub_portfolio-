import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from 'recharts';
import { 
  Activity, 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Clock, 
  Users, 
  Filter, 
  Sparkles, 
  ArrowUpRight,
  Database,
  Layers,
  ChevronDown,
  Info
} from 'lucide-react';
import { demoShowcaseData } from '../data/portfolioData';

// Custom Light Tooltip for Recharts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xl text-xs font-mono">
        <p className="font-bold text-slate-900 mb-1.5 border-b border-slate-100 pb-1">{label}</p>
        {payload.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between gap-4 py-0.5">
            <span className="flex items-center gap-1.5" style={{ color: entry.color }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
              {entry.name}:
            </span>
            <span className="font-bold text-slate-900">
              {entry.name.toLowerCase().includes('revenue') || entry.name.toLowerCase().includes('profit') || entry.name.toLowerCase().includes('target') || entry.name.toLowerCase().includes('sales')
                ? `$${Number(entry.value).toLocaleString()}`
                : entry.name.toLowerCase().includes('margin')
                ? `${entry.value}%`
                : Number(entry.value).toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function DashboardShowcase() {
  const [timeframe, setTimeframe] = useState('full'); // 'full', 'h1', 'h2'
  const [activeMetric, setActiveMetric] = useState('revenue'); // 'revenue', 'profit', 'orders'

  // Filter monthly data based on timeframe
  const filteredMonthly = timeframe === 'h1' 
    ? demoShowcaseData.monthlyRevenue.slice(0, 6)
    : timeframe === 'h2'
    ? demoShowcaseData.monthlyRevenue.slice(6, 12)
    : demoShowcaseData.monthlyRevenue;

  // Aggregate totals
  const totalRevenue = filteredMonthly.reduce((sum, item) => sum + item.revenue, 0);
  const totalProfit = filteredMonthly.reduce((sum, item) => sum + item.profit, 0);
  const totalOrders = filteredMonthly.reduce((sum, item) => sum + item.orders, 0);
  const avgProfitMargin = Math.round((totalProfit / totalRevenue) * 100);

  const kpis = [
    {
      id: 'revenue',
      title: 'Total Revenue',
      value: `$${(totalRevenue / 1000).toFixed(1)}k`,
      change: '+22.4% vs Target',
      icon: DollarSign,
      color: '#2563EB',
      bg: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'profit',
      title: 'Gross Profit',
      value: `$${(totalProfit / 1000).toFixed(1)}k`,
      change: `${avgProfitMargin}% Operating Margin`,
      icon: TrendingUp,
      color: '#7C3AED',
      bg: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'orders',
      title: 'Orders Processed',
      value: totalOrders.toLocaleString(),
      change: '+19.5% Volume Growth',
      icon: ShoppingCart,
      color: '#06B6D4',
      bg: 'bg-cyan-50 text-cyan-600'
    },
    {
      id: 'speedup',
      title: 'ETL Pipeline Speed',
      value: '< 2.4s',
      change: '88% Automated Efficiency',
      icon: Clock,
      color: '#10B981',
      bg: 'bg-emerald-50 text-emerald-600'
    }
  ];

  return (
    <section id="data-in-action" className="relative py-24 bg-white border-t border-slate-200 overflow-hidden">
      {/* Background Subtle Pastel Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>DATA IN ACTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            Interactive Analytics <span className="gradient-text-hero">Cockpit</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore live interactive charts powered by realistic demo datasets. Switch timeframes, inspect regional variances, and test dynamic filters.
          </p>

          {/* Prominent Demo Data Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-mono">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>Sample Demo Dataset • Demonstrating Dynamic Dashboard & KPI Modeling Capabilities</span>
          </div>
        </div>

        {/* Dashboard Frame Container */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm space-y-8">
          
          {/* Dashboard Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Enterprise Commercial & Operational Cockpit
                </h3>
              </div>
              <p className="text-xs text-slate-500 font-mono mt-0.5">
                Aggregate Performance Metrics & Customer Cohorts
              </p>
            </div>

            {/* Timeframe Selector Controls */}
            <div className="flex items-center gap-2 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
              <span className="text-xs font-mono text-slate-400 px-2 flex items-center gap-1">
                <Filter className="w-3 h-3" /> Filter:
              </span>
              {[
                { label: 'Full Year', value: 'full' },
                { label: 'H1 (Jan-Jun)', value: 'h1' },
                { label: 'H2 (Jul-Dec)', value: 'h2' }
              ].map((btn) => (
                <button
                  key={btn.value}
                  onClick={() => setTimeframe(btn.value)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    timeframe === btn.value
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Top Row: 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
              <div
                key={kpi.id}
                onClick={() => kpi.id !== 'speedup' && setActiveMetric(kpi.id)}
                className={`p-5 rounded-2xl bg-white border transition-all cursor-pointer ${
                  activeMetric === kpi.id
                    ? 'border-blue-500 ring-2 ring-blue-100 shadow-md'
                    : 'border-slate-200 hover:border-blue-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-500">
                    {kpi.title}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${kpi.bg}`}>
                    <kpi.icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-900 font-display">
                  {kpi.value}
                </div>
                <div className="text-xs font-mono text-emerald-700 font-semibold mt-1">
                  {kpi.change}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Row 1: Monthly Trend Area Chart (8 cols) + Customer Segmentation Donut (4 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Chart 1: Monthly Revenue & Target Analysis */}
            <div className="lg:col-span-8 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    Monthly Revenue & Profit Trajectory
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    Actual Performance vs Forecasted Budget Targets
                  </p>
                </div>

                {/* Metric Selector Pills */}
                <div className="flex gap-1.5 bg-slate-100 p-1 rounded-lg">
                  {['revenue', 'profit', 'orders'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveMetric(m)}
                      className={`px-2.5 py-1 text-[11px] font-mono font-semibold rounded-md capitalize transition-colors ${
                        activeMetric === m
                          ? 'bg-white text-blue-700 shadow-2xs font-bold'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Responsive Area Chart */}
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={filteredMonthly} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} tickFormatter={(val) => activeMetric === 'orders' ? val : `$${val/1000}k`} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    {activeMetric === 'revenue' && (
                      <>
                        <Area type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" name="Revenue ($)" />
                        <Area type="monotone" dataKey="target" stroke="#94A3B8" strokeWidth={1.5} strokeDasharray="4 4" fill="transparent" name="Target ($)" />
                      </>
                    )}
                    {activeMetric === 'profit' && (
                      <Area type="monotone" dataKey="profit" stroke="#7C3AED" strokeWidth={2.5} fillOpacity={1} fill="url(#colorProfit)" name="Gross Profit ($)" />
                    )}
                    {activeMetric === 'orders' && (
                      <Area type="monotone" dataKey="orders" stroke="#06B6D4" strokeWidth={2.5} fillOpacity={1} fill="url(#colorOrders)" name="Orders (#)" />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Customer Segmentation Donut Chart */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Customer Segmentation
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  RFM Cohort Distribution (% Share)
                </p>
              </div>

              <div className="h-52 w-full my-2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={demoShowcaseData.customerSegments}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={80}
                      paddingAngle={4}
                      dataKey="share"
                    >
                      {demoShowcaseData.customerSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(val, name, item) => [`${val}% (AOV: ${item.payload.avgOrder})`, item.payload.name]}
                      contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '11px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Segment Legend */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                {demoShowcaseData.customerSegments.map((seg) => (
                  <div key={seg.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: seg.color }} />
                      <span className="text-slate-700 truncate max-w-[170px]">{seg.name.split('(')[0].trim()}</span>
                    </div>
                    <span className="font-mono font-bold text-slate-900">{seg.share}%</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Charts Row 2: Sales Performance by Region (Bar) + Product & Pizza Category Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Regional Sales Performance */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-display">
                    Regional Sales Performance
                  </h4>
                  <p className="text-xs text-slate-500 font-mono">
                    Actual Revenue vs Budget Target by Territory
                  </p>
                </div>
                <span className="text-xs font-mono text-blue-700 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200">
                  4 Zones Tracked
                </span>
              </div>

              <div className="h-60 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={demoShowcaseData.salesPerformanceByRegion} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                    <XAxis dataKey="region" stroke="#94A3B8" fontSize={11} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={11} tickFormatter={(val) => `$${val/1000}k`} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                    <Bar dataKey="revenue" fill="#2563EB" radius={[6, 6, 0, 0]} name="Actual Revenue ($)" />
                    <Bar dataKey="target" fill="#CBD5E1" radius={[6, 6, 0, 0]} name="Target ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Product & Pizza Performance Breakdown */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  Product Category Performance
                </h4>
                <p className="text-xs text-slate-500 font-mono">
                  Volume & Margin Contribution (Pizza & Retail Portfolio)
                </p>
              </div>

              <div className="space-y-3 my-4">
                {demoShowcaseData.productPerformance.map((prod) => (
                  <div key={prod.name} className="p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-slate-900 truncate max-w-[200px]">{prod.name}</span>
                      <div className="font-mono text-xs flex items-center gap-2">
                        <span className="text-blue-700 font-bold">${prod.sales.toLocaleString()}</span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded text-[10px]">{prod.margin}% Margin</span>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-200 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" 
                        style={{ width: `${(prod.sales / 50000) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-slate-700 leading-relaxed">
                📊 <strong className="text-slate-900">Key Analytical Insight:</strong> High-margin beverage and side items (55-62% margin) produce significant bottom-line lift when bundled with core pizza orders.
              </div>
            </div>

          </div>

          {/* Footer Metadata */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Built with React, Recharts & Tailwind CSS</span>
            </div>
            <span className="text-slate-400">
              Interactive Dashboard Demonstration • Responsive & Accessible
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
