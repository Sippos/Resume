import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Project05() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[var(--bg)] font-['Inter',system-ui,sans-serif] text-[var(--ink)] leading-[1.45] min-h-screen">
      <Navbar />

      <div className="sticky top-[68px] z-[900] bg-[rgb(244_242_237_/_0.82)] backdrop-blur-[18px] border-b border-[var(--soft-line)] px-[clamp(1rem,5vw,3rem)] py-3 hidden md:block">
         <Link
            to="/#projects-id"
            className="w-fit text-[0.82rem] font-semibold text-[var(--muted)] no-underline hover:text-[var(--ink)]"
          >
            ← Back to projects
          </Link>
      </div>

      <main className="mx-auto grid max-w-[1240px] gap-8 border-b border-[var(--line)] px-[clamp(1rem,5vw,3rem)] py-[clamp(2rem,6vw,4rem)]">
        <div className="grid gap-4">
          <Link
            to="/#projects-id"
            className="md:hidden w-fit text-[0.82rem] font-semibold text-[var(--muted)] no-underline hover:text-[var(--ink)]"
          >
            ← Back to projects
          </Link>

          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
            DFKI / nature robots
          </p>

          <h1 className="max-w-[12ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.075em]">
            Lero 2 Roboter
          </h1>

          <p className="max-w-[62ch] text-[clamp(1rem,1.4vw,1.15rem)] text-[var(--muted)]">
            Design und Konstruktion eines autonomen Landwirtschaftsroboters.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 pb-12">
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/cover.jpg" alt="Lero 2 Roboter cover image" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/0d7da3b6-d830-4c8d-aa0d-eff9a6cef7ef_rw_1200_1.jpg" alt="Project detail 1" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/8276a5e4-a4c3-44d4-9159-12e5f6c0422b_rw_1920_1.png" alt="Project detail 2" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/9c1b9088-9759-4435-8dd7-70c91f57094f_rw_1920_1.PNG" alt="Project detail 3" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/a500dc1e-959d-4862-bd6b-46b0cdfde4c2_rw_1200_1.JPEG" alt="Project detail 4" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/b1ffbeeb-914a-4dbe-9b63-a055a600f585_rw_1920_2.PNG" alt="Project detail 5" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/b66ff53b-9ecb-478b-abb7-3cc385559b36_rw_1920_2.PNG" alt="Project detail 6" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/ba27c2b5-da5a-4d88-b5dc-a921d7811e8b_rw_1200_2.png" alt="Project detail 7" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/bba3508c-2d1a-4e25-a155-6052d9e78f03_rw_1920_2.PNG" alt="Project detail 8" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/d44bc8fc-6d78-4f63-b9ca-405926e773b9_rw_1920_2.PNG" alt="Project detail 9" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/d504b894-44c6-4bc3-ac39-38c070b5e009_rw_1920_2.png" alt="Project detail 10" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/d5fa4f08-4253-4f90-95e3-1a0f139d90cc_rw_1920_2.PNG" alt="Project detail 11" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/DFKI_nature_robots/e5f4ee64-9f1c-448f-9733-e71d38378fe6_rw_1920.PNG" alt="Project detail 12" loading="lazy" />
        </div>
      </main>
    </div>
  )
}
