import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Mail, Award, FlaskConical, Menu } from "lucide-react";
import { Card, CardContent } from "./src/components/ui/card.jsx";
import { Button } from "./src/components/ui/button.jsx";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Technology", href: "#technology" },
  { label: "Reactor", href: "#reactor" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Team", href: "#team" },
  { label: "Funding", href: "#funding" },
  { label: "Contact", href: "#contact" },
];

const exactCopy = {
  heroTitle: "CO₂ and methane as feedstocks for fuels and carbon products",
  heroSubtitle: "Serving Customers at the Point-of-Use",
  intro:
    "MAAT Energy converts carbon-based feedstocks into hydrogen, carbon monoxide, and carbon materials, using microwave and plasma processes. The system accepts methane-rich feedstocks from biogas, landfill gas, and natural gas, as well as propane and ethane, producing carbon monoxide for industrial uses and carbons for construction and advanced materials as stand-alone solutions. Large-scale applications include producing intermediates for methanol, plastics, and sustainable aviation fuels. Designed as a modular platform with fast startup and the ability to run on intermittent electricity, MAAT upgrades low-value carbon into higher-value products at the point of demand, enabling a capital-efficient path to produce fuels, chemicals, and materials.",
  technology:
    "MAAT Energy is building a modular platform for distributed production of clean industrial molecules and carbon materials. Using methane pyrolysis and CO₂ reforming, the company converts methane and CO₂ into hydrogen, carbon monoxide, and valuable carbon products, including inputs from biogas, landfill gas, coal bed methane, natural gas, and natural gas liquids such as propane and butane. The platform is designed specifically for both pathways and can be tuned to produce different products depending on the feedstocks applied, allowing it to serve a wide range of industrial applications.",
  commercialization:
    "What makes MAAT compelling is that it combines deep technical innovation with practical commercialization. The company is designed to generate early revenue through applications such as industrial carbon monoxide and carbon materials for construction, while creating growth opportunities in methanol, sustainable aviation fuel, and advanced materials. The result is a capital-efficient platform business built on efficiency, distributed deployment, and multiple monetization pathways rather than subsidies or credits.",
  funding:
    "DOE supports scientific excellence and technological innovation through the investment of federal research funds in critical American priorities to build a strong national economy.",
  awards: "MAAT Energy Awards",
  reactorTitle: "Modern Conversion",
  reactorSubtitle: "Microwave Plasma Platform",
  partnersTitle: "Partnerships",
  partnersIntro: "MAAT Energy has received grants, strategic funding and support from:",
  partners: [
    "US Department of Energy (DOE)",
    "NGL Supply Terminals Company",
    "Massachusetts Institute of Technology (MIT)",
    "Industry Partners and Financial Investors",
  ],
  projects: ["Demonstration", "First-of-a-Kind", "Nth-of-a-Kind"],
  demonstrationTitle: "Industrial Demonstration Site",
  demonstrationSubtitle: "Lab-to-Field validation on a relevant oil & gas site",
  demonstrationBody: "Demonstrating commercial-scale operation for extended durations using real-world feedstocks.",
  demonstrationApplications: [
    {
      title: "Carbon Materials for Asphalt",
      text: "MAAT Energy Carbons improve the physical properties of asphalt while removing a burdensome step in the production process",
    },
    {
      title: "Carbon Monoxide for Metal Heating",
      text: "Low-cost carbon monoxide produced on-site for furnace atmospheres for metal treating applications",
    },
  ],
  team: [
    {
      name: "KC Tran | Co-Founder",
      role: "CEO",
      bio: "Leading innovator in CO2-to-methanol, carbon capture and use for transportation. Inventor, developing low-temperature plasma chemistry for energy storage and CO2 conversion. Built first industrial plant for e-methanol at CRI, Iceland.",
    },
    {
      name: "Dr. Leslie Bromberg | Co-Founder",
      role: "CTO",
      bio: "Leading physicist in plasma reforming technologies for energy and automotive industries. Inventor of more than 50 US patents and author of more than 150 publications and conference proceedings at MIT Plasma Science and Fusion Center.",
    },
    {
      name: "Dr. Jorj Owen | Co-Founder",
      role: "Director, Research & Development",
      bio: "Experienced experimental physicist in microwave plasma reactor development for carbon, hydrogen, and syngas production. Inventor, building prototypes and pilot plants for CO2 and methane reforming. Researched prior arts of plasma and microwave chemistries. Examiner for the US Patent and Trademark Office.",
    },
    {
      name: "Dr. Jonathan Whitlow | Co-Founder",
      role: "Principal Engineer",
      bio: "Experienced process engineer of chemical conversion, thermal management, and carbon separation systems. modeling techno-economics and life cycle analyses. Professor of Chemical Engineering, Florida Institute of Technology",
    },
  ],
  advisors: [
    "Dr. Jack Lewnard — Former Program Director ARPA-E Methane Pyrolysis",
    "Josh Bailey — Former trader in multi-commodity logistics and distribution in biofuels",
    "Howard Herzog — Co-founder Aspen Technologies; Senior Research Engineer MIT Energy Initiative",
  ],
  location: "Cambridge, MA, USA",
};

