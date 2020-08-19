const tbody = document.querySelector('#table tbody');
let openedCell = 0;
document.querySelector('#exec').addEventListener('click', () => {
  tbody.innerHTML = '';
  document.querySelector('#result').textContent = '';
  const data = [];
  openedCell = 0;

  const ver = document.querySelector('#ver').value;
  const hor = document.querySelector('#hor').value;
  const mine = document.querySelector('#mine').value;
  // console.log(hor * ver);

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
  // console.log(
  //   shuple.sort((a, b) => {
  //     return a - b;
  //   })
  // );
  // 지뢰 테이블 만들기
  for (let i = 0; i < parseInt(ver, 10); i++) {
    const tr = document.createElement('tr');
    data.push([]);
    for (let j = 0; j < parseInt(hor, 10); j++) {
      data[i].push(1);
      const td = document.createElement('td');
      td.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        if (
          document.querySelector('#result').textContent === '실패' ||
          document.querySelector('#result').textContent === '성공'
        ) {
          return;
        }
        let parentTr = e.currentTarget.parentNode;
        let parentTbody = e.currentTarget.parentNode.parentNode;
        let cell = Array.prototype.indexOf.call(
          parentTr.children,
          e.currentTarget
        );
        let row = Array.prototype.indexOf.call(parentTbody.children, parentTr);
        // console.log(parentTr, parentTbody, e.currentTarget, row, cell);
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
      td.addEventListener('click', (e) => {
        if (
          document.querySelector('#result').textContent === '실패' ||
          document.querySelector('#result').textContent === '성공'
        ) {
          return;
        }
        let parentTr = e.currentTarget.parentNode;
        let parentTbody = e.currentTarget.parentNode.parentNode;
        let cell = Array.prototype.indexOf.call(
          parentTr.children,
          e.currentTarget
        );
        let row = Array.prototype.indexOf.call(parentTbody.children, parentTr);
        e.currentTarget.classList.add('opened');
        openedCell += 1;

        if (data[row][cell] === 'X') {
          e.currentTarget.textContent = '펑';
          document.querySelector('#result').textContent = '실패';
        } else {
          let around = [data[row][cell - 1], data[row][cell + 1]];
          if (data[row - 1]) {
            around = around.concat(
              data[row - 1][cell - 1],
              data[row - 1][cell],
              data[row - 1][cell + 1]
            );
          }
          if (data[row + 1]) {
            around = around.concat(
              data[row + 1][cell - 1],
              data[row + 1][cell],
              data[row + 1][cell + 1]
            );
          }
          const aroundMine = around.filter((v) => {
            return v === 'X';
          }).length;

          e.currentTarget.textContent = aroundMine || '';

          if (aroundMine === 0) {
            aroundCell = [];
            if (tbody.children[row - 1]) {
              aroundCell = aroundCell.concat([
                tbody.children[row - 1].children[cell - 1],
                tbody.children[row - 1].children[cell],
                tbody.children[row - 1].children[cell + 1],
              ]);
            }
            aroundCell = aroundCell.concat([
              tbody.children[row].children[cell - 1],
              tbody.children[row].children[cell + 1],
            ]);
            if (tbody.children[row + 1]) {
              aroundCell = aroundCell.concat([
                tbody.children[row + 1].children[cell - 1],
                tbody.children[row + 1].children[cell],
                tbody.children[row + 1].children[cell + 1],
              ]);
            }
            // console.log(aroundCell.filter((v) => !!v));
            aroundCell
              .filter(function (v) {
                return !!v;
              })
              .forEach(function (nearCell) {
                console.log(nearCell.classList);
                if (nearCell.classList.value !== 'opened') {
                  nearCell.click();
                }
              });
          }
        }
        if (openedCell === hor * ver - mine) {
          document.querySelector('#result').textContent = '성공';
        }
      });
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  // 지뢰 심기
  for (let i = 0; i < shuple.length; i++) {
    let row = Math.floor(shuple[i] / hor); // 54 => 4
    let col = shuple[i] % ver;
    // console.log(row, col);
    tbody.children[row].children[col].textContent = 'X';
    data[row][col] = 'X';
  }
  // console.log(data);
});

// 재귀코드 효율 개선
