document.documentElement.classList.add("js");

const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll(".site-nav a[href^='#']");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  revealObserver.observe(section);
});

const activeNavObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        link.classList.toggle(
          "is-active",
          link.getAttribute("href") === `#${id}`
        );
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => {
  activeNavObserver.observe(section);
});

const hero = document.querySelector(".site-header");
const heroName = document.querySelector(".hero-name");
const profileImage = document.querySelector(".profile-image");

if (hero && heroName) {
  hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const offsetX = (x - 0.5) * 16;
    const offsetY = (y - 0.5) * 10;

    heroName.style.setProperty("--x1", `${offsetX * 0.6}px`);
    heroName.style.setProperty("--y1", `${offsetY * 0.35}px`);

    heroName.style.setProperty("--x2", `${offsetX * -0.45}px`);
    heroName.style.setProperty("--y2", `${offsetY * -0.25}px`);

    if (profileImage) {
      profileImage.style.transform = `translate(${offsetX * -0.25}px, ${offsetY * -0.25}px)`;
    }
  });

  hero.addEventListener("mouseleave", () => {
    heroName.style.setProperty("--x1", `0px`);
    heroName.style.setProperty("--y1", `0px`);
    heroName.style.setProperty("--x2", `0px`);
    heroName.style.setProperty("--y2", `0px`);

    if (profileImage) {
      profileImage.style.transform = `translate(0px, 0px)`;
    }
  });
}