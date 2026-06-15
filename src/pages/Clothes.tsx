import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Clothes() {
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
            From 3D to Reality
          </p>

          <h1 className="max-w-[12ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.075em]">
            Clothes
          </h1>

          <p className="max-w-[62ch] text-[clamp(1rem,1.4vw,1.15rem)] text-[var(--muted)]">
            A project exploring the transformation from digital 3D design into physical textile and garment expression.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 pb-12">
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/cover.webm" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/0001-0110.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/0001-0120 6.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/5F12DDCC-CE50-434E-987B-2E29054DCD7A.jpeg" alt="Clothes detail 3" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/F5BE8A6B-F4A4-4A3F-B789-ED4299C614C3.jpeg" alt="Clothes detail 4" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/IMG_3728.jpeg" alt="Clothes detail 5" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/IMG_3729.jpeg" alt="Clothes detail 6" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/IMG_3730.jpeg" alt="Clothes detail 7" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/IMG_3731.jpeg" alt="Clothes detail 8" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/IMG_3732.jpeg" alt="Clothes detail 9" loading="lazy" />
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/hoodie.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/longsleeve.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/tote_bag.mp4" autoPlay muted loop playsInline preload="metadata"></video>
          <video className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="assets/clothes/trousers.mp4" autoPlay muted loop playsInline preload="metadata"></video>
        </div>
      </main>
    </div>
  )
}
