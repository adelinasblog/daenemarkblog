const modal = document.querySelector(".modal");
const modalBox = document.querySelector(".modal-box");
const modalClose = document.querySelector(".modal-close");
const modalImage = document.querySelector(".modal-image");
const modalDate = document.querySelector(".modal-date");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");

const cards = document.querySelectorAll(".blog-card");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function openModal(card) {
    const image = card.querySelector(".card-image");
    const date = card.querySelector("time");
    const title = card.querySelector("h3");
    const description = card.querySelector(".full-description");

    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalDate.textContent = date.textContent;
    modalTitle.textContent = title.textContent;
    modalDescription.innerHTML = description.innerHTML;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    modalClose.focus();
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
}

cards.forEach((card) => {
    const moreButton = card.querySelector(".more-button");

    moreButton.addEventListener("click", () => {
        openModal(card);
    });
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
    }
});

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-visible");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-visible");
    });
});