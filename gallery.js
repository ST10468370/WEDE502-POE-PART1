// ====LIGHTBOX=====
const galleryimages = document.querySelectorAll(".gallerry-img");
const Lightbox = document.getElementById("Lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelectorAll(".close");
const prevBtn = document.querySelectorAll(".prev");
const nextBtn = document.querySelectorAll(".next")

let currentIndex = 0;

if(galleryimages.length > 0){
    galleryimages.forEach((img, index) => {
        img.addEventListener("click",() => {
            Lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            currentIndex = index;
        });
    });
}

//Close Lightbox
closeBtn.addEventListener("click", () => {
    Lightbox.style.display = "none";
});

//Nav images
function showImage(index){
    if (index >= galleryimages.length) index = 0;
    if (index < 0) index = galleryimages.length - 1;
    lightboxImg.src = galleryimages [index].src;
    currentIndex = index;
}

nextBtn.addEventListener("click", ()=> showImage(currentIndex + 1));
preventBtn.addEventListener("click", ()=> showImage(currentIndex -1));

//Close on background click
Lightbox.addEventListener("click", (e)=>{
    if(e.target === Lightbox) Lightbox.style.display = "none";
});