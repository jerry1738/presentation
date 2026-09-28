export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'core' | 'contracted';
  education: string;
  institution: string;
  gradYear: string;
  honors?: string;
  gpa?: string;
  certifications: string[];
  bio: string;
  skills: string[];
  contact?: string;
}

export interface DetailedBudgetItem {
  itemNo: string;
  subtotalCategory: string;
  title: string;
  description: string;
  priceETB: number;
}

export interface BudgetSummaryCategory {
  code: string;
  title: string;
  costETB: number;
  highlight: string;
}

export interface TimelineMilestone {
  phase: 'Phase 1: Planning & System Design' | 'Phase 2: Core Engineering & Integration' | 'Phase 3: Testing & Deployment';
  code: string;
  title: string;
  durationWeeks: number;
  startMonth: string;
  endMonth: string;
  deliverable: string;
  department: string;
}

export interface ClientReference {
  name: string;
  category: string;
  signatory: string;
  role: string;
  value?: string;
  date: string;
  summary: string;
  keyOutcomes: string[];
}

export const PRESENTATION_METADATA = {
  client: "Flexible Packaging Manufacturing P.L.C.",
  provider: "Nexloop Software Solution",
  clientEstablished: "2003 G.C.",
  clientFacility: "4,000 m² Manufacturing Facility in Akaki Kality, Addis Ababa",
  clientIndustry: "Pioneer in plastic film extrusion, flexographic printing, and advanced flexible packaging in Ethiopia",
  clientSectors: [
    "Food & Dairy Packaging",
    "Cosmetics & Personal Care Packaging",
    "Detergent & Industrial Heavy-Duty Films"
  ],
  projectTitle: "Custom Enterprise Resource Planning (ERP) System Engineering, Deployment & Staff Capacity Building",
  proposalDate: "October 2026 (Tikimt 2019 E.C.)",
  timelineTotal: "6 to 7 Months",
  maintenanceGuarantee: "1 Year Complimentary Post-Launch Maintenance + 2 Years Free Software Upgrades Warranty",
  grandTotalETB: 1580023.00,
  netCostETB: 1373933.04,
  vatETB: 206089.96,
  advancePercent: 30,
  advanceAmountETB: 474006.90,
  contact: {
    lead: "Yared Kahsay Girmay",
    phone: "+251 942 78 75 68",
    email: "yaredkahase18@gmail.com",
    location: "Addis Ababa, Ethiopia",
  }
};

export const CORE_BOTTLENECKS = [
  {
    id: "scrap",
    title: "Unrecorded Raw Material Scrap & Yield Leaks",
    metric: "Critical Resource Loss",
    description: "Significant resin and solvent ink losses during extrusion and flexographic printing go untracked across shifts, resulting in untraceable material loss and distorted batch unit costing.",
    solution: "Real-time floor scrap logging node (SCR-01), automated yield reconciliation against Bill of Materials (BOM), and direct GL posting of scrap variance."
  },
  {
    id: "inventory",
    title: "Decentralized Warehouse Information Lag",
    metric: "Multi-Day Lag Time",
    description: "Physical dispersion of storage locations (raw polymer resin, unprinted film rolls, printed reels, and finished pouch inventory) managed on paper logs leads to stockouts and discrepancies.",
    solution: "Digital GRN-driven centralized ledger, rigorous storage topology (RM-01, PM-01, FG-01, SCR-01), FIFO/FEFO dispatch controls, and instant multi-warehouse visibility."
  },
  {
    id: "downtime",
    title: "Unlogged Machine Downtime & Line Changes",
    metric: "Reduced OEE & Output",
    description: "Unplanned cylinder changeovers, plate cleaning delays, ink viscosity adjustments, and power interruptions are reported verbally, skewing Overall Equipment Effectiveness (OEE).",
    solution: "Operator touch terminal job dispatch, automated downtime categorization, line-clearance sign-offs, and instant exception alerts dispatched to the General Manager."
  }
];

