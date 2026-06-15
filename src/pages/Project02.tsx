import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Project02() {
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
            UX / Research / Prototype
          </p>

          <h1 className="max-w-[12ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.075em]">
            Mixed Reality Model
          </h1>

          <p className="max-w-[62ch] text-[clamp(1rem,1.4vw,1.15rem)] text-[var(--muted)]">
            An exploration of user experience and research translated into a mixed reality model prototype.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 pb-12">
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/cover.jpg" alt="Mixed Reality Model cover image" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/20211008_test8.jpg" alt="Project detail 1" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/ALAI5293.JPG" alt="Project detail 2" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/DELX5875.JPG" alt="Project detail 3" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/IMG-0750.JPG" alt="Project detail 4" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/IMG-0762.JPG" alt="Project detail 5" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/IMG-0763.JPG" alt="Project detail 6" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/IMG-0766.JPG" alt="Project detail 7" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/IMG-0767.JPG" alt="Project detail 8" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/IMG-5154.JPG" alt="Project detail 9" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/IMG-5184.JPG" alt="Project detail 10" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/IMG-5185.JPG" alt="Project detail 11" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/ODHC1698.JPG" alt="Project detail 12" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/TIWJ9215.JPG" alt="Project detail 13" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/whatsapp_20211007.jpeg" alt="Project detail 14" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/mixed-reality-model/whatsapp_20211008.jpeg" alt="Project detail 15" loading="lazy" />
        </div>
      </main>
    </div>
  )
}
