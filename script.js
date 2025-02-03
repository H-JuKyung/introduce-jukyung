document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    let isScrolling = false; 
    let currentIndex = 0; 

    if (window.location.hash !== "#home") {
        history.replaceState(null, null, "#home"); 
        window.scrollTo(0, 0); 
    }

    window.addEventListener("wheel", (event) => {
        if (isScrolling) return; 
        isScrolling = true; 

        setTimeout(() => (isScrolling = false), 500); 

        const direction = event.deltaY > 0 ? 1 : -1; 
        let nextIndex = currentIndex + direction;

        if (nextIndex >= 0 && nextIndex < sections.length) {
            currentIndex = nextIndex;
            sections[currentIndex].scrollIntoView({ behavior: "smooth" });
        }
    });

    document.querySelector(".emoji-bottom-left").addEventListener("click", function () {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
        currentIndex = 1; 
    });

    initSlider('experience');
    initSlider('hobbies');
});

function initSlider(sectionId) {
    let currentIndex = 0;
    const images = document.querySelectorAll(`#${sectionId} .image-slider img`);
    const dots = document.querySelectorAll(`#${sectionId} .dot`);

    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[0].classList.add("active");
    dots[0].classList.add("active");

    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        changeSlide(currentIndex, sectionId);
    }, 5000);
}

function changeSlide(index, sectionId) {
    const images = document.querySelectorAll(`#${sectionId} .image-slider img`);
    const dots = document.querySelectorAll(`#${sectionId} .dot`);

    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[index].classList.add("active");
    dots[index].classList.add("active");
}