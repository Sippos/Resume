import { motion } from 'framer-motion'

const AnimatedLine = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial="initial"
      whileHover="hover"
      className="block relative cursor-default"
    >
      <motion.span
        variants={{
          hover: { transition: { staggerChildren: 0.03 } }
        }}
        className="block"
      >
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0, color: 'var(--ink)' },
              hover: { y: -8, color: '#244f57' }
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 12 }}
            className="inline-block transition-colors duration-200"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.span>
  )
}

export default function Header() {
  return (
    <>
      <a
        className="absolute left-4 top-4 z-[2000] -translate-y-[160%] rounded-full bg-[var(--ink)] px-4 py-3 text-white focus:translate-y-0"
        href="#main-content"
      >
        Skip to main content
      </a>

      <nav
        className="sticky top-0 z-[1000] flex items-center justify-between gap-8 border-b border-[var(--soft-line)] bg-[rgb(244_242_237_/_0.82)] px-[clamp(1rem,5vw,3rem)] py-4 backdrop-blur-[18px]"
        aria-label="Main navigation"
      >
        <a
          className="font-['Inter_Tight',system-ui,sans-serif] text-base font-extrabold tracking-[-0.04em] no-underline"
          href="#"
        >
          S BvL
        </a>

        <ul className="flex list-none flex-wrap justify-end gap-x-[1.1rem] gap-y-[0.45rem] m-0 p-0">
          <li>
            <a
              className="text-[0.82rem] font-semibold text-[rgb(17_17_17_/_0.62)] no-underline hover:text-[var(--ink)] transition-colors"
              href="#projects-software"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-[0.82rem] font-semibold text-[rgb(17_17_17_/_0.62)] no-underline hover:text-[var(--ink)] transition-colors"
              href="#about"
            >
              Über mich
            </a>
          </li>
          <li>
            <a
              className="text-[0.82rem] font-semibold text-[rgb(17_17_17_/_0.62)] no-underline hover:text-[var(--ink)] transition-colors"
              href="#experience"
            >
              Erfahrung
            </a>
          </li>
          <li>
            <a
              className="text-[0.82rem] font-semibold text-[rgb(17_17_17_/_0.62)] no-underline hover:text-[var(--ink)] transition-colors"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-[0.82rem] font-semibold text-[rgb(17_17_17_/_0.62)] no-underline hover:text-[var(--ink)] transition-colors"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <header className="relative mx-auto max-w-[1240px] border-b border-[var(--line)] px-[clamp(1rem,5vw,3rem)] py-[clamp(1.5rem,4vw,3rem)]">
        <video
          src="assets/figuren/WebsiteIntro.webm"
          autoPlay
          muted
          playsInline
          className="absolute bottom-0 right-[5%] h-[120%] max-h-[500px] w-auto object-contain pointer-events-none z-10 drop-shadow-xl"
        />
        <div className="relative z-20 max-w-[960px]">
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)] m-0">
            Portfolio
          </p>

          <h1
            className="max-w-[13ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(3.6rem,10vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.085em] m-0 mt-2"
            aria-label="Sebastian Berger von Lengercke"
          >
            <AnimatedLine text="Sebastian Berger" />
            <AnimatedLine text="von Lengercke" />
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
