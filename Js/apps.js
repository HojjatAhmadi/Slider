const Sliderbg = document.querySelector('#slider-bg')
const ImageSlider = document.querySelector('#slider-bg img')
const RightButton = document.querySelector('#right')
const LeftButton = document.querySelector('#left')

let conditionMoseClick = false , prevScreenX , prevScrollLeft ;

function RemoveButtonDisplay(){
    if (Sliderbg.scrollLeft == 3493){
        RightButton.style.opacity = 0;
    }
    else{
        RightButton.style.opacity = 1;
    }
    if (Sliderbg.scrollLeft == 0){
        LeftButton.style.opacity = 0;
    }
    else{
        LeftButton.style.opacity = 1;
    }
}

Sliderbg.addEventListener('mousedown', (e) => {
    conditionMoseClick = true ;
    prevScreenX = e.screenX;
    prevScrollLeft = Sliderbg.scrollLeft;
})

Sliderbg.addEventListener('mouseup', () => {
    conditionMoseClick = false ;
    Sliderbg.className = 'slide'
})

Sliderbg.addEventListener('mousemove', (e) => {
    if (conditionMoseClick){
        let pos = e.pageX - prevScreenX;
        Sliderbg.scrollLeft = prevScrollLeft - pos ;
        e.preventDefault() ;
        Sliderbg.className = 'drag'
        RemoveButtonDisplay()
    }
})

RightButton.addEventListener('click', () => {
    Sliderbg.scrollLeft += ImageSlider.offsetWidth + 20
    RemoveButtonDisplay()
})

LeftButton.addEventListener('click', () => {
    Sliderbg.scrollLeft -= ImageSlider.offsetWidth + 20
    RemoveButtonDisplay()
})