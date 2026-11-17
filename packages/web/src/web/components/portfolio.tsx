import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Menu,
  X,
  Layers,
  Code2,
  Database,
  Check,
  Mail,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
const navigation = [
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["expertise", "Expertise"],
  ["innovation", "Innovation"],
];
const projects = [
  {
    brand: "PETRONAS",
    industry: "OIL & GAS",
    title: "Enterprise planning & integrity systems",
    description:
      "Supporting business-critical planning and asset integrity applications across eIAP 2.0, SEAL, SICS and BAMup.",
    tags: ["C# / .NET", "Angular", "SQL Server", "Azure DevOps"],
    details:
      "Enhanced Change Control Requests, built Auto Scenario Creation, improved email notifications, and supported QA issue resolution and CI/CD delivery. Delivered through FPT Software Indonesia.",
  },
  {
    brand: "TOYOTA",
    industry: "AUTOMOTIVE",
    title: "Dealer operations & customer platforms",
    description:
      "Enterprise applications spanning dealer finance, test-drive bookings, and centralized lead management.",
    tags: ["ASP.NET MVC", "Web API", "Entity Framework", "SQL Server"],
    details:
      "Contributed to accounts receivable in the Dealer Management System. Developed test-drive booking features, email and SMS notifications, and custom lead reports through Puri Artha Telematika and SAM CGI.",
  },
  {
    brand: "Coca-Cola",
    industry: "MANUFACTURING",
    title: "Production pallet labelling",
    description:
      "Maintaining and enhancing a legacy system that supports daily production labelling operations.",
    tags: ["PHP", "CodeIgniter", "SQL Server"],
    details:
      "For Coca-Cola Europacific: resolved defects, updated Best Before Date nomenclature, and supported application stability through FPT Software Indonesia.",
  },
  {
    brand: "MAZDA",
    industry: "AUTOMOTIVE",
    title: "Corporate content management",
    description:
      "CMS template development for Mazda Indonesia’s product and company information website.",
    tags: ["C# / .NET 8", "Umbraco", "SQL Server"],
    details:
      "Developed Umbraco CMS templates and supported frontend, backend, and content structure implementation through STASINDO Data Communication in a part-time role.",
  },
];
function Heading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>{number}</span> {label}
      </div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="project-card">
      <div className="project-top">
        <span
          className={`client client-${project.brand.toLowerCase().replace("-", "")}`}
        >
          {project.brand}
        </span>
        <span className="industry">{project.industry}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <button
        className="detail-button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {" "}
        {open ? "Hide contributions" : "Explore contributions"}{" "}
        {open ? <Minus size={16} /> : <Plus size={16} />}
      </button>
      {open && <p className="project-detail">{project.details}</p>}
    </article>
  );
}
export function Portfolio() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header>
        <div className="container nav">
          <a href="#main" className="wordmark" aria-label="Notolab home">
            noto<span>lab</span>
            <i>.</i>
          </a>
          <nav
            className={menu ? "nav-links open" : "nav-links"}
            aria-label="Main navigation"
          >
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-contact"
              onClick={() => setMenu(false)}
            >
              Let’s talk <ArrowUpRight size={15} />
            </a>
          </nav>
          <button
            className="menu-toggle"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow hero-label">
              <span className="status-dot" /> EXPERIENCE MEETS POSSIBILITY
            </div>
            <h1>
              Enterprise software.
              <br />
              Built with <span>purpose.</span>
            </h1>
            <p className="intro">
              Hi, I’m <strong>Karnoto.</strong>
            </p>
            <p className="role">
              Senior .NET Developer · Full Stack Engineer · AI Builder
            </p>
            <p className="hero-description">
              10+ years turning complex business requirements into reliable,
              maintainable software. From enterprise .NET systems to practical
              AI-powered workflows.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explore my work <ArrowRight size={17} />
              </a>
              <a className="button secondary" href="/Karnoto-CV.pdf" download>
                Download CV <Download size={16} />
              </a>
            </div>
            <div className="location">
              <MapPin size={14} /> Based in Indonesia <span>·</span> Enterprise
              experience since 2014
            </div>
          </div>
          <aside className="hero-panel" aria-label="Engineering focus">
            <div className="panel-heading">
              <span className="small-square" /> THE ENGINEERING APPROACH
              <span className="panel-id">01 / 03</span>
            </div>
            <div className="panel-title">
              Complexity, simplified.
              <br />
              <span>From the core to the interface.</span>
            </div>
            <div className="architecture">
              <div>
                <Database size={19} />
                <span>
                  <strong>Solid foundations</strong>
                  <small>C# · .NET · SQL Server</small>
                </span>
                <span className="layer-no">01</span>
              </div>
              <div>
                <Layers size={19} />
                <span>
                  <strong>Connected systems</strong>
                  <small>REST APIs · Enterprise integrations</small>
                </span>
                <span className="layer-no">02</span>
              </div>
              <div>
                <Code2 size={19} />
                <span>
                  <strong>Thoughtful experiences</strong>
                  <small>React · Angular · Vue.js</small>
                </span>
                <span className="layer-no">03</span>
              </div>
            </div>
            <div className="panel-footer">
              <span className="status-dot" /> Built for real-world business
              needs
            </div>
          </aside>
        </section>
        <div className="client-strip">
          <div className="container client-row">
            <p>ENTERPRISE PROJECT EXPERIENCE</p>
            <div className="client-list">
              <span className="petronas">PETRONAS</span>
              <span className="toyota">TOYOTA</span>
              <span className="coca">Coca-Cola</span>
              <span className="mazda">MAZDA</span>
            </div>
          </div>
        </div>
        <section id="experience" className="section container">
          <Heading
            number="01"
            label="EXPERIENCE HIGHLIGHTS"
            title="A decade of delivery. A long-term mindset."
            description="Hands-on engineering across industries, with a focus on the systems businesses depend on."
          />
          <div className="experience-layout">
            <div className="experience-stats">
              <div>
                <strong>
                  10<span>+</span>
                </strong>
                <p>
                  Years in enterprise
                  <br />
                  software development
                </p>
              </div>
              <div>
                <strong>End-to-end</strong>
                <p>
                  From requirements and development
                  <br />
                  to UAT and production support
                </p>
              </div>
            </div>
            <div className="experience-body">
              <h3>
                More than writing code.
                <br />
                Taking ownership of the whole solution.
              </h3>
              <p>
                I build, enhance, and maintain enterprise
                applications—connecting backend services, responsive interfaces,
                and the data that powers them.
              </p>
              <div className="checks">
                {[
                  "Business-critical systems across oil & gas, automotive, banking, and HR",
                  "Legacy modernization, troubleshooting, and performance optimization",
                  "Cross-functional delivery with BA, QA, product, and engineering teams",
                ].map((item) => (
                  <div key={item}>
                    <Check size={17} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="career">
                <span>RECENT ENTERPRISE ROLE</span>
                <strong>Senior Full Stack / .NET Developer</strong>
                <p>
                  FPT Software Indonesia <span>Jun 2020 — Sep 2026</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="section tinted">
          <div className="container">
            <Heading
              number="02"
              label="SELECTED ENTERPRISE PROJECTS"
              title="Real systems. Real business context."
              description="A selection of client engagements delivered through enterprise software teams."
            />
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.brand} project={project} />
              ))}
            </div>
            <p className="project-note">
              Selected contributions, not standalone product ownership. Full
              project history available in my CV.
            </p>
          </div>
        </section>
        <section id="expertise" className="section container">
          <Heading
            number="03"
            label="TECHNICAL EXPERTISE"
            title="Deep in .NET. Fluent across the stack."
            description="The right tools for maintainable solutions—not technology for its own sake."
          />
          <div className="expertise-grid">
            {[
              {
                icon: Code2,
                title: ".NET & backend",
                text: "The foundation of my enterprise work.",
                tags: [
                  "C#",
                  "ASP.NET Core",
                  "ASP.NET MVC",
                  "Web API",
                  "Entity Framework",
                  "WCF",
                ],
              },
              {
                icon: Layers,
                title: "Full stack development",
                text: "Connected experiences, front to back.",
                tags: [
                  "React",
                  "Angular",
                  "Vue.js",
                  "TypeScript / JavaScript",
                  "Tailwind CSS",
                  "Golang",
                ],
              },
              {
                icon: Database,
                title: "Data & delivery",
                text: "Reliable data. Disciplined releases.",
                tags: [
                  "SQL Server",
                  "PostgreSQL",
                  "MySQL",
                  "Azure DevOps",
                  "CI/CD",
                  "Azure Key Vault",
                ],
              },
            ].map(({ icon: Icon, title, text, tags }) => (
              <article className="expertise-card" key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tags">
                  {tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="quality-line">
            <span>ENGINEERING PRACTICES</span>
            <p>
              Code review <b>·</b> Unit testing <b>·</b> Fortify & SonarCloud{" "}
              <b>·</b> Agile / Scrum <b>·</b> UAT & production support
            </p>
          </div>
        </section>
        <section id="innovation" className="section tinted">
          <div className="container">
            <Heading
              number="04"
              label="RECENT LEARNING & INNOVATION"
              title="Experienced. Still exploring."
              description="Bringing an enterprise mindset to practical AI, new products, and ERP integration."
            />
            <div className="innovation-grid">
              <article className="innovation-card">
                <span className="learning-label">APPLIED EXPLORATION</span>
                <h3>AI agents & developer workflows</h3>
                <p>
                  Using AI agents in VS Code to review source control changes
                  and assist with update documentation. Exploring OpenAI API
                  integrations and automated workflows.
                </p>
                <div className="tags">
                  <span>AI agents</span>
                  <span>OpenAI API</span>
                  <span>Automation</span>
                </div>
              </article>
              <article className="innovation-card">
                <span className="learning-label">PERSONAL PROJECT</span>
                <h3>A practical POS for small business</h3>
                <p>
                  Building a React Progressive Web App for UMKM sales
                  transactions, with Cloudflare tunneling for secure remote
                  access.
                </p>
                <div className="tags">
                  <span>React PWA</span>
                  <span>Cloudflare</span>
                </div>
              </article>
              <article className="innovation-card">
                <span className="learning-label">ONGOING UPSKILLING</span>
                <h3>Understanding the ERP landscape</h3>
                <p>
                  Hands-on Acumatica sandbox with IIS and SQL Server. Learning
                  SAP and ABAP fundamentals to explore integrations with the
                  Microsoft stack.
                </p>
                <div className="tags">
                  <span>Acumatica</span>
                  <span>SAP / ABAP</span>
                  <span>C#</span>
                </div>
              </article>
            </div>
            <div className="learning-note">
              <span className="status-dot" /> Independent projects and ERP
              learning since October 2026. ERP topics reflect upskilling, not
              production implementation claims.
            </div>
          </div>
        </section>
        <section id="contact" className="section container contact">
          <div>
            <div className="eyebrow">
              <span>05</span> LET’S CONNECT
            </div>
            <h2>
              Good software starts
              <br />
              with a conversation.
            </h2>
            <p>
              Have an enterprise challenge, a .NET opportunity, or an idea worth
              building?
              <br className="desktop-break" /> Let’s talk about how I can help.
            </p>
            <a className="button primary" href="mailto:karnoto23@gmail.com">
              Start a conversation <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="contact-details">
            <a href="mailto:karnoto23@gmail.com">
              <Mail size={19} />
              <span>
                <small>EMAIL</small>karnoto23@gmail.com
              </span>
              <ArrowUpRight size={17} />
            </a>
            <a href="tel:+628988900546">
              <span className="phone-mark">+62</span>
              <span>
                <small>PHONE</small>+62 898 8900 546
              </span>
              <ArrowUpRight size={17} />
            </a>
            <div>
              <MapPin size={19} />
              <span>
                <small>LOCATION</small>Indonesia
              </span>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer">
          <a className="wordmark" href="#main">
            noto<span>lab</span>
            <i>.</i>
          </a>
          <p>© {new Date().getFullYear()} Karnoto. Built with purpose.</p>
          <a href="#main">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