const heroImage =
  "https://lh3.googleusercontent.com/sitesv/APaQ0SRGbXHGzOl-5aqcX57uLfFoLd4wTHnBLAp7r_JdW1SZgG5dDnPo1A8_HD7XLLavK25H63nC7qGw386u8ytuNwmAOnuEaaSgXZD0B-YCyae5r-CpA08-oi_T-mC6PAZr4ZldHHP5Q51f0TyCHHsw8pOp96DxRAbc-yCB4_gTRh8TZTWh71RgokkP=w16383";

const backgroundTexture =
  "https://lh3.googleusercontent.com/sitesv/APaQ0ST65olKrux8-RT1KreiXQZB8KMeYgIaJ2KGBLxgSNrEUFs2uGORCRgyXTVwbqBTFHI4AzXxN8bTnm5OhwDqoSP0SIA10HGbM3ZEau54t3DEDQ7jcOePLGpZZWbOADbAnEmRQwRkPmJuCdR-6N51XtihGGpLw2NemPiMpv1x7RxvNjy_PPkrKltA2SnWjav_8QBlqD3THrUPPjKtbS_oNQ1XjoOsuOWzz0g9Zvo=w1280";

const reactorImage =
  "https://lh3.googleusercontent.com/sitesv/APaQ0SSzpE-xDiBVyNn8T-DxQW-xP33dUMVTqxNBcHc_WlHelWs9GgZ-SPhN8h2RvwAw7PPxfjHdovPqlnQ58tgoBgmtb6NYTFw3AzysI5HNxDXHyMY57ewAvP72JOVmGEkTNka7BXFIDjqcjzbyGrjRs2VqWsPTQua3THz48v1mILe_wdu58gyIaTW_ATE=w16383";

const moleculeImage =
  "https://lh3.googleusercontent.com/sitesv/APaQ0STQ38yu66lkDNJ8nSBz9K9RXtIflWOWxaCrso4ufXkBCRRBoq73OgLUvJRBralXiCfalJB_wI8bdEQTy0QkolzLc-oOsYPhuHZaH-7bKaGv-_etFa-aqk77sXlzAT-H8oqSp_WIUSLO-QXS-yAbFyqYFV3e0I8uvXvPARsAySCWJUY4vT1M4LfWiw1kh8A1UieYP6KAMK-GkRqHhFM6UFotvsVm-Gs1a_PAMyc=w1280";

