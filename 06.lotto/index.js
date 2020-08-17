const body = document.body;
const frame = document.createElement('div');
const button = document.createElement('button');
body.appendChild(frame);
body.appendChild(button);
button.textContent = '생성';
const generater = () => {
  frame.textContent = '';
  let arr45 = Array(45);
  const candidate = arr45.fill().map((item, index) => {
    return index + 1;
  });
  let shuple = [];
  while (candidate.length > 0) {
    const shupleItem = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuple.push(shupleItem);
  }

  const pick = shuple.slice(0, 6).sort((a, b) => a - b);
  const bonus = shuple[shuple.length - 1];
  console.log('당첨숫자', pick);
  console.log('보너스', bonus);
  pick.map((ball, index) => {
    let backColor = '';
    if (ball <= 10) {
      backColor = 'red';
    } else if (ball <= 20) {
      backColor = 'orange';
    } else if (ball <= 30) {
      backColor = 'yellow';
    } else if (ball <= 40) {
      backColor = 'blue';
    } else {
      backColor = 'green';
    }
    const pickedItem = document.createElement('div');
    pickedItem.style.backgroundColor = backColor;
    pickedItem.style.display = 'inline-block';
    pickedItem.style.margin = '10px';
    pickedItem.style.borderRadius = '50%';
    pickedItem.style.border = '1px solid black';
    pickedItem.style.width = '60px';
    pickedItem.style.height = '60px';
    pickedItem.style.lineHeight = '60px';
    pickedItem.style.fontSize = '50px';
    pickedItem.style.textAlign = 'center';
    // frame.style.textAlign = 'center';
    setTimeout(() => {
      pickedItem.textContent = ball;
      frame.appendChild(pickedItem);
    }, index * 300);
  });
  setTimeout(() => {
    const bonusItem = document.createElement('div');
    bonusItem.textContent = bonus;
    bonusItem.style.backgroundColor = 'tomato';
    bonusItem.style.display = 'inline-block';
    bonusItem.style.margin = '10px';
    bonusItem.style.borderRadius = '50%';
    bonusItem.style.border = '1px solid black';
    bonusItem.style.width = '60px';
    bonusItem.style.height = '60px';
    bonusItem.style.lineHeight = '60px';
    bonusItem.style.fontSize = '50px';
    bonusItem.style.textAlign = 'center';
    frame.appendChild(bonusItem);
  }, 2000);
};
button.addEventListener('click', generater);
