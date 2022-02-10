const pictures = [
  'http://placekitten.com/500/300',
  'http://placekitten.com/3000/1000',
  'http://placekitten.com/400/100',
  'http://placekitten.com/6000/2000',
];

const fillSlider = () => {
  const root = document.querySelector('.slider-line');

  pictures.forEach(element => {
    const newImg = document.createElement('img');

    newImg.src = element;
    newImg.alt = `${element}-image`;
    newImg.className = 'slider-item';
    
    root.append(newImg);
  });
};

fillSlider();

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderButtonPrev = document.querySelector('.slider-button_prev');
const sliderButtonNext = document.querySelector('.slider-button_next');

const addEventsToButtons = (button, offsetChange) => {
  button.addEventListener('click', () => {
    let oneSliderItemSize = document.querySelector('.slider-item').clientWidth;

    oneSliderItemSize = 100 * oneSliderItemSize / window.innerWidth;

    offset += (oneSliderItemSize * offsetChange);

    if(offset <= oneSliderItemSize * pictures.length * -1) {
      offset = 0;
    }

    if(offset > 0.0005) {
      offset = (pictures.length - 1) * oneSliderItemSize * -1;
    }


    sliderLine.style.left = `${offset}vw`;
  });
};

addEventsToButtons(sliderButtonNext, -1);
addEventsToButtons(sliderButtonPrev, 1);

