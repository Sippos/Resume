import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Project03() {
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
            3D / CAD / Rendering
          </p>

          <h1 className="max-w-[12ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.075em]">
            Figuren
          </h1>

          <p className="max-w-[62ch] text-[clamp(1rem,1.4vw,1.15rem)] text-[var(--muted)]">
            3D modeling and rendering exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 pb-12">
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/cover.png" alt="Figuren detail 0" loading="lazy" />
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0000-0073.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0000-0135.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0035.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0080.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0100.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0109.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0120.mkv" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0180 (copy 1).mkv" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0216.mkv" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0300.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0001-0329.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/0050-0151.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/Animation2.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/IMG_37242.PNG" alt="Figuren detail 14" loading="lazy" />
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/Makko Geist0001-0120.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/Screenshot 2025-10-19 175717_imgupscaler.ai_v1(Fast)_2K.png" alt="Figuren detail 16" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/Screenshot 2025-10-22 111954_imgupscaler.ai_v1(Fast)_2K.png" alt="Figuren detail 17" loading="lazy" />
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/Sequenz 01.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/Sequenz 02.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/TEASER0000-0165.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/TestYasier0001-0250.mkv" autoPlay muted loop playsInline preload="metadata"></video>
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/keeeeemo.png" alt="Figuren detail 22" loading="lazy" />
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/maybach infarittest0000-0090.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/maybach souly test0000-0090.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/figuren/package.png" alt="Figuren detail 25" loading="lazy" />
        </div>
      </main>
    </div>
  )
}
