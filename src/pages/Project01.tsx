import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Project01() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[var(--bg)] font-['Inter',system-ui,sans-serif] text-[var(--ink)] leading-[1.45] min-h-screen">
      <Navbar />

      <div className="sticky top-[68px] z-[900] bg-[rgb(244_242_237_/_0.82)] backdrop-blur-[18px] border-b border-[var(--soft-line)] px-[clamp(1rem,5vw,3rem)] py-3 hidden md:block">
         <Link
            to="/#projects-software"
            className="w-fit text-[0.82rem] font-semibold text-[var(--muted)] no-underline hover:text-[var(--ink)]"
          >
            ← Back to projects
          </Link>
      </div>

      <main className="mx-auto grid max-w-[1240px] gap-8 border-b border-[var(--line)] px-[clamp(1rem,5vw,3rem)] py-[clamp(2rem,6vw,4rem)]">
        <div className="grid gap-4">
          <Link
            to="/#projects-software"
            className="md:hidden w-fit text-[0.82rem] font-semibold text-[var(--muted)] no-underline hover:text-[var(--ink)]"
          >
            ← Back to projects
          </Link>

          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
            Industrial Design / Concept
          </p>

          <h1 className="max-w-[12ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.075em]">
            DONDA stick
          </h1>

          <p className="max-w-[62ch] text-[clamp(1rem,1.4vw,1.15rem)] text-[var(--muted)]">
            An exploration of industrial design and concept development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 pb-12">
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/cover.png" alt="DONDA stick detail 0" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/Rendering_KeyShot.png" alt="DONDA stick detail 1" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/Unbenanntes-Projekt 11.png" alt="DONDA stick detail 2" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/Unbenanntes-Projekt 19.png" alt="DONDA stick detail 3" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/Unbenanntes-Projekt 6.png" alt="DONDA stick detail 4" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/Yandhi second try stick.png" alt="DONDA stick detail 5" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/render1.png" alt="DONDA stick detail 6" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/sandboxundstick.png" alt="DONDA stick detail 7" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/donda-stick/yandhi render 2.jpg" alt="DONDA stick detail 8" loading="lazy" />
        </div>
      </main>
    </div>
  )
}
