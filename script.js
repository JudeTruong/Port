const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "none";
    });
});