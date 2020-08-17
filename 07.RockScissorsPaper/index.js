const body = document.body;
const computer = document.createElement('div');
computer.style.width = '142px';
computer.style.height = '243px';
computer.style.background = `url('https://en.pimg.jp/023/182/267/1/23182267.jpg') 0 0`;
const img = document.createElement('img');
computer.appendChild(img);
body.appendChild(computer);
const buttonContainer = document.createElement('div');
const rock = document.createElement('button');
const scissors = document.createElement('button');
const paper = document.createElement('button');
rock.textContent = 'rock';
scissors.textContent = 'scissors';
paper.textContent = 'paper';
buttonContainer.appendChild(rock);
buttonContainer.appendChild(scissors);
buttonContainer.appendChild(paper);
body.appendChild(computer);
body.appendChild(buttonContainer);
let imgCoords = '0';
const dictionary = {
  rock: '0',
  scissors: '-142px',
  paper: '-284px',
};

const computerChoice = (coords) => {
  return Object.entries(dictionary).find((v) => {
    return v[1] === coords;
  })[0];
};

let interval;
const refeat = () => {
  interval = setInterval(() => {
    if (imgCoords === dictionary.rock) {
      imgCoords = dictionary.scissors;
    } else if (imgCoords === dictionary.scissors) {
      imgCoords = dictionary.paper;
    } else if (imgCoords === dictionary.paper) {
      imgCoords = dictionary.rock;
    }
    computer.style.background = `url('https://en.pimg.jp/023/182/267/1/23182267.jpg') ${imgCoords} 0px`;
  }, 100);
};
const kind = {
  rock: 1,
  scissors: 0,
  paper: -1,
};
let clickable = true;
refeat();
document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', (e) => {
    if (clickable) {
      clickable = false;
      clearInterval(interval);
      setTimeout(() => {
        refeat();
        clickable = true;
      }, 1000);
      const com = kind[computerChoice(imgCoords)];
      const me = kind[e.target.textContent];
      if (me - com === 0) {
        console.log('비김');
      } else if ([-1, 2].includes(me - com)) {
        console.log('짐');
      } else if (me - com === 1) {
        console.log('이김');
      }
    }
  });
});
