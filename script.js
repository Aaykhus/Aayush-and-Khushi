function openArchive() {

    const intro = document.getElementById("intro");
    const main = document.getElementById("main-content");

    intro.classList.add("hidden");

    setTimeout(() => {
        main.classList.add("visible");
    }, 500);
}


function showNutties() {

    const message = document.getElementById("nutties-message");

    message.classList.toggle("show");

    if (message.classList.contains("show")) {
        createHearts();
    }
}


function createHearts() {

    for (let i = 0; i < 8; i++) {

        const heart = document.createElement("span");

        heart.innerHTML = "♥";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "20px";
        heart.style.fontSize = (12 + Math.random() * 18) + "px";
        heart.style.color = "#315c43";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        heart.animate(
            [
                {
                    transform: "translateY(0)",
                    opacity: 1
                },
                {
                    transform: "translateY(-300px) rotate(20deg)",
                    opacity: 0
                }
            ],
            {
                duration: 1800 + Math.random() * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },

    {
        threshold: 0.15
    }

);


document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});
