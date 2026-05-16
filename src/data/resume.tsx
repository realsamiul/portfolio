import {
  ArrowUpIcon,
  BarChart3Icon,
  BrainCircuitIcon,
  CloudRainIcon,
  HomeIcon,
  LineChartIcon,
  NetworkIcon,
  RadarIcon,
  SparklesIcon,
  TrophyIcon,
} from "lucide-react";
import { Icons } from "@/components/icons";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Python } from "@/components/ui/svgs/python";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";

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
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,
        navbar: false,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Email",
        url: "mailto:realskarim@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  skills: [
    { name: "Cricsheet JSON", icon: BarChart3Icon },
    { name: "Python", icon: Python },
    { name: "Temporal ML", icon: BrainCircuitIcon },
    { name: "Expected Runs", icon: LineChartIcon },
    { name: "Win Probability", icon: TrophyIcon },
    { name: "Weather Join", icon: CloudRainIcon },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "TypeScript", icon: Typescript },
    { name: "Parquet", icon: Postgresql },
    { name: "Pipeline", icon: Docker },
  ],

  work: [
    {
      company: "Ingest",
      href: "#",
      badges: [],
      location: "Step 01–02",
      title: "906 matches parsed into 578,466 delivery states",
      logoUrl: "",
      start: "01",
      end: "02",
      description:
        "Raw Cricsheet JSON is unzipped, registered, validated, and transformed into ball-level state tables. Every later metric starts from delivery-level facts, not scorecard summaries.",
    },
    {
      company: "Features",
      href: "#",
      badges: [],
      location: "Step 03–05",
      title: "Leakage-safe rolling features and situation grids",
      logoUrl: "",
      start: "03",
      end: "05",
      description:
        "Rolling features are shifted before calculation, so the model never sees the current ball. Situation grids provide match context such as phase, innings, venue, chase pressure, and game state.",
    },
    {
      company: "Models",
      href: "#",
      badges: [],
      location: "Step 06",
      title: "Expected runs, wicket probability, and win probability",
      logoUrl: "",
      start: "06",
      end: "06",
      description:
        "CricSight trains three model families. The win probability model is temporally tested on post-2019 matches and reaches a Brier score of 0.1389.",
    },
    {
      company: "Weather",
      href: "#",
      badges: [],
      location: "Step 08",
      title: "Open-Meteo match conditions joined to venue data",
      logoUrl: "",
      start: "08",
      end: "08",
      description:
        "Weather is fetched and joined for 780 mapped matches, enabling dew and venue-condition analysis rather than relying only on score and over context.",
    },
    {
      company: "Insights",
      href: "#",
      badges: [],
      location: "Step 09–10",
      title: "257 ranked insights generated across four families",
      logoUrl: "",
      start: "09",
      end: "10",
      description:
        "The engine ranks and deduplicates insight candidates into English sentences that are specific, surprising, and traceable to source data.",
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
      dates: "cricWAR",
      active: true,
      description:
        "The current WAR pass ranks Shakib Al Hasan number one at 244.95 wins above replacement, making him the clearest long-run value signal in the Bangladesh-focused dataset.",
      technologies: ["WAR", "Bangladesh", "Player Value", "Traceable"],
      links: [],
      image: "/players/shakib.jpg",
      video: "",
    },
    {
      title: "Win probability is already presentation-grade",
      href: "#",
      dates: "Model quality",
      active: true,
      description:
        "The temporal win-probability model tests at a 0.1389 Brier score on post-2019 matches, strong enough to power match-turning-point stories instead of generic score summaries.",
      technologies: ["Win Probability", "Temporal Split", "Brier 0.1389"],
      links: [],
      image: "/insights/win-probability.jpg",
      video: "",
    },
    {
      title: "Dew is not just narrative — it is measurable",
      href: "#",
      dates: "Weather intelligence",
      active: true,
      description:
        "Weather joins are available for 780 mapped matches, with a dew proxy match score of 0.71. That gives CricSight a defensible path to conditions-aware bowling and chase insights.",
      technologies: ["Weather", "Dew", "Venue", "Open-Meteo"],
      links: [],
      image: "/insights/dew.jpg",
      video: "",
    },
    {
      title: "Powerplay strike rate is a context, not a stat",
      href: "#",
      dates: "League-rank insight",
      active: true,
      description:
        "CricSight treats powerplay scoring as a situational context, allowing a batter to be ranked only against comparable innings states rather than across noisy aggregate scorecards.",
      technologies: ["Powerplay", "Strike Rate", "Contextual Rank"],
      links: [],
      image: "/insights/powerplay.jpg",
      video: "",
    },
    {
      title: "Death-over economy can expose hidden matchup risk",
      href: "#",
      dates: "Bowling insight",
      active: true,
      description:
        "The ranking layer can surface death-over economy outliers by phase and opposition context, turning late-innings bowling into a tactical recommendation rather than a table of averages.",
      technologies: ["Death Overs", "Economy", "Bowling", "Tactical"],
      links: [],
      image: "/insights/death-overs.jpg",
      video: "",
    },
    {
      title: "The next leap is delivery-level action value",
      href: "#",
      dates: "VAEP roadmap",
      active: true,
      description:
        "VAEP will score every delivery by how much it changes the chance of a boundary or wicket in the next six legal balls, creating a true action-value layer for cricket.",
      technologies: ["VAEP", "Delivery Value", "Next 6 Balls"],
      links: [],
      image: "/insights/vaep.jpg",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Finalize VAEP repair",
      dates: "Next",
      location: "Step 12",
      description:
        "Fix innings_no mapping, complete the temporal training split, and save delivery-level value scores for all 578,466 rows.",
      image: "",
      links: [],
    },
    {
      title: "Add bilingual narrative",
      dates: "Next",
      location: "Step 13",
      description:
        "Generate locked English and Bangla versions of top insights using only validated facts from the ranked insight table.",
      image: "",
      links: [],
    },
    {
      title: "Add bootstrap uncertainty",
      dates: "Next",
      location: "cricWAR",
      description:
        "Add 95% confidence intervals so player value cards communicate both ranking and uncertainty.",
      image: "",
      links: [],
    },
    {
      title: "Expand datasets",
      dates: "Next",
      location: "IPL, T20 WC, BPL, Tests",
      description:
        "Bring in IPL, Men’s T20 World Cup, BPL, and Test data so CricSight can compare Bangladesh players across formats and conditions.",
      image: "",
      links: [],
    },
  ],
} as const;