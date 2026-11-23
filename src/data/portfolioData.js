export const personalInfo = {
  name: "Md Ayub Sheikh",
  title: "Data Analyst | Business Analyst | Data Enthusiast",
  headline: "Turning Data Into Meaningful Insights.",
  heroSubheading: "Hi, I'm Md Ayub Sheikh — a Data Analyst passionate about transforming complex data into actionable business insights through SQL, Python, Power BI and data visualization.",
  aboutMeText: "I am a Data Analyst with a background in IT infrastructure and professional experience at Paytm Payments Bank. I have developed an interest in transforming raw data into meaningful insights that support business decisions. My skills include SQL, Python, Excel, Power BI, data cleaning, visualization and analytical problem-solving. I enjoy exploring datasets, identifying trends and creating interactive dashboards.",
  location: "New Delhi, India",
  phone: "+91-7065487511",
  email: "ayubsheikh.in@gmail.com",
  linkedin: "https://www.linkedin.com/in/mdayub75?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/mdayub0769",
  profileImage: "/ayub-profile.jpg",
  resumePdf: "/Md_Ayub_Sheikh_Resume.pdf",
  status: "Immediate Joiner • Available for Opportunities",
  typingRoles: [
    "Data Analyst",
    "Business Analyst",
    "SQL & Power BI Specialist",
    "Data Enthusiast",
    "Reporting & Pipeline Automator"
  ]
};

// Animated Statistics supporting both prompt requirements and resume metrics
export const animatedStats = [
  {
    id: "exp",
    numericValue: 2,
    suffix: "+",
    label: "Years Experience",
    subtext: "Professional operational & data analytics work",
    icon: "Briefcase"
  },
  {
    id: "dashboards",
    numericValue: 10,
    suffix: "+",
    label: "Dashboards Created",
    subtext: "Interactive Power BI & Tableau dashboards built",
    icon: "LayoutDashboard"
  },
  {
    id: "tools",
    numericValue: 5,
    suffix: "+",
    label: "Analytics Tools",
    subtext: "SQL, Python, Power BI, Excel, Tableau & Kafka",
    icon: "Wrench"
  },
  {
    id: "time_saved",
    numericValue: 30,
    suffix: "+",
    label: "Hours Saved / Month",
    subtext: "Turnaround reduced up to 88% via ETL automation",
    icon: "Clock"
  }
];

// Additional technical highlights for hero floating cards
export const heroHighlights = [
  { title: "85% Faster", subtitle: "Manual reporting time reduction", badge: "Efficiency" },
  { title: "5M+ Records", subtitle: "Queried & optimized via SQL CTEs", badge: "Scale" },
  { title: "10+ Dashboards", subtitle: "Power BI & Tableau BI portals", badge: "Impact" }
];