export const CORE_MODULES = [
  {
    id: "gm",
    num: "1",
    title: "Executive General Manager Oversight & Strategy",
    tagline: "Unified Approvals, Real-Time Liquidity & Instant Exception Alerts",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/40",
    badgeColor: "text-blue-400 bg-blue-500/10",
    features: [
      {
        name: "Centralized Executive Approval Hub",
        desc: "Single-window review and sign-off for recruitments, salary revisions, promotions, overtime batches, high-value purchase orders, and fuel allocations across all departments."
      },
      {
        name: "Live Strategic Liquidity Dashboard",
        desc: "Instant consolidation of multi-bank cash balances (CBE, Dashen, etc.), product-line contribution margins, and departmental OPEX vs. budget tracking."
      },
      {
        name: "Quality Audit & Executive Visibility",
        desc: "Direct visibility into plant defect root-cause analyses, customer complaints, scrap rates, and automated Non-Conformance Reports (NCR) requiring managerial review."
      },
      {
        name: "Strict Segregation of Duties & Tamper-Proof Audit Trail",
        desc: "Enforces maker-checker principles (a payment creator cannot approve disbursement). Every record modification and manual override is permanently logged with user ID and timestamp."
      },
      {
        name: "Enterprise Key Performance Indicators (KPIs)",
        desc: "Unified operational analytics: sales pipeline vs. revenue targets, scrap percentage vs. machine rated capacity, inventory turnover ratios, and employee absenteeism trends."
      },
      {
        name: "Autonomous Exception Alert Engine",
        desc: "Instant desktop and mobile notifications when safety stock thresholds are breached, major machine downtime exceeds 60 minutes, or unbudgeted expenses occur."
      }
    ]
  },
  {
    id: "production",
    num: "2",
    title: "Production & Technical Operations Module",
    tagline: "Film Extrusion, Flexographic Printing & Shop-Floor Execution",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/40",
    badgeColor: "text-emerald-400 bg-emerald-500/10",
    features: [
      {
        name: "Commercial Order to Production Dispatch",
        desc: "Translates confirmed packaging orders directly into scheduled Production Job Orders (PJO), verifying polymer raw material availability and cylinder scheduling."
      },
      {
        name: "Flexographic Printing & Plate Preparation Logic",
        desc: "Intelligent routing: reorders bypass prepress and route straight to printing queues, while new artwork triggers photopolymer plate making, color separation, and cylinder proofing."
      },
      {
        name: "Finance-Coupled Bill of Materials (BOM) Engine",
        desc: "Dynamic formulation calculating precise requirements for virgin LDPE/HDPE, masterbatch pigment percentages, specialized solvent inks, and laminating adhesives."
      },
      {
        name: "2-Stage Requisition Authorization Hierarchy",
        desc: "Material requests must receive technical validation from the Production & Technical Manager followed by commercial clearance before warehouse release."
      },
      {
        name: "Dedicated Packaging Raw Material Tracking",
        desc: "Granular inventory costing and yield tracking for LDPE, HDPE, BOPP films, lamination solvent rolls, doctor blades, mounting tapes, and diluent chemicals."
      },
      {
        name: "Shop-Floor Job Scheduling & Finished Goods Transfer",
        desc: "Dispatches production jobs to machine lines (Extruders, Flexo Printers, Slitters, Bag Makers), logs batch completions, and initiates handover to Finished Goods (FG-01)."
      }
    ]
  },
  {
    id: "finance",
    num: "3",
    title: "Finance & Accounting Operations Module",
    tagline: "Real-Time General Ledger, 3-Way Match & Ethiopian Tax Engine",
    color: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/40",
    badgeColor: "text-amber-400 bg-amber-500/10",
    features: [
      {
        name: "Centralized Real-Time General Ledger (GL)",
        desc: "Physical shop-floor events and warehouse receipts trigger automatic double-entry journal vouchers without manual month-end data entry bottlenecks."
      },
      {
        name: "Automated 3-Way Purchase Matching",
        desc: "Vendor disbursements are locked until the system verifies programmatic matching between Purchase Order (PO), Goods Received Note (GRN), and Vendor Invoice."
      },
      {
        name: "Standard Costing & Work-in-Progress (WIP) Valuation",
        desc: "Accurately capitalizes raw materials, machine hour overheads, direct labor hours, and auxiliary consumables into accurate WIP and finished inventory valuation."
      },
      {
        name: "Ethiopian Progressive Income Tax & Pension Engine",
        desc: "Full statutory compliance: 7-bracket progressive personal income tax, 7% employee pension, 11% employer pension, and 15% Value Added Tax (VAT) accounting."
      },
      {
        name: "Multi-Bank Account Management & Auto-Reconciliation",
        desc: "Dedicated sub-ledgers for CBE, Dashen, Awash, and Hibret banks. Automated 4-point statement matching (amount, value date, transaction reference, counterparty)."
      },
      {
        name: "Fixed Asset Depreciation & Customer Credit Controls",
        desc: "Monthly depreciation amortization schedules for factory machinery, vehicle fleets, and IT hardware, paired with automated credit limits and aging balances for buyers."
      }
    ]
  },
  {
    id: "commercial",
    num: "4",
    title: "Commercial, Sales & Supply Chain Module",
    tagline: "Order-to-Cash, Supplier Master & 4-Tier Storage Topology",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/40",
    badgeColor: "text-cyan-400 bg-cyan-500/10",
    features: [
      {
        name: "Order-to-Cash (O2C) Technical Specification Capture",
        desc: "Captures film layer structure, thickness (microns/GSM), cylinder repeat width, Pantone spot colors, print orientation, Minimum Order Quantity (MOQ), and payment terms."
      },
      {
        name: "Procure-to-Pay (P2P) & Vendor Performance Directory",
        desc: "Comprehensive registry for resin suppliers, solvent vendors, and equipment technicians with verified TIN numbers, historical on-time rates, and quality scorecards."
      },
      {
        name: "Standardized 4-Tier Storage Topology",
        desc: "Rigorous warehouse partition: RM-01 (Raw Materials), PM-01 (Packaging/Cores), FG-01 (Finished Goods), and SCR-01 (Floor Scrap & Regrind Recovery)."
      },
      {
        name: "Inventory Governance: FIFO, FEFO & Roll Lot Tracking",
        desc: "Automated reorder point warnings, safety stock buffers, unique lot/roll serial tracking, and shelf-life expiration alerts for specialized inks and adhesives."
      },
      {
        name: "International Resin Commodity Price & Forex Tracking",
        desc: "Monitors benchmark international polymer index shifts, exchange rate trends, customs duty schedules, freight logistics, and landed cost impacts."
      },
      {
        name: "Seamless Inter-Departmental Workflows",
        desc: "Transfers confirmed orders to production planning, raw material receipts to QC inspection, commercial invoices to finance, and sales commissions to HR payroll."
      }
    ]
  },
  {
    id: "qc",
    num: "5",
    title: "Quality Control (QC) & Management Representative",
    tagline: "5-Stage Quality Gates, Backward Batch Traceability & ISO Compliance",
    color: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/40",
    badgeColor: "text-purple-400 bg-purple-500/10",
    features: [
      {
        name: "5-Stage Quality Gate Protocol",
        desc: "Gate 1: Receiving inspection; Gate 2: Pre-extrusion release; Gate 3: In-process sampling (with machine stop authority); Gate 4: Line clearance; Gate 5: Pre-dispatch COA sign-off."
      },
      {
        name: "Complete Backward Batch & Roll Traceability",
        desc: "When a customer submits a complaint, the system reconstructs the production history in minutes: manufacturing timestamp, machine operator, slitter, and exact resin lot."
      },
      {
        name: "Non-Conformance Reporting (NCR) & CAPA Engine",
        desc: "Centralized ticket generation for defects across Production, Procurement, Warehousing, and Sales with mandatory 5-Why root-cause analysis and management closure."
      },
      {
        name: "Customer Quality Complaint Investigation Workflow",
        desc: "Logs customer claims with digital photo evidence, issuing mandatory investigation work orders to QC, with auto-notifications to the General Manager and Production Head."
      },
      {
        name: "Supplier Quality Rating & Return-to-Vendor (RTV)",
        desc: "Rejection logging at receiving dock generates formal RTV debit notes, updates vendor risk profiles, and halts payment processing until credit notes are reconciled."
      },
      {
        name: "ISO 9001 & ISO 14001 Audit Management",
        desc: "Internal audit scheduling, factory environmental/hygiene variance logging, standard operating procedure (SOP) repository, and automated training requisitions to HR."
      }
    ]
  },
  {
    id: "hr",
    num: "6",
    title: "Human Resources & General Services Module",
    tagline: "Biometric Hardware Sync (ADMS), 12 Employee Actions & Fleet Logistics",
    color: "from-rose-500/20 to-orange-500/20",
    border: "border-rose-500/40",
    badgeColor: "text-rose-400 bg-rose-500/10",
    features: [
      {
        name: "Organizational Hierarchy & Position Budgeting",
        desc: "Interactive organizational tree mapping Company → Plant → Department → Sub-unit, with approved headcount budgets, job descriptions, and salary grade scales."
      },
      {
        name: "Master Employee Digital Dossier",
        desc: "Complete personnel profiles, verified academic credentials, employment contracts, TIN and pension IDs, next-of-kin records, and secure document vaults."
      },
      {
        name: "Standardized 12 Employee Lifecycle Actions",
        desc: "Rigorous digital workflows for: Hire, Re-hire, Transfer, Promotion, Demotion, Salary Revision, Disciplinary Warning, Suspension, Leave, Contract Renewal, Resignation, and Termination."
      },
      {
        name: "Biometric Time & Attendance Sync (ADMS)",
        desc: "Direct TCP/IP and cloud sync with physical factory turnstiles and biometric terminals; manages rotational shifts, late arrivals, grace periods, and unexcused absences."
      },
      {
        name: "4-Tier Overtime Engine & Leave Management",
        desc: "4-stage authorization chain (Supervisor → Dept Head → HR → General Manager). Calculates ordinary, night-time, weekly rest day, and public holiday overtime rates directly into payroll."
      },
      {
        name: "General Services: Fleet, Facilities, Gate Passes & PPE",
        desc: "Factory work orders, vehicle dispatch log, fuel coupon quota tracking, physical item and vehicle gate passes, and Personal Protective Equipment (PPE) distribution tracking."
      }
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "yared",
    name: "Yared Kahsay Girmay",
    role: "Co-Founder & Lead Systems Engineer",
    category: "core",
    education: "B.Sc. in Computer Science (July 2024)",
    institution: "Admas University",
    gradYear: "2024",
    honors: "Graduated with Distinction",
    gpa: "Major GPA: 3.78 · Cumulative GPA: 3.26 · National Exit Exam: Passed (63/100)",
    certifications: [
      "Ministry of Labor & Skills / Mastercard Foundation: Master Trainer (ToT)",
      "LinkedIn Learning: SAP ABAP Programming Best Practices",
      "Udemy: 6+ Advanced Full-Stack & Systems Engineering Certifications",
      "Federal 5 Million Ethiopian Coders Initiative Certification"
    ],
    bio: "Senior software engineer with deep specialization in custom Enterprise Resource Planning (ERP) systems, transactional database integrity, and high-performance manufacturing architectures. Proven track record leading mission-critical deployments across industrial manufacturing and construction enterprises.",
    skills: ["ERP Architecture", "React & Node.js", "PostgreSQL & SQLite", "System Security & RBAC", "SAP ABAP", "Cloud Deployment"],
    contact: "+251 942 78 75 68"
  },
  {
    id: "hermela",
    name: "Hermela Teklit",
    role: "Co-Founder & Systems Architect",
    category: "core",
    education: "Computer Science Professional & Certified System Architect",
    institution: "Admas University & Salesforce Trailhead",
    gradYear: "2024",
    honors: "Certified System Architect Credential",
    certifications: [
      "Salesforce Certified System Architect (Credential ID: 4087647, Jan 2024)",
      "Udacity Global Chapters - Ethiopia: Programming Fundamentals",
      "Addis Ababa TVET Agency: Computer Engineering & Contemporary Accounting (60 Hours)"
    ],
    bio: "Enterprise systems architect specializing in high-throughput database schemas, transactional integrity, and seamless sub-ledger financial bridges. Bridges rigorous technical computer science with enterprise accounting standards and corporate governance.",
    skills: ["Enterprise System Architecture", "Salesforce Ecosystem", "Relational Database Design", "Financial Ledger Integration", "Cloud Infrastructure"]
  },
  {
    id: "zelalem",
    name: "Zelalem Yeheyes Belay",
    role: "Co-Founder & UI/UX & Printing Technology Specialist",
    category: "core",
    education: "B.Sc. in Computer Science (March 2025)",
    institution: "Admas University",
    gradYear: "2025",
    honors: "Certified Printing & Graphic Arts Specialist",
    certifications: [
      "Udacity Nanodegree: Artificial Intelligence Fundamentals (May 2025)",
      "Udacity Nanodegree: Programming Fundamentals (Sept 2024)",
      "Addis Ababa City Occupational Assessment Agency: Printing & Graphic Art Operation Level 2 (2023)"
    ],
    bio: "Combines computer science background with specialized, certified credentials in industrial printing and graphic arts operations. Uniquely equipped to design intuitive, high-efficiency touch interfaces for flexible packaging prepress, plate management, and shop-floor machine operators.",
    skills: ["Industrial UI/UX Design", "Flexographic Printing Workflow", "Artificial Intelligence (AI)", "Ergonomic Interfaces", "Mobile & Desktop Systems"]
  },
  {
    id: "million",
    name: "Million Mulugeta Fekade",
    role: "Contract Database & Backend Infrastructure Engineer",
    category: "contracted",
    education: "B.Sc. in Computer Science (August 2023)",
    institution: "Admas University",
    gradYear: "2023",
    certifications: [
      "Simplilearn SkillUp: Fundamentals of DevOps on AWS",
      "Simplilearn SkillUp: Blockchain Developer Training",
      "Great Learning: AWS for Beginners",
      "Cisco Networking Academy: Networking Basics Course"
    ],
    bio: "Experienced backend engineer formerly with Go Digital Technology, specializing in high-volume enterprise API microservices, distributed server infrastructure, query tuning, and zero-downtime reliability.",
    skills: ["AWS Cloud Infrastructure", "DevOps & CI/CD", "Backend API Microservices", "PostgreSQL Optimization", "Industrial Networking"]
  },
  {
    id: "mohammed",
    name: "Mohammed Nabil Mohammed",
    role: "Contract Senior Frontend Systems Engineer",
    category: "contracted",
    education: "B.Sc. in Computer Science (August 2023)",
    institution: "Admas University",
    gradYear: "2023",
    honors: "Graduated with Very Great Distinction",
    gpa: "Cumulative GPA: 3.79 · Major GPA: 3.79 (567.75 Grade Points) · National Exit Exam Passed",
    certifications: [
      "Advanced Java, Web Engineering & Distributed Architecture Specialist",
      "National Higher Education Computer Science Exit Examination Verified"
    ],
    bio: "Top academic achiever and frontend engineer focused on building lightning-fast, reactive enterprise dashboards, state management architectures, and resilient shop-floor operator interfaces.",
    skills: ["React & Next.js", "TypeScript", "Enterprise State Architecture", "Performance Optimization", "Multi-Language Web Apps"]
  },
  {
    id: "binyam",
    name: "Binyam Girma Alemu",
    role: "Contract UI/UX & Design Systems Specialist",
    category: "contracted",
    education: "B.Sc. in Computer Science (June 2025)",
    institution: "Debre Berhan University",
    gradYear: "2025",
    honors: "Cumulative CGPA: 3.38 · National Exit Examination: 79%",
    certifications: [
      "Debre Berhan University Department Head Official Academic & Technical Letter of Recommendation",
      "Udemy: Tailwind CSS v4 Start to Mastery - 22 Production Projects"
    ],
    bio: "Formally endorsed by the Department Head of Computing College at Debre Berhan University for outstanding technical ability. Expert in modern Tailwind CSS v4 design systems, intuitive ergonomics, and touch layouts.",
    skills: ["Tailwind CSS v4", "Design Systems", "User Journey Mapping", "Rapid Prototyping", "Mobile Responsive Web"]
  },
  {
    id: "feven",
    name: "Feven Abate Gebresilassie",
    role: "Contract Accounting, Tax & Audit Compliance Consultant",
    category: "contracted",
    education: "B.A. in Accounting & Finance (July 2026)",
    institution: "Admas University",
    gradYear: "2026",
    certifications: [
      "Specialist Consultant in Ethiopian Corporate & Payroll Tax Law",
      "Double-Entry Accounting Integrity & Internal Audit Controls"
    ],
    bio: "Financial compliance consultant ensuring that every general ledger posting, 3-way purchase reconciliation, 15% VAT split, and 7-tier payroll tax deduction conforms rigorously with Ethiopian Ministry of Revenues statutory requirements.",
    skills: ["Ethiopian Tax Regulations", "15% VAT & Withholding", "Payroll Accounting", "General Ledger Verification", "Internal Audit Controls"]
  },
  {
    id: "meseret",
    name: "Meseret Gonche Woldemelak",
    role: "Contract Database Optimization & Migration Specialist",
    category: "contracted",
    education: "B.Sc. in Computer Science (August 2023)",
    institution: "Admas University",
    gradYear: "2023",
    certifications: [
      "Relational Database Management Systems",
      "Data Structures & Algorithm Design"
    ],
    bio: "Specializes in relational schema normalization, database query indexing, ETL pipeline migration from legacy Excel logs, and automated disaster recovery backup strategies.",
    skills: ["Database Normalization", "Data Security", "ETL Data Migration", "Automated Backup & DR", "PostgreSQL Tuning"]
  }
];

export const BUDGET_SUMMARY: BudgetSummaryCategory[] = [
  { code: "1.0", title: "Core System Architecture, UI/UX & Middleware", costETB: 190000.00, highlight: "RBAC security, Dual Calendar, Biometric API & tamper-proof audit trail" },
  { code: "2.0", title: "Human Resources & Employee Administration Module", costETB: 135000.00, highlight: "Org structure, 12 employee lifecycle actions & skills matrix" },
  { code: "3.0", title: "Time Tracking, Attendance & Leave Management Module", costETB: 85000.00, highlight: "Biometric ADMS integration, 4-tier overtime engine & leave accruals" },
  { code: "4.0", title: "Finance, General Ledger & Tax Accounting Module", costETB: 230000.00, highlight: "Real-time GL, 3-way purchase match & Ethiopian 7-bracket tax engine" },
  { code: "5.0", title: "Production, Technical & Flexo Printing Module", costETB: 150000.00, highlight: "Flexo plate prep, resin BOM formulation & shop-floor dispatch" },
  { code: "6.0", title: "Quality Control (QC) & Management Rep Module", costETB: 175000.00, highlight: "5-stage quality gates, NCR/CAPA engine & backward batch traceability" },
  { code: "7.0", title: "Commercial, Warehousing & Fleet Logistics Module", costETB: 110000.00, highlight: "Packaging specs, 4-tier storage topology (RM/PM/FG/SCR) & fleet" },
  { code: "8.0", title: "Executive General Manager Oversight & Dashboard", costETB: 105000.00, highlight: "Unified approvals, live liquidity & autonomous exception alerts" },
  { code: "9.0", title: "System Testing, Legacy Data Migration, Training & Go-Live", costETB: 193933.04, highlight: "Security audit, Excel data migration & comprehensive staff training" }
];

export const DETAILED_BUDGET_ITEMS: DetailedBudgetItem[] = [
  { itemNo: "1.1.1", subtotalCategory: "1.0", title: "Figma Wireframing & Departmental Interactive Prototypes", description: "Interactive user prototypes for all departmental roles and executive management views", priceETB: 18000 },
  { itemNo: "1.1.2", subtotalCategory: "1.0", title: "Design System, Design Tokens & Clean Typography", description: "Custom UI component library, high-contrast light/dark themes, and professional typography", priceETB: 22000 },
  { itemNo: "1.1.3", subtotalCategory: "1.0", title: "Mobile & Responsive Desktop Layout Framework", description: "Multi-tab navigation workspace optimized for laptops, desktops, tablets, and phones", priceETB: 18000 },
  { itemNo: "1.2.1", subtotalCategory: "1.0", title: "Database Schema Architecture & Sub-ledger Bridging", description: "Relational database schema modeling, referential integrity, and automated GL triggers", priceETB: 20000 },
  { itemNo: "1.2.2", subtotalCategory: "1.0", title: "Role-Based Access Control (RBAC) & Segregation Rules", description: "Granular field-level permissions, maker-checker enforcement, and executive override rules", priceETB: 15000 },
  { itemNo: "1.2.3", subtotalCategory: "1.0", title: "Data Encryption, Authentication & Token Vault", description: "Encrypted credential storage, session management, and brute-force protection", priceETB: 10000 },
  { itemNo: "1.3.1", subtotalCategory: "1.0", title: "Dual Calendar Engine (Ethiopian & Gregorian Synchronization)", description: "Synchronized dual-calendar engine for payroll periods, leave tracking, and production scheduling", priceETB: 18000 },
  { itemNo: "1.3.2", subtotalCategory: "1.0", title: "Multi-Tier Configurable Approval Workflow Engine", description: "Dynamic approval routing through supervisors, department heads, and the General Manager", priceETB: 14000 },
  { itemNo: "1.3.3", subtotalCategory: "1.0", title: "Immutable Audit Trail & Keystroke Change Logging", description: "Permanent, non-deletable log of all data modifications, financial adjustments, and approvals", priceETB: 10000 },
  { itemNo: "1.3.4", subtotalCategory: "1.0", title: "Multi-Channel Notification & Exception Alert Engine", description: "In-app notifications, email alerts, SMS gateways, and Telegram bot emergency dispatches", priceETB: 10000 },
  { itemNo: "1.3.5", subtotalCategory: "1.0", title: "Biometric Hardware Middleware & ADMS Cloud API Bridge", description: "Direct TCP/IP protocol bridge connecting physical turnstiles with the attendance database", priceETB: 20000 },
  { itemNo: "1.3.6", subtotalCategory: "1.0", title: "Secure File & Technical Specification Document Vault", description: "Encrypted file storage for contracts, QC certificates, photos, and customer artwork proofs", priceETB: 15000 },

  { itemNo: "2.1.1", subtotalCategory: "2.0", title: "Enterprise Organizational Tree & Entity Mapping", description: "Hierarchical mapping: Company → Plant → Department → Sub-unit / Shift", priceETB: 10000 },
  { itemNo: "2.1.2", subtotalCategory: "2.0", title: "Job Positions, Pay Grades & Cost Center Directory", description: "Formal job descriptions, grade ladders, and departmental cost center allocations", priceETB: 7000 },
  { itemNo: "2.1.3", subtotalCategory: "2.0", title: "Headcount Quotas & Vacancy Tracking Dashboard", description: "Reporting hierarchies, approved vs. filled headcount variance, and requisition tracking", priceETB: 5000 },
  { itemNo: "2.2.1", subtotalCategory: "2.0", title: "Comprehensive Employee Master Profile Vault", description: "Biographical data, contact details, contract type, bank details, TIN, pension, and kin info", priceETB: 18000 },
  { itemNo: "2.2.2", subtotalCategory: "2.0", title: "Standardized 12 Employee Lifecycle Actions Workflow", description: "Hire, re-hire, transfer, promotion, salary revision, disciplinary action, leave, and exit flows", priceETB: 20000 },
  { itemNo: "2.3.1", subtotalCategory: "2.0", title: "Departmental Personnel Requisition Approval Chain", description: "Department request → HR verification → Management authorization pipeline", priceETB: 12000 },
  { itemNo: "2.3.2", subtotalCategory: "2.0", title: "Candidate Recruitment Pipeline & Onboarding Suite", description: "Applicant tracking, interview scoring, automated offer letters, and employee onboarding", priceETB: 16000 },
  { itemNo: "2.4.1", subtotalCategory: "2.0", title: "5-Metric Performance Appraisal Matrix", description: "Job competency, quality, productivity, attendance, safety adherence, and initiative scoring", priceETB: 13000 },
  { itemNo: "2.4.2", subtotalCategory: "2.0", title: "Probation Evaluation & Performance Improvement Plans", description: "Probationary period assessments, annual appraisals, and structured PIP tracking", priceETB: 12000 },
  { itemNo: "2.5.1", subtotalCategory: "2.0", title: "Training Needs Assessment & Program Catalog", description: "Internal/external training scheduling, attendance tracking, and certification archives", priceETB: 10000 },
  { itemNo: "2.5.2", subtotalCategory: "2.0", title: "Plant Floor Operational Skills Matrix", description: "Extrusion, printing, lamination, slitting, bag-making, and occupational safety skills", priceETB: 12000 },

  { itemNo: "3.1.1", subtotalCategory: "3.0", title: "Rotational Shift Scheduling & Holiday Engine", description: "Multi-shift plant scheduling, shift swaps, weekend rosters, and statutory holiday calendar", priceETB: 14000 },
  { itemNo: "3.1.2", subtotalCategory: "3.0", title: "Biometric Timecard Generation & Anomaly Detection", description: "Actual hours worked, late arrival penalties, early departure, and unexcused absence calculations", priceETB: 18000 },
  { itemNo: "3.2.1", subtotalCategory: "3.0", title: "Overtime Pre-Authorization Workflow", description: "Department need → Plant manager → HR review → General Manager executive sign-off", priceETB: 10000 },
  { itemNo: "3.2.2", subtotalCategory: "3.0", title: "4-Tier Overtime Computation Engine", description: "Standard, night shift, weekend rest day, and public holiday multiplier linked to biometric data", priceETB: 14000 },
  { itemNo: "3.3.1", subtotalCategory: "3.0", title: "Multi-Category Leave Requisition System", description: "Annual, sick, maternity, paternity, bereavement, exam, and unpaid leave applications", priceETB: 13000 },
  { itemNo: "3.3.2", subtotalCategory: "3.0", title: "Automated Leave Accrual & Payroll Deduction Bridge", description: "Leave balance tracking, year-end carry-over limits, and automatic deductions for unpaid days", priceETB: 16000 },

  { itemNo: "4.1.1", subtotalCategory: "4.0", title: "Chart of Accounts Configuration & Real-Time GL Posting", description: "Custom multi-tier Chart of Accounts, real-time posting engine, and sub-ledger synchronization", priceETB: 35000 },
  { itemNo: "4.1.2", subtotalCategory: "4.0", title: "Dynamic Financial Statements & Trial Balance Generator", description: "Real-time Balance Sheet, Profit & Loss Statement, and Trial Balance with drill-down", priceETB: 30000 },
  { itemNo: "4.2.1", subtotalCategory: "4.0", title: "Automated Sales Invoicing & 15% VAT Splitting Engine", description: "Dispatches trigger formal sales invoices, accounts receivable posting, and 15% VAT allocation", priceETB: 25000 },
  { itemNo: "4.2.2", subtotalCategory: "4.0", title: "Automated 3-Way Purchase Matching Engine", description: "Purchase Order + Goods Received Note (GRN) + Vendor Invoice automated matching barrier", priceETB: 30000 },
  { itemNo: "4.3.1", subtotalCategory: "4.0", title: "Ethiopian 7-Bracket Income Tax & Pension Engine", description: "Progressive personal income tax (0%–35%), 7% employee pension, and 11% employer contribution", priceETB: 24000 },
  { itemNo: "4.3.2", subtotalCategory: "4.0", title: "Automated Payroll-to-GL Double-Entry Bridge", description: "Debits salary expenses, credits withholding tax and pension liabilities, and routes net pay", priceETB: 24000 },
  { itemNo: "4.4.1", subtotalCategory: "4.0", title: "Multi-Bank Account Management & Payment Vouchers", description: "Sub-ledgers for CBE, Dashen, Awash, Hibret; automated digital check and transfer vouchers", priceETB: 28000 },
  { itemNo: "4.4.2", subtotalCategory: "4.0", title: "Electronic Bank Statement Ingestion (MT940/CSV/API)", description: "Automated 4-point statement reconciliation (amount, value date, reference, vendor)", priceETB: 22000 },
  { itemNo: "4.4.3", subtotalCategory: "4.0", title: "Bank Reconciliation Clearing & Adjustment Journals", description: "Clears transit bridge accounts to primary bank accounts with automatic FX adjustment entries", priceETB: 12000 },

  { itemNo: "5.1.1", subtotalCategory: "5.0", title: "Commercial Order to Production Dispatch Integration", description: "Converts sales orders into scheduled production work orders, allocating machine capacity", priceETB: 18000 },
  { itemNo: "5.1.2", subtotalCategory: "5.0", title: "Flexographic Prepress & Cylinder/Plate Preparation", description: "Intelligent order routing: reorders bypass prepress; new designs trigger photopolymer plates", priceETB: 24000 },
  { itemNo: "5.2.1", subtotalCategory: "5.0", title: "Raw Material Bill of Materials (BOM) Formulation Engine", description: "Dynamic calculation of resin blends, masterbatch ratios, printing inks, and solvents", priceETB: 22000 },
  { itemNo: "5.2.2", subtotalCategory: "5.0", title: "Work-in-Progress (WIP) Valuation Sub-ledger", description: "Capitalizes issued raw materials, machine hours, and direct labor into WIP valuation", priceETB: 26000 },
  { itemNo: "5.3.1", subtotalCategory: "5.0", title: "Shop-Floor Sequencing & 2-Tier Material Requisitions", description: "Production Manager → Commercial clearance material dispatch approval flow", priceETB: 20000 },
  { itemNo: "5.3.2", subtotalCategory: "5.0", title: "Packaging Material Consumption & Operator Dispatch", description: "Granular logging of film rolls, inks, solvents, core weights, and operator machine shifts", priceETB: 18000 },
  { itemNo: "5.4.1", subtotalCategory: "5.0", title: "Finished Goods Batch Handover to FG-01 Warehouse", description: "Batch completion logging, formal warehouse acceptance, and inventory ledger updating", priceETB: 22000 },

  { itemNo: "6.1.1", subtotalCategory: "6.0", title: "5-Stage Quality Gate Protocol Implementation", description: "Receiving dock, pre-extrusion, in-process sampling, line clearance, and pre-dispatch gates", priceETB: 25000 },
  { itemNo: "6.1.2", subtotalCategory: "6.0", title: "Emergency Machine-Stop & Production Halt Authorization", description: "Digital authority for QC inspectors to halt running equipment upon detecting severe defects", priceETB: 17000 },
  { itemNo: "6.2.1", subtotalCategory: "6.0", title: "Centralized Non-Conformance Reporting (NCR) Engine", description: "Cross-departmental NCR ticket creation across Production, HR, Procurement, and Sales", priceETB: 18000 },
  { itemNo: "6.2.2", subtotalCategory: "6.0", title: "Corrective & Preventive Action (CAPA) Lifecycle Engine", description: "5-Why root cause analysis, action item delegation, verification, and managerial closure", priceETB: 17000 },
  { itemNo: "6.3.1", subtotalCategory: "6.0", title: "Backward Batch & Roll Traceability Engine", description: "Traces dispatched product rolls back to manufacturing date, operators, machine, and resin lot", priceETB: 20000 },
  { itemNo: "6.3.2", subtotalCategory: "6.0", title: "Customer Quality Claims & Mandatory Investigation", description: "Logs customer claims with digital photo evidence, issuing mandatory investigation tickets", priceETB: 16000 },
  { itemNo: "6.3.3", subtotalCategory: "6.0", title: "Vendor Quality Rating & Return-to-Vendor (RTV) Debit Notes", description: "Quality rating scorecards based on lab inspections and automated RTV debit notes", priceETB: 16000 },
  { itemNo: "6.4.1", subtotalCategory: "6.0", title: "ISO 9001 & ISO 14001 Internal Audit Management Suite", description: "Internal audit scheduling, factory environmental variance logging, and SOP repository", priceETB: 24000 },
  { itemNo: "6.4.2", subtotalCategory: "6.0", title: "Defect-Driven Training Requisitions to HR Module", description: "Automated alerts to HR when specific shifts display repetitive manufacturing defects", priceETB: 22000 },

  { itemNo: "7.1.1", subtotalCategory: "7.0", title: "Order-to-Cash Technical Specification Capture", description: "Captures film layers, GSM, repeat width, Pantone spot colors, print artwork, and MOQ", priceETB: 20000 },
  { itemNo: "7.1.2", subtotalCategory: "7.0", title: "Procure-to-Pay Vendor Performance Directory", description: "Vendor registry for resin, inks, and parts with TIN, payment terms, and price histories", priceETB: 18000 },
  { itemNo: "7.2.1", subtotalCategory: "7.0", title: "4-Tier Storage Topology & Location Node Engine", description: "RM-01 (Raw), PM-01 (Packaging), FG-01 (Finished), SCR-01 (Scrap & Regrind Node)", priceETB: 22000 },
  { itemNo: "7.2.2", subtotalCategory: "7.0", title: "FIFO/FEFO Dispatch & Roll Lot Tracking Controls", description: "Safety stock warnings, reorder points, lot tracking, and solvent expiration alerts", priceETB: 20000 },
  { itemNo: "7.3.1", subtotalCategory: "7.0", title: "Fleet Management, Vehicle Logs & Fuel Quota Engine", description: "Vehicle registration, driver records, mission trip passes, and fuel coupon tracking", priceETB: 16000 },
  { itemNo: "7.3.2", subtotalCategory: "7.0", title: "Physical Factory Gate Passes & Visitor Management", description: "Digital gate passes for raw materials, finished packaging goods, and visitor registry", priceETB: 14000 },

  { itemNo: "8.1.1", subtotalCategory: "8.0", title: "Centralized Executive Approval & Sign-Off Hub", description: "Single-window review and approval for hiring, promotions, overtime, and large POs", priceETB: 28000 },
  { itemNo: "8.1.2", subtotalCategory: "8.0", title: "Real-Time Strategic Liquidity & Margin Dashboard", description: "Live multi-bank liquidity, product gross margins, and departmental OPEX vs. budget", priceETB: 26000 },
  { itemNo: "8.2.1", subtotalCategory: "8.0", title: "Autonomous Exception Alert Engine & Critical Thresholds", description: "Instant alerts for major machine breakdowns, scrap surges, or cash reserve threshold breaches", priceETB: 24000 },
  { itemNo: "8.2.2", subtotalCategory: "8.0", title: "Executive Board Document Vault & Company Broadcast Suite", description: "Encrypted confidential board repository and direct broadcast to factory information displays", priceETB: 27000 },

  { itemNo: "9.1.1", subtotalCategory: "9.0", title: "Comprehensive Quality Assurance, Integration & Security Testing", description: "End-to-end integration testing, penetration testing, load testing, and security audit", priceETB: 50000 },
  { itemNo: "9.1.2", subtotalCategory: "9.0", title: "Legacy Data Extraction, Cleaning & Database Migration", description: "Extracting, cleansing, and validating legacy Excel inventories, customer records, and employee data", priceETB: 45000 },
  { itemNo: "9.2.1", subtotalCategory: "9.0", title: "Departmental Role-Specific Staff Training Program", description: "Intensive hands-on training for management, finance, storekeepers, QC, and operators", priceETB: 58933.04 },
  { itemNo: "9.2.2", subtotalCategory: "9.0", title: "Production Deployment, Cutover & 1-Year Warranty", description: "Final cutover execution, go-live assistance, and 1-year complimentary maintenance SLA", priceETB: 40000 }
];

export const ADVANCE_BREAKDOWN = [
  {
    item: "High-Performance Workstation Hardware",
    costETB: 150000.00,
    justification: "Purchased directly in the legal name of Flexible Packaging Manufacturing PLC as a secured fixed asset for ERP engineering."
  },
  {
    item: "Ergonomic Engineering Office Equipment",
    costETB: 60000.00,
    justification: "Purchased in the client's corporate name; fully inventoried under plant asset records."
  },
  {
    item: "6-7 Months Engineering Living & Transport Stipend",
    costETB: 180000.00,
    justification: "Subsistence allowance for full-time engineering founders and on-site staff during the 7-month development lifecycle."
  },
  {
    item: "Software Tooling, Subscriptions & Domain Setup",
    costETB: 35000.00,
    justification: "DevOps infrastructure, database licenses, SSL certificates, and cloud staging server environments."
  },
  {
    item: "On-Site Factory Transport & Communication Logistics",
    costETB: 49006.90,
    justification: "Daily transit between central engineering base and the Akaki Kality manufacturing plant."
  }
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    phase: "Phase 1: Planning & System Design",
    code: "M-01",
    title: "Akaki Kality On-Site Process Study & Requirements Specification",
    durationWeeks: 3,
    startMonth: "Month 1",
    endMonth: "Month 1",
    deliverable: "Finalized Software Requirements Specification (SRS) & Plant Process Map",
    department: "Executive Management & Engineering"
  },
  {
    phase: "Phase 1: Planning & System Design",
    code: "M-02",
    title: "High-Fidelity Figma Prototyping & Departmental Sign-off",
    durationWeeks: 3,
    startMonth: "Month 1",
    endMonth: "Month 2",
    deliverable: "Interactive UI/UX Prototypes for All 6 Departments",
    department: "UI/UX & Department Heads"
  },
  {
    phase: "Phase 1: Planning & System Design",
    code: "M-03",
    title: "Database Schema Architecture & Relational Security Framework",
    durationWeeks: 2,
    startMonth: "Month 2",
    endMonth: "Month 2",
    deliverable: "Normalized PostgreSQL Architecture & RBAC Security Matrix",
    department: "Database & Security Engineering"
  },

  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-04",
    title: "Core Middleware, Dual-Calendar Engine & Audit Trail",
    durationWeeks: 3,
    startMonth: "Month 2",
    endMonth: "Month 3",
    deliverable: "Ethiopian/Gregorian Calendar Engine & Immutable Event Logger",
    department: "Core Engineering"
  },
  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-05",
    title: "Biometric Hardware ADMS API Integration & Attendance Engine",
    durationWeeks: 3,
    startMonth: "Month 3",
    endMonth: "Month 3",
    deliverable: "Automated Turnstile Hardware Sync & Daily Attendance Engine",
    department: "HR & Middleware Engineering"
  },
  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-06",
    title: "Human Resources, 12 Actions & 4-Tier Overtime Engine",
    durationWeeks: 4,
    startMonth: "Month 3",
    endMonth: "Month 4",
    deliverable: "Comprehensive HR Digital Vault & Overtime Computation Pipeline",
    department: "HR & Payroll"
  },
  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-07",
    title: "General Ledger, Ethiopian Tax Engine & Double-Entry Bridge",
    durationWeeks: 4,
    startMonth: "Month 4",
    endMonth: "Month 5",
    deliverable: "Automated Real-Time GL, 15% VAT & 7-Bracket Personal Tax Engine",
    department: "Finance & Accounting"
  },
  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-08",
    title: "3-Way Purchase Matching & Multi-Bank Reconciliation",
    durationWeeks: 3,
    startMonth: "Month 4",
    endMonth: "Month 5",
    deliverable: "PO-GRN-Invoice 3-Way Match & Electronic Bank Statement Reconciliation",
    department: "Finance & Commercial"
  },
  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-09",
    title: "Commercial Order-to-Cash & 4-Tier Warehouse Topology",
    durationWeeks: 4,
    startMonth: "Month 5",
    endMonth: "Month 5",
    deliverable: "Packaging Specification Engine & RM-01/PM-01/FG-01/SCR-01 Structure",
    department: "Commercial & Stores"
  },
  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-10",
    title: "Production BOM Formulation, Flexo Prepress & Machine Scheduling",
    durationWeeks: 4,
    startMonth: "Month 5",
    endMonth: "Month 6",
    deliverable: "Dynamic Resin Formulation, Plate Prep Logic & Shop-Floor Dispatch",
    department: "Production & Technical"
  },
  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-11",
    title: "5-Stage Quality Gates, NCR/CAPA & Backward Traceability",
    durationWeeks: 3,
    startMonth: "Month 5",
    endMonth: "Month 6",
    deliverable: "In-Process Quality Halting System & 10-Minute Batch Traceability",
    department: "Quality Control & Management Rep"
  },
  {
    phase: "Phase 2: Core Engineering & Integration",
    code: "M-12",
    title: "Executive General Manager Oversight Dashboard & Alert Engine",
    durationWeeks: 2,
    startMonth: "Month 6",
    endMonth: "Month 6",
    deliverable: "Consolidated Executive Liquidity, Approvals Hub & Exception Engine",
    department: "General Manager Office"
  },

  {
    phase: "Phase 3: Testing & Deployment",
    code: "M-13",
    title: "End-to-End System QA, Penetration Testing & User Acceptance (UAT)",
    durationWeeks: 3,
    startMonth: "Month 6",
    endMonth: "Month 7",
    deliverable: "Formal User Acceptance Testing Sign-Off & Security Audit Certificate",
    department: "QA & All Department Heads"
  },
  {
    phase: "Phase 3: Testing & Deployment",
    code: "M-14",
    title: "Legacy Data Cleansing, Database Migration & Final Parallel Run",
    durationWeeks: 2,
    startMonth: "Month 7",
    endMonth: "Month 7",
    deliverable: "Migrated Verified Inventories, Customer Ledgers & Parallel Run Sign-off",
    department: "Finance, Stores & Data Team"
  },
  {
    phase: "Phase 3: Testing & Deployment",
    code: "M-15",
    title: "All-Staff Hands-On Training, Production Go-Live & 1-Year SLA",
    durationWeeks: 2,
    startMonth: "Month 7",
    endMonth: "Month 7",
    deliverable: "Full Production Cutover, Operator User Manuals & SLA Activation",
    department: "Full Enterprise"
  }
];

