const listImgEl = [
    "./assets/img/img/01.webp",
    "./assets/img/img/02.webp",
    "./assets/img/img/03.webp",
    "./assets/img/img/04.webp",
    "./assets/img/img/05.webp",
]
const imagesContainerEl = document.querySelector(".images")
let activeImg = 0;

for (let i = 0; i < listImgEl.length; i++) {
    imagesContainerEl.innerHTML += `<img class="img-fluid ${i == activeImg ? 'active' : ''}" src="${listImgEl[i]}" alt="imagin_${i}">`
}

