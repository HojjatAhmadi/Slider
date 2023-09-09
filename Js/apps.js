const Sliderbg = document.querySelector('#slider-bg')
const ImageSlider = document.querySelector('#slider-bg img')
const RightButton = document.querySelector('#right')
const LeftButton = document.querySelector('#left')

let conditionMoseClick = false , prevScreenX , prevScrollLeft ;

function RemoveRight(){
    if (Sliderbg.scrollLeft == 1047){
        RightButton.style.opacity = 0;
    }
    else{
        RightButton.style.opacity = 1;
    }
}

function RemoveLeft(){
    if (Sliderbg.scrollLeft == 0){
        LeftButton.style.opacity = 0;
    }
    else{
        LeftButton.style.opacity = 1;
    }
}

function RemoveDisplayButton(id) {
    if (id == 'right'){
        RemoveRight()
    }
    else{
        RemoveLeft()
    }
}

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
        Sliderbg.className = 'drag'
        if (Sliderbg.scrollLeft == 0 ){
            RemoveDisplayButton('left')
        }
        else{
            RemoveDisplayButton('left')
        }
        if (Sliderbg.scrollLeft == 1047){
            RemoveDisplayButton('right')
        }
        else{
            RemoveDisplayButton('right')
        }
    }
})

RightButton.addEventListener('click', () => {
    Sliderbg.scrollLeft += ImageSlider.offsetWidth + 30
    Sliderbg.className = 'slide'
    if (Sliderbg.scrollLeft == 0 ){
        RemoveDisplayButton('left')
    }
    else{
        RemoveDisplayButton('left')
    }
    if (Sliderbg.scrollLeft == 1047){
        RemoveDisplayButton('right')
    }
    else{
        RemoveDisplayButton('right')
    }
})

LeftButton.addEventListener('click', () => {
    Sliderbg.scrollLeft -= ImageSlider.offsetWidth + 30
    Sliderbg.className = 'slide'
    if (Sliderbg.scrollLeft == 0 ){
        RemoveDisplayButton('left')
    }
    else{
        RemoveDisplayButton('left')
    }
    if (Sliderbg.scrollLeft == 1047){
        RemoveDisplayButton('right')
    }
    else{
        RemoveDisplayButton('right')
    }
})