// Technical Skills Categories (Prompt Section 5)
export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    iconName: "Code2",
    description: "Languages for data extraction, database manipulation, and automated processing",
    color: "#2563EB",
    skills: [
      { 
        name: "Python", 
        level: "Proficient", 
        tag: "Data Automation",
        description: "Pandas data wrangling, NumPy numerical transformations, CSV cleanup scripts, and automated ETL pipelines."
      },
      { 
        name: "SQL", 
        level: "Advanced", 
        tag: "Complex Querying",
        description: "Window functions (ROW_NUMBER, RANK, LEAD/LAG), CTEs, multi-table joins, subqueries, and query optimization."
      },
      { 
        name: "MySQL", 
        level: "Advanced", 
        tag: "Relational DB",
        description: "Relational schema modeling, index optimization across 5M+ transaction records, and aggregated KPI reporting."
      },
      { 
        name: "SQL Server", 
        level: "Proficient", 
        tag: "Enterprise DB",
        description: "Stored procedures, data aggregation views, relational table integrity, and cross-system ETL."
      }
    ]
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    iconName: "Database",
    description: "Methodologies and libraries for deep data exploration, cleaning, and metric synthesis",
    color: "#7C3AED",
    skills: [
      { 
        name: "Pandas", 
        level: "Advanced", 
        tag: "Data Manipulation",
        description: "High-performance DataFrame aggregations, pivot operations, time-series analysis, and feature generation."
      },
      { 
        name: "NumPy", 
        level: "Proficient", 
        tag: "Numerical Computing",
        description: "Array computing, vectorized mathematical functions, statistical summarization, and matrix manipulation."
      },
      { 
        name: "Excel", 
        level: "Expert", 
        tag: "Advanced Modeling",
        description: "Pivot Tables, XLOOKUP / VLOOKUP, dynamic array formulas, scenario modeling, and automated Macros."
      },
      { 
        name: "Data Cleaning", 
        level: "Expert", 
        tag: "Integrity Assurance",
        description: "Null handling, duplicate elimination, outlier detection (IQR), string normalization, achieving 90% data accuracy."
      },
      { 
        name: "Exploratory Data Analysis", 
        level: "Advanced", 
        tag: "Pattern Discovery",
        description: "Uncovering distributions, correlation heatmaps, hypothesis validation, anomaly detection, and business trend tracking."
      }
    ]
  },
  {
    id: "visualization",
    title: "Visualization",
    iconName: "BarChart3",
    description: "Crafting intuitive visual narratives and interactive corporate intelligence cockpits",
    color: "#06B6D4",
    skills: [
      { 
        name: "Power BI", 
        level: "Expert", 
        tag: "DAX & Power Query",
        description: "Star schema modeling, complex DAX measures (YOY growth, running totals), dynamic slicers, and drill-throughs."
      },
      { 
        name: "Tableau", 
        level: "Advanced", 
        tag: "Visual Storytelling",
        description: "Interactive visual stories, calculated fields, parameter-driven actions, level-of-detail (LOD) expressions."
      },
      { 
        name: "Matplotlib", 
        level: "Proficient", 
        tag: "Statistical Charts",
        description: "Customized multi-panel subplots, distribution histograms, trend lines, and publication-ready graphs."
      },
      { 
        name: "Seaborn", 
        level: "Proficient", 
        tag: "Data Distributions",
        description: "Correlation matrices, violin plots, regression trends, and categorical breakdown visualizations."
      }
    ]
  },
  {
    id: "other-tools",
    title: "Other Tools & Platforms",
    iconName: "Cpu",
    description: "Enterprise monitoring, version control, cloud data engines, and collaboration tools",
    color: "#059669",
    skills: [
      { 
        name: "Git & GitHub", 
        level: "Proficient", 
        tag: "Version Control",
        description: "Repository branching, version tracking, collaboration workflows, and markdown portfolio documentation."
      },
      { 
        name: "Jupyter Notebook", 
        level: "Advanced", 
        tag: "Interactive EDA",
        description: "Step-by-step analytical prototyping, exploratory data notebooks, and annotated visualizations."
      },
      { 
        name: "Streamlit", 
        level: "Proficient", 
        tag: "Data Apps",
        description: "Rapid web app prototyping for interactive data visualization, CSV inspection, and model demonstrations."
      },
      { 
        name: "Databricks", 
        level: "Certified", 
        tag: "Lakehouse & AI",
        description: "Databricks Generative AI accredited foundations, Cloud Lakehouse concepts, and modern data workflows."
      },
      { 
        name: "Apache Kafka", 
        level: "Certified", 
        tag: "Stream Validation",
        description: "Kafka data stream inspection, event validation, message tracking, and real-time data reliability."
      },
      { 
        name: "Zabbix & IBM / BMC", 
        level: "Experienced", 
        tag: "Monitoring & Ops",
        description: "Enterprise system monitoring, transactional alerting, server diagnostic tracking, and uptime assurance."
      }
    ]
  }
];

