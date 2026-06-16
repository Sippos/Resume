import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (!isHome) return

    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll);

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

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
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
    { name: 'Softwareentwicklung', href: 'projects-software' },
    { name: 'Industrie Design', href: 'projects-id' },
    { name: 'Über mich', href: 'about' },
    { name: 'Erfahrung', href: 'experience' },
    { name: 'Skills', href: 'skills' },
    { name: 'Contact', href: 'contact' },
  ]

  const activeLinkName = navLinks.find((link) => link.href === activeSection)?.name || 'Menu'

  return (
    <nav
      className="sticky top-0 z-[1000] flex items-center justify-between border-b border-[var(--soft-line)] bg-[rgb(244_242_237_/_0.82)] px-[clamp(1rem,5vw,3rem)] py-4 backdrop-blur-[18px]"
      aria-label="Main navigation"
    >
      <Link
        to="/"
        className="font-['Inter_Tight',system-ui,sans-serif] text-base font-extrabold tracking-[-0.04em] no-underline text-[var(--ink)]"
      >
        $IP BvL
      </Link>

      {/* Mobile Navigation */}
      <div className="relative sm:hidden">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-1.5 text-[0.85rem] font-bold text-[var(--ink)]"
        >
          {activeLinkName}
          <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isDropdownOpen && (
          <ul className="absolute right-0 top-full mt-3 w-48 list-none flex flex-col gap-1 rounded-xl border border-[var(--line)] bg-[rgb(244_242_237)] p-2 shadow-lg m-0">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.href
              return (
                <li key={link.name}>
                  {isHome ? (
                    <a
                      onClick={() => setIsDropdownOpen(false)}
                      className={`block rounded-lg px-4 py-2 text-[0.82rem] transition-all ${
                        isActive
                          ? `bg-[var(--ink)] text-white font-bold ${link.href === 'contact' ? 'shadow-[0_0_12px_var(--ink)] animate-pulse' : ''}`
                          : 'font-semibold text-[rgb(17_17_17_/_0.62)] hover:bg-[rgb(17_17_17_/_0.05)] hover:text-[var(--ink)]'
                      } no-underline`}
                      href={`#${link.href}`}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      onClick={() => setIsDropdownOpen(false)}
                      className="block rounded-lg px-4 py-2 text-[0.82rem] transition-colors font-semibold text-[rgb(17_17_17_/_0.62)] hover:bg-[rgb(17_17_17_/_0.05)] hover:text-[var(--ink)] no-underline"
                      to={`/#${link.href}`}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex list-none flex-wrap justify-end gap-x-[1.1rem] gap-y-[0.45rem] m-0 p-0">
        {navLinks.map((link) => {
          const isActive = isHome && activeSection === link.href
          return (
            <li key={link.name}>
              {isHome ? (
                <a
                  className={`text-[0.82rem] transition-all ${
                    isActive
                      ? `font-extrabold text-[var(--ink)] scale-105 inline-block ${link.href === 'contact' ? '[text-shadow:0_0_12px_var(--ink)] animate-pulse' : 'drop-shadow-sm'}`
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
