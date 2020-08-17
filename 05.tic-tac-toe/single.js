const body = document.body;
const table = document.createElement('talbe');
let tableArr = [];
let tern = 'X';

const reset = () => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      tableArr[i][j].textContent = '';
    }
  }
  const a = table.childNodes;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      table.childNodes[i].childNodes[j].textContent = '';
    }
  }
};
const confirmrow = (row, col) => {
  for (let i = 0; i < 3; i++) {
    if (
      tableArr[i][0].textContent === tableArr[i][1].textContent &&
      tableArr[i][1].textContent === tableArr[i][2].textContent &&
      tableArr[i][2].textContent !== undefined
    ) {
      console.log(
        tableArr[i][0].textContent,
        tableArr[i][1].textContent,
        tableArr[i][2].textContent
      );
      console.log(`${tern}승리`);
      reset();
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      tableArr[0][i].textContent === tableArr[1][i].textContent &&
      tableArr[1][i].textContent === tableArr[2][i].textContent &&
      tableArr[2][i].textContent !== undefined
    ) {
      console.log(
        tableArr[0][i].textContent,
        tableArr[1][i].textContent,
        tableArr[2][i].textContent
      );
      console.log(`${tern}승리`);
      reset();
    }
  }
  if (
    tableArr[0][0].textContent === tableArr[1][1].textContent &&
    tableArr[1][1].textContent === tableArr[2][2].textContent &&
    tableArr[2][2].textContent !== undefined
  ) {
    console.log(`${tern}승리`);
    reset();
  }
  if (
    tableArr[0][2].textContent === tableArr[1][1].textContent &&
    tableArr[1][1].textContent === tableArr[2][0].textContent &&
    tableArr[2][0].textContent !== undefined
  ) {
    console.log(`${tern}승리`);
    reset();
  }
};
const cb = (row, col) => {
  if (tableArr[row][col].textContent) {
    console.log('입력할수 없음');
    return;
  }
  tableArr[row][col].textContent = tern;
  confirmrow(row, col);
  console.log(tableArr);
  console.log(tern);
  if (tern === 'X') {
    tern = 'O';
  } else {
    tern = 'X';
  }
  console.log(tern);
};
for (let i = 0; i < 3; i++) {
  const tr = document.createElement('tr');
  tableArr.push([]);
  table.appendChild(tr);
  for (let j = 0; j < 3; j++) {
    const td = document.createElement('td');
    td.className = i + '' + j + '';
    td.addEventListener('click', () => cb(i, j));
    tr.appendChild(td);
    tableArr[i].push(td);
  }
}
body.appendChild(table);
console.log(tableArr);
