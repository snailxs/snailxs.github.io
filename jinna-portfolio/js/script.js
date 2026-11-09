// =========================
// IMAGE LIGHTBOX
// =========================

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
    <span class="lightbox-close">CLOSE ✕</span>
    <img src="" alt="">
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

function openLightbox(img) {
    lightboxImg.src = img.dataset.full || img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
}

document
    .querySelectorAll(".project-image img, .project-detail-image img")
    .forEach((img) => {
        img.addEventListener("click", () => openLightbox(img));
    });

lightbox.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});