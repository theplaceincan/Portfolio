'use client';

import { useState } from 'react';

export default function Home() {
  const [projectsShown, setProjectsShown] = useState(0);
  
  const allProjects = [
    {
      type: "Open Source · Tools",
      title: "Novadoc",
      description: "A word processor with inline LaTeX rendering for writing scientific/STEM documents and student notes",
      tech: "TypeScript · Next.js · Supabase",
      links: [{label: "View Live →", href: "https://www.novadoc.app/"}],
    },
    {
      type: "Open Source · Cultural",
      title: "LearnTigrigna",
      description: "Educational platform teaching Tigrigna language to the global Ethiopian and Eritrean diaspora. Features interactive lessons, vocabulary builder, and progress tracking.",
      tech: "TypeScript · PocketBase · Heroku · Audio Processing",
      links: [{label: "View Live →", href: "https://www.learntigrigna.com"}],
    },
    {
      type: "Industry · Healthcare",
      title: "Prime Care Medical Transportation",
      description: "Full-stack web application for a non-emergency medical transportation provider serving patients and healthcare facilities across Southern Nevada.",
      tech: "TypeScript · Next.js · Supabase · PostgreSQL",
      links: [{label: "View Live →", href: "https://primecaremedicaltransportationllc.onrender.com/"}],
    },
    {
      type: "Open Source · Education",
      title: "Younlv.com",
      description: "Comprehensive resource platform serving the UNLV academic community with course information, campus resources, and student tools. Built to scale for thousands of users.",
      tech: "TypeScript · Vue.js · PocketBase · REST API",
      links: [
        {label: "View Live →", href: "https://www.younlv.com"},
        {label: "Source Code →", href: "https://github.com/theplaceincan/Younlv"}
      ],
    },
    {
      type: "Open Source · Archive",
      title: "MZGBT Digital Archive",
      description: "Digital preservation system for East African historical audio and cultural artifacts. Searchable database with metadata tagging and audio streaming capabilities.",
      tech: "JavaScript · Vue.js · Tailwind CSS · Media Storage",
      links: [{label: "View Live →", href: "https://www.mzgbt.org"}],
    },
    {
      type: "Industry · Business",
      title: "MFK Ventures",
      description: "Professional business website for a multi-service company providing tax preparation and commercial janitorial services.",
      links: [{label: "View Live →", href: "https://www.mfkventuress.com/"}],
    },
    {
      type: "Open Source · AI/ML",
      title: "Discord Spam Remover",
      description: "AI-powered automated moderation bot using OpenAI's API to detect and remove spam in university-scale Discord servers. Handles thousands of messages with intelligent classification.",
      tech: "Python · OpenAI API · Discord.py · NLP",
      links: [{label: "Source Code →", href: "https://github.com/theplaceincan/Discord-Spam-Remover"}],
    }
  ];

  const visibleProjects = allProjects.map((project, idx) => ({
    ...project,
    isVisible: idx < 2 || idx < 2 + projectsShown
  }));

  const handleViewMore = () => {
    setProjectsShown(prev => prev + 2);
  };

  const allProjectsVisible = projectsShown >= allProjects.length - 2;

  return (
    <div className="space-y-24">
      {/* ----- Featured Projects ----- */}
      <section id="projects" style={{margin: '100px 0'}}>
        <h2 className="section-header">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {visibleProjects.map((project, idx) => (
            <div 
              key={idx} 
              className="project-card" 
              style={{display: project.isVisible ? 'flex' : 'none'}}
            >
              <div className="project-type">{project.type}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">{project.tech}</div>
              <div className="project-links">
                {project.links.map((link, linkIdx) => (
                  <a 
                    key={linkIdx} 
                    href={link.href} 
                    className="project-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {!allProjectsVisible && (
          <button className="view-more-btn" onClick={handleViewMore}>
            View More Projects
          </button>
        )}
      </section>

      {/* ----- Experience ----- */}
      <section id="experience" style={{margin: '100px 0'}}>
        <h2 className="section-header">Experience</h2>
        
        <div className="experience-item">
          <div className="experience-date">2025 – Present</div>
          <div>
            <h3 className="experience-title">Flight Software Engineer</h3>
            <h4 style={{fontSize: '1.1rem', color: '#666', marginBottom: '15px'}}>RebelSat CubeSat Mission</h4>
            <p className="experience-description">
              Developing embedded flight software for Nevada's first CubeSat satellite project. 
            </p>
            <div className="experience-tech">C · C++ · Embedded Systems · RTOS</div>
          </div>
        </div>

        <div className="experience-item">
          <div className="experience-date">2023 – Present</div>
          <div>
            <h3 className="experience-title">Freelance Software Developer</h3>
            <h4 style={{fontSize: '1.1rem', color: '#666', marginBottom: '15px'}}>Independent</h4>
            <p className="experience-description">
              Building custom web applications for medical startups, financial services, and community organizations.
            </p>
            <div className="experience-tech">React Native · TypeScript · JavaScript · Supabase · PocketBase · Vue.js · Next.js</div>
          </div>
        </div>
      </section>

      {/* ----- Research Interests ----- */}
      <section id="research" style={{margin: '100px 0'}}>
        <h2 className="section-header">Research Interests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="interest-card">
            <h3 className="interest-title">Computation & AI</h3>
            <p className="interest-description">
              Exploring the intersections of symbolic logic, automated moderation, and large language model 
              implementation. Interested in practical applications of AI.
            </p>
          </div>
          <div className="interest-card">
            <h3 className="interest-title">Bioinformatics</h3>
            <p className="interest-description">
              Investigating deep learning tools for computational biology and genomic data visualization. 
              Applying machine learning techniques to biological datasets and healthcare applications.
            </p>
          </div>
        </div>
      </section>

      {/* ----- Certificates ----- */}
      <section id="certificates" style={{margin: '100px 0'}}>
        <h2 className="section-header">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="certificate-card">
            <h3 className="certificate-title">Machine Learning Specialization</h3>
            <div className="certificate-issuer">Stanford University</div>
            <div className="certificate-date">Pursuing</div>
          </div>
          <div className="certificate-card">
            <h3 className="certificate-title">Oracle Cloud Infrastructure AI Foundations</h3>
            <div className="certificate-issuer">Oracle</div>
            <div className="certificate-date">2025</div>
          </div>
        </div>
      </section>

      {/* ----- Education ----- */}
      <section id="education" style={{margin: '100px 0'}}>
        <h2 className="section-header">Education</h2>
        <div className="experience-item" style={{border: 'none', padding: 0}}>
          <div className="experience-date">2023 – 2027</div>
          <div>
            <h3 className="experience-title">University of Nevada, Las Vegas</h3>
            <p className="experience-description">
              Bachelor of Science in Computer Science<br/>
              Minor in Mathematics
            </p>
            <div className="experience-tech">Algorithms · Database Systems · Cloud Computing · Linear Algebra · Automata Theory</div>
          </div>
        </div>
      </section>
    </div>
  );
}