// Featured Projects (Prompt Section 6)
export const featuredProjects = [
  {
    id: "sales-data-analysis",
    title: "Sales Data Analysis",
    category: "SQL & Analytics",
    badge: "Featured Capstone",
    tech: ["SQL", "Python", "Pandas", "Power BI"],
    summary: "Analyze sales performance, revenue trends and business KPIs.",
    description: "An end-to-end commercial sales analytics project extracting raw point-of-sale and transaction records to uncover revenue drivers, regional growth trajectories, and product profitability. Leveraged SQL CTEs and window functions to aggregate 1.2M+ records, followed by Python exploratory analysis and an executive Power BI reporting cockpit.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    keyMetrics: [
      { label: "Analyzed Records", value: "1.2M+" },
      { label: "Core Revenue Margin", value: "68%" },
      { label: "Reporting Time Saved", value: "12 hrs/mo" }
    ],
    highlights: [
      "Extracted, aggregated, and transformed raw transactional datasets from SQL relational tables.",
      "Identified top 15% high-margin products that drive 68% of total gross profit.",
      "Engineered automated monthly revenue trend models comparing actuals vs monthly forecast targets.",
      "Built an executive Power BI dashboard with dynamic date hierarchy filters and regional drill-downs."
    ],
    sqlSnippet: `WITH MonthlySales AS (
  SELECT 
    DATE_TRUNC('month', order_date) AS sales_month,
    product_category,
    SUM(revenue) AS total_revenue,
    SUM(profit) AS total_profit,
    COUNT(DISTINCT order_id) AS order_count
  FROM sales_orders
  GROUP BY 1, 2
),
RankedCategories AS (
  SELECT *,
    RANK() OVER (PARTITION BY sales_month ORDER BY total_revenue DESC) as category_rank,
    ROUND(total_profit / NULLIF(total_revenue, 0) * 100, 2) AS profit_margin_pct
  FROM MonthlySales
)
SELECT * FROM RankedCategories WHERE category_rank <= 5;`,
    github: "https://github.com/mdayub0769",
    demoAction: "view-cockpit"
  },
  {
    id: "customer-insights-dashboard",
    title: "Customer Insights Dashboard",
    category: "Power BI & Visualization",
    badge: "Customer Analytics",
    tech: ["Power BI", "Excel", "Data Visualization"],
    summary: "Customer segmentation, customer behavior and business insights.",
    description: "Comprehensive customer intelligence suite tracking customer acquisition patterns, lifetime value (LTV), cohort retention, and RFM behavioral clusters. Built using Power BI with advanced DAX expressions and interactive Excel summary models for strategic marketing decision-making.",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    keyMetrics: [
      { label: "Tracked Customers", value: "250K+" },
      { label: "Customer Segments", value: "4 Cohorts" },
      { label: "Retention Impact", value: "+18%" }
    ],
    highlights: [
      "Engineered Recency, Frequency, Monetary (RFM) modeling to classify customer purchase habits.",
      "Identified 4 distinct behavioral segments: Champions, Loyal Shoppers, Potential Growth, and At-Risk.",
      "Designed dynamic DAX measures calculating customer churn risk, cohort retention, and repeat rates.",
      "Delivered strategic recommendations enabling marketing teams to deploy targeted re-engagement campaigns."
    ],
    sqlSnippet: `-- RFM Score Calculation in SQL
SELECT 
  customer_id,
  DATEDIFF(CURRENT_DATE, MAX(order_date)) AS recency_days,
  COUNT(order_id) AS frequency,
  SUM(order_value) AS monetary_total,
  NTILE(4) OVER (ORDER BY DATEDIFF(CURRENT_DATE, MAX(order_date)) DESC) AS r_score,
  NTILE(4) OVER (ORDER BY COUNT(order_id) ASC) AS f_score,
  NTILE(4) OVER (ORDER BY SUM(order_value) ASC) AS m_score
FROM customer_transactions
GROUP BY customer_id;`,
    github: "https://github.com/mdayub0769",
    demoAction: "view-cockpit"
  },
  {
    id: "pizza-sales-analysis",
    title: "Pizza Sales Analysis",
    category: "SQL & Analytics",
    badge: "Operational Analytics",
    tech: ["SQL", "MySQL", "Excel"],
    summary: "Analyze pizza sales, revenue, order trends and best-selling products.",
    description: "Detailed operational and sales performance analysis for a high-volume restaurant enterprise. Analyzed historical order records in MySQL to uncover peak ordering hours, popular pizza sizes, revenue contribution per recipe category, and underperforming menu items to optimize kitchen inventory and promotional bundles.",
    thumbnail: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1000&q=80",
    keyMetrics: [
      { label: "Orders Analyzed", value: "48K+" },
      { label: "Top Size Share", value: "L (45%)" },
      { label: "Peak Time Window", value: "12-1 PM & 6-8 PM" }
    ],
    highlights: [
      "Wrote complex MySQL queries calculating Total Revenue, Average Order Value (AOV), and Total Pizzas Sold.",
      "Identified that Large (L) size pizzas contributed 45% of total gross sales volume.",
      "Analyzed hourly distribution of orders, uncovering lunch (12–1 PM) and dinner (6–8 PM) operational peaks.",
      "Categorized top 5 best-selling and bottom 5 worst-selling pizzas to support inventory stock adjustments."
    ],
    sqlSnippet: `-- Top 5 Best-Selling Pizzas by Revenue
SELECT 
  p.pizza_name,
  p.pizza_category,
  SUM(od.quantity) AS total_quantity_sold,
  ROUND(SUM(od.quantity * p.unit_price), 2) AS total_revenue,
  ROUND(SUM(od.quantity * p.unit_price) * 100.0 / 
    (SELECT SUM(od2.quantity * p2.unit_price) 
     FROM order_details od2 JOIN pizzas p2 ON od2.pizza_id = p2.pizza_id), 2) AS revenue_pct
FROM order_details od
JOIN pizzas p ON od.pizza_id = p.pizza_id
GROUP BY p.pizza_name, p.pizza_category
ORDER BY total_revenue DESC
LIMIT 5;`,
    github: "https://github.com/mdayub0769",
    demoAction: "view-cockpit"
  },
  {
    id: "data-analytics-automation",
    title: "Data Analytics Automation",
    category: "Automation & Python",
    badge: "Automation Tool",
    tech: ["Python", "Pandas", "Streamlit"],
    summary: "Create automated reporting workflows and interactive data applications.",
    description: "Engineered an automated data verification and processing engine using Python, Pandas, and Streamlit. The tool automatically ingests dirty CSV files, detects missing fields, eliminates duplicate records, standardizes dates, and outputs clean summary analytics, reducing routine manual prep time by over 80%.",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    keyMetrics: [
      { label: "Data Accuracy", value: "90%+" },
      { label: "Manual Effort Cut", value: "85%" },
      { label: "Turnaround Time", value: "< 2 mins" }
    ],
    highlights: [
      "Developed an automated data cleaning script resolving missing values, corrupt strings, and duplicate entries.",
      "Integrated IQR (Interquartile Range) statistical outlier detection for numerical columns.",
      "Constructed an interactive Streamlit web interface for drag-and-drop CSV auditing and instant EDA charts.",
      "Automated recurrent weekly KPI report generation, saving analysts 30+ hours of manual spreadsheet work monthly."
    ],
    sqlSnippet: `# Automated Python / Pandas Cleaning Pipeline
import pandas as pd
import numpy as np

def clean_sales_stream(filepath: str) -> pd.DataFrame:
    df = pd.read_csv(filepath)
    df.drop_duplicates(subset=['transaction_id'], inplace=True)
    df['order_date'] = pd.to_datetime(df['order_date'], errors='coerce')
    df['revenue'] = pd.to_numeric(df['revenue'], errors='coerce').fillna(0)
    
    # Statistical outlier clipping using IQR
    q25, q75 = df['revenue'].quantile([0.25, 0.75])
    iqr = q75 - q25
    df['revenue'] = df['revenue'].clip(lower=0, upper=q75 + 1.5 * iqr)
    return df`,
    github: "https://github.com/mdayub0769",
    demoAction: "view-cockpit"
  }
];