const unifiedPlatformEmbed = String.raw`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MAAT Energy – Unified Platform</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;1,9..40,400&family=Instrument+Serif&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; }
    :root {
      --green: #0f7a62;
      --green-light: #e4f5ef;
      --green-mid: #c0e6d8;
      --navy: #12364b;
      --navy-light: #e3eef6;
      --navy-mid: #b7d0e4;
      --ink: #0f2b3c;
      --body: #4a6272;
      --surface: #f6faf8;
      --card: #ffffff;
      --border: #d4e3dd;
      --radius: 14px;
      --glow: 0 8px 30px rgba(15, 60, 50, 0.1);
    }
    body {
      font-family: 'DM Sans', system-ui, sans-serif;
      color: var(--ink);
      line-height: 1.5;
      background: #fff;
    }
    #maat-diagram {
      max-width: 1100px;
      margin: 0 auto;
      padding: 48px 20px 56px;
    }
    .diagram-header {
      text-align: center;
      margin-bottom: 36px;
    }
    .diagram-header h2 {
      font-family: 'Instrument Serif', Georgia, serif;
      font-size: clamp(30px, 5vw, 48px);
      font-weight: 400;
      letter-spacing: -0.02em;
      line-height: 1.1;
      color: var(--ink);
      margin-bottom: 12px;
    }
    .diagram-header p {
      max-width: 56ch;
      margin: 0 auto;
      font-size: 15px;
      color: var(--body);
    }
    .flow-grid {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 0;
      align-items: stretch;
    }
    .col-header {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }
    .col-header.inputs { color: var(--green); }
    .col-header.outputs { color: var(--navy); justify-content: flex-end; text-align: right; }
    .col-header::before {
      content: '';
      width: 18px;
      height: 2px;
      border-radius: 2px;
    }
    .col-header.inputs::before { background: var(--green); }
    .col-header.outputs::before { background: var(--navy); order: 1; }
    .flow-column {
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    .card-stack {
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;
    }
    .inputs-col .card-stack { justify-content: center; }
    .flow-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 16px 18px;
      cursor: default;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      column-gap: 12px;
      transition: transform .18s, box-shadow .18s, border-color .18s, opacity .18s;
    }
    .flow-card:hover {
      transform: translateY(-3px);
      box-shadow: var(--glow);
    }
    .card-icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      margin-bottom: 0;
      font-size: 18px;
      line-height: 1;
      flex: 0 0 36px;
    }
    .input .card-icon { background: var(--green-light); }
    .output .card-icon { background: var(--navy-light); }
    .card-title {
      font-size: 15px;
      font-weight: 700;
      line-height: 1.25;
      color: var(--ink);
      margin-bottom: 0;
      flex: 1 1 0;
      transition: font-size .18s ease, line-height .18s ease, color .18s ease;
    }
    .card-desc {
      font-size: 13px;
      color: var(--body);
      line-height: 1.45;
      flex-basis: 100%;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      margin-top: 0;
      padding-left: 48px;
      transition: max-height .18s ease, opacity .18s ease, margin-top .18s ease;
    }
    .flow-card:hover .card-desc {
      max-height: 120px;
      opacity: 1;
      margin-top: 6px;
    }
    .flow-card:hover .card-title {
      font-size: 18px;
      line-height: 1.2;
      color: var(--ink);
    }
    .center-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 16px;
      min-width: 220px;
    }
    .flow-arrows {
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: 14px;
    }
    .arrow-line {
      width: 40px;
      height: 2px;
      border-radius: 2px;
    }
    .arrow-line.in { background: linear-gradient(90deg, var(--green-mid), var(--green)); }
    .arrow-line.out { background: linear-gradient(90deg, var(--navy), var(--navy-mid)); }
    .arrow-head {
      font-size: 13px;
      line-height: 1;
    }
    .arrow-head.in { color: var(--green); }
    .arrow-head.out { color: var(--navy); }
    .platform-hub { text-align: center; }
    .orb {
      width: 160px;
      height: 160px;
      margin: 0 auto 16px;
      border-radius: 999px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at 30% 30%, #2bb89d, #12364b 70%);
      color: white;
      text-align: center;
      padding: 20px;
      box-shadow: 0 20px 50px rgba(18, 54, 75, 0.22);
      transition: transform .2s;
    }
    .orb:hover { transform: scale(1.04); }
    .orb span {
      font-size: 18px;
      line-height: 1.15;
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .platform-sub {
      font-size: 14px;
      font-weight: 600;
      color: var(--ink);
      margin-bottom: 4px;
    }
    .platform-desc {
      font-size: 12px;
      color: var(--body);
      max-width: 200px;
      margin: 0 auto 0px;
    }
    .pill-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 5px;
      max-width: 220px;
      margin: 10px auto 0;
    }
    .pill {
      font-size: 10px;
      font-weight: 700;
      padding: 4px 9px;
      border-radius: 999px;
      background: var(--green-light);
      color: #0a5e4b;
      border: 1px solid var(--green-mid);
    }
    .pillars-section { margin-top: 36px; }
    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
      gap: 14px;
    }
    .pillar-card {
      background: #fff;
      border: 1px solid #d4e4de;
      border-radius: 14px;
      padding: 20px 18px;
      position: relative;
      overflow: hidden;
    }
    .pillar-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, #2bb89d, #1a8a6e);
    }
    .pillar-number {
      display: inline-flex;
      width: 30px;
      height: 30px;
      align-items: center;
      justify-content: center;
      background: #e6f4f1;
      border-radius: 50%;
      color: #0e6251;
      font-weight: 700;
      font-size: 12px;
      margin-bottom: 12px;
    }
    .pillar-card h3 {
      margin: 0 0 8px;
      font-size: 16px;
      line-height: 1.2;
      color: #0f2b3c;
      font-weight: 700;
    }
    .pillar-card p {
      margin: 0;
      font-size: 13px;
      color: #4a6274;
      line-height: 1.5;
    }
    @media (max-width: 840px) {
      .flow-grid { grid-template-columns: 1fr; gap: 20px; }
      .center-col { order: -1; padding: 0; min-width: unset; }
      .flow-arrows { display: none; }
      .col-header.outputs { justify-content: flex-start; }
      .col-header.outputs::before { order: 0; }
      .mobile-flow-label {
        display: block;
        text-align: center;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--body);
        padding: 8px 0;
      }
      .mobile-flow-label::before {
        content: '↓';
        display: block;
        font-size: 16px;
        margin-bottom: 2px;
      }
    }
    @media (min-width: 841px) { .mobile-flow-label { display: none; } }
    @media (prefers-reduced-motion: no-preference) {
      .flow-card { animation: cardIn .4s ease both; }
      .flow-card:nth-child(1) { animation-delay: .05s; }
      .flow-card:nth-child(2) { animation-delay: .1s; }
      .flow-card:nth-child(3) { animation-delay: .15s; }
      .flow-card:nth-child(4) { animation-delay: .2s; }
      @keyframes cardIn {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }
    }
  </style>
</head>
<body>
<div id="maat-diagram">
  <div class="diagram-header"></div>
  <div class="flow-grid">
    <div class="flow-column inputs-col">
      <div class="col-header inputs">Inputs</div>
      <div class="card-stack">
        <article class="flow-card input"><div class="card-icon">CO₂</div><div class="card-title">CO₂</div></article>
        <article class="flow-card input"><div class="card-icon">CH₄</div><div class="card-title">Methane-rich feedstocks</div></article>
        <article class="flow-card input"><div class="card-icon">C₃</div><div class="card-title">Propane and butane</div></article>
      </div>
    </div>
    <div class="center-col">
      <div class="flow-arrows"><div class="arrow-line in"></div><div class="arrow-head in">▶</div><div style="width:12px"></div><div class="arrow-head out">▶</div><div class="arrow-line out"></div></div>
      <div class="platform-hub">
        <div class="orb"><span>Unified<br>Platform</span></div>
        <div class="platform-sub">Microwave Plasma Platform</div>
        <div class="platform-desc">Flexible feedstocks enter the platform, then branch into product pathways based on application and economics.</div>
        <div class="pill-row">
          <span class="pill">Modular</span>
          <span class="pill">Distributed</span>
          <span class="pill">Point-of-use</span>
        </div>
      </div>
    </div>
    <div class="mobile-flow-label">Outputs</div>
    <div class="flow-column outputs-col">
      <div class="col-header outputs">Outputs</div>
      <div class="card-stack">
        <article class="flow-card output"><div class="card-icon">H₂</div><div class="card-title">Hydrogen</div></article>
        <article class="flow-card output"><div class="card-icon">CO</div><div class="card-title">Carbon monoxide</div></article>
        <article class="flow-card output"><div class="card-icon">C</div><div class="card-title">Carbon materials</div></article>
      </div>
    </div>
  </div>
  <div class="pillars-section">
    <div class="pillars-grid">
      <article class="pillar-card"><div class="pillar-number">01</div><h3>Distributed production</h3><p>Modular deployment at the point of demand supports capital-efficient rollout and localized supply of industrial molecules and carbon materials.</p></article>
      <article class="pillar-card"><div class="pillar-number">02</div><h3>Flexible feedstocks</h3><p>The platform is built around methane pyrolysis and CO₂ reforming, with inputs spanning biogas, landfill gas, coal bed methane, natural gas, propane, and butane.</p></article>
      <article class="pillar-card"><div class="pillar-number">03</div><h3>Multiple outputs</h3><p>Hydrogen, carbon monoxide, and valuable carbon products create a broader monetization base than a single-product process architecture.</p></article>
      <article class="pillar-card"><div class="pillar-number">04</div><h3>Designed for intermittent power</h3><p>Fast startup and operation on intermittent electricity increase siting flexibility and improve alignment with lower-cost energy availability.</p></article>
      <article class="pillar-card"><div class="pillar-number">05</div><h3>Industrial pathways</h3><p>The same platform can support industrial carbon monoxide, construction materials, methanol, plastics, sustainable aviation fuel, and advanced materials.</p></article>
    </div>
  </div>
</div>
</body>
</html>`;

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-4">
      <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300/90">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? <p className="text-base leading-7 text-white/70 md:text-lg">{description}</p> : null}
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
      <CardContent className="p-6">
        <div className="text-3xl font-semibold text-white md:text-4xl">{value}</div>
        <div className="mt-2 text-sm uppercase tracking-[0.18em] text-white/55">{label}</div>
      </CardContent>
    </Card>
  );
}

