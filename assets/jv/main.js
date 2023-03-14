// creo l'array degli src
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
    // imagesContainerEl.innerHTML += `<img class="img-fluid ${i == activeImg ? 'active' : ''}" src="${listImgEl[i]}" alt="imagin_${i}">`   OTHER OPTION
    imagesContainerEl.insertAdjacentHTML('beforeend', `<img class="img-fluid ${i == activeImg ? 'active' : ''}" src="${listImgEl[i]}" alt="imagine_${i}">`)
}

const btnPrevEl = document.querySelector(".prev")
const btnNextEl = document.querySelector(".next")
// creo l'array delle <img> caricate nel dom (non degli src)
const listImagesDom = document.querySelectorAll(".slider .images img")

btnNextEl.addEventListener("click", function () {


    const currentImg = listImagesDom[activeImg]
    currentImg.classList.remove("active");
    activeImg++;
    if (activeImg > listImagesDom.length - 1) {
        activeImg = 0;
        const newImg = listImagesDom[activeImg]
        newImg.classList.add("active");
    } else {
        const newImg = listImagesDom[activeImg]
        newImg.classList.add("active");
    }

    console.log(activeImg)

})
btnPrevEl.addEventListener("click", function () {


    const currentImg = listImagesDom[activeImg]
    currentImg.classList.remove("active");
    activeImg--;
    if (activeImg < 0) {
        activeImg = 4;
        const newImg = listImagesDom[activeImg]
        newImg.classList.add("active");
    } else {
        const newImg = listImagesDom[activeImg]
        newImg.classList.add("active");
    }

    console.log(activeImg)

})
