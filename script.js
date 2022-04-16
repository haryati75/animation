const size = { min: 20, max: 120 }
const position = [10, 20, 30, 40, 50, 60, 70, 80];
const delay = { min: 0, max: 10 };
const duration = { min: 10, max: 20 };
const numberOfShapes = 20;

const getRandomInterval = (min, max, type) => 
  (Math.floor(Math.random() * (max - min + 1) + min)) + type;

const setElementStyle = (element, direction) => {
  const shapeSize = getRandomInterval(size.min, size.max, 'px');
  element.style.width = shapeSize;
  element.style.height = shapeSize;
  element.style.bottom = '-150px';
  element.style.left = position[Math.floor(Math.random() * position.length)] + '%';
  element.style['animation-delay'] = getRandomInterval(delay.min, delay.max, 'ms');
  element.style['animation-duration'] = getRandomInterval(duration.min, duration.max, 's');
  element.style['animation-direction'] = direction;  
  if (direction === 'normal') {
    element.style.bottom = '-150px';
  } else {
    element.style.top = '-150px';
  }
}

const createShapeItem = () => {
  let ele = document.createElement('li');
  setElementStyle(ele, 'normal');
  return ele;
}

const shapes = document.querySelector('.shapes');

for (let i = 0; i < numberOfShapes; i++) {
  shapes.appendChild(createShapeItem());
}

shapes.addEventListener('click', (event) => {
  const title = document.querySelector('#direction');
  
  title.textContent = title.textContent === 'Up' ? 'Down' : 'Up';
  let direction = title.textContent === 'Up' ? 'normal' : 'reverse';

  const allShapes = document.querySelectorAll('li');

  allShapes.forEach((element)=>{
    element.removeAttribute('style');
    setElementStyle(element, direction);
  })
})