// Experience Section (Prompt Section 7 + Resume Verification)
export const experienceData = [
  {
    company: "Paytm Payments Bank Ltd",
    role: "Platform Support Engineer (Data & Business Analysis)",
    location: "Noida, India",
    period: "Aug 2024 – Present (Approx. 2+ Years)",
    type: "Full-Time",
    statusBadge: "Transferable Analytical Impact",
    summary: "Led high-impact operational reporting, transactional anomaly analysis, and cross-functional BI dashboard creation across large-scale payment systems.",
    analyticalBridge: "Operating in high-throughput digital banking infrastructure provided the ideal environment to hone advanced data querying, root-cause troubleshooting, real-time KPI monitoring, and data storytelling.",
    transferableSkills: [
      {
        title: "Monitoring & Operational Reporting",
        desc: "Analyzed large transactional datasets using SQL to identify system trends and operational bottlenecks, reducing manual reporting time by 85%."
      },
      {
        title: "Incident Analysis & Troubleshooting",
        desc: "Conducted root-cause investigation on payment anomalies and system alarms, resolving critical incident spikes through empirical data tracking."
      },
      {
        title: "Zabbix, BMC & IBM Monitoring Tools",
        desc: "Leveraged enterprise monitoring suites and server diagnostics (iLO) to uphold 90%+ platform uptime for high-volume transactions."
      },
      {
        title: "Jira & ServiceNow Ticket Management",
        desc: "Managed high-priority incident queues, tracked SLA metrics, and coordinated cross-functional resolution workflows."
      },
      {
        title: "Documentation & SOP Creation",
        desc: "Authored standardized operating procedures and operational gap analyses that reduced repeat incidents by 80%."
      },
      {
        title: "Data-Driven Problem Solving",
        desc: "Validated transaction integrity across Kafka-based event streams, improving overall dataset quality and reporting accuracy by 85%."
      },
      {
        title: "Process Improvement & Reporting",
        desc: "Constructed 12+ interactive Power BI and Tableau dashboards utilized by leadership for daily decision-making."
      }
    ],
    techStack: ["SQL (Window Functions, CTEs)", "Python", "Power BI (DAX)", "Tableau", "Apache Kafka", "Zabbix", "BMC / IBM Tools", "JIRA", "ServiceNow", "Advanced Excel"]
  },
  {
    company: "Olatech Solutions Limited",
    role: "Network Support Engineer",
    location: "Gurugram, India",
    period: "Mar 2024 – Jul 2024",
    type: "Full-Time",
    statusBadge: "Foundational Analytics",
    summary: "Managed network operations and built interactive BI dashboards for real-time infrastructure performance tracking.",
    analyticalBridge: "Transformed network diagnostic logs into business intelligence dashboards, automating repetitive reporting cycles.",
    transferableSkills: [
      {
        title: "Real-time BI Dashboards",
        desc: "Built and maintained 5+ interactive Power BI and Tableau dashboards for live network health and performance tracking."
      },
      {
        title: "SQL Metric Extraction",
        desc: "Wrote optimized SQL queries across multiple system logs to extract, clean, and analyze operational trends."
      },
      {
        title: "Data Cleaning & Accuracy",
        desc: "Executed systematic validation checks, improving operational dataset accuracy by 87%."
      },
      {
        title: "Excel Reporting Automation",
        desc: "Automated recurring daily operational reports using Excel Pivot Tables, VLOOKUP, and Macros, slashing turnaround time by 82%."
      }
    ],
    techStack: ["Power BI", "Tableau", "SQL", "Advanced Excel", "Pivot Tables", "VLOOKUP", "Macros"]
  }
];

