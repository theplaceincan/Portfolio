export default function Home() {
  return (
    <div className="space-y-24">
      <section>
        <h2 className="section-line">Educational Record</h2>
        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5">
          <div className="font-mono text-[0.8rem] text-[#888]">2023 — 2027</div>
          <div>
            <h4 className="text-[1.2rem] font-normal">University of Nevada, Las Vegas</h4>
            <p className="text-[#555] mt-1">Bachelors of Science in Computer Science, Minor in Mathematics</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-line">Research Interests</h2>
        <div className="flex flex-wrap gap-10">
          <div className="flex-1 min-w-[280px]">
            <h4 className="text-[1.2rem] font-normal mb-2">Computation & AI</h4>
            <p className="text-[0.95rem] text-[#555]">Exploring the intersections of symbolic logic, automated moderation, and large language model implementation.</p>
          </div>
          <div className="flex-1 min-w-[280px]">
            <h4 className="text-[1.2rem] font-normal mb-2">Bioinformatics</h4>
            <p className="text-[0.95rem] text-[#555]">Investigating deep learning tools for computational biology and genomic data visualization.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-line">Professional Record</h2>
        <div className="space-y-8">
          <ExperienceItem 
            date="2025 — PRESENT" 
            title="Software Engineer, RebelSat" 
            desc="Developing embedded flight software for RebelSat, Nevada's first CubeSat project" 
            tech="C · C++" 
          />
          <ExperienceItem 
            date="2023 — PRESENT" 
            title="Freelance Software Developer" 
            desc="Building websites for medical startups, finance startups, and community organizations" 
            tech="React Native · TypeScript · JavaScript · Supabase · Pocketbase · VueJS · NextJS" 
          />
        </div>
      </section>

      <section>
        <h2 className="section-line">Industry Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <ProjectItem 
            title="Prime Care Medical Transportation" 
            desc="Non-emergency medical transportation provider serving patients and healthcare facilities across Southern Nevada." 
            tech="Web Development · TypeScript · NextJS · Supabase"
            links={[{label: "Live Project", href: "https://primecaremedicaltransportationllc.onrender.com/"}]}
          />
          <ProjectItem 
            title="MFK Ventures" 
            desc="Multi-service small business providing tax preparation and commercial janitorial services to local clients." 
            tech="Frontend Development · TypeScript · NextJS "
            links={[{label: "Live Project", href: "https://www.mfkventuress.com/"}]}
          />
        </div>
      </section>

      <section>
        <h2 className="section-line">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <ProjectItem 
            title="Younlv.com" 
            desc="A comprehensive resource architecture serving the UNLV academic community and student body." 
            tech="TypeScript · Vue.js · PocketBase"
            links={[{label: "Live Project", href: "https://www.younlv.com"}, {label: "Source Code", href: "https://github.com/theplaceincan/Younlv"}]}
          />
          <ProjectItem 
            title="LearnTigrigna" 
            desc="An educational website dedicated to teaching Tigrigna to the global Ethiopian and Eritrean diaspora." 
            tech="TypeScript · PocketBase · Heroku"
            links={[{label: "Live Project", href: "https://www.learntigrigna.com"}]}
          />
          <ProjectItem 
            title="MZGBT" 
            desc="Digital archive and preservation system for East African historical audio and cultural artifacts." 
            tech="JavaScript · Vue.js · Tailwind"
            links={[{label: "Live Project", href: "https://www.mzgbt.org"}]}
          />
          <ProjectItem 
            title="Discord Spam Remover" 
            desc="Automated moderation tool using the OpenAI API to protect university-scale digital environments." 
            tech="Python · OpenAI API · Discord.py"
            links={[{label: "Source Code", href: "https://github.com/theplaceincan/Discord-Spam-Remover"}]}
          />
        </div>
      </section>

      <section>
        <h2 className="section-line">Expertise</h2>
        <div className="flex flex-row gap-10 flex-wrap">
          <div className="flex-1 min-w-[280px]">
            <h4 className="font-mono text-[0.8rem] font-bold text-accent uppercase mb-3">Full-Stack Development</h4>
            <p className="text-[1.05rem] text-[#444] max-w-[90%]">Building scalable medical and financial websites for startups with a focus on data integrity and performance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExperienceItem({ date, title, desc, tech }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5">
      <div className="font-mono text-[0.8rem] text-[#888] uppercase">{date}</div>
      <div>
        <h4 className="text-[1.2rem] font-normal">{title}</h4>
        <p className="text-[#555] mt-1 mb-2">{desc}</p>
        <div className="font-mono text-[0.7rem] font-bold tracking-widest text-accent uppercase">{tech}</div>
      </div>
    </div>
  );
}

function ProjectItem({ title, desc, tech, links }: any) {
  return (
    <div>
      <h3 className="text-[1.2rem] font-normal text-black mb-2">{title}</h3>
      <p className="text-[1.05rem] text-[#444] mb-4 max-w-[90%]">{desc}</p>
      <div className="font-mono text-[0.7rem] font-bold tracking-widest text-accent uppercase mb-5">{tech}</div>
      <div className="flex gap-6 font-sans text-[0.7rem] font-normal tracking-widest uppercase">
        {links.map((link: any) => (
          <a key={link.label} href={link.href} className="text-[#1a1a1a] border-b border-[#ddd] pb-0.5 hover:border-accent transition-colors">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}