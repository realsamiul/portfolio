import {
  ArrowUpIcon,
  BarChart3Icon,
  BrainCircuitIcon,
  CloudRainIcon,
  HomeIcon,
  LineChartIcon,
  NetworkIcon,
  SparklesIcon,
  TrophyIcon,
  DatabaseIcon,
  FileCode2Icon,
  BinaryIcon,
  CpuIcon,
  ActivityIcon,
} from "lucide-react";
import { Icons } from "@/components/icons";

export const DATA = {
  name: "KALOPATHOR",
  initials: "KP",
  engine: "CricSight",
  url: "https://realsamiul.github.io/portfolio",
  location: "Bangladesh",
  locationLink: "https://www.google.com/maps/place/Bangladesh",
  description:
    "CricSight is a Bangladesh-first cricket intelligence engine from KALOPATHOR. It turns ball-by-ball cricket data into specific, surprising, evidence-backed insights.",
  summary:
    "CricSight converts Cricsheet ball-by-ball JSON into ranked English insights about cricket. The product thesis is simple: Freakonomics applied to cricket, delivered like a weather app. Not dashboards. Not raw stats. One sentence, one finding, one traceable number.",

  avatarUrl: "/cricsight-mark.png",

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/insights", icon: SparklesIcon, label: "Insights" },
    { href: "/architecture", icon: NetworkIcon, label: "Architecture" },
    { href: "#top", icon: ArrowUpIcon, label: "Back to top" },
  ],

  contact: {
    email: "realskarim@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/realsamiul/portfolio",
        icon: Icons.github,
        navbar: false,
      },
    },
  },

  skills: [
    { name: "Cricsheet JSON", icon: BinaryIcon },
    { name: "Python Pipeline", icon: FileCode2Icon },
    { name: "Temporal ML", icon: BrainCircuitIcon },
    { name: "Expected Runs", icon: LineChartIcon },
    { name: "Win Probability", icon: TrophyIcon },
    { name: "Weather Join", icon: CloudRainIcon },
    { name: "Next.js Framework", icon: CpuIcon },
    { name: "Parquet Layouts", icon: DatabaseIcon },
    { name: "cricWAR Engine", icon: ActivityIcon },
  ],

  work: [
    {
      company: "Ingestion Core",
      href: "#",
      badges: [],
      location: "Steps 00–02",
      title: "906 matches parsed into 578,466 delivery states",
      logoUrl: "",
      start: "00",
      end: "02",
      description:
        "Raw Cricsheet JSON layers are unzipped, registered, and validated against canonical player registries into ball-level state tables. Every metric originates from granular delivery facts, not abstract scorecards.",
    },
    {
      company: "Feature Grid",
      href: "#",
      badges: [],
      location: "Steps 03–05",
      title: "Leakage-safe rolling features and situation matrices",
      logoUrl: "",
      start: "03",
      end: "05",
      description:
        "Rolling parameters shift strictly before calculation loops to prevent data bleeding. Situation grids define acute match contexts—innings, venue proxies, chase vectors, and target-run pressure.",
    },
    {
      company: "Modeling Family",
      href: "#",
      badges: [],
      location: "Step 06",
      title: "Expected runs, wicket metrics, and win validation",
      logoUrl: "",
      start: "06",
      end: "06",
      description:
        "Trains three predictive layers. The live win-probability model is temporally structured and backtested on post-2019 chase horizons, demonstrating a robust Brier validation score of 0.1389.",
    },
    {
      company: "Weather Context",
      href: "#",
      badges: [],
      location: "Step 08",
      title: "Open-Meteo climate records joined to venue vectors",
      logoUrl: "",
      start: "08",
      end: "08",
      description:
        "Hourly environmental records are matched to 780 historically mapped coordinates, powering programmatic dew proxies and pitch performance assessments over simple over counts.",
    },
    {
      company: "Insight Generator",
      href: "#",
      badges: [],
      location: "Steps 09–10",
      title: "257 ranked intelligence components output to presentation layers",
      logoUrl: "",
      start: "09",
      end: "10",
      description:
        "The ranking and deduplication system condenses complex tabular trends into sharp, highly readable English declarations that remain auditable back to source tables.",
    },
  ],

  education: [
    {
      school: "Product thesis",
      href: "#",
      degree:
        "Bangladesh-first cricket intelligence, delivered like a weather app.",
      logoUrl: "",
      start: "01",
      end: "Now",
    },
    {
      school: "Fan promise",
      href: "#",
      degree:
        "Make a Bangladesh cricket fan say: I did not know that.",
      logoUrl: "",
      start: "02",
      end: "Always",
    },
    {
      school: "Data principle",
      href: "#",
      degree:
        "Every insight must be repeatable in one sentence and every number traceable to the data.",
      logoUrl: "",
      start: "03",
      end: "Invariant",
    },
  ],

  projects: [
    {
      title: "Shakib remains the all-format value anchor",
      href: "#",
      dates: "cricWAR Pass",
      active: true,
      description:
        "The current WAR execution identifies Shakib Al Hasan at #1 with 244.95 wins above replacement, making him the clearest value anchor in the data environment (with bowling WAR showing a discovery signal at 131.41 over batting at 113.54).",
      technologies: ["WAR Architecture", "Value Signal", "Historical Registry"],
      links: [],
      image: "/players/shakib.jpg",
      video: "",
    },
    {
      title: "Win probability matches presentation-grade tolerances",
      href: "#",
      dates: "Model Evaluation",
      active: true,
      description:
        "The temporal win-probability architecture validates at an elite 0.1389 Brier score against post-2019 test constraints, outperforming generic published scorecard indices.",
      technologies: ["Win Probability", "Brier 0.1389", "Temporal Backtest"],
      links: [],
      image: "/insights/win-probability.jpg",
      video: "",
    },
    {
      title: "Dew impact is structural, not a broadcast narrative",
      href: "#",
      dates: "Environmental Joins",
      active: true,
      description:
        "Open-Meteo joins across 780 mapped matches expose a dew proxy correspondence rating of 0.71, allowing conditions-aware predictive accuracy during second-innings chase anomalies.",
      technologies: ["Open-Meteo", "Dew Proxy", "Venue Coordinates"],
      links: [],
      image: "/insights/dew.jpg",
      video: "",
    },
    {
      title: "Powerplay scoring is a structural context, not a raw stat",
      href: "#",
      dates: "Situational Ranking",
      active: true,
      description:
        "CricSight decouples early match cycles into granular situational matrix coordinates, judging performance against historic pitch realities instead of basic scorecard averages.",
      technologies: ["Powerplay Context", "Matrix Extraction", "Normalized Metrics"],
      links: [],
      image: "/insights/powerplay.jpg",
      video: "",
    },
    {
      title: "Death-over metrics reveal latent matchup variance",
      href: "#",
      dates: "Tactical Layers",
      active: true,
      description:
        "Surfaces defensive economy outliers by phase and targeted resistance thresholds, changing late-innings analysis into definitive actionable insight vectors.",
      technologies: ["Matchup Extraction", "Death Overs", "Economy Analytics"],
      links: [],
      image: "/insights/death-overs.jpg",
      video: "",
    },
    {
      title: "The next phase: Delivery-level action value tracking",
      href: "#",
      dates: "VAEP Engine Roadmap",
      active: true,
      description:
        "Deploying VAEP algorithms to score every match event by its immediate statistical impact on wicket and boundary likelihood over the subsequent 6 legitimate deliveries.",
      technologies: ["VAEP Framework", "Action Value Tracking", "Predictive Horizons"],
      links: [],
      image: "/insights/vaep.jpg",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Finalize VAEP Core Integration",
      dates: "Phase 12",
      location: "GCP Cloud Core",
      description:
        "Correct innings_no tracking coordinates, finish dynamic training distributions, and dump detailed action values for all 578,466 observations.",
      image: "",
      links: [],
    },
    {
      title: "Bilingual Narrative Expansion",
      dates: "Phase 13",
      location: "Localization Engine",
      description:
        "Produce automated, locked English and Bangla presentation summaries built exclusively on top of the validated facts in the ranking dataset.",
      image: "",
      links: [],
    },
    {
      title: "Bootstrap Uncertainty Implementation",
      dates: "cricWAR Upgrade",
      location: "Statistical Engine",
      description:
        "Integrate 95% confidence intervals to value visualizations so player insights communicate statistical parity and sample boundaries clearly.",
      image: "",
      links: [],
    },
    {
      title: "Expand Format Horizons",
      dates: "Data Ingestion",
      location: "Cricsheet Ecosystem",
      description:
        "Ingest IPL, T20 World Cup, BPL, and Test constraints to contrast Bangladesh metrics against global format conditions.",
      image: "",
      links: [],
    },
  ],
} as const;