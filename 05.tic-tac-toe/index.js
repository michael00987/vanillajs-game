let body = document.body;
let table = document.createElement('table');
const result = document.createElement('div');
const currentTern = document.createElement('div');
let tableArr = []; //칸들
let tern = 'X';
let reset = () => {
  result.textContent = `${tern}승리`;
  currentTern.textContent = '';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tableArr[i][j].textContent) {
      } else {
        tableArr[i][j].textContent = ' ';
      }
    }
  }
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        tableArr[i][j].textContent = '';
        result.textContent = '';
      }
    }
  }, 1000);
};
let cb = (e) => {
  if (e.target.textContent) {
    console.log('있음', e.target.value);
  } else {
    e.target.textContent = tern;
    for (let i = 0; i < 3; i++) {
      if (
        tableArr[i][0].textContent === tern &&
        tableArr[i][1].textContent === tern &&
        tableArr[i][2].textContent === tern
      ) {
        reset();
      }
      if (
        tableArr[0][i].textContent === tern &&
        tableArr[1][i].textContent === tern &&
        tableArr[2][i].textContent === tern
      ) {
        reset();
      }
    }
    if (
      tableArr[0][0].textContent === tern &&
      tableArr[1][1].textContent === tern &&
      tableArr[2][2].textContent === tern
    ) {
      reset();
    }
    if (
      tableArr[0][2].textContent === tern &&
      tableArr[1][1].textContent === tern &&
      tableArr[2][0].textContent === tern
    ) {
      reset();
    }
    tern === 'X' ? (tern = 'O') : (tern = 'X');
  }
  currentTern.textContent = tern;
};
currentTern.textContent = `차례 :${tern}님 클릭하세요`;

for (let i = 0; i < 3; i++) {
  let tr = document.createElement('tr');
  tableArr.push([]);
  for (let j = 0; j < 3; j++) {
    let td = document.createElement('td');
    td.addEventListener('click', cb);
    tableArr[i].push(td);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
body.appendChild(table);
body.appendChild(result);
body.appendChild(currentTern);
console.log(tableArr);