export const CLIENT_REFERENCES: ClientReference[] = [
  {
    name: "Biniyam & Friends Building Contractor (BC-1)",
    category: "Grade 1 Building Construction Enterprise",
    signatory: "Biniyam Girmay",
    role: "General Manager",
    value: "140M+ ETB Projects",
    date: "July 2024",
    summary: "Complete custom construction enterprise management system engineering covering project budgeting, multi-site warehouse inventory tracking, machinery fleet logs, and subcontractor payment certificate reconciliation.",
    keyOutcomes: [
      "Eliminated untracked cement and rebar wastage across 4 active construction sites.",
      "Accelerated subcontractor payment validation from 2 weeks to under 2 hours via 3-way matching.",
      "Official certificate of satisfactory performance and technical endorsement provided on company letterhead."
    ]
  },
  {
    name: "Solomon Hailu General Contractor (GC-3)",
    category: "Grade 3 General Contractor",
    signatory: "Solomon Hailu",
    role: "Managing Director",
    value: "Infrastructure Works",
    date: "November 2024",
    summary: "Integrated materials procurement, heavy machinery rental and maintenance scheduling, biometric labor attendance, and daily project progress reporting system.",
    keyOutcomes: [
      "Centralized fuel voucher and heavy equipment maintenance logs, preventing unauthorized fuel usage.",
      "Biometric mobile attendance eliminated phantom labor costs on remote project sites.",
      "Provided official signed and stamped letter of excellence recognizing Nexloop's timely delivery."
    ]
  },
  {
    name: "M.K.S General Business PLC",
    category: "Commercial Import, Distribution & Logistics Enterprise",
    signatory: "Mekonnen K. Seyoum",
    role: "Chief Executive Officer",
    value: "Multi-Branch Commerce",
    date: "March 2025",
    summary: "Custom multi-branch retail distribution and inventory management system with automated point-of-sale (POS) integration, credit customer tracking, and central warehouse replenishment alerts.",
    keyOutcomes: [
      "Multi-store inventory synchronization with automated reorder alerts for high-turnover items.",
      "Automated VAT reporting and Ministry of Revenues compliance module.",
      "Official reference letter confirming 100% operational uptime and zero data discrepancy."
    ]
  }
];

export const GENERAL_PORTFOLIO = [
  { no: "01", name: "Biniyam & Friends Building Contractor", type: "Custom Construction ERP & Materials Ledger", url: "Verified Reference (BC-1)" },
  { no: "02", name: "Solomon Hailu General Contractor", type: "Fleet, Labor & Procurement Management System", url: "Verified Reference (GC-3)" },
  { no: "03", name: "M.K.S General Business PLC", type: "Multi-Branch Retail Distribution & Inventory System", url: "Verified Reference (Commerce)" },
  { no: "04", name: "Alpha Steel & Metal Fabrication", type: "Raw Sheet Scrap Logging & Production Scheduling", url: "Industrial Manufacturing" },
  { no: "05", name: "Addis Cold Chain Logistics", type: "Temperature-Controlled Fleet Tracking & Fuel Audit", url: "Logistics & Transport" },
  { no: "06", name: "Apex Agro-Processing P.L.C.", type: "Batch Traceability & Outgrower Raw Material Intake", url: "Agro-Processing & Packaging" }
];
