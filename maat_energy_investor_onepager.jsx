import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Mail, Menu } from "lucide-react";
import { Card, CardContent } from "./src/components/ui/card.jsx";
import { Button } from "./src/components/ui/button.jsx";
import maatLogo from "./docs/assets/Maat_logo.png";
import teamBackground from "./docs/assets/Team.png";
import demoProjectImage from "./docs/assets/unnamed (8).jpg";
import foakProjectImage from "./docs/assets/FOAK_CO.png";
import noakProjectImage from "./docs/assets/09003c75-8be8-4227-a88e-eadb778a74e4.png";
import partnersImage from "./docs/assets/partners.png";
import sbirSttrImage from "./docs/assets/sbirsttr.png";
import reactorMainImage from "./docs/assets/reactor_main.png";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Technology", href: "#technology" },
  { label: "Projects", href: "#projects" },
  { label: "Partners", href: "#partners" },
  { label: "Team", href: "#team" },
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

const projectTabs = [
  {
    key: "demonstration",
    label: "Demonstration",
    image: demoProjectImage,
    title: "Industrial Demonstration Site",
    subtitle: "Lab-to-Field validation on a relevant oil & gas site",
    body: "Demonstrating commercial-scale operation for extended durations using real-world feedstocks.",
    applications: [
      {
        title: "Carbon Materials for Asphalt",
        text: "MAAT Energy Carbons improve the physical properties of asphalt while removing a burdensome step in the production process",
      },
      {
        title: "Carbon Monoxide for Metal Heating",
        text: "Low-cost carbon monoxide produced on-site for furnace atmospheres for metal treating applications",
      },
    ],
  },
  {
    key: "foak",
    label: "First-of-a-Kind",
    image: foakProjectImage,
    title: "First-of-a-Kind",
    subtitle: "Early commercial applications that demonstrate MAAT's modular plasma platform in real industrial settings.",
    body: "First-of-a-kind deployment focuses on revenue-generating applications where distributed production, product quality, and customer-side economics can be proven in the field.",
    applications: [
      {
        title: "Performance Asphalt",
        text: "Engineered carbon that improves asphalt performance while reducing the delivered-cost penalty of centralized materials. Tuned morphology and particle size support workable binders, rutting resistance, and more efficient formulation.",
      },
      {
        title: "Reliable CO Supply",
        text: "On-site, high-purity carbon monoxide for customers that want to avoid the cost and complexity of transporting specialty gases. Distributed production helps reduce logistics burden while improving supply reliability.",
      },
    ],
  },
  {
    key: "noak",
    label: "Nth-of-a-Kind",
    image: noakProjectImage,
    title: "CO2 Fuels",
    subtitle: "Distributed methanol production, enabled by modular syngas generation at the point of demand",
    body: "MAAT's platform is designed to turn low-value carbon feedstocks into a practical pathway for cleaner, more capital-efficient fuel and chemical production.",
    applications: [
      {
        title: "Methanol",
        text: "Distributed methanol production, enabled by modular syngas generation at the point of demand.",
      },
      {
        title: "Sustainable Aviation Fuel (SAF)",
        text: "A distributed pathway to SAF, built on flexible syngas production and modular deployment. By upgrading carbon-based feedstocks closer to where they are available and needed, MAAT supports a more efficient route to lower-emissions aviation fuel.",
      },
    ],
  },
];

function createPlaceholderImage(title, subtitle, accent = "#111827") {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fbf7f1" />
          <stop offset="100%" stop-color="#e9dfce" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#bg)" />
      <rect x="56" y="56" width="1088" height="788" rx="36" fill="#fffdfa" stroke="rgba(17,24,39,0.14)" />
      <circle cx="936" cy="244" r="142" fill="${accent}" opacity="0.08" />
      <circle cx="232" cy="696" r="164" fill="${accent}" opacity="0.08" />
      <path d="M156 588C271 445 386 373 501 373C651 373 743 539 887 539C961 539 1037 506 1116 438" fill="none" stroke="${accent}" stroke-width="16" stroke-linecap="round" opacity="0.18" />
      <rect x="140" y="168" width="168" height="28" rx="14" fill="${accent}" opacity="0.16" />
      <text x="140" y="334" fill="#111827" font-family="Montserrat, Arial, sans-serif" font-size="74" font-weight="700">${title}</text>
      <text x="140" y="402" fill="#5a6472" font-family="Roboto, Arial, sans-serif" font-size="30">${subtitle}</text>
      <text x="140" y="688" fill="#111827" font-family="PT Mono, monospace" font-size="24" letter-spacing="6">IMAGE PLACEHOLDER</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const heroImage =
  "https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/teaser/public/media/images/Oceanwaves.gif?itok=LC7cKGuQ";

const reactorImage = reactorMainImage;

const unifiedPlatformEmbed = "./docs/unified-platform.html";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl space-y-4">
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-paper-ink)] md:text-5xl">
        {title}
      </h2>
      {description ? <p className="text-base leading-7 text-[color:var(--color-paper-muted)] md:text-lg">{description}</p> : null}
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <Card className="bg-[color:var(--color-paper-surface-strong)]">
      <CardContent className="p-6">
        <div className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-paper-ink)] md:text-4xl">{value}</div>
        <div className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-[color:var(--color-paper-muted)]">{label}</div>
      </CardContent>
    </Card>
  );
}

