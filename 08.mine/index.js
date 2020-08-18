const tbody = document.querySelector('#table tbody');
const data = [];
document.querySelector('#exec').addEventListener('click', () => {
  const ver = document.querySelector('#ver').value;
  const hor = document.querySelector('#hor').value;
  const mine = document.querySelector('#mine').value;
  console.log(hor * ver);

  // 지뢰 위치 뽑기
  const candidate = Array(ver * hor)
    .fill()
    .map((item, index) => {
      return index;
    });
  let shuple = [];
  while (candidate.length > ver * hor - mine) {
    const shupleItem = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuple.push(shupleItem);
  }
  console.log(
    shuple.sort((a, b) => {
      return a - b;
    })
  );
  // 지뢰 테이블 만들기
  for (let i = 0; i < parseInt(ver, 10); i++) {
    const tr = document.createElement('tr');
    data.push([]);
    for (let j = 0; j < parseInt(hor, 10); j++) {
      data[i].push(1);
      const td = document.createElement('td');
      td.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        let parentTr = e.currentTarget.parentNode;
        let parentTbody = e.currentTarget.parentNode.parentNode;
        let cell = Array.prototype.indexOf.call(
          parentTr.children,
          e.currentTarget
        );
        let row = Array.prototype.indexOf.call(parentTbody.children, parentTr);
        console.log(parentTr, parentTbody, e.currentTarget, row, cell);
        if (
          e.currentTarget.textContent === 'X' ||
          e.currentTarget.textContent === ''
        ) {
          e.currentTarget.textContent = '!';
        } else if (e.currentTarget.textContent === '!') {
          e.currentTarget.textContent = '?';
        } else if (e.currentTarget.textContent === '?') {
          if (data[row][cell] === 'X') {
            e.currentTarget.textContent = 'X';
          }
          if (data[row][cell] === 1) {
            e.currentTarget.textContent = '';
          }
        }
      });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  // 지뢰 심기
  for (let i = 0; i < shuple.length; i++) {
    let row = Math.floor(shuple[i] / 10); // 54 => 4
    let col = shuple[i] % 10;
    console.log(row, col);
    tbody.children[row].children[col].textContent = 'X';
    data[row][col] = 'X';
  }
  console.log(data);
});
