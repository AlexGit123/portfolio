<template>
  <section id="projects" class="projects-section" aria-labelledby="projects-title">
    <div class="texture-layer" aria-hidden="true"></div>

    <header class="projects-header">
      <p class="section-kicker">Selected Work</p>
      <div class="header-grid">
        <h2 id="projects-title" class="opacity-80">PROJECTS</h2>
        <p>A compact look at systems and tools I have designed and built.</p>
      </div>
    </header>

    <div class="projects-layout">
      <div class="project-list" aria-label="Project list">
        <button
          v-for="project in projects"
          :key="project.id"
          class="project-row"
          :class="{ active: activeProject.id === project.id }"
          type="button"
          :aria-expanded="activeProject.id === project.id"
          @click="selectProject(project.id)"
          @mouseenter="selectProject(project.id)"
        >
          <span class="project-index">{{ project.index }}</span>

          <span class="project-copy">
            <span class="project-title">{{ project.title }}</span>
            <span class="project-summary">{{ project.summary }}</span>
          </span>

          <span class="project-date-type">
            <span>{{ project.year }}</span>
            <span>{{ project.type }}</span>
          </span>

          <span class="project-plus" aria-hidden="true"></span>
        </button>
      </div>

      <aside class="project-preview" aria-live="polite">
        <div class="preview-art" :class="activeProject.visualClass" aria-hidden="true">
          <span class="preview-label">{{ activeProject.index }}</span>
          <div class="preview-grid"></div>
        </div>

        <div class="grid">
          <div
            v-for="project in projects"
            :key="project.id"
            class="preview-content"
            :class="{ active: activeProject.id === project.id }"
            :aria-hidden="activeProject.id !== project.id"
          >
            <p class="preview-kicker">{{ project.client }}</p>
            <h3>{{ project.title }}</h3>
            <p class="preview-description">{{ project.description }}</p>

            <dl class="project-facts">
              <div>
                <dt>Role</dt>
                <dd>{{ project.role }}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{{ project.status }}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{{ project.outcome }}</dd>
              </div>
            </dl>

            <div class="tech-list" aria-label="Technology stack">
              <span v-for="tech in project.stack" :key="tech">{{ tech }}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type Project = {
  id: string
  index: string
  title: string
  summary: string
  description: string
  client: string
  role: string
  status: string
  outcome: string
  year: string
  type: string
  stack: string[]
  visualClass: string
}

