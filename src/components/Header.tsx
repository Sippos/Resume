import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

const KineticTextReveal = ({ text, hoverText, forceHover }: { text: string, hoverText?: string, forceHover?: boolean }) => {
  const [isHoveredInternal, setIsHoveredInternal] = useState(false)
  const isHovered = forceHover !== undefined ? forceHover : isHoveredInternal
  const hasHoverText = !!hoverText

  return (
    <motion.span
      onMouseEnter={() => setIsHoveredInternal(true)}
      onMouseLeave={() => setIsHoveredInternal(false)}
      className="inline-block relative cursor-default"
      initial="hidden"
      animate="visible"
    >
      {/* Primary Text Layer */}
      <motion.span 
        className="inline-block"
        animate={isHovered && hasHoverText ? "hoverExit" : "visible"}
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
                  hoverExit: {
                    opacity: 0,
                    y: -20,
                    filter: 'blur(4px)',
                    transition: {
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.02
                    }
                  }
                }}
                className="inline-block transition-colors duration-300"
                style={{ color: isHovered && hasHoverText ? '#244f57' : 'inherit' }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>

      {/* Hover Text Layer */}
      {hasHoverText && (
        <motion.span 
          className="absolute inset-0 inline-block pointer-events-none"
          animate={isHovered ? "hoverEnter" : "hidden"}
        >
          {hoverText.split(' ').map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0">
              {word.split('').map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
                    hoverEnter: { 
                      opacity: 1, 
                      y: 0, 
                      filter: 'blur(0px)',
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                        delay: i * 0.03
                      }
                    }
                  }}
                  className="inline-block text-[#244f57]"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.span>
      )}
    </motion.span>
  )
}

import Navbar from './Navbar'

export default function Header() {
  const [isHeadlineHovered, setIsHeadlineHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const tryPlay = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {})
      }
    }

    tryPlay()

    const events = ['touchstart', 'click', 'scroll']
    events.forEach(e => document.addEventListener(e, tryPlay, { once: true }))

    return () => {
      events.forEach(e => document.removeEventListener(e, tryPlay))
    }
  }, [])

  return (
    <>
      <a
        className="absolute left-4 top-4 z-[2000] -translate-y-[160%] rounded-full bg-[var(--ink)] px-4 py-3 text-white focus:translate-y-0"
        href="#main-content"
      >
        Skip to main content
      </a>

      <Navbar />

      <header className="relative mx-auto max-w-[1240px] border-b border-[var(--line)] px-[clamp(1rem,5vw,3rem)] py-[clamp(1.5rem,4vw,3rem)] overflow-hidden md:overflow-visible">
        <video
          ref={videoRef}
          src="assets/figuren/WebsiteIntro_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute bottom-0 -right-10 md:-right-24 lg:-right-32 h-[100%] max-h-[240px] md:max-h-[280px] w-auto object-contain z-10"
        />
        <div className="relative z-20 max-w-[960px]">
          <p className="mb-4 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-[var(--muted)] m-0">
            Portfolio
          </p>

          <h1
            className="max-w-[13ch] font-['Inter_Tight',system-ui,sans-serif] text-[clamp(2.5rem,10vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.085em] m-0 mt-2"
            aria-label="$IP Berger von Lengercke"
            onMouseEnter={() => setIsHeadlineHovered(true)}
            onMouseLeave={() => setIsHeadlineHovered(false)}
          >
            <div>
              <KineticTextReveal text="Sebastian Berger" hoverText="$IP Berger" forceHover={isHeadlineHovered} />
            </div>
            <KineticTextReveal text="von Lengercke" hoverText="von Lengercke" forceHover={isHeadlineHovered} />
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