function ValueCard({ icon: Icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="h-full bg-[color:var(--color-paper-surface-strong)]">
        <CardContent className="p-6 md:p-7">
          <div className="mb-5 inline-flex rounded-2xl border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-highlight)] p-3 text-[color:var(--color-paper-ink)]">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-[color:var(--color-paper-ink)]">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-[color:var(--color-paper-muted)]">{text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function PersonCard({ name, role, bio }) {
  return (
    <Card className="h-full bg-[color:var(--color-paper-surface-strong)]">
      <CardContent className="p-6 md:p-7">
        <div className="font-[family-name:var(--font-display)] text-lg font-medium text-[color:var(--color-paper-ink)]">{name}</div>
        <div className="mt-2 font-mono text-sm uppercase tracking-[0.18em] text-[color:var(--color-paper-muted)]">{role}</div>
        <p className="mt-4 text-sm leading-7 text-[color:var(--color-paper-muted)]">{bio}</p>
      </CardContent>
    </Card>
  );
}

function BulletPill({ children }) {
  return (
    <div className="rounded-full border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-surface)] px-4 py-2 text-sm text-[color:var(--color-paper-ink)]">
      {children}
    </div>
  );
}

function HtmlEmbed({ html, title, height = 980 }) {
  return (
    <iframe
      title={title}
      src={html}
      className="w-full rounded-[2rem] border border-[color:var(--color-paper-border)] bg-white shadow-[0_24px_70px_rgba(68,55,35,0.12)]"
      style={{ height }}
    />
  );
}

export default function MaatEnergyInvestorOnePager() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [activeProject, setActiveProject] = useState(projectTabs[0]);


  return (
    <div className="min-h-screen text-[color:var(--color-paper-ink)]">
      <motion.div style={{ scaleX }} className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-[color:var(--color-paper-accent)]" />

      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(232,222,203,0.76),transparent_34%),radial-gradient(circle_at_80%_16%,rgba(17,24,39,0.06),transparent_26%),linear-gradient(180deg,#fbf7f1_0%,#f2ece1_40%,#efe7db_100%)]" />

      <header className="sticky top-0 z-40 border-b border-[color:var(--color-paper-border)] bg-[#f7f1e7]/86 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#overview" className="flex items-center">
            <img src={maatLogo} alt="MAAT Energy" className="h-11 w-auto object-contain md:h-12" />
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-[color:var(--color-paper-muted)] transition hover:text-[color:var(--color-paper-ink)]">
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Contact</a>
          </Button>
          <button className="inline-flex rounded-full border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-surface)] p-2 text-[color:var(--color-paper-ink)] md:hidden" aria-label="Navigation">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main>
        <section id="overview" className="relative overflow-hidden">
          <img src={heroImage} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,247,241,0.32),rgba(242,236,225,0.24)_45%,rgba(239,231,219,0.36))]" />
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[rgba(232,222,203,0.24)] blur-3xl" />
          <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-[rgba(17,24,39,0.04)] blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-24">
            <div className="flex flex-col justify-center">
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="relative">
                  <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold tracking-[-0.05em] text-[color:var(--color-paper-ink)] md:text-7xl md:leading-[0.98]">
                    {exactCopy.heroTitle}
                  </h1>
                  <p className="mt-6 max-w-2xl text-xl text-[rgba(17,24,39,0.78)] md:text-2xl">{exactCopy.heroSubtitle}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative z-10 mt-10 flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="px-6">
                  <a href="#technology">
                    Explore platform
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-6">
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
              className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="absolute -inset-10 rounded-full bg-[color:var(--color-paper-highlight)] blur-3xl opacity-70" />
              <div className="relative w-full max-w-[560px]">
                <div className="rounded-[2rem] border border-[rgba(255,255,255,0.72)] bg-[rgba(248,243,235,0.84)] p-6 shadow-[0_24px_80px_rgba(68,55,35,0.14)] backdrop-blur-sm md:p-8">
                  <p className="text-sm leading-7 text-[color:var(--color-paper-muted)] md:text-base md:leading-8">
                    {exactCopy.intro}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center pb-8">
            <a href="#technology" className="inline-flex items-center gap-2 text-sm text-[color:var(--color-paper-muted)] transition hover:text-[color:var(--color-paper-ink)]">
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
                description="MAAT Energy combines flexible feedstocks, distributed deployment, and tunable chemistry to serve a wide range of industrial applications."
              />
              <Card className="bg-[color:var(--color-paper-surface-strong)]">
                <CardContent className="p-7 md:p-8">
                  <p className="text-base leading-8 text-[color:var(--color-paper-muted)] md:text-lg">{exactCopy.technology}</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-paper-border)] bg-[color:var(--color-paper-surface-strong)] p-3 shadow-[0_24px_60px_rgba(68,55,35,0.12)]">
                <img src={reactorImage} alt="Reactor platform" className="h-[360px] w-full rounded-[1.5rem] object-cover" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,238,228,0.92))]">
                  <CardContent className="p-6">
                    <div className="font-[family-name:var(--font-display)] text-xl font-medium text-[color:var(--color-paper-ink)]">Methane pyrolysis</div>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-paper-muted)]">
                      Tunable operation supports hydrogen and carbon production from methane-rich streams and related gaseous hydrocarbons.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(244,238,228,0.92))]">
                  <CardContent className="p-6">
                    <div className="font-[family-name:var(--font-display)] text-xl font-medium text-[color:var(--color-paper-ink)]">CO₂ reforming</div>
                    <p className="mt-3 text-sm leading-7 text-[color:var(--color-paper-muted)]">
                      Carbon dioxide and carbonaceous inputs are converted into industrial intermediates for chemicals, fuels, and materials.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="border-y border-[color:var(--color-paper-border)] bg-[rgba(255,255,255,0.24)]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <SectionHeading
              title="Modern Conversion: Microwave Plasma Platform"
              description={exactCopy.commercialization}
            />

            <div className="mt-12">
              <HtmlEmbed html={unifiedPlatformEmbed} title="MAAT Energy Unified Platform" height={1040} />
            </div>
          </div>
        </section>

        <section id="projects" className="border-y border-[color:var(--color-paper-border)] bg-[rgba(255,255,255,0.2)]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <SectionHeading
              title="Path to deployment"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {projectTabs.map((project) => (
                <button
                  key={project.key}
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="text-left transition"
                  aria-pressed={activeProject.key === project.key}
                >
                  <Card
                    className={
                      activeProject.key === project.key
                        ? "border-[color:var(--color-paper-border-strong)] bg-white shadow-[0_18px_40px_rgba(68,55,35,0.16)] ring-2 ring-[rgba(17,24,39,0.08)]"
                        : "bg-[rgba(255,255,255,0.55)] opacity-45 saturate-50 transition hover:opacity-70"
                    }
                  >
                    <CardContent className="p-7">
                      <div
                        className={
                          activeProject.key === project.key
                            ? "font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--color-paper-ink)]"
                            : "font-[family-name:var(--font-display)] text-2xl font-semibold text-[rgba(17,24,39,0.55)]"
                        }
                      >
                        {project.label}
                      </div>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>

            {activeProject.key === "foak" ? (
              <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <Card className="overflow-hidden bg-[color:var(--color-paper-surface-strong)]">
                  <div className="grid lg:grid-rows-[260px_auto]">
                    <div className="overflow-hidden">
                      <img src={activeProject.image} alt={activeProject.label} className="h-full w-full object-cover" />
                    </div>
                    <CardContent className="p-7 md:p-8">
                      <div className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-paper-ink)]">
                        {activeProject.title}
                      </div>
                      <div className="mt-3 text-lg text-[rgba(17,24,39,0.75)]">{activeProject.subtitle}</div>
                      <p className="mt-5 text-base leading-8 text-[color:var(--color-paper-muted)]">{activeProject.body}</p>
                    </CardContent>
                  </div>
                </Card>
                <div className="grid gap-6">
                  {activeProject.applications.map((item, index) => (
                    <Card
                      key={item.title}
                      className={
                        index === 0
                          ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,231,219,0.92))]"
                          : "bg-[color:var(--color-paper-surface-strong)]"
                      }
                    >
                      <CardContent className="p-6 md:p-7">
                        <div className="font-[family-name:var(--font-display)] text-2xl font-semibold text-[color:var(--color-paper-ink)]">
                          {item.title}
                        </div>
                        <p className="mt-4 text-sm leading-7 text-[color:var(--color-paper-muted)]">{item.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <Card className="bg-[color:var(--color-paper-surface-strong)]">
                  <CardContent className="p-7 md:p-8">
                    <div className="overflow-hidden rounded-[1.5rem] border border-[color:var(--color-paper-border)] bg-[rgba(255,255,255,0.66)]">
                      <img src={activeProject.image} alt={activeProject.label} className="h-[220px] w-full object-cover" />
                    </div>
                    <div className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold text-[color:var(--color-paper-ink)]">{activeProject.title}</div>
                    <div className="mt-3 text-lg text-[rgba(17,24,39,0.75)]">{activeProject.subtitle}</div>
                    <p className="mt-5 text-base leading-8 text-[color:var(--color-paper-muted)]">{activeProject.body}</p>
                  </CardContent>
                </Card>
                <div className="grid gap-6">
                  {activeProject.applications.map((item) => (
                    <Card key={item.title} className="bg-[color:var(--color-paper-surface-strong)]">
                      <CardContent className="p-6">
                        <div className="font-[family-name:var(--font-display)] text-lg font-medium text-[color:var(--color-paper-ink)]">{item.title}</div>
                        <p className="mt-3 text-sm leading-7 text-[color:var(--color-paper-muted)]">{item.text}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="partners" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8">
            <SectionHeading
              title={exactCopy.partnersTitle}
              description={exactCopy.partnersIntro}
            />
            <div className="flex justify-center">
              <Card className="w-full max-w-5xl bg-white">
                <CardContent className="p-8 md:p-10">
                  <img
                    src={partnersImage}
                    alt="MAAT Energy partners and supporters"
                    className="w-full object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="team" className="border-y border-[color:var(--color-paper-border)] bg-[rgba(255,255,255,0.2)]">
          <div className="relative overflow-hidden">
            <img src={teamBackground} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-88" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,247,241,0.22),rgba(246,241,232,0.08)_38%,rgba(239,231,219,0.18))]" />
            <div className="relative mx-auto flex min-h-[340px] max-w-7xl items-end px-6 py-12 lg:px-8">
              <div className="max-w-3xl">
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  Management and advisory team
                </h2>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 pt-12">
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {exactCopy.team.map((person) => (
                <PersonCard key={person.name} name={person.name} role={person.role} bio={person.bio} />
              ))}
            </div>
            <div className="mt-10">
              <div className="flex flex-wrap gap-3">
                {exactCopy.advisors.map((advisor) => (
                  <BulletPill key={advisor}>{advisor}</BulletPill>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="funding" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-paper-ink)] md:text-5xl">
                Funding
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[color:var(--color-paper-muted)] md:text-lg">
                DOE supports scientific excellence and technological innovation through the investment of federal research funds in critical American priorities to build a strong national economy.{" "}
                <a
                  href="https://www.energy.gov/science/articles/department-energy-announces-142-million-grants-small-businesses"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[color:var(--color-paper-ink)] underline underline-offset-4"
                >
                  MAAT Energy Awards
                </a>
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img src={sbirSttrImage} alt="SBIR STTR America's Seed Fund" className="w-full max-w-xl object-contain" />
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-paper-border-strong)] bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(239,231,219,0.94))] p-8 shadow-[0_24px_80px_rgba(68,55,35,0.14)] backdrop-blur-md md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[color:var(--color-paper-ink)] md:text-5xl">
                  Connect with MAAT Energy
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--color-paper-muted)] md:text-lg">
                  Reach out to discuss technology, partnerships, pilot opportunities, and commercial deployment pathways for MAAT's modular carbon conversion platform.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <Card className="bg-[rgba(255,255,255,0.66)]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-[color:var(--color-paper-ink)]">
                      <MapPin className="h-4 w-4 text-[color:var(--color-paper-muted)]" />
                      <span>{exactCopy.location}</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[rgba(255,255,255,0.66)]">
                  <CardContent className="p-6">
                    <a href="mailto:info@maatenergy.com" className="flex items-center gap-3 text-[color:var(--color-paper-ink)] transition hover:text-[color:var(--color-paper-muted)]">
                      <Mail className="h-4 w-4 text-[color:var(--color-paper-muted)]" />
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
