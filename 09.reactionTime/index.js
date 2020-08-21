const screen = document.querySelector('#screen');

const avg = [];
let startTime = null;
let endTime = null;
let timeOut;
screen.addEventListener('click', () => {
  if (screen.classList.contains('waiting')) {
    screen.classList.remove('waiting');
    screen.classList.add('ready');
    screen.textContent = '초록색이 되면 클릭하세요';
    timeOut = setTimeout(() => {
      startTime = new Date();
      screen.click();
    }, Math.floor(Math.random() * 1000) + 2000);
  } else if (screen.classList.contains('ready')) {
    if (!startTime) {
      clearTimeout(timeOut);
      screen.classList.remove('ready');
      screen.classList.add('waiting');
      screen.textContent = '너무 성급하시군요';
    } else {
      screen.classList.remove('ready');
      screen.classList.add('now');
      screen.textContent = '클릭하세요';
    }
  } else if (screen.classList.contains('now')) {
    endTime = new Date();
    console.log(endTime - startTime + 'ms');
    avg.push(endTime - startTime);
    const avgNum = avg.reduce((acc, curr) => {
      return (acc += curr);
    });
    console.log(avgNum, 'avgNum');
    document.querySelector('#result').textContent = avgNum / avg.length;
    screen.classList.remove('now');
    screen.classList.add('waiting');
    screen.textContent = '클릭해서 시작하세요';
    startTime = null;
    endTime = null;
  }
});
