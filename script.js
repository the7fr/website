// Reveal sections on scroll
const sections = document.querySelectorAll(".content");

function revealSections() {
    let windowHeight = window.innerHeight;

    sections.forEach(section => {
        let top = section.getBoundingClientRect().top;
        if (top < windowHeight - 120) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();