// Education & Certifications (Prompt Section 8)
export const educationData = [
  {
    degree: "Graduation – Bachelor of Arts (Political Science)",
    institution: "Delhi University",
    period: "2019 – 2022",
    grade: "Grade: 8.3 / 10",
    badge: "Degree",
    description: "Developed strong research methodology, critical reasoning, empirical analysis, and qualitative/quantitative problem-solving skills."
  },
  {
    degree: "One-Year Diploma in Data Analytics and Data Science",
    institution: "IT Vedant",
    period: "Professional Diploma",
    grade: "Distinction in Capstone Projects",
    badge: "Specialized Diploma",
    description: "Rigorous technical curriculum in Advanced SQL, Python programming, Pandas, NumPy, Power BI, Tableau, ETL automation, and Machine Learning foundations."
  }
];

export const certificationsData = [
  {
    title: "Data Scientist and Data Analyst Certification",
    issuer: "IT Vedant",
    period: "Jan 2026 – Aug 2026",
    badge: "Comprehensive Program",
    icon: "Award",
    skills: ["Python", "SQL", "Power BI", "Machine Learning", "Exploratory Data Analysis", "ETL Pipelines"],
    description: "Comprehensive practical certification covering advanced data querying, statistical modeling, BI dashboards, and end-to-end analytical project workflows."
  },
  {
    title: "Databricks Academic Certificate – Generative AI",
    issuer: "Databricks",
    period: "Academic Accreditation",
    badge: "GenAI & Cloud Data",
    icon: "Sparkles",
    skills: ["Generative AI", "LLM Foundations", "Databricks Lakehouse", "Data Architecture"],
    description: "Accreditation covering enterprise Generative AI foundations, Databricks Lakehouse architecture, prompt workflows, and AI-assisted data intelligence."
  },
  {
    title: "Kafka Certification",
    issuer: "Bosscoder Academy",
    period: "Aug 2026",
    badge: "Streaming Architecture",
    icon: "Layers",
    skills: ["Apache Kafka", "Event Streams", "Data Pipeline Validation", "Topic Partitions"],
    description: "Specialized training on distributed event streaming, real-time message validation, data pipelines, and streaming reliability."
  },
  {
    title: "Power BI Certification",
    issuer: "Business Intelligence Credential",
    period: "Professional Credential",
    badge: "BI & DAX Specialist",
    icon: "BarChart2",
    skills: ["Power BI", "DAX Formulas", "Data Modeling", "Power Query", "Interactive Cockpits"],
    description: "Validation of advanced DAX measures, Star Schema relational models, Power Query ETL, and executive KPI reporting."
  }
];

