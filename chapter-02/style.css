/* =========================================
   AAYKHUS ARCHIVES — CHAPTER 02
   Small interactions only.
========================================= */


/* Fade sections into view */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

sections.forEach((section) => {
  observer.observe(section);
});


/* Make the 7:01 moment feel slightly alive */

const hugeTime = document.querySelector(".huge-time");

if (hugeTime) {
  window.addEventListener("scroll", () => {

    const rect = hugeTime.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {

      const distance =
        (window.innerHeight / 2 - rect.top) * 0.015;

      hugeTime.style.transform =
        `translateY(${distance}px)`;

    }
  });
}


/* Tiny "memory saved" interaction at the end */

const endSection = document.querySelector(".chapter-end");

if (endSection) {

  endSection.addEventListener("click", () => {

    const symbol = endSection.querySelector(".end-symbol");

    if (symbol) {
      symbol.textContent = "♡";

      setTimeout(() => {
        symbol.textContent = "∞";
      }, 900);
    }

  });

}
