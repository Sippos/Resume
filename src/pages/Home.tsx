import { Settings, Hammer, Globe, Mail, Phone, MapPin } from 'lucide-react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-[var(--bg)] font-['Inter',system-ui,sans-serif] text-[var(--ink)] leading-[1.45]">
      <Header />

      <main
        id="main-content"
        className="mx-auto grid max-w-[1240px] gap-[clamp(3rem,7vw,6rem)] px-[clamp(1rem,5vw,3rem)] pb-20 pt-[clamp(2rem,5vw,4rem)]"
      >
        <section
          id="projects-software"
          className="grid gap-5"
          aria-labelledby="projects-software-heading"
        >
          <h2
            id="projects-software-heading"
            className="mb-2 flex items-center gap-3 font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-none tracking-[-0.055em]"
          >
            Softwareentwicklung <Settings className="text-[var(--muted)]" size={32} strokeWidth={1.5} />
          </h2>

          <p className="max-w-[560px] text-[0.95rem] text-[var(--muted)]">
            Projekte und Websites aus den Bereichen Webentwicklung und Software-Design.
          </p>

          <div
            className="grid grid-cols-1 gap-[clamp(1rem,2vw,1.4rem)] md:grid-cols-2 lg:grid-cols-3"
            aria-label="Software project list"
          >
            <article className="group relative overflow-hidden bg-transparent">
              <img
                className="block aspect-video w-full bg-[rgb(17_17_17_/_0.06)] object-cover transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                src="/Resume/assets/software/frueher.png"
                alt="Cover image for Früher oder Später"
                loading="lazy"
              />
              <div className="pt-3">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]">Card Game</span>
                  <span className="flex items-center gap-1 rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]"><i className="devicon-react-original colored"></i> React</span>
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]">Vite</span>
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]">Phaser</span>
                </div>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  Früher oder Später
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Ein Online-Kartenspiel über Prokrastination mit 2 Player Local Co-Op.
                </p>
              </div>
              <a
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                href="https://frueher-oder-spaeter.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </article>

            <article className="group relative overflow-hidden bg-transparent">
              <img
                className="block aspect-video w-full bg-[rgb(17_17_17_/_0.06)] object-cover transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                src="/Resume/assets/software/cliquebase.png"
                alt="Cover image for CliqueBase"
                loading="lazy"
              />
              <div className="pt-3">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]">Community Database</span>
                  <span className="flex items-center gap-1 rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]"><i className="devicon-react-original colored"></i> React</span>
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]">Supabase</span>
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]">Vercel</span>
                </div>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  CliqueBase
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Eine Datenbank für die Auslagerung von Gruppenchats - füge Filme, Videos, Bücher als Vorschläge in deiner Clique hinzu
                </p>
              </div>
              <a
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                href="https://clique-base.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live App
              </a>
            </article>

            <article className="group relative overflow-hidden bg-transparent">
              <img
                className="block aspect-video w-full bg-[rgb(17_17_17_/_0.06)] object-cover transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                src="/Resume/assets/software/SpriteWorkbench.png"
                alt="Cover image for Sprite Workbench"
                loading="lazy"
              />
              <div className="pt-3">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]">Game Tool</span>
                  <span className="flex items-center gap-1 rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]"><i className="devicon-react-original colored"></i> React</span>
                  <span className="rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]">Vite</span>
                  <span className="flex items-center gap-1 rounded-full border border-[var(--line)] px-2 py-0.5 text-[0.65rem] font-medium text-[rgb(17_17_17_/_0.72)] bg-[var(--bg)]"><i className="devicon-typescript-plain colored"></i> TypeScript</span>
                </div>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  Sprite Workbench
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Eine Software, um Character Spritesheets in einzelne Sprites für Game Engines zu erstellen
                </p>
              </div>
              <a
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                href="https://github.com/Sippos/Sprite-Workbench"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </article>
          </div>
        </section>

        <section
          id="projects-id"
          className="grid gap-5 pt-8 border-t border-[var(--line)]"
          aria-labelledby="projects-id-heading"
        >
          <h2
            id="projects-id-heading"
            className="mb-2 flex items-center gap-3 font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-none tracking-[-0.055em]"
          >
            Industrial Design <Hammer className="text-[var(--muted)]" size={32} strokeWidth={1.5} />
          </h2>

          <p className="max-w-[560px] text-[0.95rem] text-[var(--muted)]">
            Eine Auswahl meiner Arbeiten aus Industrial Design, User Research,
            Prototyping, 3D-Modellierung und Konzeptentwicklung.
          </p>

          <div
            className="grid grid-cols-1 gap-[clamp(1rem,2vw,1.4rem)] md:grid-cols-2 lg:grid-cols-3"
            aria-label="Project list"
          >
            <article className="group relative overflow-hidden bg-transparent">
              <img
                className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                src="/Resume/assets/DFKI_nature_robots/cover.jpg"
                alt="Cover image for Lero 2 Roboter"
                loading="lazy"
              />
              <div className="pt-3">
                <p className="mb-1 text-[0.72rem] font-semibold tracking-[0.04em] text-[var(--muted)]">
                  DFKI / nature robots
                </p>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  Lero 2 Roboter
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Design- und Konstruktionsplanung eines autonomen Landwirtschaftsroboter
                </p>
              </div>
              <Link
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                to="/projects/project-05"
              >
                View project
              </Link>
            </article>

            <article className="group relative overflow-hidden bg-transparent">
              <img
                className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                src="/Resume/assets/mixed-reality-model/cover.jpg"
                alt="Cover image for Mixed Reality Model"
                loading="lazy"
              />
              <div className="pt-3">
                <p className="mb-1 text-[0.72rem] font-semibold tracking-[0.04em] text-[var(--muted)]">
                  UX / Research / Prototype
                </p>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  Mixed Reality Model
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Städtemodell Hamburgs mit 1000 3D gedruckten Gebäuden mit UI für StädteplannerInnen
                </p>
              </div>
              <Link
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                to="/projects/project-02"
              >
                View project
              </Link>
            </article>

            <article className="group relative overflow-hidden bg-transparent">
              <img
                className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                src="/Resume/assets/revive/cover.png"
                alt="Cover image for Bachelor Project"
                loading="lazy"
              />
              <div className="pt-3">
                <p className="mb-1 text-[0.72rem] font-semibold tracking-[0.04em] text-[var(--muted)]">
                  Bachelor Thesis / Product Concept
                </p>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  Bachelor Project
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Ein Gerät zur Unterstützung von Alltagsproblemen neurodivergenter Menschen
                </p>
              </div>
              <Link
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                to="/projects/project-04"
              >
                View project
              </Link>
            </article>

            <article className="group relative overflow-hidden bg-transparent">
              <img
                className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                src="/Resume/assets/donda-stick/cover.png"
                alt="Cover image for DONDA stick"
                loading="lazy"
              />
              <div className="pt-3">
                <p className="mb-1 text-[0.72rem] font-semibold tracking-[0.04em] text-[var(--muted)]">
                  Industrial Design / Concept
                </p>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  DONDA stick
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Ein Datenträgerdesign nach dem Album DONDA
                </p>
              </div>
              <Link
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                to="/projects/project-01"
              >
                View project
              </Link>
            </article>

            <article className="group relative overflow-hidden bg-transparent">
              <img
                className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                src="/Resume/assets/figuren/cover.png"
                alt="Cover image for Figuren"
                loading="lazy"
              />
              <div className="pt-3">
                <p className="mb-1 text-[0.72rem] font-semibold tracking-[0.04em] text-[var(--muted)]">
                  3D / CAD / Rendering
                </p>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  Figuren
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Meine Leidenschaft, Figuren von KünstlerInnen in 3D gestalten und drucken oder animieren
                </p>
              </div>
              <Link
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                to="/projects/project-03"
              >
                View project
              </Link>
            </article>

            <article className="group relative overflow-hidden bg-transparent">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <video
                      class="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-contain transition duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[0.88]"
                      src="/Resume/assets/clothes/cover.mp4"
                      autoplay
                      muted
                      loop
                      playsinline
                      preload="metadata"
                      aria-label="Preview video for Clothes project"
                    ></video>
                  `
                }}
              />

              <div className="pt-3">
                <p className="mb-1 text-[0.72rem] font-semibold tracking-[0.04em] text-[var(--muted)]">
                  From 3D to Reality
                </p>
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold tracking-[-0.025em]">
                  Clothes
                </h3>
                <p className="mt-1 text-[0.85rem] leading-snug text-[var(--muted)]">
                  Klamottendesign in 3D, Schnittmustererstellung und Nähen
                </p>
              </div>
              <Link
                className="absolute inset-0 grid place-items-center bg-[rgb(0_0_0_/_0.32)] text-[0.85rem] font-bold text-white opacity-0 no-underline transition-opacity duration-300 after:content-['_→'] group-hover:opacity-100"
                to="/clothes"
              >
                View project
              </Link>
            </article>
          </div>
        </section>

        <section id="about" className="max-w-[760px]" aria-labelledby="summary-heading">
          <h2
            id="summary-heading"
            className="mb-5 font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-none tracking-[-0.055em]"
          >
            Über mich
          </h2>
          <p className="max-w-[70ch] text-[rgb(17_17_17_/_0.7)]">
            Industriedesigner mit ersten Erfahrungen in Agenturarbeit und
            Startup-Umgebung. Begeistert von Innovationen, Technologien und deren
            Potenzial, das Leben von Menschen zu verbessern. Mit Stärke im
            Designprozess von User Journeys, Research, Ideation, Ideenentwicklung
            und 3D-Modellierung.
          </p>
        </section>

        <section
          id="education"
          className="grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-[minmax(160px,0.32fr)_1fr]"
          aria-labelledby="education-heading"
        >
          <h2
            id="education-heading"
            className="font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.1rem,2vw,1.35rem)] font-bold leading-none tracking-[-0.035em]"
          >
            Bildungsweg
          </h2>
          <ul className="grid list-none">
            <li className="grid gap-1 border-t border-[var(--soft-line)] py-4 first:border-t-0 first:pt-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold">
                  KI Softwareentwicklung
                </h3>
                <span className="whitespace-nowrap text-[0.92rem] font-medium">2026–Heute</span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[0.92rem] text-[var(--muted)]">WBS Coding School</p>
                <span className="whitespace-nowrap text-[0.92rem] text-[var(--muted)]">April – Heute</span>
              </div>
              <p className="mt-1 text-[0.92rem] text-[var(--muted)]">
                Skills: HTML, CSS, React, Git, JavaScript, TypeScript
              </p>
            </li>
            <li className="grid gap-1 border-t border-[var(--soft-line)] py-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold">
                  Industrial Design
                </h3>
                <span className="whitespace-nowrap text-[0.92rem] font-medium">2020–2024</span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[0.92rem] text-[var(--muted)]">Hochschule Osnabrück</p>
                <div className="text-right">
                  <span className="block whitespace-nowrap text-[0.92rem] text-[var(--muted)]">8 Semester</span>
                  <span className="block whitespace-nowrap text-[0.92rem] text-[var(--muted)]">Okt. – Aug.</span>
                </div>
              </div>
              <p className="mt-1 text-[0.92rem] text-[var(--muted)]">
                Skills: Blender, Unity, Unreal Engine, Rhinoceros 7, Adobe CC
              </p>
              <p className="mt-1 text-[0.92rem] text-[var(--muted)]">
                Bachelorarbeit: Ein konzeptioneller Entwurf eines Produktes zur<br />
                Alltagsbewältigung von neurodivergenten Menschen.<br />
                Note: 1,5
              </p>
            </li>
            <li className="grid gap-1 border-t border-[var(--soft-line)] py-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold">
                  Germanistik & Geschichte
                </h3>
                <span className="whitespace-nowrap text-[0.92rem] font-medium">2016–2019</span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[0.92rem] text-[var(--muted)]">Universität Osnabrück</p>
                <div className="text-right">
                  <span className="block whitespace-nowrap text-[0.92rem] text-[var(--muted)]">6 Semester</span>
                  <span className="block whitespace-nowrap text-[0.92rem] text-[var(--muted)]">Okt. – Okt.</span>
                </div>
              </div>
            </li>
            <li className="grid gap-1 border-t border-[var(--soft-line)] py-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold">
                  Rechtswissenschaften
                </h3>
                <span className="whitespace-nowrap text-[0.92rem] font-medium">2014–2016</span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[0.92rem] text-[var(--muted)]">Universität Osnabrück</p>
                <div className="text-right">
                  <span className="block whitespace-nowrap text-[0.92rem] text-[var(--muted)]">4 Semester</span>
                  <span className="block whitespace-nowrap text-[0.92rem] text-[var(--muted)]">Okt. – Okt.</span>
                </div>
              </div>
            </li>
          </ul>
        </section>

        <section
          id="experience"
          className="grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-[minmax(160px,0.32fr)_1fr]"
          aria-labelledby="experience-heading"
        >
          <h2
            id="experience-heading"
            className="font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.1rem,2vw,1.35rem)] font-bold leading-none tracking-[-0.035em]"
          >
            Erfahrungen
          </h2>
          <ul className="grid list-none">
            <li className="grid gap-1 border-t border-[var(--soft-line)] py-4 first:border-t-0 first:pt-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold">
                  Hilfswissenschaftlicher Mitarbeiter
                </h3>
                <span className="whitespace-nowrap text-[0.92rem] font-medium">2022–2023</span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[0.92rem] text-[var(--muted)]">DFKI / nature robots</p>
                <span className="whitespace-nowrap text-[0.92rem] text-[var(--muted)]">Okt. – Apr.</span>
              </div>
              <p className="mt-1 text-[0.92rem] text-[var(--muted)]">
                Design und Konstruktion eines autonomen Landwirtschaftsroboters.
              </p>
              <p className="text-[0.92rem] text-[var(--muted)]">
                Tätigkeiten: Lastenhefterstellung, User Experience, Roadmap und
                Konstruktionsplanung.
              </p>
            </li>
            <li className="grid gap-1 border-t border-[var(--soft-line)] py-4">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-base font-bold">
                  Praktikum
                </h3>
                <span className="whitespace-nowrap text-[0.92rem] font-medium">2021–2022</span>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[0.92rem] text-[var(--muted)]">use institute</p>
                <span className="whitespace-nowrap text-[0.92rem] text-[var(--muted)]">Aug. – Jan.</span>
              </div>
              <p className="mt-1 text-[0.92rem] text-[var(--muted)]">
                Agenturarbeiten, Begleitung gesamter Designprozesse für
                Industriemaschinen, Drohnen und Ausstellungen.
              </p>
              <p className="text-[0.92rem] text-[var(--muted)]">
                Tätigkeiten: User Research, Ideation, Modellbau und
                VR-Präsentation.
              </p>
            </li>
          </ul>
        </section>

        <section
          id="skills"
          className="grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-[minmax(160px,0.32fr)_1fr]"
          aria-labelledby="skills-heading"
        >
          <h2
            id="skills-heading"
            className="font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.1rem,2vw,1.35rem)] font-bold leading-none tracking-[-0.035em]"
          >
            Skills
          </h2>
          <div className="grid gap-5">
            <div className="grid gap-3">
              <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-[0.9rem] font-bold tracking-[-0.02em]">
                Software Development
              </h3>
              <ul className="flex list-none flex-wrap gap-2">
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Frontend Development
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Version Control (Git)
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Web Development
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Agile / Scrum
                </li>
              </ul>
            </div>

            <div className="grid gap-3">
              <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-[0.9rem] font-bold tracking-[-0.02em]">
                Industrial Design
              </h3>
              <ul className="flex list-none flex-wrap gap-2">
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Modellbau
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Prototyping & Ideation
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  3D / CAD-Modellierung
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  User Research
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  UI / UX
                </li>
              </ul>
            </div>

            <div className="grid gap-3">
              <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-[0.9rem] font-bold tracking-[-0.02em]">
                Soft Skills
              </h3>
              <ul className="flex list-none flex-wrap gap-2">
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Empathisch
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Out-of-the-box-Denken
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Schnelle Auffassungsgabe
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Hingebungsvoll
                </li>
                <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Aufgeschlossen
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="tools"
          className="grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-[minmax(160px,0.32fr)_1fr]"
          aria-labelledby="tools-heading"
        >
          <h2
            id="tools-heading"
            className="font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.1rem,2vw,1.35rem)] font-bold leading-none tracking-[-0.035em]"
          >
            Tools
          </h2>
          <div className="grid gap-5">
            <div className="grid gap-3">
              <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-[0.9rem] font-bold tracking-[-0.02em]">
                Software Development
              </h3>
              <ul className="flex list-none flex-wrap gap-2">
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-typescript-plain colored text-lg"></i> TypeScript
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-javascript-plain colored text-lg"></i> JavaScript
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-react-original colored text-lg"></i> React
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-html5-plain colored text-lg"></i> HTML
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-css3-plain colored text-lg"></i> CSS
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-unity-original text-lg"></i> Unity
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-unrealengine-original text-lg"></i> Unreal Engine
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-git-plain colored text-lg"></i> Git
                </li>
              </ul>
            </div>

            <div className="grid gap-3">
              <h3 className="font-['Inter_Tight',system-ui,sans-serif] text-[0.9rem] font-bold tracking-[-0.02em]">
                Industrial Design
              </h3>
              <ul className="flex list-none flex-wrap gap-2">
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-blender-original colored text-lg"></i> Blender
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  Rhinoceros 7
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-illustrator-plain colored text-lg"></i> Adobe CC
                </li>
                <li className="flex items-center gap-2 rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem] font-medium text-[rgb(17_17_17_/_0.72)]">
                  <i className="devicon-figma-plain colored text-lg"></i> Figma
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="languages"
          className="grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-[minmax(160px,0.32fr)_1fr]"
          aria-labelledby="languages-heading"
        >
          <h2
            id="languages-heading"
            className="font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.1rem,2vw,1.35rem)] font-bold leading-none tracking-[-0.035em]"
          >
            Sprachen
          </h2>
          <ul className="flex list-none flex-wrap gap-2">
            <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem]">
              Deutsch: Muttersprache
            </li>
            <li className="rounded-full border border-[var(--line)] px-3 py-1.5 text-[0.86rem]">
              Englisch: B2-Niveau
            </li>
          </ul>
        </section>

        <section
          id="references"
          className="grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-[minmax(160px,0.32fr)_1fr]"
          aria-labelledby="references-heading"
        >
          <h2
            id="references-heading"
            className="font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.1rem,2vw,1.35rem)] font-bold leading-none tracking-[-0.035em]"
          >
            Referenzen
          </h2>
          <p className="font-semibold">
            <a href="https://sipp.design">sipp.design</a>
          </p>
        </section>

        <section
          id="contact"
          className="grid gap-6 border-t border-[var(--line)] pt-6 md:grid-cols-[minmax(160px,0.32fr)_1fr]"
          aria-labelledby="contact-heading"
        >
          <h2
            id="contact-heading"
            className="font-['Inter_Tight',system-ui,sans-serif] text-[clamp(1.1rem,2vw,1.35rem)] font-bold leading-none tracking-[-0.035em]"
          >
            Contact
          </h2>
          <address className="not-italic flex flex-col gap-3">
            <ul className="flex list-none flex-wrap gap-x-6 gap-y-3">
              <li className="flex items-center gap-1.5">
                <Mail size={16} className="text-[var(--muted)]" />
                <a
                  className="font-semibold no-underline hover:underline"
                  href="mailto:bvlsebastian@gmail.com"
                >
                  bvlsebastian@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <Phone size={16} className="text-[var(--muted)]" />
                <a
                  className="font-semibold no-underline hover:underline"
                  href="tel:+491774768510"
                >
                  +49 177 4768510
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin size={16} className="text-[var(--muted)]" />
                <span className="font-semibold">Osnabrück</span>
              </li>
            </ul>
            <ul className="flex list-none flex-wrap gap-x-6 gap-y-3">
              <li className="flex items-center gap-1.5">
                <Globe size={16} className="text-[var(--muted)]" />
                <a
                  className="font-semibold no-underline hover:underline"
                  href="https://sippos.github.io/Resume/"
                >
                  sippos.github.io/Resume
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <i className="devicon-github-original text-[16px] text-[var(--muted)]"></i>
                <a
                  className="font-semibold no-underline hover:underline"
                  href="https://github.com/Sippos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center gap-1.5">
                <i className="devicon-linkedin-plain text-[16px] text-[var(--muted)]"></i>
                <a
                  className="font-semibold no-underline hover:underline"
                  href="https://www.linkedin.com/in/sbvl/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </address>
        </section>
      </main>
    </div>
  )
}