const projects: Project[] = [
  {
    id: 'roster-generator',
    index: '01',
    title: 'RoosterMaker',
    summary:
      'Desktop application that converts Excel and CSV roster data into professionally formatted Word schedules.',
    description:
      'Built a Windows desktop application for importing staff schedule data, parsing shifts and availability, filtering rosters by month, and automatically generating consistently formatted DOCX documents.',
    client: 'Woondroom Middelburg',
    role: 'Freelance Software Engineer',
    status: 'Shipped product',
    outcome:
      'Automated a repetitive roster-document workflow, turning existing spreadsheet data into standardized monthly Word schedules with minimal manual formatting.',
    year: '2026',
    type: 'Operations automation',
    stack: ['Electron', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia', 'Vite'],
    visualClass: 'visual-roster'
  },
  {
    id: 'ione-js',
    index: '02',
    title: 'IONE-JS',
    summary:
      'ERP platform used to manage finances, logistics, HR, and day-to-day business operations.',
    description:
      'Worked as a frontend developer on an ERP platform, building new features, improving data-heavy business interfaces, integrating REST APIs, and refactoring legacy code into more maintainable and reusable components.',
    client: 'Colijn-IT',
    role: 'Frontend Developer',
    status: 'Completed',
    outcome:
      'Delivered and improved ERP interfaces across multiple business modules, with a focus on usability, maintainability, consistency, and reliable integration with back-end services for better user experience.',
    year: '2025 — 2026',
    type: 'Enterprise software',
    stack: ['Angular', 'TypeScript', 'SCSS', 'Java', 'GitHub Co-pilot', 'Git'],
    visualClass: 'visual-surface'
  },
  {
    id: 'portfolio',
    index: '03',
    title: 'Portfolio Website',
    summary: 'Personal portfolio showcasing projects, skills, and professional work.',
    description:
      'Web-portfolio built with Vue and TypeScript that presents selected works. Used to demonstrate skills in software development, design, and user experience.',
    client: 'Personal project',
    role: 'Design and Development',
    status: 'Live',
    outcome: 'Professional showcase of work.',
    year: '2026',
    type: 'Personal website',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Tailwind CSS', 'Three.js'],
    visualClass: 'visual-surface'
  }
]

const activeProjectId = ref(projects[0].id)

const activeProject = computed(() => {
  return projects.find((project) => project.id === activeProjectId.value) ?? projects[0]
})

function selectProject(projectId: string) {
  activeProjectId.value = projectId
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Ramabhadra&display=swap');

/* layout and background texture */
.projects-section {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: clamp(2rem, 5vw, 4.5rem);
  color: #f4f0ea;
  background: linear-gradient(
      115deg,
      rgba(0, 0, 0, 0.92),
      rgba(12, 12, 12, 0.72) 48%,
      rgba(0, 0, 0, 0.96)
    ),
    #050505;
}

.texture-layer {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background: repeating-linear-gradient(
      105deg,
      rgba(255, 255, 255, 0.1) 0,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 14px
    ),
    radial-gradient(ellipse at 45% 20%, rgba(116, 104, 93, 0.4), transparent 60%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.75), transparent 40%, rgba(0, 0, 0, 0.7));
  pointer-events: none;
}

/* header */
.projects-header,
.projects-layout {
  position: relative;
  z-index: 1;
}

.projects-header {
  max-width: 1180px;
  margin: 0 auto clamp(2.25rem, 5vw, 4.5rem);
}

.header-grid {
  display: grid;
  align-items: end;
}

.header-grid h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4.5rem, 13vw, 11rem);
  line-height: 0.85;
}

.header-grid p {
  max-width: 35rem;
  color: rgba(244, 240, 234, 0.7);
  font-family: 'Ramabhadra', sans-serif;
  font-size: clamp(1rem, 1.55vw, 1.35rem);
  line-height: 1.55;
}

.section-kicker {
  margin: 0 0 0.6rem;
  color: #c47718;
  font-size: clamp(1rem, 1.5vw, 1.25rem);
}

/* font */
.section-kicker,
.preview-kicker,
.project-index,
.project-date-type,
.project-facts dt,
.tech-list span {
  font-family: 'Bebas Neue', sans-serif;
  letter-spacing: 0.1em;
}

/* project card */
.projects-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 0.7fr);
  gap: clamp(1.2rem, 3vw, 2rem);
  max-width: 1180px;
  margin: auto;
}

.project-list {
  display: grid;
  gap: 0.85rem;
}

.project-row {
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr) auto 3rem;
  align-items: center;
  gap: clamp(0.8rem, 2vw, 1.5rem);
  min-height: 8rem;
  padding: 1.15rem clamp(1rem, 2.5vw, 2rem);
  border: 1px solid rgba(244, 240, 234, 0.1);
  border-radius: 8px;
  text-align: left;
  transition:
    border-color 180ms ease,
    background 180ms ease,
    transform 180ms ease,
    box-shadow 180ms ease;
}

.project-row:hover,
.project-row:focus-visible,
.project-row.active {
  border-color: rgba(196, 119, 24, 0.70);
  background: linear-gradient(90deg, rgba(120, 100, 88, 0.95), rgba(80, 70, 60, 0.8)),
    rgba(31, 33, 34, 0.9);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5);
  transform: translateX(0.45rem);
}

.project-row:focus-visible {
  outline: 2px solid #c47718;
  outline-offset: 4px;
}

.project-index {
  color: rgba(244, 240, 234, 0.5);
  font-size: 1.25rem;
}
.project-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  line-height: 1;
}

.project-copy {
  display: grid;
  gap: 0.35rem;
}

.project-summary {
  color: rgba(244, 240, 234, 0.64);
  font-family: 'Ramabhadra', sans-serif;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  line-height: 1.5;
}