// Interactive Showcase Data for "Data in Action" (Prompt Section 9)
export const demoShowcaseData = {
  monthlyRevenue: [
    { month: "Jan", revenue: 45000, target: 40000, profit: 18500, orders: 1250 },
    { month: "Feb", revenue: 52000, target: 44000, profit: 21800, orders: 1420 },
    { month: "Mar", revenue: 61000, target: 50000, profit: 26500, orders: 1710 },
    { month: "Apr", revenue: 58000, target: 52000, profit: 24900, orders: 1590 },
    { month: "May", revenue: 71000, target: 56000, profit: 31200, orders: 1980 },
    { month: "Jun", revenue: 78000, target: 62000, profit: 34500, orders: 2210 },
    { month: "Jul", revenue: 84000, target: 68000, profit: 38200, orders: 2430 },
    { month: "Aug", revenue: 92000, target: 74000, profit: 42100, orders: 2680 },
    { month: "Sep", revenue: 88000, target: 76000, profit: 39600, orders: 2510 },
    { month: "Oct", revenue: 102000, target: 82000, profit: 46800, orders: 2940 },
    { month: "Nov", revenue: 114000, target: 90000, profit: 52500, orders: 3260 },
    { month: "Dec", revenue: 128000, target: 100000, profit: 59800, orders: 3720 }
  ],
  salesPerformanceByRegion: [
    { region: "North Zone", revenue: 325000, target: 280000, orders: 8420, growth: "+26%" },
    { region: "West Zone", revenue: 290000, target: 250000, orders: 7510, growth: "+22%" },
    { region: "South Zone", revenue: 198000, target: 185000, orders: 5120, growth: "+18%" },
    { region: "East Zone", revenue: 120000, target: 110000, orders: 3150, growth: "+14%" }
  ],
  customerSegments: [
    { name: "Champions (High Value, High Frequency)", share: 36, color: "#2563EB", avgOrder: "$145", retention: "94%" },
    { name: "Loyal Customers (Regular Buyers)", share: 28, color: "#7C3AED", avgOrder: "$92", retention: "82%" },
    { name: "Potential Growth (Recent Buyers)", share: 22, color: "#06B6D4", avgOrder: "$68", retention: "65%" },
    { name: "At-Risk (Needs Re-engagement)", share: 14, color: "#F59E0B", avgOrder: "$45", retention: "32%" }
  ],
  productPerformance: [
    { name: "Pepperoni & Feast Pizzas", sales: 48200, margin: 44, units: 3850 },
    { name: "Veggie Supreme & Margherita", sales: 39500, margin: 48, units: 3410 },
    { name: "Chicken BBQ Gourmet", sales: 34800, margin: 42, units: 2620 },
    { name: "Beverages & Add-ons", sales: 18400, margin: 62, units: 4900 },
    { name: "Sides & Appetizers", sales: 15600, margin: 55, units: 2800 }
  ]
};
