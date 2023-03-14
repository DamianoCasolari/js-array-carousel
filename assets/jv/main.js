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

// ciclo for per creare i thumbnails 

const imagesthumbEl = document.querySelector(".thumb_nail_container")

for (let i = 0; i < listImgEl.length; i++) {
   imagesthumbEl.innerHTML += `<div class="thumb_img ${i == activeImg ? 'selected' : ''}" style="background-image:url('${listImgEl[i]}')"></div>`;

}

const btnPrevEl = document.querySelector(".prev")
const btnNextEl = document.querySelector(".next")
// creo l'array delle <img> caricate nel dom (non degli src)
const listImagesDom = document.querySelectorAll(".slider .images img")
// creo l'array delle <div> miniature caricate nel dom (non degli src)
const listMiniatureImagesDom = document.querySelectorAll(".slider .thumb_nail_container div")

btnNextEl.addEventListener("click", function () {


    const currentImg = listImagesDom[activeImg]
    currentImg.classList.remove("active");
    const currentNail = listMiniatureImagesDom[activeImg]
    currentNail.classList.remove("selected");
    activeImg++;
    if (activeImg > listImagesDom.length - 1) {
        activeImg = 0;
        const newImg = listImagesDom[activeImg]
        const newNail = listMiniatureImagesDom[activeImg]
        newImg.classList.add("active");
        newNail.classList.add("selected");;
    } else {
        const newImg = listImagesDom[activeImg]
        const newNail = listMiniatureImagesDom[activeImg]
        newImg.classList.add("active");
        newNail.classList.add("selected");;
    }

    console.log(activeImg)

})
btnPrevEl.addEventListener("click", function () {


    const currentImg = listImagesDom[activeImg]
    currentImg.classList.remove("active");
    const currentNail = listMiniatureImagesDom[activeImg]
    currentNail.classList.remove("selected");
    activeImg--;
    if (activeImg < 0) {
        activeImg = listImagesDom.length - 1;
        const newImg = listImagesDom[activeImg]
        const newNail = listMiniatureImagesDom[activeImg]
        newImg.classList.add("active");
        newNail.classList.add("selected");;
    } else {
        const newImg = listImagesDom[activeImg]
        const newNail = listMiniatureImagesDom[activeImg]
        newImg.classList.add("active");
        newNail.classList.add("selected");;
    }

    console.log(activeImg)

})



// ciclo for per overlay i thumbnails 