.project-date-type {
  display: grid;
  gap: 0.3rem;
  min-width: 6.5rem;
  color: rgba(244, 240, 234, 0.58);
  font-size: 0.95rem;
  text-align: right;
}

.project-plus {
  position: relative;
  display: inline-grid;
  width: 3rem;
  aspect-ratio: 1;
  place-items: center;
  border: 1px solid rgba(244, 240, 234, 0.72);
  border-radius: 50%;
  transition:
    border-color 180ms ease,
    transform 180ms ease;
}

.project-plus::before,
.project-plus::after {
  position: absolute;
  width: 1rem;
  height: 1px;
  background: currentColor;
  content: '';
}

.project-plus::after {
  transform: rotate(90deg);
}

.project-row.active .project-plus {
  border-color: #c47718;
  color: #c47718;
  transform: rotate(45deg);
}

.project-preview {
  display: grid;
  align-content: start;
  gap: 1.25rem;
}

/* image placeholder */
.preview-art {
  position: relative;
  min-height: clamp(15rem, 30vw, 24rem);
  overflow: hidden;
  border: 1px solid rgba(244, 240, 234, 0.12);
  border-radius: 8px;
  background: #161616;
  /* box-shadow: 0 28px 80px rgba(0, 0, 0, 0.34); */
}

.preview-label {
  position: absolute;
  right: 1rem;
  color: rgba(244, 240, 234, 0.1);
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(6rem, 16vw, 12rem);
  line-height: 1;
}

/* content stack */
.preview-grid {
  background-image: linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 5rem 5rem;
  mask-image: linear-gradient(120deg, transparent 0%, black 30%, black 80%, transparent 100%);
}

.preview-content {
  grid-area: 1 / 1;
  display: grid;
  gap: 1rem;
}

.preview-content:not(.active) {
  visibility: hidden;
  pointer-events: none;
}

.preview-kicker {
  color: #c47718;
  font-size: 1rem;
}

.preview-content h3 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 1;
}

.preview-description {
  color: rgba(244, 240, 234, 0.7);
  font-family: 'Ramabhadra', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

.project-facts {
  display: grid;
  gap: 0.65rem;
}

.project-facts div {
  display: grid;
  grid-template-columns: 4rem minmax(0, 1fr);
  gap: 1rem;
  padding-top: 0.65rem;
  border-top: 1px solid rgba(244, 240, 234, 0.1);
}

.project-facts dt {
  color: rgba(244, 240, 234, 0.5);
  font-size: 0.92rem;
}

.project-facts dd {
  color: rgba(244, 240, 234, 0.85);
  font-family: 'Ramabhadra', sans-serif;
  font-size: 0.9rem;
  line-height: 1.45;
}

/* icons */
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  padding-top: 0.35rem;
}

.tech-list span {
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0.35rem 0.7rem;
  border: 1px solid rgba(244, 240, 234, 0.15);
  border-radius: 1000px;
  color: rgba(244, 240, 234, 0.70);
  background: rgba(255, 255, 255, 0.05);
  font-size: 0.85rem;
}

@media (max-width: 920px) {
  .header-grid,
  .projects-layout {
    grid-template-columns: 1fr;
  }

  .projects-layout {
    gap: 1.6rem;
  }

  .project-row {
    grid-template-columns: 2.7rem minmax(0, 1fr) 2.8rem;
  }

  .project-date-type {
    grid-column: 2 / 3;
    grid-row: 2;
    display: flex;
    min-width: 0;
    gap: 0.85rem;
    text-align: left;
  }

  .project-plus {
    grid-column: 3;
    grid-row: 1 / span 2;
  }
}

@media (max-width: 560px) {
  .projects-section {
    padding: 1.35rem;
  }

  .project-row {
    grid-template-columns: 1fr 2.6rem;
    min-height: 8.5rem;
    transform: none;
  }

  .project-row:hover,
  .project-row:focus-visible,
  .project-row.active {
    transform: none;
  }

  .project-index {
    grid-column: 1 / -1;
  }

  .project-plus {
    grid-column: 2;
    grid-row: 2 / span 2;
  }

  .project-date-type {
    grid-column: 1;
  }

  .project-facts div {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
</style>
