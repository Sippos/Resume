import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('')
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [isHome, location.hash])

  const navLinks = [
    { name: 'Projects', href: 'projects-software' },
    { name: 'Über mich', href: 'about' },
    { name: 'Erfahrung', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
  ]

  return (
    <nav
      className="sticky top-0 z-[1000] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 border-b border-[var(--soft-line)] bg-[rgb(244_242_237_/_0.82)] px-[clamp(1rem,5vw,3rem)] py-4 backdrop-blur-[18px]"
      aria-label="Main navigation"
    >
      <Link
        to="/"
        className="font-['Inter_Tight',system-ui,sans-serif] text-base font-extrabold tracking-[-0.04em] no-underline w-full sm:w-auto text-center sm:text-left text-[var(--ink)]"
      >
        $IP BvL
      </Link>

      <ul className="flex list-none flex-wrap justify-center sm:justify-end gap-x-[1.1rem] gap-y-[0.45rem] m-0 p-0">
        {navLinks.map((link) => {
          const isActive = isHome && activeSection === link.href
          return (
            <li key={link.name}>
              {isHome ? (
                <a
                  className={`text-[0.82rem] transition-colors ${
                    isActive
                      ? 'font-extrabold text-[var(--ink)] drop-shadow-sm scale-105 inline-block'
                      : 'font-semibold text-[rgb(17_17_17_/_0.62)] hover:text-[var(--ink)]'
                  } no-underline`}
                  href={`#${link.href}`}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  className="text-[0.82rem] transition-colors font-semibold text-[rgb(17_17_17_/_0.62)] hover:text-[var(--ink)] no-underline"
                  to={`/#${link.href}`}
                >
                  {link.name}
                </Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
