const sliderImgItem = [...document.querySelectorAll(".slider__img-item")]
const btnPrev = document.querySelector(".btn__prev")
const btnNext = document.querySelector(".btn__next")
const slider = document.querySelector(".slider")

console.log(sliderImgItem)
let i = 0;
btnNext.addEventListener("click",function () {
    sliderImgItem[i].style.display = 'none'
    i++
    if (i >= sliderImgItem.length) {
        i = 0
    }
    sliderImgItem[i].style.display = 'block'
})
btnPrev.addEventListener("click",function () {
    sliderImgItem[i].style.display = 'none'
    i--
    if (i < 0) {
        i = sliderImgItem.length - 1
    }
    sliderImgItem[i].style.display = 'block'
})

function nextSlider () {
    sliderImgItem[i].style.display = 'none'
    i++
    if (i >= sliderImgItem.length) {
        i = 0
    }
    sliderImgItem[i].style.display = 'block'
}

let stopFunc = setInterval(nextSlider,2000)

function stop() {
    clearInterval(stopFunc)
}

function start() {
    return stopFunc = setInterval(nextSlider,2000)
}

slider.addEventListener("mouseover",function () {
    stop()
})

slider.addEventListener("mouseout",function () {
    start()
})