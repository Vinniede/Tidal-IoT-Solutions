import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Blocks,
  Building2,
  CarFront,
  Globe2,
  KeyRound,
  LockKeyhole,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react";

export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  subItems?: NavSubItem[];
}

export interface Solution {
  title: string;
  description: string;
  icon: LucideIcon;
  points: string[];
}

export interface Industry {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  category: string;
  title: string;
  description: string;
  impact: string;
}

export interface Insight {
  title: string;
  description: string;
  tag: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Solutions",
    href: "/solutions",
    subItems: [
      { label: "Intelligent Telematics", href: "/solutions/intelligent-telematics" },
      { label: "Secure Communications", href: "/solutions/secure-communications" },
      { label: "Resilient Networks", href: "/solutions/resilient-networks" },
      { label: "Integrated Cybersecurity", href: "/solutions/integrated-cybersecurity" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    subItems: [
      { label: "Logistics & Transport", href: "/industries/logistics-transport" },
      { label: "Government", href: "/industries/government" },
      { label: "Banking & Financial Services", href: "/industries/banking-financial-services" },
      { label: "Utilities", href: "/industries/utilities" },
      { label: "Security Companies", href: "/industries/security-companies" },
      { label: "SMEs", href: "/industries/smes" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    subItems: [
      { label: "Blog", href: "/insights/blog" },
      { label: "Case Studies", href: "/insights/case-studies" },
      { label: "Resources", href: "/insights/resources" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const metrics = [
  { value: "24/7", label: "critical monitoring" },
  { value: "99.98%", label: "network reliability" },
  { value: "15+", label: "regional deployments" },
];

export const solutions: Solution[] = [
  {
    title: "Intelligent Telematics",
    description:
      "Connected fleet visibility, predictive route intelligence, and resilient asset tracking across complex operations.",
    icon: CarFront,
    points: ["Live vehicle telemetry", "Geofencing intelligence", "Operational analytics"],
  },
  {
    title: "Secure Communications",
    description:
      "Private, encrypted channels for mission critical voice, data, and control traffic across distributed teams.",
    icon: RadioTower,
    points: ["Encrypted connectivity", "Field-ready mobility", "Low-latency communications"],
  },
  {
    title: "Resilient Networks",
    description:
      "High-availability infrastructure engineered for continuity across urban, remote, and hybrid environments.",
    icon: Globe2,
    points: ["Redundant architecture", "Edge resilience", "Scalable deployments"],
  },
  {
    title: "Integrated Cybersecurity",
    description:
      "Zero-trust protection, threat monitoring, and governance aligned with enterprise risk requirements.",
    icon: ShieldCheck,
    points: ["Threat detection", "Policy controls", "Security operations support"],
  },
];

export const industries: Industry[] = [
  { title: "Logistics & Transport", description: "Reliable visibility for fleet, cargo, and distribution operations.", icon: Blocks },
  { title: "Government", description: "Secure infrastructure designed for resilience and public-sector accountability.", icon: Building2 },
  { title: "Banking & Finance", description: "Protected communications and dependable connectivity for branch networks.", icon: LockKeyhole },
  { title: "Utilities", description: "Field operations that need resilient monitoring and robust uptime.", icon: BarChart3 },
  { title: "Security Companies", description: "Always-on systems for remote operations and rapid response coordination.", icon: KeyRound },
  { title: "SMEs", description: "Practical modernization that scales from first deployment to growth.", icon: Sparkles },
];

export const processSteps: ProcessStepData[] = [
  {
    number: "01",
    title: "Assess",
    description: "We map your operating environment, risks, and long-term objectives before designing anything.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team builds an intelligent architecture for performance, security, and operational clarity.",
  },
  {
    number: "03",
    title: "Deploy",
    description: "We roll out resilient systems with clear governance, documentation, and measurable outcomes.",
  },
  {
    number: "04",
    title: "Optimize",
    description: "Continuous tuning and support keep infrastructure dependable as demands evolve.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    category: "Transport resilience",
    title: "Connected logistics network for a regional distributor",
    description: "Unified tracking, predictive maintenance, and secure communications across a nationwide fleet footprint.",
    impact: "Reduced downtime by 33% and improved route visibility across all branches.",
  },
  {
    category: "Critical communications",
    title: "Protected field operations for a public utility",
    description: "Built a resilient communication layer that keeps technicians online during intermittent outages.",
    impact: "Improved operational continuity and reduced service interruption delays.",
  },
  {
    category: "Security modernization",
    title: "Enterprise-grade monitoring for a growing financial network",
    description: "Integrated secure connectivity and cyber controls without disrupting legacy workflows.",
    impact: "Stabilized branch performance while strengthening security posture.",
  },
];

export const insights: Insight[] = [
  {
    title: "Why intelligent infrastructure matters in East Africa",
    description: "A practical look at how connected systems improve service quality and business continuity.",
    tag: "Perspective",
  },
  {
    title: "Designing resilient networks for hybrid operations",
    description: "Key principles behind secure deployments that stay reliable under pressure.",
    tag: "Resource",
  },
  {
    title: "The shift from connectivity to operational intelligence",
    description: "How organizations are turning data into dependable business outcomes.",
    tag: "Blog",
  },
];

export const partnerNames = ["Safaricom", "Kenya Power", "Airtel", "Nairobi Metro", "M-PESA", "Sokowatch"];
export const featurePoints = [
  {
    title: "Enterprise-grade trust",
    description: "Our systems are engineered with governance, observability, and accountability built in.",
    icon: ShieldCheck,
  },
  {
    title: "Design that scales",
    description: "Every deployment is crafted to support future growth without reworking the foundation.",
    icon: Wifi,
  },
  {
    title: "Outcome-led delivery",
    description: "We align technology decisions with business value, operational resilience, and measurable impact.",
    icon: Sparkles,
  },
  {
    title: "Dedicated support",
    description: "Our team stays engaged through launch and beyond with proactive operations support.",
    icon: Building2,
  },
];

export const technologies = [
  {
    title: "IoT & telemetry",
    description: "Connected asset and fleet monitoring with actionable visibility across distributed operations.",
  },
  {
    title: "Resilient networking",
    description: "High-availability architecture designed to keep infrastructure online in any environment.",
  },
  {
    title: "Cybersecurity",
    description: "Zero-trust controls and threat monitoring that protect both field systems and enterprise assets.",
  },
  {
    title: "Analytics & insights",
    description: "Operational intelligence that turns data into confident decisions and measurable outcomes.",
  },
];
