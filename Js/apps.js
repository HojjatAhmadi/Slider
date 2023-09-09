const Sliderbg = document.querySelector('#slider-bg')
const ImageSlider = document.querySelector('#slider-bg img')
const RightButton = document.querySelector('#right')
const LeftButton = document.querySelector('#left')

let conditionMoseClick = false , prevScreenX , prevScrollLeft ;

Sliderbg.addEventListener('mousedown', (e) => {
    conditionMoseClick = true ;
    prevScreenX = e.screenX;
    prevScrollLeft = Sliderbg.scrollLeft;
})

Sliderbg.addEventListener('mouseup', () => {
     conditionMoseClick = false ;

})

Sliderbg.addEventListener('mousemove', (e) => {
    if (conditionMoseClick){
        let pos = e.pageX - prevScreenX;
        Sliderbg.scrollLeft = prevScrollLeft - pos ;
        e.preventDefault() ;
    }
})

RightButton.addEventListener('click', () => {
    Sliderbg.scrollLeft += ImageSlider.offsetWidth + 14
})

LeftButton.addEventListener('click', () => {
    Sliderbg.scrollLeft -= ImageSlider.offsetWidth + 14
})