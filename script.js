// Log initialization
console.log("Script loaded successfully");

// Set current year dynamically
(function setCurrentYear() {
  const yearEl = document.querySelector(".year");
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
})();


// Handle mobile navigation toggle
(function handleMobileNavigation() {
  const btnNavEl = document.querySelector(".btn-mobile-nav");
  const headerEl = document.querySelector(".header");

  btnNavEl.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
})();

// Smooth scrolling for anchor links
(function smoothScrolling() {
  const allLinks = document.querySelectorAll("a:link");

  allLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // Scroll to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to other sections
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile navigation
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    });
  });
})();

// Sticky navigation using Intersection Observer
(function stickyNavigation() {
  const sectionHeroEl = document.querySelector(".section-hero");

  const observer = new IntersectionObserver(
    function (entries) {
      const entry = entries[0];

      if (!entry.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px",
    }
  );

  observer.observe(sectionHeroEl);
})();

// Check for flexbox gap support and add class if not supported
(function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) {
    document.body.classList.add("no-flexbox-gap");
  }
})();
