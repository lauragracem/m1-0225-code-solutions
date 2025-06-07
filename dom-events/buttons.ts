const button1 = document.querySelector('.click-button');

if (!button1) throw new Error('button1 does not exist');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

button1.addEventListener('click', handleClick);

const button2 = document.querySelector('.hover-button');

if (!button2) throw new Error('button2 does not exist');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

button2.addEventListener('mouseover', handleMouseover);

const button3 = document.querySelector('.double-click-button');

if (!button3) throw new Error('button1 does not exist');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

button3.addEventListener('dblclick', handleDoubleClick);
