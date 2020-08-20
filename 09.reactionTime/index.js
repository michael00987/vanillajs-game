const screen = document.querySelector('#screen');

const status = {};

screen.addEventListener('click', () => {
  if (screen.classList.contains('waiting')) {
    screen.classList.remove('waiting');
    screen.classList.add('ready');
    screen.textContent = '초록색이 되면 클릭하세요';
    console.log('준비');
  } else if (screen.classList.contains('ready')) {
    screen.classList.remove('ready');
    screen.classList.add('now');
    screen.textContent = '클릭하세요';
  } else if (screen.classList.contains('now')) {
    screen.classList.remove('now');
    screen.classList.add('waiting');
    screen.textContent = '클릭해서 시작하세요';
  }
});
