const size = { min: 20, max: 150 }
const position = [10, 20, 30, 40, 50, 60, 70, 80];
const delay = { min: 0, max: 5 };
const duration = { min: 10, max: 30 };
const numberOfShapes = 30;

const getRandomInterval = (min, max, type) => 
  (Math.floor(Math.random() * (max - min + 1) + min)) + type;

const createShapeItem = () => {
  let ele = document.createElement('li');
  const shapeSize = getRandomInterval(size.min, size.max, 'px');
  ele.style.width = shapeSize;
  ele.style.height = shapeSize;
  ele.style.left = position[Math.floor(Math.random() * position.length)] + '%';
  ele.style['animation-delay'] = getRandomInterval(delay.min, delay.max, 'ms');
  ele.style['animation-duration'] = getRandomInterval(duration.min, duration.max, 's');
  return ele;
}

const shapes = document.querySelector('.shapes');

for (let i = 0; i < numberOfShapes; i++) {
  shapes.appendChild(createShapeItem());
}

// const btnToggle = document.getElementById('direction');

// btnToggle.addEventListener('click', () => {
//   alert("Toggle clicked!");
// });