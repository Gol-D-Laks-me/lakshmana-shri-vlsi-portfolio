const { courses, navItems, profile, projects, skillGroups, timeline } = window.portfolioData;

const icon = {
  arrow:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13"/><path d="m12 5 7 7-7 7"/></svg>',
  download:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>',
  mail:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>',
  chip:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="1.5"/><path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3"/></svg>',
};

const app = document.querySelector("#app");

function sectionHeading(label, title, text = "") {
  return `
    <div class="section-heading reveal">
      <span>${label}</span>
      <h2>${title}</h2>
      ${text ? `<p>${text}</p>` : ""}
    </div>
  `;
}

function renderNav() {
  return `
    <header class="site-header" aria-label="Primary navigation">
      <a class="brand-mark" href="#home" aria-label="Go to home">
        <span class="brand-chip"></span>
        <span>LS</span>
      </a>
      <nav>
        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
      </nav>
      <a class="header-link" href="mailto:${profile.email}">Email</a>
    </header>
  `;
}

function renderHero() {
  return `
    <section class="hero scene-section" id="home">
      <div class="paper-noise"></div>
      <div class="hero-copy reveal">
        <h1>${profile.name}</h1>
        <p class="role">${profile.role}</p>
        <p class="summary">${profile.summary}</p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button primary" href="#projects">Enter Portfolio ${icon.arrow}</a>
          <a class="button secondary" href="${profile.resumeUrl}" download>Download Resume ${icon.download}</a>
        </div>
      </div>
      <div class="portal-stage reveal" aria-label="Sketch portfolio entrance">
        <svg class="portal-art" viewBox="0 0 720 520" role="img" aria-labelledby="portal-title">
          <title id="portal-title">Hand-drawn VLSI portfolio entrance</title>
          <path class="sketch" d="M70 450 C160 372 225 330 360 300 C495 330 560 372 650 450"/>
          <path class="sketch thin" d="M360 34 L690 450 M360 34 L30 450"/>
          <path class="sketch thin" d="M180 450 L270 320 M540 450 L450 320"/>
          <path class="sketch door" d="M255 120 h210 v270 h-210 z"/>
          <path class="sketch door" d="M275 143 h170 v247 h-170 z"/>
          <path class="sketch" d="M300 180 h120 M300 215 h120 M300 250 h120"/>
          <path class="sketch chip-line" d="M325 310 h70 v45 h-70 z"/>
          <path class="sketch chip-line" d="M338 323 h44 v19 h-44"/>
          <path class="wave" d="M92 120 h38 l18 42 34-90 28 76 16-28 h48"/>
          <path class="wave delay" d="M470 100 h35 v42 h38 v-42 h35 v42 h55"/>
          <text class="door-text" x="360" y="101" text-anchor="middle">PORTFOLIO LAB</text>
          <text class="door-note" x="360" y="376" text-anchor="middle">Verilog / STA / UVM</text>
          <circle class="accent-dot cyan" cx="498" cy="205" r="8"/>
          <circle class="accent-dot green" cx="218" cy="235" r="7"/>
          <circle class="accent-dot amber" cx="410" cy="326" r="6"/>
          <g class="floor-grid">
            <path d="M92 450 h536"/>
            <path d="M140 420 h440"/>
            <path d="M190 390 h340"/>
            <path d="M238 360 h244"/>
            <path d="M284 330 h152"/>
          </g>
        </svg>
      </div>
      <a class="scroll-cue" href="#projects" aria-label="Scroll to projects">
        <span></span>
      </a>
    </section>
  `;
}

function renderProjects() {
  return `
    <section class="projects scene-section" id="projects">
      ${sectionHeading("Project rooms", "Three builds from the lab", "Each door opens into a resume-backed project with implementation and verification details.")}
      <div class="door-grid">
        ${projects
          .map(
            (project, index) => `
            <article class="project-door reveal accent-${project.accent}" tabindex="0" style="--delay:${index * 90}ms">
              <div class="door-face">
                <span class="door-year">${project.year}</span>
                <h3>${project.title}</h3>
                <p>${project.tag}</p>
              </div>
              <div class="door-inside">
                <p>${project.details}</p>
                <div class="tool-row">${project.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
              </div>
            </article>
          `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section class="skills scene-section" id="skills">
      ${sectionHeading("Skills wall", "Signals, tools, and design flow basics", "A compact wall of chips and labels grouped around VLSI design readiness.")}
      <div class="skill-wall">
        ${skillGroups
          .map(
            (group, index) => `
            <article class="skill-chip reveal" style="--delay:${index * 70}ms">
              <div class="chip-icon">${icon.chip}</div>
              <h3>${group.title}</h3>
              <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
            </article>
          `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTimeline() {
  return `
    <section class="timeline-section scene-section" id="experience">
      ${sectionHeading("Timeline corridor", "Education, workshops, and hands-on exposure", "A guided path through the milestones that shaped the portfolio.")}
      <div class="timeline">
        ${timeline
          .map(
            (item, index) => `
            <article class="timeline-item reveal" style="--delay:${index * 80}ms">
              <time>${item.date}</time>
              <div>
                <span>${item.type}</span>
                <h3>${item.title}</h3>
                <p>${item.detail}</p>
              </div>
            </article>
          `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCourses() {
  return `
    <section class="courses scene-section" id="courses">
      ${sectionHeading("Course notes", "Continuous learning", "Current and completed learning paths that support VLSI and digital design growth.")}
      <div class="course-board reveal">
        ${courses.map((course) => `<p>${course}</p>`).join("")}
      </div>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="contact scene-section" id="contact">
      <div class="contact-terminal reveal">
        <span class="terminal-label">CONTACT TERMINAL</span>
        <h2>Ready to discuss VLSI design opportunities.</h2>
        <p>Reach out for entry-level RTL design, physical design, digital design, or verification-focused roles.</p>
        <div class="contact-actions">
          <a class="button primary" href="mailto:${profile.email}">${icon.mail} Email</a>
          <a class="button secondary" href="${profile.links.linkedIn}" aria-label="LinkedIn placeholder">LinkedIn</a>
          <a class="button secondary" href="${profile.links.github}" aria-label="GitHub placeholder">GitHub</a>
        </div>
      </div>
    </section>
  `;
}

function boot() {
  app.innerHTML = `
    ${renderNav()}
    <main>
      ${renderHero()}
      ${renderProjects()}
      ${renderSkills()}
      ${renderTimeline()}
      ${renderCourses()}
      ${renderContact()}
    </main>
  `;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.16 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

  document.querySelectorAll(".project-door").forEach((door) => {
    door.addEventListener("click", () => door.classList.toggle("is-open"));
    door.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        door.classList.toggle("is-open");
      }
    });
  });
}

boot();
