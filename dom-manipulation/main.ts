let clicks = 0;

const hotButton = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');

if (!hotButton) throw new Error('The hotButton query failed');

hotButton.addEventListener('click', () => {
  clicks++;
  if (!hotButton || !clickCount) {
    throw new Error('The hotButton or clickCount query failed');
  }

  if (clicks < 4) {
    clickCount.textContent = 'cold';
  } else if (clicks < 7) {
    clickCount.textContent = 'cool';
  } else if (clicks < 10) {
    clickCount.textContent = 'tepid';
  } else if (clicks < 13) {
    clickCount.textContent = 'warm';
  } else if (clicks < 16) {
    clickCount.textContent = 'hot';
  } else if (clicks >= 16) {
    clickCount.textContent = 'nuclear';
  }
});
