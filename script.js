// =========================================================
// 1. GET COMMON ELEMENTS
// =========================================================

const navbar = document.getElementById("navbar");
const menuButton = document.getElementById("menuBtn");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section");


// =========================================================
// 2. MOBILE MENU
// Open and close the navigation on small screens.
// =========================================================

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("open");
    });
});


// =========================================================
// 3. NAVBAR ON SCROLL
// Add a darker background after scrolling.
// =========================================================

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// =========================================================
// 4. ACTIVE NAV LINK
// Highlight the menu item for the section on screen.
// =========================================================

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            navLinks.forEach((link) => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${id}`
                );
            });
        });
    },
    {
        rootMargin: "-35% 0px -55% 0px"
    }
);

sections.forEach((section) => {
    sectionObserver.observe(section);
});


// =========================================================
// 5. SCROLL REVEAL
// Show cards and content when they enter the screen.
// =========================================================

const revealItems = document.querySelectorAll(
    ".section-head, .about, .about-cards, .skill-card, .experience-card, .project-card, .cert-card, .contact"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.12
    }
);

revealItems.forEach((item) => {
    item.classList.add("reveal");
    revealObserver.observe(item);
});
