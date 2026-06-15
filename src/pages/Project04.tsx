import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Project04() {
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
            Bachelor Thesis / Product Concept
          </p>

          <h1 className="max-w-[12ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.9] tracking-[-0.075em]">
            Bachelor Project
          </h1>

          <p className="max-w-[62ch] text-[clamp(1rem,1.4vw,1.15rem)] text-[var(--muted)]">
            Bachelor thesis product concept presentation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 pb-12">
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/cover.png" alt="Bachelor Project detail 0" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/0b1d7033-478b-4c09-882d-4b6e0a50ed1a_rw_1920_1.png" alt="Bachelor Project detail 1" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/1828b2f0-bcf9-4ed5-a44f-5ac43d74683e_rw_1920_1.png" alt="Bachelor Project detail 2" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/1a82d93e-10a6-4d4b-a1ba-255a0609377d_rw_1200_1.png" alt="Bachelor Project detail 3" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/383100c4-f89a-4dce-9882-15f55e4be32b_rw_1920_1.png" alt="Bachelor Project detail 4" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/3a7382aa-7db0-4fcb-a96a-bed82052b7ec_rw_1920_1.png" alt="Bachelor Project detail 5" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/435bf950-ea99-4961-be9c-4ea363fe1cfc_rw_1200_1.png" alt="Bachelor Project detail 6" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/473a6fdc-baba-49ed-bb03-d5837f81fa0b_rw_1920_1.png" alt="Bachelor Project detail 7" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/496ef368-a0cf-46cc-891a-73581e30973c_rw_1920_1.png" alt="Bachelor Project detail 8" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/4a2483c0-8332-4934-a857-94c8b1053d58_rw_1920_1.png" alt="Bachelor Project detail 9" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/586dc3bb-5c43-46b7-947a-43fdafe236b7_rw_1200_1.png" alt="Bachelor Project detail 10" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/6ed6bfca-adc2-4ed0-b3e6-c0fe113edd0b_rw_1920_1.png" alt="Bachelor Project detail 11" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/72eededb-4871-438b-a464-c051a0ad7f90_rw_1920_1.png" alt="Bachelor Project detail 12" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/7c306e30-8adb-4123-8094-367b8be9773f_rw_1920_1.png" alt="Bachelor Project detail 13" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/8270052f-651a-4e14-8fd5-a49739568b58_rw_1920_1.png" alt="Bachelor Project detail 14" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/a8f7f85a-0b7b-45e3-9502-32900e57c079_rw_1920_1.png" alt="Bachelor Project detail 15" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/a95f6d08-52d5-43db-9482-76e6830d012a_rw_1920_1.png" alt="Bachelor Project detail 16" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/a9ec8cea-e03e-4afa-b56d-039173cd2c80_rw_1920_1.png" alt="Bachelor Project detail 17" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/b1fa4caf-166c-4294-9bc7-537b25e0f152_rwc_81x0x810x1080x1920_1.png" alt="Bachelor Project detail 18" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/c781627e-71fb-4a9e-9458-e962ff513c9a_rw_1920_1.png" alt="Bachelor Project detail 19" loading="lazy" />
          <img className="block aspect-[4/3] w-full bg-[rgb(17_17_17_/_0.06)] object-cover" src="../assets/revive/e42b55e0-8f69-4a88-af16-4d1872a31d51_rw_1200_1.png" alt="Bachelor Project detail 20" loading="lazy" />
        </div>
      </main>
    </div>
  )
}
