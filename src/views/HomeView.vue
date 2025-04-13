<script setup>
import { Icon } from '@iconify/vue'
import HeroDownArrow from '@/components/HeroDownArrow.vue'
</script>

<template>
  <main>
    <section class="hero">
      <h1>Thomas Ranieri</h1>
      <p class="hero-subtitle">I like to make things that help people.</p>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/thomas-ranieri-dev/" class="social-link">
          <Icon icon="mdi:linkedin" />
        </a>
        <a href="https://github.com/thomasranieri" class="social-link">
          <Icon icon="mdi:github" />
        </a>
      </div>
      <HeroDownArrow />
    </section>

    <h2>Projects</h2>
    <div class="project-cards">
      <article class="project-card">
        <h3 class="project-title">ClassGen</h3>
        <div class="project-tech-list">
          <div class="project-tech">
            <b>Backend</b>: Python, Flask, SQLAlchemy, Alembic, PostgreSQL
          </div>
          <div class="project-tech"><b>Frontend</b>: JavaScript, Vue, Webpack</div>
          <div class="project-tech">
            <b>DevOps</b>: git, bash, Ubuntu, supervisor, Heroku, Google Cloud Platform
          </div>
        </div>
        <div>
          <p>
            ClassGen is a digital marksbook for teachers. Manage, calculate, email and print grade
            summaries from one place. Students can also submit their work.
          </p>
          <p>
            I created this web app entirely by myself, including backend, frontend, DevOps, user
            interface, interviewing stakeholders to gather feedback and requirements, engaging with
            users, technical support, etc. I migrated from Heroku to Google Cloud Platform (GCP) to
            reduce costs and improve performance.
          </p>
          <p>
            ClassGen now has 600+ users, storing 200k+ grades and 10k+ comments. I also receive lovely emails from
            teachers who use the product and receive some <a href="https://www.facebook.com/classgenmarks/reviews">nice
              reviews</a> too.
          </p>
        </div>
      </article>
      <article class="project-card">
        <h3 class="project-title">Unshuffler</h3>
        <div class="project-tech-list">
          <div class="project-tech">
            <b>Backend</b>: TypeScript, Next.js, Prisma, SQLite, OpenAI API
          </div>
          <div class="project-tech"><b>Frontend</b>: React (JavaScript)</div>
          <div class="project-tech"><b>DevOps</b>: Vercel, OCI Compute VM, Sentry</div>
        </div>
        <div>
          <p>
            Unshuffler is a word puzzle game. Each day, three new puzzles are generated for players
            to solve. Players can share their results with family and friends.
          </p>
          <p>
            It has previously been hosted on Vercel, but now lives in its own self-hosted Oracle VM
            with improved performance and reliability.
          </p>
        </div>
      </article>
      <article class="project-card">
        <h3 class="project-title">Pulteney Canvas Toolbelt</h3>
        <div class="project-tech-list">
          <div class="project-tech">
            <b>Frontend</b>: Vue (JavaScript), Vite, Canvas REST API, GraphQL, CSS
          </div>
          <div class="project-tech"><b>DevOps</b>: GitHub Actions, Power Automate</div>
        </div>
        <div>
          <p>
            I designed, developed and deployed a "Pulteney Canvas Toolbelt" to help teachers explore
            data in Canvas and manage their courses.
          </p>
          <p>
            GitHub actions are used for continuous deployment of the production build to Azure
            Storage. Power Automate is used to schedule other repetitive data flows, such as
            backups, admin notifications and logging.
          </p>
        </div>
      </article>
      <article class="project-card">
        <h3 class="project-title">Speedy</h3>
        <div class="project-tech-list">
          <div class="project-tech"><b>Backend</b>: Python, Microsoft SQL Server (T-SQL)</div>
          <div class="project-tech">
            <b>Frontend</b>: Vue (JavaScript), Vite, Microsoft Graph API, Webpack
          </div>
        </div>
        <div>
          <p>
            I designed, developed and deployed a "Speedy" timetable tool for staff to explore time
            and place arrangements (timetables, rooms, students, teachers, subjects, etc).
          </p>
          <p>
            Backend uses Python/Microsoft SQL (T-SQL) for data scraping and transformation,
            JSON/SharePoint for storage and archival. The data is stored securely within trusted organisational
            infrastructure (SharePoint).
          </p>
          <p>
            Speedy is an optional tool that spreads internally via word of mouth. And yet 88% of Year 7-12 teachers
            choose use Speedy on a regular basis. This is a result of obsessive attention to user experience, with rapid
            deployment, continuous iteration and high availability.
          </p>
        </div>
      </article>
      <article class="project-card">
        <h3 class="project-title">Revolting</h3>
        <div class="project-tech-list">
          <div class="project-tech"><b>Frontend</b>: React (JavaScript), Vite</div>
          <div class="project-tech"><b>Backend</b>: Netlify functions, OpenAI API, TypeScript</div>
          <div class="project-tech"><b>DevOps</b>: Netlify for CI/CD</div>
        </div>
        <div>
          <p>
            It's important to have fun. This is a silly project that I made to play with Netlify
            functions, OpenAI API and React.
          </p>
          <p>It generates melodramatic propaganda speeches about a topic of your choice.</p>
        </div>
      </article>
    </div>
  </main>
</template>
<style scoped>
h1 {
  font-size: 10vmin;
  margin-bottom: 20px;
  margin-top: auto;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
  height: 100vh;
  width: 100%;
  background-color: #0077b5;
  color: white;
}

.hero-subtitle {
  font-size: 3vmin;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  font-size: 100px;
  color: white;

  &:hover {
    color: black;
  }
}

.project-card {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-title {
  font-size: 2vmin;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
}

.project-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
