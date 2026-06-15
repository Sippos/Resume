import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const KineticTextReveal = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="inline-block relative cursor-default"
    >
      <motion.span 
        variants={{ hover: { transition: { staggerChildren: 0.03 } } }}
        className="inline-block"
      >
        {text.split(' ').map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
            {word.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    filter: 'blur(0px)',
                    transition: {
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: wordIndex * 0.1 + i * 0.03
                    }
                  },
                  hover: { 
                    y: -8, 
                    color: '#244f57',
                    transition: { type: 'spring', stiffness: 500, damping: 12 }
                  }
                }}
                className="inline-block transition-colors duration-200"
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    </motion.span>
  )
}

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {

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
  }, [])

  const navLinks = [
    { name: 'Projects', href: '#projects-software' },
    { name: 'Über mich', href: '#about' },
    { name: 'Erfahrung', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <a
        className="absolute left-4 top-4 z-[2000] -translate-y-[160%] rounded-full bg-[var(--ink)] px-4 py-3 text-white focus:translate-y-0"
        href="#main-content"
      >
        Skip to main content
      </a>

      <nav
        className="sticky top-0 z-[1000] flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 border-b border-[var(--soft-line)] bg-[rgb(244_242_237_/_0.82)] px-[clamp(1rem,5vw,3rem)] py-4 backdrop-blur-[18px]"
        aria-label="Main navigation"
      >
        <a
          className="font-['Inter_Tight',system-ui,sans-serif] text-base font-extrabold tracking-[-0.04em] no-underline w-full sm:w-auto text-center sm:text-left"
          href="#"
        >
          $IP BvL
        </a>

        <ul className="flex list-none flex-wrap justify-center sm:justify-end gap-x-[1.1rem] gap-y-[0.45rem] m-0 p-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <li key={link.name}>
                <a
                  className={`text-[0.82rem] transition-colors ${
                    isActive
                      ? 'font-extrabold text-[var(--ink)] drop-shadow-sm scale-105 inline-block'
                      : 'font-semibold text-[rgb(17_17_17_/_0.62)] hover:text-[var(--ink)]'
                  } no-underline`}
                  href={link.href}
                >
                  {link.name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      <header className="relative mx-auto max-w-[1240px] border-b border-[var(--line)] px-[clamp(1rem,5vw,3rem)] py-[clamp(1.5rem,4vw,3rem)] overflow-hidden md:overflow-visible">
        <img
          src="assets/figuren/WebSiteIntroWEBP.webp"
          alt="Website Intro Animation"
          className="absolute bottom-0 -right-10 md:-right-24 lg:-right-32 h-[100%] max-h-[240px] md:max-h-[280px] w-auto object-contain pointer-events-none z-10 drop-shadow-xl"
        />
        <div className="relative z-20 max-w-[960px]">
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)] m-0">
            Portfolio
          </p>

          <h1
            className="max-w-[13ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(2.5rem,10vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.085em] m-0 mt-2"
            aria-label="$IP Berger von Lengercke"
          >
            <KineticTextReveal text="$IP Berger" />
            <KineticTextReveal text="von Lengercke" />
          </h1>

          <div className="mt-[1.35rem] flex items-center gap-4">
            <motion.figure 
              className="m-0"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img
                className="block size-[clamp(58px,7vw,82px)] rounded-full object-cover grayscale-[0.05]"
                src="headshot.jpg"
                alt="Portrait of Sebastian Berger von Lengercke"
                width="300"
                height="300"
              />
            </motion.figure>

            <p className="text-[clamp(1rem,1.7vw,1.25rem)] font-medium text-[var(--muted)] m-0">
              Industrial Designer B.A. und upcoming Softwareentwickler
            </p>
          </div>
        </div>
      </header>
    </>
  )
}
