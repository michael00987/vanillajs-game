const body = document.body;
const h1 = document.createElement('h1');
const ul = document.createElement('ul');
const form = document.createElement('form');
const input = document.createElement('input');
const button = document.createElement('button');

h1.textContent = '1스트라이크(값 위치) 1볼(값)';
button.textContent = '제출';
input.maxLength = 4;
form.appendChild(input);
form.appendChild(button);
body.appendChild(h1);
body.appendChild(ul);
body.appendChild(form);

let num = [];
let count = 10;
let ranNum = [];
let ball = '';
let st = 0;
let b = 0;
const nextQ = () => {
  num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  count = 10;
  ranNum = [];
  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * num.length);
    ranNum.push(num[index]);
    num = num.slice(0, index).concat(num.slice(index + 1));
  }
};
nextQ();
ball = ranNum.join('');
console.log(ball);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  count--;
  if (count < 0) {
    alert(`게임끝 답은 ${ball}`);
    nextQ();
    ball = ranNum.join('');
    console.log(ball);
    input.value = '';
    input.focus();
    return;
  }
  st = 0;
  b = 0;
  if (ball === input.value) {
    nextQ();
    ball = ranNum.join('');
    console.log(ball);
    h1.textContent = `${st}스트라이크${b}볼`;
    const li = document.createElement('li');
    li.textContent =
      input.value +
      `----${st}스트라이크${b}볼 ---- 남은 기회 ${count}번 --홈런`;
    ul.appendChild(li);
    setTimeout(() => alert('홈런'), 0);
    input.value = '';
    input.focus();
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (i === j) {
          if (ball[i] === input.value[j]) {
            st++;
          }
        } else {
          if (ball[i] === input.value[j]) {
            b++;
          }
        }
      }
    }
  }
  h1.textContent = `${st}스트라이크${b}볼`;
  const li = document.createElement('li');
  li.textContent =
    input.value + `----${st}스트라이크${b}볼 ---- 남은 기회 ${count}번`;
  ul.appendChild(li);
  input.value = '';
  input.focus();
});