function ValueCard({ icon: Icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl">
        <CardContent className="p-6 md:p-7">
          <div className="mb-5 inline-flex rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-3 text-emerald-200">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function PersonCard({ name, role, bio }) {
  return (
    <Card className="h-full border-white/10 bg-white/5 backdrop-blur-xl">
      <CardContent className="p-6 md:p-7">
        <div className="text-lg font-medium text-white">{name}</div>
        <div className="mt-2 text-sm uppercase tracking-[0.18em] text-emerald-300">{role}</div>
        <p className="mt-4 text-sm leading-7 text-white/72">{bio}</p>
      </CardContent>
    </Card>
  );
}

function BulletPill({ children }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78 backdrop-blur-xl">
      {children}
    </div>
  );
}

function HtmlEmbed({ html, title, height = 980 }) {
  return (
    <iframe
      title={title}
      srcDoc={html}
      className="w-full rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/20"
      style={{ height }}
    />
  );
}

export default function MaatEnergyInvestorOnePager() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });


  return (
    <div className="min-h-screen bg-[#07111a] text-white">
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-emerald-300" />

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_28%),linear-gradient(180deg,#07111a_0%,#08131f_35%,#07111a_100%)]" />
      <div
        className="fixed inset-0 -z-10 opacity-[0.07] mix-blend-screen"
        style={{ backgroundImage: `url(${backgroundTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07111a]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">MAAT Energy</div>
            <div className="text-xs text-white/55">Investor Overview</div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden rounded-full bg-white text-slate-900 hover:bg-white/90 md:inline-flex">
            <a href="#contact">Contact</a>
          </Button>
          <button className="inline-flex rounded-full border border-white/10 p-2 text-white/80 md:hidden" aria-label="Navigation">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main>
        <section id="overview" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
            <div className="flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-emerald-200">
                  <FlaskConical className="h-4 w-4" />
                  Carbon conversion platform
                </div>
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
                  {exactCopy.heroTitle}
                </h1>
                <p className="mt-6 max-w-2xl text-xl text-white/75 md:text-2xl">{exactCopy.heroSubtitle}</p>
                <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 md:text-lg">{exactCopy.intro}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="rounded-full bg-emerald-300 px-6 text-slate-950 hover:bg-emerald-200">
                  <a href="#technology">
                    Explore platform
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10">
                  <a href="#funding">View support</a>
                </Button>
              </motion.div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                <Metric value="3" label="Core outputs" />
                <Metric value="2" label="Primary pathways" />
                <Metric value="Multi" label="Monetization routes" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute -inset-10 rounded-full bg-emerald-300/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <img src={heroImage} alt="MAAT Energy technology" className="h-[560px] w-full rounded-[1.4rem] object-cover lg:w-[520px]" />
                <div className="absolute inset-x-6 bottom-6 rounded-3xl border border-white/10 bg-[#07111a]/70 p-5 backdrop-blur-xl">
                  <div className="text-xs uppercase tracking-[0.22em] text-emerald-300">Platform thesis</div>
                  <div className="mt-2 text-lg font-medium text-white">Distributed carbon upgrading at the point of use</div>
                  <div className="mt-2 text-sm leading-6 text-white/70">
                    Built for fuels, chemicals, and materials with modular deployment, feedstock flexibility, and industrial product optionality.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center pb-8">
            <a href="#technology" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white/80">
              Scroll
              <ChevronDown className="h-4 w-4" />
            </a>
          </div>
        </section>

        <section id="technology" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Technology"
                title="A modular platform for clean industrial molecules and carbon materials"
                description="The section below preserves the original site language while reframing it for a clearer investor narrative."
              />
              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="p-7 md:p-8">
                  <p className="text-base leading-8 text-white/78 md:text-lg">{exactCopy.technology}</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                <img src={reactorImage} alt="Reactor platform" className="h-[360px] w-full rounded-[1.5rem] object-cover" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-emerald-300">Pathway 01</div>
                    <div className="text-xl font-medium text-white">Methane pyrolysis</div>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      Tunable operation supports hydrogen and carbon production from methane-rich streams and related gaseous hydrocarbons.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="mb-3 text-xs uppercase tracking-[0.22em] text-sky-300">Pathway 02</div>
                    <div className="text-xl font-medium text-white">CO₂ reforming</div>
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      Carbon dioxide and carbonaceous inputs are converted into industrial intermediates for chemicals, fuels, and materials.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <SectionHeading
              eyebrow="Platform"
              title="Unified platform"
              description={exactCopy.commercialization}
            />

            <div className="mt-12">
              <HtmlEmbed html={unifiedPlatformEmbed} title="MAAT Energy Unified Platform" height={1040} />
            </div>
          </div>
        </section>

        <section id="reactor" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Reactor Technology"
              title={exactCopy.reactorTitle}
              description={exactCopy.reactorSubtitle}
            />
            <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-7 md:p-8">
                <div className="text-xs uppercase tracking-[0.22em] text-white/50">Original page wording</div>
                <div className="mt-4 text-3xl font-semibold text-white md:text-4xl">{exactCopy.reactorTitle}</div>
                <div className="mt-3 text-lg text-white/75">{exactCopy.reactorSubtitle}</div>
                <p className="mt-6 text-sm leading-7 text-white/65">
                  The uploaded archive for this page is minimal in text, so this section preserves the exact wording currently recoverable from the source while presenting it in a stronger product frame.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="projects" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <SectionHeading
              eyebrow="Projects"
              title="Path to deployment"
              description="The Projects page provides the staged commercialization structure below."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {exactCopy.projects.map((item, index) => (
                <Card key={item} className="border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardContent className="p-7">
                    <div className="text-xs uppercase tracking-[0.22em] text-white/45">Stage 0{index + 1}</div>
                    <div className="mt-3 text-2xl font-semibold text-white">{item}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="p-7 md:p-8">
                  <div className="text-xs uppercase tracking-[0.22em] text-emerald-300">Demonstration</div>
                  <div className="mt-4 text-3xl font-semibold text-white">{exactCopy.demonstrationTitle}</div>
                  <div className="mt-3 text-lg text-white/75">{exactCopy.demonstrationSubtitle}</div>
                  <p className="mt-5 text-base leading-8 text-white/74">{exactCopy.demonstrationBody}</p>
                </CardContent>
              </Card>
              <div className="grid gap-6">
                {exactCopy.demonstrationApplications.map((item) => (
                  <Card key={item.title} className="border-white/10 bg-white/5 backdrop-blur-xl">
                    <CardContent className="p-6">
                      <div className="text-lg font-medium text-white">{item.title}</div>
                      <p className="mt-3 text-sm leading-7 text-white/72">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow="Partners"
              title={exactCopy.partnersTitle}
              description={exactCopy.partnersIntro}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {exactCopy.partners.map((partner) => (
                <Card key={partner} className="border-white/10 bg-white/5 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="text-base leading-7 text-white/84">{partner}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <SectionHeading
              eyebrow="Team"
              title="Management and advisory team"
              description="This section preserves the biographies available in the archived Team page."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {exactCopy.team.map((person) => (
                <PersonCard key={person.name} name={person.name} role={person.role} bio={person.bio} />
              ))}
            </div>
            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.22em] text-white/45">Advisory Team</div>
              <div className="mt-4 flex flex-wrap gap-3">
                {exactCopy.advisors.map((advisor) => (
                  <BulletPill key={advisor}>{advisor}</BulletPill>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="funding" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Funding"
              title="Institutional support and credibility"
              description="This section uses the original page language and packages it as a cleaner proof-point block."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-amber-200/15 bg-gradient-to-br from-amber-100/10 to-white/5 backdrop-blur-xl">
                <CardContent className="p-7">
                  <div className="mb-4 inline-flex rounded-2xl border border-amber-200/20 bg-amber-100/10 p-3 text-amber-200">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="text-lg font-medium text-white">DOE support</div>
                  <p className="mt-3 text-sm leading-7 text-white/72">{exactCopy.funding}</p>
                </CardContent>
              </Card>
              <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
                <CardContent className="p-7">
                  <div className="text-xs uppercase tracking-[0.22em] text-emerald-300">Recognition</div>
                  <div className="mt-3 text-2xl font-semibold text-white">{exactCopy.awards}</div>
                  <div className="mt-8 flex items-center gap-3 text-white/70">
                    <MapPin className="h-4 w-4" />
                    <span>{exactCopy.location}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-300/12 via-white/5 to-sky-300/10 p-8 backdrop-blur-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">Contact</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Static investor site foundation complete
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/74 md:text-lg">
                  This version uses the wording recovered from the uploaded Google Sites archive and reorganizes it into a single continuous investor-facing page. The next build step would be converting this into a production site with Next.js, CMS-backed content, richer motion, analytics, and responsive navigation states.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Card className="border-white/10 bg-black/20 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-white/50">Headquarters</div>
                    <div className="flex items-center gap-3 text-white">
                      <MapPin className="h-4 w-4 text-emerald-300" />
                      <span>{exactCopy.location}</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/10 bg-black/20 backdrop-blur-xl">
                  <CardContent className="p-6">
                    <div className="mb-2 text-xs uppercase tracking-[0.22em] text-white/50">Primary action</div>
                    <a href="mailto:info@maatenergy.com" className="flex items-center gap-3 text-white transition hover:text-emerald-200">
                      <Mail className="h-4 w-4 text-emerald-300" />
                      <span>CONTACT US</span>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
